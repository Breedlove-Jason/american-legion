from django.urls import path
from .views import StripeCheckoutView

urlpatterns = [
    path('create-checkout-session', StripeCheckoutView.as_view(), name='checkout-session'),
    path('create-donation-session/', StripeCheckoutView.create_donation_session, name='donation-session'),
    # path('webhook/stripe/', views.stripe_webhook, name='stripe-webhook'),
    # path('test-payment/', views.test_payment, name='test-payment'),
    # path('save-stripe-info/', views.save_stripe_info, name='save-stripe-info'),
]