from django.http import JsonResponse
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.conf import settings
from rest_framework.views import APIView
import stripe
import logging

logger = logging.getLogger(__name__)

stripe.api_key = settings.STRIPE_SECRET_KEY
DUES_AMOUNT = 4000  # $40 in cents


class StripeCheckoutView(APIView):
    def post(self, request):
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[{
                    'price': 'price_1Q5eVb01foXv66KIUTU3qlhy',  # Replace with your actual price ID for $40 membership dues
                    'quantity': 1,
                }],
                payment_method_types=['card'],
                mode='subscription',  # Use 'subscription' if it's a recurring payment
                success_url=f"{settings.SITE_URL}/?success=true&session_id={{CHECKOUT_SESSION_ID}}",
                cancel_url=f"{settings.SITE_URL}/?canceled=true",
            )
            return Response({'url': checkout_session.url})
        except Exception as e:
            logger.error(f"Error creating membership checkout session: {e}")
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
            logger.error('Donation amount is required')
            return JsonResponse({'error': 'Donation amount is required'}, status=400)

        # Validate and convert the amount
        try:
            amount = int(float(donation_amount))
            if amount <= 0:
                raise ValueError('Amount must be greater than zero.')
        except ValueError as ve:
            logger.error(f'Invalid donation amount: {ve}')
            return JsonResponse({'error': 'Invalid donation amount.'}, status=400)

        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'usd',
                    'product_data': {
                        'name': 'Donation',
                    },
                    'unit_amount': amount,  # Amount in cents
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url=f"{settings.SITE_URL}/?success=true&session_id={{CHECKOUT_SESSION_ID}}",
            cancel_url=f"{settings.SITE_URL}/?canceled=true",
        )
        return Response({'url': checkout_session.url})
    except Exception as e:
        logger.error(f"Error creating donation session: {e}")

        return JsonResponse({'error': str(e)}, status=500)
