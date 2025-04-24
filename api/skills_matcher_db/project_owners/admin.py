from django.contrib import admin
from .models import ProjectOwner, Project


class ProjectOwnerAdmin(admin.ModelAdmin):
    pass


class ProjectAdmin(admin.ModelAdmin):
    list_display = [
        "title",
        "project_owner",
        "date_created",
        "international_travel",
    ]


admin.site.register(ProjectOwner, ProjectOwnerAdmin)
admin.site.register(Project, ProjectAdmin)
