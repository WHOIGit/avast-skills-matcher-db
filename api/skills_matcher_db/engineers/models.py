from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from mptt.models import TreeManyToManyField

# local imports
from ..users.models import User
from ..skills.models import Skill


class EngineerManager(BaseUserManager):
    # custom manager for Engineer model
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type=User.Types.ENGINEER)


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
        return self.engineerprofile


class EngineerProfile(models.Model):
    # Engineer specific fields
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    experience = models.TextField()
    skills = TreeManyToManyField(Skill, related_name="engineers")
    avatar = models.ImageField(upload_to="avatars", null=True)
