from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255, default='Default Address')
    phone_number = models.CharField(max_length=20)
    legion_number = models.CharField(max_length=20)
    branch_of_service = models.CharField(max_length=100, blank=True, null=True)
    era = models.CharField(max_length=100, blank=True, null=True)
    dd214 = models.FileField(upload_to='dd214/', blank=True, null=True)
    membership_card = models.FileField(upload_to='membership_cards/', blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)