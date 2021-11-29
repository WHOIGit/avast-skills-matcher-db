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

from .serializers import UserSerializer
from ...engineers.models import Engineer
from ...engineers.api.serializers import EngineerProfileSerializer, AvatarSerializer

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
    def set_avatar(self, request, pk=None):
        # user = self.get_object()
        # user.model = Engineer
        # print(user.profile, request.data)
        try:
            eng = Engineer.objects.get(pk=pk)
            profile = eng.profile
            serializer = AvatarSerializer(profile, data=request.data)
        except Exception as e:
            return Response(
                {"error": "no profile exists"}, status=status.HTTP_400_BAD_REQUEST
            )

        if serializer.is_valid():
            serializer.save()
            return Response({"status": "avatar set"})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Ping(GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        return response.Response({"now": timezone.now().isoformat()})
