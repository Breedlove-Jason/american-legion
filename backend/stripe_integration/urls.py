from django.urls import path
from .views import StripeCheckoutView, create_donation_session

urlpatterns = [
    path('create-checkout-session/', StripeCheckoutView.as_view(), name='checkout-session'),
    path('create-donation-session/', create_donation_session, name='donation-session'),
]