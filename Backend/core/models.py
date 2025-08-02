from django.db import models
from django.contrib.auth.models import AbstractUser

# models here.
class CustomUser(AbstractUser):
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=100, blank=True, null=True)
    address = models.CharField(max_length=50, null=True)
    phone = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.username
    
