from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.views import defaults as default_views
from django.views.generic import TemplateView
from django.views.generic import RedirectView

from rest_framework.authtoken.views import obtain_auth_token

from skills_matcher_db.users.api import jwt_views
from skills_matcher_db.users.api.views import Ping

urlpatterns = [
    path("", TemplateView.as_view(template_name="pages/home.html"), name="home"),
    path(
        "about/", TemplateView.as_view(template_name="pages/about.html"), name="about"
    ),
    # ADFS/Azure auth urls
    path("oauth2/", include("django_auth_adfs.urls")),
    # Django Admin, use {% url 'admin:index' %}
    path(
        "admin/login/",
        RedirectView.as_view(pattern_name="django_auth_adfs:login"),
        name="admin-login",
    ),
    path(
        "admin/logout/",
        RedirectView.as_view(pattern_name="django_auth_adfs:logout"),
        name="admin-logout",
    ),
    path("admin/default-login/", admin.site.login, name="default-admin-login"),
    path(settings.ADMIN_URL, admin.site.urls),
    # User management
    path("users/", include("skills_matcher_db.users.urls", namespace="users")),
    path("accounts/", include("allauth.urls")),
    # Your stuff: custom urls includes go here
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# API URLS
urlpatterns += [
    # API base url
    path("api/", include("config.api_router")),
    # DRF auth token
    path("auth-token/", obtain_auth_token),
    # JWT auth
    path("token/", jwt_views.Login.as_view(), name="token"),
    path("token/refresh/", jwt_views.RefreshToken.as_view(), name="token-refresh"),
    path("token/logout/", jwt_views.Logout.as_view(), name="logout"),
    path("ping/", Ping.as_view(), name="ping"),
]

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        path(
            "400/",
            default_views.bad_request,
            kwargs={"exception": Exception("Bad Request!")},
        ),
        path(
            "403/",
            default_views.permission_denied,
            kwargs={"exception": Exception("Permission Denied")},
        ),
        path(
            "404/",
            default_views.page_not_found,
            kwargs={"exception": Exception("Page not Found")},
        ),
        path("500/", default_views.server_error),
    ]
    if "debug_toolbar" in settings.INSTALLED_APPS:
        import debug_toolbar

        urlpatterns = [path("__debug__/", include(debug_toolbar.urls))] + urlpatterns
