from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StockListViewSet

router = DefaultRouter()
router.register('stock-list', StockListViewSet, basename='stock-list')

urlpatterns = [
    path('', include(router.urls))
]