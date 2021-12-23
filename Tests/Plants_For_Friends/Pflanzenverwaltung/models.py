from django.db import models


class Plant(models.Model):
    name = models.CharField(max_length=100)
    standort = [('schattig', 'schattig'), ('halbschattig','halbschattig'), ('sonnig','sonnig')]
    plant_type = [('Baum','Baum'),('Blume', 'Blume'), ('Kräuter', 'Kräuter')]


class Offer_instance(models.Model):
    title = models.CharField(max_length=50)
    provider = models.ManyToManyField('User')
    description = models.CharField(max_length=200)
    town = models.CharField(max_length=50)
    zipcode = models.IntegerField()
    street = models.CharField(max_length=100)
    plant = models.ManyToManyField('Plant')


class User(models.Model):
    name = models.CharField(max_length=50)
    activeoffers = models.IntegerField()
    allovers = models.IntegerField()
