from django.contrib import admin

# scholarships/admin.py

from django.contrib import admin
from .models import ScholarshipApplication

@admin.register(ScholarshipApplication)
class ScholarshipApplicationAdmin(admin.ModelAdmin):
    # Fields that will be displayed in the list view
    list_display = (
        'name', 'address', 'email', 'phone', 'birthday', 'relationship_to_veteran',
        'veteran_name', 'students_in_high_school', 'students_in_class',
        'cumulative_gpa', 'gpa_scale', 'graduation_date', 'school_official_name',
        'school_official_title', 'submitted_at'
    )

    # Fields that can be searched in the admin panel
    search_fields = ('name', 'email', 'veteran_name')

    # Filters that will appear in the sidebar
    list_filter = ('submitted_at', 'graduation_date')

