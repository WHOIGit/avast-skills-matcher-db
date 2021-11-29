from rest_framework.viewsets import ReadOnlyModelViewSet

# local imports
from ..models import Engineer
from ...users.api.serializers import UserSerializer


class EngineerViewSet(ReadOnlyModelViewSet):
    queryset = Engineer.objects.all()
    serializer_class = UserSerializer
