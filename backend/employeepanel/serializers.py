from rest_framework import serializers
from .models import Empdetail

class EmpdetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empdetail
        fields = ('emp_name', 'designation', 'experience_details', 'onboard_completed')
