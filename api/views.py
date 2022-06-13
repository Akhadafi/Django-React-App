from django.shortcuts import render
from rest_framework import viewsets

from .models import Todo
from .serializers import TodoSerailizer


# Create your views here.
class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerailizer
    queryset = Todo.objects.all()
