# sponsors/views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Sponsor
from .serializers import SponsorSerializer
from django.core.mail import send_mail
from django.conf import settings
from dotenv import load_dotenv

load_dotenv()


class SponsorCreateView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = SponsorSerializer(data=request.data)
        if serializer.is_valid():
            sponsor = serializer.save()
            # If file uploads exist in the request, assign them to the sponsor object
            if 'company_logo' in request.FILES:
                sponsor.company_logo = request.FILES['company_logo']

            sponsor.save()

            # Send confirmation email to the sponsor
            send_mail(
                subject="Thank You for Sponsoring American Legion Post 84!",
                message=f"Dear {sponsor.contact_name}, thank you for your sponsorship!",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[sponsor.email],
                fail_silently=False,
            )

            # Notify admin about the new sponsor
            send_mail(
                subject="New Sponsorship Application",
                message=f"A new sponsorship has been submitted by {sponsor.contact_name}.",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['j@jasonbreedlove.com'],   # Use the correct admin email
                fail_silently=False,
            )

            return Response({"message": "Sponsorship form submitted successfully!"}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
