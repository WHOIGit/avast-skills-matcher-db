from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from skills_matcher_db.users.api.views import UserViewSet
from skills_matcher_db.engineers.api.views import EngineerViewSet
from skills_matcher_db.skills.api.views import SkillViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register("engineers", EngineerViewSet, "engineers")
router.register("skills", SkillViewSet, "skills")

app_name = "api"
urlpatterns = router.urls
