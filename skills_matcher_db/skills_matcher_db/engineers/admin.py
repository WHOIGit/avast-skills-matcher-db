from django.contrib import admin
from .models import Engineer


class EngineerAdmin(admin.ModelAdmin):
    pass


admin.site.register(Engineer, EngineerAdmin)
