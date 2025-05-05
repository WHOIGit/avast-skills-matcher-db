from django.contrib import admin
from django.template.response import TemplateResponse
from django.urls import path

from skills_matcher_db.core.views import AdminMetricsView


class CustomAdminSite(admin.AdminSite):
    index_template = "admin/custom_index.html"

    def get_urls(
        self,
    ):
        return [
            path(
                "metrics/",
                AdminMetricsView.as_view(),
                name="view_metrics",
            ),
        ] + super().get_urls()
