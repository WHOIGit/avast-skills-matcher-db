from rest_framework import serializers

# local imports
from ..models import Skill


class RecursiveField(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class SkillSerializer(serializers.ModelSerializer):
    children = RecursiveField(many=True)

    class Meta:
        model = Skill
        fields = ["id", "name", "url", "parent", "children"]

        extra_kwargs = {"url": {"view_name": "api:skill-detail", "lookup_field": "pk"}}
