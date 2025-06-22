from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models

# Create your views here.
class AdoptViewSet(viewsets.ModelViewSet):
    queryset = models.Available.objects.all()
    serializer_class = serializers.AvailableSerializer

