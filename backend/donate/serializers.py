from rest_framework import serializers
from . import models

class CollectedSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Collected
        fields = '__all__'



