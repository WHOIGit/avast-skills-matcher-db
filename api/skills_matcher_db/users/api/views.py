from django.contrib.auth import get_user_model
from django.utils import timezone
from django.core.mail import send_mail

from rest_framework.permissions import IsAdminUser, BasePermission, IsAuthenticated
from rest_framework import status, response
from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.decorators import action
from rest_framework.mixins import (
    ListModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
)
from rest_framework.response import Response
from rest_framework import viewsets

from ..models import Favorite, Engagement
from .serializers import FavoriteSerializer, UserSerializer, AvatarSerializer
from skills_matcher_db.experts.api.serializers import ExpertProfileSerializer
from skills_matcher_db.project_owners.models import Project

User = get_user_model()


def _send_email_expert(user, expert, projects=None):
    """
    send the initial email to an expert requesting support
    """
    try:
        send_mail(
            "Subject here",
            "Here is the message.",
            None,
            ["to@example.com"],
            fail_silently=False,
        )
    except Exception as e:
        print(e)
        return "Email failed"


class IsAdminOrIsSelf(IsAdminUser):
    """
    Allow access to admin users or the actual user
    """

    def has_object_permission(self, request, view, obj):
        print(request)
        if request.user and request.user.is_staff:
            return True
        elif request.user and type(obj) == type(request.user) and obj == request.user:
            return True
        return False


class UnauthenticatedPost(BasePermission):
    """
    Allow access to post new user for public users
    """

    def has_permission(self, request, view):
        return request.method in ["POST"]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    # lookup_field = "username"

    def get_queryset(self, *args, **kwargs):
        # assert isinstance(self.request.user.id, int)
        return self.queryset.filter(id=self.request.user.id)

    @action(detail=False)
    def me(self, request):
        serializer = UserSerializer(request.user, context={"request": request})
        return Response(status=status.HTTP_200_OK, data=serializer.data)

    @action(detail=False, methods=["patch"])
    def update_profile(self, request):
        user = request.user

        # send data to Serializer
        serializer = UserSerializer(user, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({"status": "profile updated"})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=["patch"])
    def update_expert_profile(self, request):
        user = request.user

        if not hasattr(user, "expert_profile"):
            # create an ExpertProfile if it's missing
            from skills_matcher_db.experts.models import ExpertProfile

            ExpertProfile.objects.create(user=user)

        # make sure User is also an Expert user_type
        if not user.user_type:
            user.user_type = [User.Types.EXPERT]
        elif User.Types.EXPERT not in user.user_type:
            user.user_type.append(User.Types.EXPERT)

        user.save()

        # send data to Serializer
        serializer = ExpertProfileSerializer(user.expert_profile, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"status": "profile updated"})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=["patch"])
    def set_avatar(self, request, pk=None):
        user = request.user

        serializer = AvatarSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=200)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=["post"])
    def contact_expert(self, request):
        user = request.user
        try:
            expert = User.objects.get(id=request.data["expert_id"])
        except User.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        if request.data["projects"]:
            projects = Project.objects.filter(id__in=request.data["projects"])
            print(projects)
        print(request.data)

        if expert:
            # send emails, and initiate Engagement tracking
            _send_email_expert(user, expert, projects)

        return Response(status=200)


class Ping(GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        return response.Response({"now": timezone.now().isoformat()})


class FavoriteViewSet(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
    permission_classes = [IsAuthenticated]
    # lookup_field = "username"

    def get_queryset(self, *args, **kwargs):
        return self.queryset.filter(user_id=self.request.user.id)

    def create(self, request, *args, **kwargs):
        # only allow the authoried user to create their own favorites
        data = {"user": self.request.user.id, "expert": request.data["expert"]}
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )
