from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from mptt.models import TreeManyToManyField

# local imports
from ..users.models import User
from ..skills.models import Skill


class EngineerManager(BaseUserManager):
    # custom manager for Engineer model
    def get_queryset(self, *args, **kwargs):
        return (
            super()
            .get_queryset(*args, **kwargs)
            .filter(user_type__contains=[User.Types.ENGINEER])
        )


class Engineer(User):
    """
    Engineer Proxy User model set up.
    Engineer type user will use the app to create profiles describing their skills/experience
    """

    base_type = User.Types.ENGINEER
    objects = EngineerManager()

    class Meta:
        proxy = True

    @property
    def profile(self):
        return self.engineer_profile


class EngineerProfile(models.Model):
    # Engineer specific fields

    class AvailabilityChoices(models.TextChoices):
        WEEKS = "WEEKS", "Weeks to months"
        DAYS = "DAYS", "Days to weeks "
        INCIDENTAL = "INCIDENTAL", "Incidental advice"

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="engineer_profile",
    )
    experience = models.TextField(null=True, blank=True)
    skills = TreeManyToManyField(Skill, related_name="engineers", blank=True)
    availability = models.CharField(
        max_length=20, choices=AvailabilityChoices.choices, blank=True, null=True
    )
    # ORCID ID link https://info.orcid.org/what-does-an-orcid-identifier-look-like/
    orcid_id = models.URLField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} Profile"
