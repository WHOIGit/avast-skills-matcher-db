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
    # fields to store the name data coming from Active Directory
    # these may need to be changed by user to preferred name
    first_name_ad = models.CharField(blank=True, max_length=100)
    last_name_ad = models.CharField(blank=True, max_length=100)
    # User can be multiple types
    user_type = ChoiceArrayField(
        models.CharField(max_length=50, blank=True, choices=Types.choices),
        null=True,
        blank=True,
    )
    avatar = models.ImageField(upload_to="avatars", null=True, blank=True)
    title = models.CharField(blank=True, max_length=255)
    supervisor_email = models.CharField(blank=True, max_length=255)

    class Meta:
        ordering = ("last_name", "first_name")

    def save(self, *args, **kwargs):
        # on User create, set the display name values to default to AD values BUT
        # auth-adfs module adds name attributes after initial save, so need
        # to look for empty name fields
        print("SAVING USER", self.pk)
        if not self.last_name:
            print("UPDATING USER", self.first_name_ad.title())
            self.first_name = self.first_name_ad.title()
            self.last_name = self.last_name_ad.title()
            # self.save()
        super(User, self).save(*args, **kwargs)


class Engagement(models.Model):
    """
    Model to track requests for bidirectional work from both Project Owner <-> Engineer
    """

    class Responses(models.TextChoices):
        ACCEPTED = "ACCEPTED", "Accepted"
        DECLINED = "DECLINED", "Declined"
        NO_RESPONSE = "NO_RESPONSE", "No Response"

    class EngagementTypes(models.TextChoices):
        PROJECT_OWNER_INITIATED = "PROJECT_OWNER_INITIATED", "Project Owner Initiated"
        EXPERT_INITIATED = "EXPERT_INITIATED", "SME Initiated"

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
    # multiple Project field for Project Owner -> Expert request
    projects = models.ManyToManyField(
        "project_owners.Project", related_name="engagements", blank=True
    )
    response = models.CharField(
        max_length=20, choices=Responses.choices, default=Responses.NO_RESPONSE
    )
    email_sent = models.BooleanField(default=False)
    engagement_type = models.CharField(
        max_length=50,
        choices=EngagementTypes.choices,
        default=EngagementTypes.PROJECT_OWNER_INITIATED,
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
        on_delete=models.CASCADE,
        related_name="favorites",
        null=True,
    )
    expert = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="favored_by", null=True
    )

    def __str__(self):
        return self.expert.last_name
