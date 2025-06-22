from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models

# Create your views here.
class DonationsViewSet(viewsets.ModelViewSet):
    queryset = models.Collected.objects.all()
    serializer_class = serializers.CollectedSerializer