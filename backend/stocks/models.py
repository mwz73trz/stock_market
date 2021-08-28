from django.db import models

class StockList(models.Model):
    stock = models.CharField(max_length=128)
    shares = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.stock}:  {self.shares}"

