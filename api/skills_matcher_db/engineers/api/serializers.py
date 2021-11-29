from rest_framework import serializers

# local imports
from ..models import EngineerProfile


class EngineerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngineerProfile
        fields = ["experience", "skills"]
