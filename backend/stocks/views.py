from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import StockListSerializer
from .models import StockList

class StockListViewSet(ModelViewSet):
    queryset = StockList.objects.all()
    serializer_class = StockListSerializer
