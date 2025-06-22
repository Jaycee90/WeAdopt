from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('adopt', views.AdoptViewSet, basename='adopt')

urlpatterns = [
   
]

urlpatterns += router.urls

# from django.urls import path, include
# from rest_framework import routers
# from . import views

# router = routers.DefaultRouter()
# router.register(r'adopt', views.AdoptViewSet, basename='adopt')
# router.register(r'donations', views.DonationsViewSet, basename='donations')

# urlpatterns = [
     
# ]
# urlpatterns += router.urls
