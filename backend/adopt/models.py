from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Available(models.Model):
    body = models.CharField(max_length=300)
    age = models.IntegerField(null=True, blank=True)
    country = models.CharField(max_length=100, default="USA")
    completed = models.BooleanField(default=False)
    adopted_by = models.CharField(max_length=300, default="")
    updated = models.DateTimeField(auto_now=True)
    adopted_at = models.DateTimeField(auto_now_add=True)
    
    #Make list look pretty, like names...
    def __str__(self):
        return self.body
    

