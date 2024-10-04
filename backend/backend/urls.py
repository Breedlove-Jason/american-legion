from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("accounts.urls")),  # Include accounts app URLs
    path("api/chatbot/", include("chatbot.urls")),    # Include chatbot app URLs
    path("api/sponsors/", include("sponsors.urls")),  # Include sponsors app URLs
    path('api/scholarship/', include('scholarships.urls')),  # Include scholarships app URLs
    path('stripe/', include('stripe_integration.urls')),

]
# This will serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)