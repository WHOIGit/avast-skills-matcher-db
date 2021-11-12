from django.db import models
from mptt.models import MPTTModel, TreeForeignKey


class Skill(MPTTModel):
    """Skill terms tree model, eg. Categories"""

    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    parent = TreeForeignKey(
        "self", blank=True, null=True, related_name="child", on_delete=models.CASCADE
    )

    class Meta:
        unique_together = (
            "slug",
            "parent",
        )

    def __str__(self):
        return self.name
