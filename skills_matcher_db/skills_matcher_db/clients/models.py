from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from ..users.models import User


class ClientManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type=User.Types.CLIENT)


class Client(User):
    """
    Client Proxy User model set up.
    Client type user will use the app to find Engineers that have skills matching their project needs
    """

    base_type = User.Types.CLIENT
    objects = ClientManager()

    class Meta:
        proxy = True

    @property
    def profile(self):
        return self.clientprofile


class ClientProfile(models.Model):
    # Engineer specific fields
    user = models.OneToOneField(User, on_delete=models.CASCADE)
