# scholarships/models.py

from django.db import models

class ScholarshipApplication(models.Model):
    # Applicant Information
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    phone = models.CharField(max_length=20)
    birthday = models.DateField()

    # Veteran Information
    relationship_to_veteran = models.CharField(max_length=100)
    veteran_name = models.CharField(max_length=255)

    # School Information
    students_in_high_school = models.IntegerField()  # Total number of students in high school
    students_in_class = models.IntegerField()  # Total number of students in class
    cumulative_gpa = models.DecimalField(max_digits=4, decimal_places=2)  # Example: 3.50
    gpa_scale = models.DecimalField(max_digits=4, decimal_places=2)  # Example: 4.00
    graduation_date = models.DateField()

    # Transcript upload
    transcript = models.FileField(upload_to='transcripts/', blank=True, null=True)

    # School Official Information
    school_official_name = models.CharField(max_length=255)
    school_official_title = models.CharField(max_length=255)

    # Metadata
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}'s Scholarship Application"
