from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile


class RegisterSerializer(serializers.ModelSerializer):
    address = serializers.CharField(source='profile.address')
    phone_number = serializers.CharField(source='profile.phone_number')
    legion_number = serializers.CharField(source='profile.legion_number')
    branch_of_service = serializers.CharField(source='profile.branch_of_service', required=False)
    era = serializers.CharField(source='profile.era', required=False)
    dd214 = serializers.FileField(source='profile.dd214', required=False)
    membership_card = serializers.FileField(source='profile.membership_card', required=False)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'address', 'phone_number',
                  'legion_number', 'branch_of_service', 'era', 'dd214', 'membership_card']

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        user = User.objects.create_user(**validated_data)
        Profile.objects.create(user=user, **profile_data)
        return user
