from rest_framework import serializers

# local imports
from ..models import Project


class ProjectSerializer(serializers.ModelSerializer):
    # force the project_owner to always be set to current user on save
    project_owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "description",
            "project_owner",
            "experts",
            "skills",
        ]
