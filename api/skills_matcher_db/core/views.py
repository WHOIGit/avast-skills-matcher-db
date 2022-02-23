from django.urls import reverse
from django.views.generic.base import RedirectView


class AdminLoginView(RedirectView):
    def get(self, request, *args, **kwargs):
        """
        Assuming the name of the external system's login url is "login"
        """
        return HttpResponseRedirect(reverse("login"))
