from django.contrib.auth import get_user_model
from django.conf import settings
from rest_framework import serializers
from rest_framework.reverse import reverse
from rest_framework_simplejwt import serializers as jwt_serializers
from rest_framework_simplejwt.settings import api_settings as jwt_settings
from rest_framework_simplejwt.tokens import RefreshToken
from ...engineers.api.serializers import EngineerProfileSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()
    engineer_profile = EngineerProfileSerializer()

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "url",
            "type",
            "password",
            "engineer_profile",
        ]

        extra_kwargs = {
            # "url": {"view_name": "api:user-detail", "lookup_field": "pk"},
            "password": {"write_only": True},
        }

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user

    def get_url(self, obj):
        request = self.context.get("request")
        view_name = "api:user-detail"
        if obj.type == User.Types.ENGINEER:
            view_name = "api:engineer-detail"
        url = reverse(view_name, args=[obj.pk], request=request)
        return url
