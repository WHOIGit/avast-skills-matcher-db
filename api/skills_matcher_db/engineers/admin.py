from django.contrib import admin
from django.forms import CheckboxSelectMultiple
from mptt.models import TreeManyToManyField
from django.contrib.sites.models import Site

# local imports
from .models import Engineer, EngineerProfile
from ..users.admin import UserAdmin

admin.site.unregister(Site)


class EngineerProfileInline(admin.StackedInline):
    model = EngineerProfile
    formfield_overrides = {
        TreeManyToManyField: {"widget": CheckboxSelectMultiple},
    }


class EngineerAdmin(UserAdmin):
    inlines = (EngineerProfileInline,)


admin.site.register(Engineer, EngineerAdmin)
