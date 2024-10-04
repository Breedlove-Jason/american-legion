from django.http import JsonResponse
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.conf import settings
from rest_framework.views import APIView
import stripe
import json

stripe.api_key = settings.STRIPE_SECRET_KEY
DUES_AMOUNT = 4000  # $40 in cents

class StripeCheckoutView(APIView):
    def post(self, request):
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[{
                    'price': 'price_1Q5eVb01foXv66KIUTU3qlhy',  # Replace with your actual price ID
                    'quantity': 1,
                }],
                payment_method_types=['card'],
                mode='subscription',
                success_url=f"{settings.SITE_URL}/?success=true&session_id={{CHECKOUT_SESSION_ID}}",
                cancel_url=f"{settings.SITE_URL}/?canceled=true",
            )
            return Response({'url': checkout_session.url})
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    @csrf_exempt
    @api_view(['POST'])
    def create_donation_session(request):
        try:
            donation_amount = request.data.get('amount')
            if not donation_amount:
                return JsonResponse({'error': 'Donation amount is required'}, status=400)

            checkout_session = stripe.checkout.Session.create(
                line_items=[{
                    'price': 'price_1Q5eXe01foXv66KIAIObec6L',  # Replace with your actual product ID
                    'quantity': 1,
                }],
                payment_method_types=['card'],
                mode='payment',
                success_url=f"{settings.SITE_URL}/?success=true&session_id={CHECKOUT_SESSION_ID}",
                cancel_url=f"{settings.SITE_URL}/?canceled=true",
            )
            return redirect(checkout_session.url)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)