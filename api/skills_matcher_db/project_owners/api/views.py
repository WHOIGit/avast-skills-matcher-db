from rest_framework.viewsets import ReadOnlyModelViewSet

# local imports
from ..models import ProjectOwner
from ...users.api.serializers import UserSerializer


class ProjectOwnerViewSet(ReadOnlyModelViewSet):
    queryset = ProjectOwner.objects.all()
    serializer_class = UserSerializer
