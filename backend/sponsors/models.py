import os
import uuid
from django.db import models
from django.utils.text import slugify

def get_upload_path(instance, filename):
    # Extract the file extension
    ext = filename.split('.')[-1]

    # Generate a unique filename using UUID
    unique_filename = f"{slugify(instance.company_name)}-{uuid.uuid4()}.{ext}"

    # Return the path where the file will be saved
    return os.path.join('sponsor_logos', unique_filename)

class Sponsor(models.Model):
    BRONZE = 'Bronze'
    SILVER = 'Silver'
    GOLD = 'Gold'
    PLATINUM = 'Platinum'

    SPONSORSHIP_TYPE_CHOICES = [
        (BRONZE, 'Bronze'),
        (SILVER, 'Silver'),
        (GOLD, 'Gold'),
        (PLATINUM, 'Platinum'),
    ]

    ONE_TIME = 'One-Time'
    WEEKLY = 'Weekly'
    MONTHLY = 'Monthly'
    YEARLY = 'Yearly'
    LIFETIME = 'Lifetime'

    SPONSORSHIP_DURATION_CHOICES = [
        (ONE_TIME, 'One-Time'),
        (WEEKLY, 'Weekly'),
        (MONTHLY, 'Monthly'),
        (YEARLY, 'Yearly'),
        (LIFETIME, 'Lifetime'),
    ]

    company_name = models.CharField(max_length=255)
    contact_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    sponsorship_type = models.CharField(max_length=20, choices=SPONSORSHIP_TYPE_CHOICES)
    contribution_amount = models.DecimalField(max_digits=10, decimal_places=2)
    sponsorship_duration = models.CharField(max_length=20, choices=SPONSORSHIP_DURATION_CHOICES)
    company_website = models.URLField(blank=True, null=True)
    company_address = models.CharField(max_length=255)
    company_logo = models.ImageField(upload_to=get_upload_path, blank=True, null=True)
    additional_info = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.company_name

