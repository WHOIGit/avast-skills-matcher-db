from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    # Default base user for Skills Matcher DB.
    # Set up custom User type options
    class Types(models.TextChoices):
        CLIENT = "CLIENT", "Client"
        ENGINEER = "ENGINEER", "Engineer"

    base_type = Types.CLIENT

    first_name = models.CharField(blank=True, max_length=255)
    last_name = models.CharField(blank=True, max_length=255)
    # What type of user are we?
    type = models.CharField(
        _("Type"), max_length=50, choices=Types.choices, default=base_type
    )

    def get_absolute_url(self):
        """Get url for user's detail view."""
        return reverse("users:detail", kwargs={"username": self.username})

    def save(self, *args, **kwargs):
        if not self.id:
            self.type = self.base_type
        return super().save(*args, **kwargs)
