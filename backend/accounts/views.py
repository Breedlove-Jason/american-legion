from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from accounts.serializers import RegisterSerializer
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth import authenticate, login


class RegisterView(APIView):
    def post(self, request):
        print(request.data)  # Debugging: Print request data
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()

            # Send confirmation email
            send_mail(
                subject="Welcome to American Legion Post 84!",
                message=f"Dear {user.username}, thank you for registering!",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[user.email],
                fail_silently=False,
            )

            return Response({"message": "User created"}, status=status.HTTP_201_CREATED)

        print(serializer.errors)  # Debugging: Print serializer errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
