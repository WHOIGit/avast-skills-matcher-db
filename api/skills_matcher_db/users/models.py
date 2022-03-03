from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from skills_matcher_db.utils.fields import ChoiceArrayField


class User(AbstractUser):
    # Default base user for Skills Matcher DB.
    # Set up custom User type options
    # Custom User type proxy models in "engineers" and "project_owners" apps
    class Types(models.TextChoices):
        EXPERT = "EXPERT", "Expert"
        ENGINEER = "ENGINEER", "Engineer"
        PROJECT_OWNER = "PROJECT_OWNER", "Project Owner"

    base_type = Types.PROJECT_OWNER

    first_name = models.CharField(blank=True, max_length=255)
    last_name = models.CharField(blank=True, max_length=255)
    # User can be multiple types
    user_type = ChoiceArrayField(
        models.CharField(max_length=50, blank=True, choices=Types.choices),
        null=True,
        blank=True,
    )
    avatar = models.ImageField(upload_to="avatars", null=True, blank=True)
    title = models.CharField(null=True, blank=True, max_length=255)
    # field to save "starred" Engineers for future use
    # favorites = models.ManyToManyField("self", related_name="favored_by")

    class Meta:
        ordering = ("last_name", "first_name")


class Engagement(models.Model):
    """
    Model to track requests for work from Project Owner -> Engineer
    """

    class Responses(models.TextChoices):
        ACCEPTED = "ACCEPTED", "Accepted"
        DECLINED = "DECLINED", "Declined"
        NO_RESPONSE = "NO_RESPONSE", "No Response"

    date_created = models.DateTimeField(default=timezone.now)
    date_responded = models.DateTimeField(null=True, blank=True)
    project_owner = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        related_name="project_owner_engagements",
        null=True,
    )
    expert = models.ForeignKey(
        User, on_delete=models.SET_NULL, related_name="expert_engagements", null=True
    )
    projects = models.ManyToManyField(
        "project_owners.Project", related_name="engagements", blank=True
    )
    response = models.CharField(
        max_length=20, choices=Responses.choices, default=Responses.NO_RESPONSE
    )

    def __str__(self):
        return self.project_owner.last_name


class Favorite(models.Model):
    """
    Model to save "starred" Experts for future use
    """

    date_created = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        related_name="favorites",
        null=True,
    )
    expert = models.ForeignKey(
        User, on_delete=models.SET_NULL, related_name="favored_by", null=True
    )

    def __str__(self):
        return self.expert.last_name
