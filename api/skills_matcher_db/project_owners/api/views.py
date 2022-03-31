from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters import rest_framework as filters
from django.db.models import Q

# local imports
from ..models import ProjectOwner, Project
from skills_matcher_db.users.api.serializers import UserSerializer
from skills_matcher_db.users.models import User
from .serializers import ProjectSerializer


class ProjectFilter(filters.FilterSet):
    q = filters.CharFilter(method="multi_field_query", label="Search")

    class Meta:
        model = Project
        fields = ["q"]

    def multi_field_query(self, queryset, name, value):
        return Project.objects.filter(
            Q(title__icontains=value) | Q(description__icontains=value)
        )


class ProjectOwnerViewSet(ReadOnlyModelViewSet):
    queryset = ProjectOwner.objects.all()
    serializer_class = UserSerializer


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filterset_class = ProjectFilter

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
