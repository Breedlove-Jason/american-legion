# scholarships/serializers.py

from rest_framework import serializers
from .models import ScholarshipApplication

class ScholarshipApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScholarshipApplication
        fields = [
            'name', 'address', 'email', 'phone', 'birthday',
            'relationship_to_veteran', 'veteran_name',
            'students_in_high_school', 'students_in_class',
            'cumulative_gpa', 'gpa_scale', 'graduation_date',
            'transcript', 'school_official_name', 'school_official_title'
        ]
