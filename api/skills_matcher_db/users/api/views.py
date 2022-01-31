from django.contrib.auth import get_user_model
from django.utils import timezone

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

from ..models import Favorite
from .serializers import FavoriteSerializer, UserSerializer, AvatarSerializer
from ...engineers.models import Engineer
from ...engineers.api.serializers import EngineerProfileSerializer

User = get_user_model()


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
    permission_classes = [IsAuthenticated | UnauthenticatedPost]
    # lookup_field = "username"

    def get_queryset(self, *args, **kwargs):
        # assert isinstance(self.request.user.id, int)
        return self.queryset.filter(id=self.request.user.id)

    @action(detail=False)
    def me(self, request):
        serializer = UserSerializer(request.user, context={"request": request})
        return Response(status=status.HTTP_200_OK, data=serializer.data)

    @action(detail=True, methods=["patch"])
    def update_engineer_profile(self, request, pk=None):
        user = self.get_object()
        if not user.engineer_profile:
            return Response(
                {"status": "no profile exists"}, status=status.HTTP_400_BAD_REQUEST
            )

        # make sure User is also an Engineer user_type
        if not user.user_type:
            user.user_type = [User.Types.ENGINEER]
            user.save()
        elif User.Types.ENGINEER not in user.user_type:
            user.user_type.append(User.Types.ENGINEER)
            user.save()

        # send data to Serializer
        serializer = EngineerProfileSerializer(user.engineer_profile, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"status": "profile updated"})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["patch"])
    def set_avatar(self, request, pk=None):
        user = self.get_object()

        serializer = AvatarSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=200)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["post"])
    def contact_engineer(self, request, pk=None):
        user = self.get_object()
        print(user)
        print(request.data)

        return Response(status=200)

    @action(detail=True, methods=["post"])
    def add_favorite(self, request, pk=None):
        user = self.get_object()
        data = {"user": user.id, "engineer": request.data["engineer"]}
        serializer = FavoriteSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=200)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
        data = {"user": self.request.user.id, "engineer": request.data["engineer"]}
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )
