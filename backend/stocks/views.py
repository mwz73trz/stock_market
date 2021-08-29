from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import StockListSerializer
from .models import StockList
import requests

finhub_api_key = 'c4kea5qad3ib58s068p0'

class StockListViewSet(ModelViewSet):
    queryset = StockList.objects.all()
    serializer_class = StockListSerializer

def stock_search(request, stock):
    response = requests.get(f'https://finnhub.io/api/v1/search?q={stock}&token={finhub_api_key}').json()
    return JsonResponse(response, safe=False)

def stock_quote(request, symbol):
    response = requests.get(f'https://finnhub.io/api/v1/quote?symbol={symbol}&token={finhub_api_key}').json()
    return JsonResponse(response, safe=False)
