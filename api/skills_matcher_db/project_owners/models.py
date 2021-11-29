from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from skills_matcher_db.users.models import User


class ProjectOwnerManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        return (
            super()
            .get_queryset(*args, **kwargs)
            .filter(user_type__contains=[User.Types.PROJECT_OWNER])
        )


class ProjectOwner(User):
    """
    Project Owner Proxy User model set up.
    Client type user will use the app to find Engineers that have skills matching their project needs
    """

    base_type = User.Types.CLIENT
    objects = ProjectOwnerManager()

    class Meta:
        proxy = True
        verbose_name = "Project Owner"
