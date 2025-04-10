from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from mptt.models import TreeManyToManyField

# local imports
from skills_matcher_db.utils.fields import ChoiceArrayField
from skills_matcher_db.users.models import User
from skills_matcher_db.skills.models import Skill


class ExpertManager(BaseUserManager):
    # custom manager for Engineer model
    def get_queryset(self, *args, **kwargs):
        return (
            super()
            .get_queryset(*args, **kwargs)
            .filter(user_type__contains=[User.Types.EXPERT])
        )


class Expert(User):
    """
    Expert Proxy User model set up.
    Expert type user will use the app to create profiles describing their skills/experience
    """

    base_type = User.Types.EXPERT
    objects = ExpertManager()

    class Meta:
        proxy = True

    @property
    def profile(self):
        return self.expert_profile


class ExpertProfile(models.Model):
    # Engineer specific fields

    class AvailabilityChoices(models.TextChoices):
        WEEKS = "WEEKS", "Weeks to months"
        DAYS = "DAYS", "Days to weeks"
        INCIDENTAL = "INCIDENTAL", "Incidental advice"

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="expert_profile",
    )
    experience = models.TextField(null=True, blank=True)
    skills = TreeManyToManyField(Skill, related_name="experts", blank=True)
    # availability can be multiple types
    availability = ChoiceArrayField(
        models.CharField(
            max_length=25, blank=True, choices=AvailabilityChoices.choices
        ),
        null=True,
        blank=True,
    )
    # ORCID ID link https://info.orcid.org/what-does-an-orcid-identifier-look-like/
    orcid_id = models.URLField(max_length=100, blank=True, null=True)
    international_travel = models.BooleanField(
        default=False, verbose_name="Willing to Travel Internationally"
    )

    def __str__(self):
        return f"{self.user.username} Profile"

    def add_parent_skills(self):
        # method to add the parent skill if it's missing from profile
        skills = self.skills.all()
        if skills.exists():
            for skill in skills:
                # check if it has parent
                print(skill)
                print(skill.parent)
                if skill.parent:
                    self.skills.add(skill.parent)
