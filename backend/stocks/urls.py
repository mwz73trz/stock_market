from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StockListViewSet, stock_search, stock_quote

router = DefaultRouter()
router.register('stock-list', StockListViewSet, basename='stock-list')

urlpatterns = [
    path('', include(router.urls)),
    path('stock-search/<str:stock>', stock_search, name='stock_search'),
    path('stock-quote/<str:symbol>', stock_quote, name='stock_quote'),
]