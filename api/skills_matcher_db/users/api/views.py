from django.contrib.auth import get_user_model
from django.utils import timezone
from templated_email import send_templated_mail

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

from ..models import Engagement, Favorite
from ..emails import send_email_expert
from .serializers import (
    FavoriteSerializer,
    UserSerializer,
    AvatarSerializer,
    EngagementSerializer,
)
from skills_matcher_db.experts.api.serializers import ExpertProfileSerializer
from skills_matcher_db.project_owners.models import Project

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

    @action(detail=False, methods=["patch"])
    def delete_expert_profile(self, request):
        user = request.user
        action = request.data["action"]
        try:
            if action == "delete":
                # delete the Expert Profile
                expert_profile = user.expert_profile
                expert_profile.delete()
                # remove the Expert user type from User data
                user.user_type.remove(User.Types.EXPERT)
                user.save()
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=["post"])
    def contact_expert(self, request):
        # sends email to selected expert, and initiates Engagement tracking
        user = request.user
        projects = None
        try:
            expert = User.objects.get(id=request.data["expert_id"])
        except User.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        if request.data["projects"]:
            projects = Project.objects.filter(id__in=request.data["projects"])

        if expert:
            # initiate Engagement tracking
            engagement = Engagement.objects.create(
                project_owner=user,
                expert=expert,
                engagement_type=Engagement.EngagementTypes.PROJECT_OWNER_INITIATED,
            )
            # add Project to Many to Many field
            if projects:
                engagement.projects.add(*projects)

            # send email
            print("sending email...")
            try:
                # send email to expert
                send_templated_mail(
                    template_name="expert_request",
                    from_email="noreply-skillsdb@whoi.edu",
                    recipient_list=[expert.email],
                    context={
                        "expert_name": f"{expert.first_name} {expert.last_name}",
                        "requester_name": f"{user.first_name} {user.last_name}",
                        "requester_email": user.email,
                        "projects": projects,
                        "engagement_id": engagement.id,
                        "message": request.data["message"],
                    },
                    # Optional:
                    cc=[expert.supervisor_email],
                    # bcc=['bcc@example.com'],
                    # headers={'My-Custom-Header':'Custom Value'},
                )
                # send receipt to requester
                send_templated_mail(
                    template_name="expert_request_receipt",
                    from_email="noreply-skillsdb@whoi.edu",
                    recipient_list=[user.email],
                    context={
                        "expert_name": f"{expert.first_name} {expert.last_name}",
                        "requester_name": f"{user.first_name} {user.last_name}",
                        "expert_email": expert.email,
                    },
                )
                print("Email sent")
                return Response(
                    status=status.HTTP_200_OK, data={"action": "email sent"}
                )
            except Exception as e:
                print(e)
                return Response(status=status.HTTP_400_BAD_REQUEST, data=e)

    @action(detail=False, methods=["post"])
    def contact_project_owner(self, request):
        # sends email to project owner, and initiates Engagement tracking
        user = request.user
        try:
            project = Project.objects.get(id=request.data["project_id"])
        except Project.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        print(request.data)

        if project:
            # initiate Engagement tracking
            engagement = Engagement.objects.create(
                project_owner=project.project_owner,
                expert=user,
                engagement_type=Engagement.EngagementTypes.EXPERT_INITIATED,
            )
            # add Project to Many to Many field
            engagement.projects.add(project)

            # send email
            print("sending email...")
            try:
                # send email to project owner
                send_templated_mail(
                    template_name="project_request",
                    from_email="noreply-skillsdb@whoi.edu",
                    recipient_list=[project.project_owner.email],
                    context={
                        "project_owner": f"{project.project_owner.first_name} {project.project_owner.last_name}",
                        "requester_name": f"{user.first_name} {user.last_name}",
                        "requester_email": {user.email},
                        "project_title": project.title,
                        "engagement_id": engagement.id,
                        "message": request.data["message"],
                    },
                )
                # send receipt to requester
                send_templated_mail(
                    template_name="project_request_receipt",
                    from_email="noreply-skillsdb@whoi.edu",
                    recipient_list=[user.email],
                    context={
                        "project_owner": f"{project.project_owner.first_name} {project.project_owner.last_name}",
                        "requester_name": f"{user.first_name} {user.last_name}",
                        "project_title": project.title,
                        "project_owner_email": project.project_owner.email,
                    },
                )
                print("Email sent")
                return Response(
                    status=status.HTTP_200_OK, data={"action": "email sent"}
                )
            except Exception as e:
                print(e)
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"error": e})


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
        # only allow the authorised user to create their own favorites
        data = {"user": self.request.user.id, "expert": request.data["expert"]}
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )


class EngagementViewSet(
    ListModelMixin, RetrieveModelMixin, UpdateModelMixin, viewsets.GenericViewSet
):
    queryset = Engagement.objects.all()
    serializer_class = EngagementSerializer
    permission_classes = (IsAuthenticated,)
