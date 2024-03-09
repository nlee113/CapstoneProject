 
from rest_framework import serializers 
from . models import *
  
class ReactSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = React 
        fields = ['first_name', 'last_name','gender','age','email','password','id_num','driver','color','make','model'] 