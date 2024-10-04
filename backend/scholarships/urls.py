# urls.py

from django.urls import path
from .views import ScholarshipApplicationView

urlpatterns = [
    path('', ScholarshipApplicationView.as_view(), name='scholarship_application'),
]
