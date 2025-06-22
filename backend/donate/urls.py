from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'donate', views.DonationsViewSet, basename='donate')

urlpatterns = [
     
]
urlpatterns += router.urls


