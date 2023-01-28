from django.db import models


class Establishment(models.Model):
    name = models.CharField(max_length=19)
    balance = models.DecimalField(max_digits=17, decimal_places=2, default=0)
