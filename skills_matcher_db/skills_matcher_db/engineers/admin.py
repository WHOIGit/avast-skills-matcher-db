from django.contrib import admin
from django.forms import CheckboxSelectMultiple
from mptt.models import TreeManyToManyField

# local imports
from .models import Engineer, EngineerProfile
from ..users.admin import UserAdmin


class EngineerProfileInline(admin.StackedInline):
    model = EngineerProfile
    formfield_overrides = {
        TreeManyToManyField: {"widget": CheckboxSelectMultiple},
    }


class EngineerAdmin(UserAdmin):
    inlines = (EngineerProfileInline,)


admin.site.register(Engineer, EngineerAdmin)
