# scholarships/views.py

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import ScholarshipApplication
from .serializers import ScholarshipApplicationSerializer
from django.core.mail import send_mail
from django.conf import settings
from dotenv import load_dotenv

load_dotenv()

class ScholarshipApplicationView(APIView):
    def post(self, request):
        serializer = ScholarshipApplicationSerializer(data=request.data)
        if serializer.is_valid():
            application = serializer.save()

            # Send confirmation email to the applicant
            send_mail(
                subject="Scholarship Application Received",
                message=f"Dear {application.name}, your scholarship application has been successfully submitted.",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[application.email],
                fail_silently=False,
            )

            # Send notification email to the admin
            send_mail(
                subject="New Scholarship Application",
                message=f"A new scholarship application has been submitted by {application.name}.",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['j@jasonbreedlove.com'],  # Use the correct admin email
                fail_silently=False,
            )

            return Response({'message': 'Scholarship application submitted successfully'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)