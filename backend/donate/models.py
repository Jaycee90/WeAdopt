from django.db import models
from django.contrib.auth.models import AbstractUser

class Collected(models.Model):
    name = models.CharField(max_length=300)
    donation = models.CharField(max_length=100)
    currency = models.CharField(max_length=50, default="USD")

    #this will make names show up in list instead of donations1,2...
    def __str__(self):
        return self.name
    
