from django.contrib import admin
from django.forms import CheckboxSelectMultiple
from mptt.models import TreeManyToManyField

# local imports
from .models import Engineer, EngineerAddon
from ..users.admin import UserAdmin


class EngineerAddonInline(admin.StackedInline):
    model = EngineerAddon
    formfield_overrides = {
        TreeManyToManyField: {"widget": CheckboxSelectMultiple},
    }


class EngineerAdmin(UserAdmin):
    inlines = (EngineerAddonInline,)


admin.site.register(Engineer, EngineerAdmin)
