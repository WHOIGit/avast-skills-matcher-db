from django.urls import reverse
from django.http import HttpResponseRedirect
from django.views.generic.base import RedirectView, TemplateView
from django.db.models.functions import TruncMonth
from django.db.models import Count

from skills_matcher_db.users.models import User
from skills_matcher_db.project_owners.models import Project


class AdminLoginView(RedirectView):
    def get(self, request, *args, **kwargs):
        """
        Assuming the name of the external system's login url is "login
        """
        return HttpResponseRedirect(reverse("login"))


class AdminMetricsView(TemplateView):
    template_name = "admin/core/metrics.html"

    def get_context_data(self, **kwargs):
        context = super(AdminMetricsView, self).get_context_data(**kwargs)
        # get user metric data
        user_metrics_qs = (
            User.objects.annotate(month=TruncMonth("date_joined"))
            .values("month")
            .annotate(user_count=Count("id"))
            .order_by("month")
        )

        # get user metric data
        projects_metrics_qs = (
            Project.objects.annotate(month=TruncMonth("date_created"))
            .values("month")
            .annotate(project_count=Count("id"))
            .order_by("month")
        )

        context.update(
            {
                "node_type": "assemblies",
                "user_metrics": user_metrics_qs,
                "project_metrics": projects_metrics_qs,
            }
        )
        return context
