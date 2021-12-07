from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from skills_matcher_db.users.api.views import UserViewSet
from skills_matcher_db.engineers.api.views import EngineerViewSet
from skills_matcher_db.skills.api.views import SkillViewSet
from skills_matcher_db.project_owners.api.views import ProjectOwnerViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register(r"users", UserViewSet)
router.register(r"engineers", EngineerViewSet)
router.register(r"skills", SkillViewSet)
router.register(r"project_owners", ProjectOwnerViewSet)

app_name = "api"
urlpatterns = router.urls
