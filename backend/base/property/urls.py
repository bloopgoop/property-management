from django.urls import path
from . import views

urlpatterns = [
    path('', views.getProperties, name='properties'),
    path('<int:pk>/', views.getProperty, name='property'),
    path('photo/', views.addPhoto, name='addphoto'),
    path('requestRental/<int:propertyID>/', views.requestRental, name='requestRental'),
    path('rating/<int:property_id>', views.addRating, name='rating')
]