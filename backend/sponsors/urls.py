from django.urls import path

from django.urls import path
from .views import SponsorCreateView

urlpatterns = [
    path('', SponsorCreateView.as_view(), name='sponsor-create'),
]
