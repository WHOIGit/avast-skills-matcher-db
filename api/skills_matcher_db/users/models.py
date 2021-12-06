from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django import forms
from django.utils.translation import gettext_lazy as _


class ChoiceArrayField(ArrayField):
    """
    A field that allows us to store an array of choices.
    Uses Django's Postgres ArrayField
    and a CheckboxSelectMultiple for its formfield.
    """

    def formfield(self, **kwargs):
        defaults = {
            "form_class": forms.TypedMultipleChoiceField,
            "choices": self.base_field.choices,
            "coerce": self.base_field.to_python,
            "widget": forms.CheckboxSelectMultiple,
        }
        defaults.update(kwargs)

        return super(ArrayField, self).formfield(**defaults)


class User(AbstractUser):
    # Default base user for Skills Matcher DB.
    # Set up custom User type options
    # Custom User type proxy models in "engineers" and "project_owners" apps
    class Types(models.TextChoices):
        CLIENT = "CLIENT", "Client"
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
