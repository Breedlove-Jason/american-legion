from django.contrib import admin
from .models import Sponsor

@admin.register(Sponsor)
class SponsorAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'contact_name', 'email', 'sponsorship_type', 'created_at')
    search_fields = ('company_name', 'contact_name', 'email')
    list_filter = ('sponsorship_type', 'sponsorship_duration', 'created_at')
    ordering = ('-created_at',)
