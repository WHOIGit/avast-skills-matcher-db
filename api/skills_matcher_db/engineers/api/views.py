from rest_framework.viewsets import ReadOnlyModelViewSet
from django_filters import rest_framework as filters
from django.db.models import Q

# local imports
from ..models import Engineer
from ...users.api.serializers import UserSerializer


class EngineerFilter(filters.FilterSet):
    q = filters.CharFilter(method="multi_field_query", label="Search")

    class Meta:
        model = Engineer
        fields = ["q"]

    def multi_field_query(self, queryset, name, value):
        return Engineer.objects.filter(
            Q(first_name__icontains=value)
            | Q(last_name__icontains=value)
            | Q(title__icontains=value)
            | Q(engineer_profile__experience__icontains=value)
        )


class EngineerViewSet(ReadOnlyModelViewSet):
    queryset = Engineer.objects.all()
    serializer_class = UserSerializer
    filterset_class = EngineerFilter
