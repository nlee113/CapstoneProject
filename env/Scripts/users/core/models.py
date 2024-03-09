from django.db import models

# Create your models here.


class React(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    gender = models.CharField(max_length=30, default='')
    age = models.IntegerField(default=0)
    email= models.EmailField(default='')
    password = models.CharField(max_length=100, default='')
    id_num = models.IntegerField(default=0)
    driver = models.BooleanField(default=False)
    color = models.CharField(max_length=30, default='')
    make = models.CharField(max_length=30, default='')
    model = models.CharField(max_length=30, default='')
    #image = models.ImageField(upload_to='user_images/')