from django.db import models


class Transaction(models.Model):
    transaction = models.CharField(max_length=80)
    establishment = models.CharField(max_length=19)
    type = models.CharField(max_length=1)
    date = models.DateField()
    value = models.DecimalField(max_digits=17, decimal_places=2)
    cpf = models.CharField(max_length=11)
    card = models.CharField(max_length=12)
    hour = models.TimeField()
    owner = models.CharField(max_length=14)
