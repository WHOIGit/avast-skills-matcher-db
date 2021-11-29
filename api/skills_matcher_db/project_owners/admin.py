from django.contrib import admin
from .models import ProjectOwner


class ProjectOwnerAdmin(admin.ModelAdmin):
    pass


admin.site.register(ProjectOwner, ProjectOwnerAdmin)
