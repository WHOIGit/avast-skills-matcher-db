from django.contrib.auth import get_user_model, login
from django.conf import settings
from rest_framework import serializers
from rest_framework.reverse import reverse
from rest_framework_simplejwt import serializers as jwt_serializers
from rest_framework_simplejwt.settings import api_settings as jwt_settings
from rest_framework_simplejwt.tokens import RefreshToken
from skills_matcher_db.engineers.api.serializers import EngineerProfileSerializer
from skills_matcher_db.engineers.models import EngineerProfile
from skills_matcher_db.project_owners.api.serializers import ProjectSerializer
from skills_matcher_db.users.models import Favorite

User = get_user_model()


class FavoriteSerializer(serializers.ModelSerializer):
    engineer_first_name = serializers.SerializerMethodField()
    engineer_last_name = serializers.SerializerMethodField()

    class Meta:
        model = Favorite
        fields = ["id", "user", "engineer", "engineer_first_name", "engineer_last_name"]

    def get_engineer_first_name(self, obj):
        return obj.engineer.first_name

    def get_engineer_last_name(self, obj):
        return obj.engineer.last_name


class UserSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()
    engineer_profile = EngineerProfileSerializer(required=False)
    projects_owned = ProjectSerializer(required=False, many=True)
    avatar = serializers.SerializerMethodField("get_avatar_url")
    favorites = FavoriteSerializer(read_only=True, many=True, required=False)
    favored_by = FavoriteSerializer(read_only=True, many=True, required=False)

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "url",
            "user_type",
            "password",
            "avatar",
            "title",
            "engineer_profile",
            "projects_owned",
            "favorites",
            "favored_by",
        ]

        extra_kwargs = {
            # "url": {"view_name": "api:user-detail", "lookup_field": "pk"},
            "password": {"write_only": True},
        }

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data["password"])
        user.save()
        # create a default empty EngineerProfile on user creation to make frontend API's life easier
        EngineerProfile.objects.create(user=user)
        return user

    def get_url(self, obj):
        request = self.context.get("request")
        view_name = "api:user-detail"
        if obj.user_type and User.Types.ENGINEER in obj.user_type:
            view_name = "api:engineer-detail"
        url = reverse(view_name, args=[obj.pk], request=request)
        return url

    def get_avatar_url(self, obj):
        # return the absolute URL of the image
        if obj.avatar:
            request = self.context.get("request")
            return request.build_absolute_uri(obj.avatar.url)
        return None


class AvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["avatar"]
