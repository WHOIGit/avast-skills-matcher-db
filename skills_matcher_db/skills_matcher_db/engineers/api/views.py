from rest_framework.viewsets import ModelViewSet

# local imports
from ..models import Engineer
from .serializers import EngineerSerializer


class EngineerViewSet(ModelViewSet):
    lookup_field = "username"
    queryset = Engineer.objects.all()
    serializer_class = EngineerSerializer
