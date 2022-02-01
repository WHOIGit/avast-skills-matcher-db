from rest_framework import serializers

# local imports
from ..models import ExpertProfile


class ExpertProfileSerializer(serializers.ModelSerializer):
    availability_display = serializers.CharField(
        source="get_availability_display", read_only=True
    )

    class Meta:
        model = ExpertProfile
        fields = [
            "experience",
            "skills",
            "availability",
            "availability_display",
            "orcid_id",
        ]
