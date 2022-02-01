from django.contrib import admin
from django.forms import CheckboxSelectMultiple
from mptt.models import TreeManyToManyField
from django.contrib.sites.models import Site

# local imports
from .models import Expert, ExpertProfile
from skills_matcher_db.users.admin import UserAdmin

admin.site.unregister(Site)


class ExpertProfileInline(admin.StackedInline):
    model = ExpertProfile
    formfield_overrides = {
        TreeManyToManyField: {"widget": CheckboxSelectMultiple},
    }


class ExpertAdmin(UserAdmin):
    inlines = (ExpertProfileInline,)


admin.site.register(Expert, ExpertAdmin)
