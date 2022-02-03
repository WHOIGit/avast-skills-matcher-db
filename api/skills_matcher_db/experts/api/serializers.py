from rest_framework import serializers

# local imports
from ..models import ExpertProfile


class ExpertProfileSerializer(serializers.ModelSerializer):
    availability_display = serializers.SerializerMethodField()

    class Meta:
        model = ExpertProfile
        fields = [
            "experience",
            "skills",
            "availability",
            "availability_display",
            "orcid_id",
        ]

    def get_availability_display(self, obj):
        if not obj.availability:
            return []

        av_display = [
            ExpertProfile.AvailabilityChoices[av].label for av in obj.availability
        ]
        return av_display
