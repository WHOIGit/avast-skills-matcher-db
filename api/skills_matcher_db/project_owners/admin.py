from django.contrib import admin
from .models import ProjectOwner, Project


class ProjectOwnerAdmin(admin.ModelAdmin):
    pass


class ProjectAdmin(admin.ModelAdmin):
    pass


admin.site.register(ProjectOwner, ProjectOwnerAdmin)
admin.site.register(Project, ProjectAdmin)
