from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from rest_framework.permissions import IsAuthenticated

# local imports
from ..models import ProjectOwner, Project
from ...users.api.serializers import UserSerializer
from .serializers import ProjectSerializer


class ProjectOwnerViewSet(ReadOnlyModelViewSet):
    queryset = ProjectOwner.objects.all()
    serializer_class = UserSerializer


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        # limit results to only Projects owned by user
        return self.queryset.filter(project_owner_id=self.request.user.id)
