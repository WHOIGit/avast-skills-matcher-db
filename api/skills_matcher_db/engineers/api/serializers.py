from rest_framework import serializers

# local imports
from ..models import Engineer, EngineerProfile


class EngineerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngineerProfile
        fields = ["experience", "skills"]


class EngineerSerializer(serializers.ModelSerializer):
    profile = EngineerProfileSerializer(required=False)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Engineer
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "url",
            "profile",
            "email",
            "password",
        ]

        extra_kwargs = {
            "url": {"view_name": "api:engineers-detail", "lookup_field": "pk"}
        }

    def create(self, validated_data):
        user = super(EngineerSerializer, self).create(validated_data)
        print(user)
        user.set_password(validated_data["password"])
        user.save()
        return user
