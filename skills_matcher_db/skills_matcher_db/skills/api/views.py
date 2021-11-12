from rest_framework.viewsets import ReadOnlyModelViewSet

# local imports
from ..models import Skill
from .serializers import SkillSerializer


class SkillViewSet(ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    lookup_field = "pk"
