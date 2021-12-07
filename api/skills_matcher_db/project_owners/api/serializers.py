from rest_framework import serializers

# local imports
from ..models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ["title", "description", "project_owner", "engineers"]
