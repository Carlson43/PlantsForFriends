from django.contrib import admin
from django.urls import path

from adoptions import views

urlpatterns = [
    path(r'admin/', admin.site.urls), 
    path('', views.home, name='home'),
    path(r'adoptions/<int:pet_id>/', views.pet_detail, name='pet_detail')
]
