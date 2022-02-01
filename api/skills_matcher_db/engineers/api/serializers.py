from rest_framework import serializers

# local imports
from ..models import EngineerProfile


class EngineerProfileSerializer(serializers.ModelSerializer):
    availability_display = serializers.CharField(
        source="get_availability_display", read_only=True
    )

    class Meta:
        model = EngineerProfile
        fields = [
            "experience",
            "skills",
            "availability",
            "availability_display",
            "orcid_id",
        ]
