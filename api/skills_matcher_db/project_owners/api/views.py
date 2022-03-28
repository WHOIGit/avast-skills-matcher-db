from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

# local imports
from ..models import ProjectOwner, Project
from skills_matcher_db.users.api.serializers import UserSerializer
from skills_matcher_db.users.models import User
from .serializers import ProjectSerializer


class ProjectOwnerViewSet(ReadOnlyModelViewSet):
    queryset = ProjectOwner.objects.all()
    serializer_class = UserSerializer


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        user = None
        if self.request and hasattr(self.request, "user"):
            user = self.request.user

        # make sure User is also a PROJECT_OWNER user_type
        if not user.user_type:
            user.user_type = [User.Types.PROJECT_OWNER]
        elif User.Types.PROJECT_OWNER not in user.user_type:
            user.user_type.append(User.Types.PROJECT_OWNER)

        user.save()
        serializer.save()
