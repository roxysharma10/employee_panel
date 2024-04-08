from django.shortcuts import render
from rest_framework import viewsets
from .serializers import EmpdetailSerializer
from .models import Empdetail

# Create your views here.

class EmpdetailView(viewsets.ModelViewSet):
    serializer_class = EmpdetailSerializer
    queryset = Empdetail.objects.all()
