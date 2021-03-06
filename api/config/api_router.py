from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from skills_matcher_db.users.api.views import (
    UserViewSet,
    FavoriteViewSet,
    EngagementViewSet,
)
from skills_matcher_db.engineers.api.views import EngineerViewSet
from skills_matcher_db.experts.api.views import ExpertViewSet
from skills_matcher_db.skills.api.views import SkillViewSet
from skills_matcher_db.project_owners.api.views import (
    ProjectOwnerViewSet,
    ProjectViewSet,
)

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register(r"users", UserViewSet)
router.register(r"engagements", EngagementViewSet)
router.register(r"favorites", FavoriteViewSet)
router.register(r"engineers", EngineerViewSet)
router.register(r"experts", ExpertViewSet)
router.register(r"skills", SkillViewSet)
router.register(r"project_owners", ProjectOwnerViewSet)
router.register(r"projects", ProjectViewSet)

app_name = "api"
urlpatterns = router.urls
