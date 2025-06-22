from rest_framework import serializers
from . import models

class AvailableSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Available
        fields = '__all__'



