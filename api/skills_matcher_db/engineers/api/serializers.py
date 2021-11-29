from rest_framework import serializers

# local imports
from ..models import Engineer, EngineerProfile


class EngineerProfileSerializer(serializers.ModelSerializer):
    avatar = serializers.SerializerMethodField("get_avatar_url")

    class Meta:
        model = EngineerProfile
        fields = ["experience", "skills", "avatar"]

    def get_avatar_url(self, obj):
        # return the absolute URL of the image
        if obj.avatar:
            request = self.context.get("request")
            return request.build_absolute_uri(obj.avatar.url)
        return None


class AvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngineerProfile
        fields = ["avatar"]


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
