from rest_framework import serializers

# local imports
from ..models import Engineer, EngineerProfile


class EngineerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngineerProfile
        fields = ["experience", "skills"]


class EngineerSerializer(serializers.ModelSerializer):
    profile = EngineerProfileSerializer()

    class Meta:
        model = Engineer
        fields = ["id", "username", "name", "url", "profile"]

        extra_kwargs = {
            "url": {"view_name": "api:engineers-detail", "lookup_field": "username"}
        }
