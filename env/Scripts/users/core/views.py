 
from django.shortcuts import render 
from rest_framework.views import APIView 
from . models import *
from rest_framework.response import Response 
from . serializer import *
# Create your views here. 
  
class ReactView(APIView): 
    
    serializer_class = ReactSerializer 
  
    def get(self, request): 
        detail = [ {"first_name": detail.first_name,"last_name": detail.last_name,"gender": detail.gender, "age": detail.age,"email": detail.email,"password": detail.password,"id_num": detail.id_num,"driver": detail.driver,"color": detail.color,"make": detail.make,"model": detail.model}  
        for detail in React.objects.all()] 
        return Response(detail) 


    def post(self, request): 
  
        serializer = ReactSerializer(data=request.data) 
        if serializer.is_valid(raise_exception=True): 
            serializer.save() 
            return  Response(serializer.data) 