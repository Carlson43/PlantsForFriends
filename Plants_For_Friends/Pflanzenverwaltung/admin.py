from django.contrib import admin

from .models import Plant

@admin.register(Plant)
class PlantAdmin(admin.ModelAdmin):
    pass
