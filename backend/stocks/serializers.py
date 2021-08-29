from rest_framework.serializers import ModelSerializer
from .models import StockList

class StockListSerializer(ModelSerializer):
    class Meta:
        model = StockList
        fields = ['id', 'stock', 'symbol', 'shares']