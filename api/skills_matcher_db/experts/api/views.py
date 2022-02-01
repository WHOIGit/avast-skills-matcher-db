from rest_framework.viewsets import ReadOnlyModelViewSet
from django_filters import rest_framework as filters
from django.db.models import Q

# local imports
from ..models import Expert
from skills_matcher_db.users.api.serializers import UserSerializer


class ExpertFilter(filters.FilterSet):
    q = filters.CharFilter(method="multi_field_query", label="Search")

    class Meta:
        model = Expert
        fields = ["q"]

    def multi_field_query(self, queryset, name, value):
        return Expert.objects.filter(
            Q(first_name__icontains=value)
            | Q(last_name__icontains=value)
            | Q(title__icontains=value)
            | Q(engineer_profile__experience__icontains=value)
        )


class ExpertViewSet(ReadOnlyModelViewSet):
    queryset = Expert.objects.all()
    serializer_class = UserSerializer
    filterset_class = ExpertFilter
