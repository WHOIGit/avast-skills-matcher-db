from django.contrib import admin
from django_mptt_admin.admin import DjangoMpttAdmin
from .models import Skill


class SkillAdmin(DjangoMpttAdmin):
    exclude = ("slug",)


admin.site.register(Skill, SkillAdmin)
