from rest_framework import serializers

# local imports
from ..models import Project


class ProjectSerializer(serializers.ModelSerializer):
    # force the project_owner to always be set to current user on save
    project_owner = serializers.HiddenField(default=serializers.CurrentUserDefault())
    project_owner_display = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "description",
            "project_owner",
            "project_owner_display",
            "experts",
            "skills",
        ]

    def get_project_owner_display(self, obj):
        display_name = f"{obj.project_owner.first_name} {obj.project_owner.last_name}"
        return display_name
