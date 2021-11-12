from rest_framework import serializers

# local imports
from ..models import Engineer, EngineerAddon


class EngineerAddonSerializer(serializers.ModelSerializer):
    # skills = SkillSerializer()

    class Meta:
        model = EngineerAddon
        fields = ["experience", "skills"]


class EngineerSerializer(serializers.ModelSerializer):
    addons = EngineerAddonSerializer()

    class Meta:
        model = Engineer
        fields = ["id", "username", "name", "url", "addons"]

        extra_kwargs = {
            "url": {"view_name": "api:engineers-detail", "lookup_field": "username"}
        }
