from django.db import models
from django.utils.text import slugify
from mptt.models import MPTTModel, TreeForeignKey


class Skill(MPTTModel):
    """Skill terms tree model, eg. Categories"""

    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    parent = TreeForeignKey(
        "self", blank=True, null=True, related_name="children", on_delete=models.CASCADE
    )

    class Meta:
        unique_together = (
            "slug",
            "parent",
        )

    def save(self, *args, **kwargs):
        slug = slugify(self.name)
        try:
            slug_check = Skill.objects.get(slug=slug)
            # create new slug using parent to make unique
            slug = f"{self.parent.name}-{slug}"
        except Exception as e:
            print(e)

        self.slug = slug
        super(Skill, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
