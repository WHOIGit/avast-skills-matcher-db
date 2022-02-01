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
    Project Owner type user will use the app to find Experts that have skills matching their project needs
    """

    base_type = User.Types.PROJECT_OWNER
    objects = ProjectOwnerManager()

    class Meta:
        proxy = True
        verbose_name = "Project Owner"


class Project(models.Model):
    """
    Projects to request help with
    """

    title = models.CharField(blank=True, max_length=255)
    description = models.TextField(null=True, blank=True)
    project_owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="projects_owned"
    )
    experts = models.ManyToManyField(User, related_name="projects_assigned", blank=True)

    def __str__(self):
        return self.title
