from rest_framework import serializers
from .models import Cnab
from transaction.models import Transaction
from decimal import *
from establishment.models import Establishment
import ipdb


class CnabSerializers(serializers.ModelSerializer):
    file = serializers.FileField()

    class Meta:
        model = Cnab
        fields = '__all__'

    def create(self, validated_data):
        revenue = ['1', '4', '5', '6', '7', '8']
        cost = ['2', '3', '9']

        txt = super().create(validated_data).file.read()
        txt = txt.decode()
        txt = txt.split('\r\n')
        for operation in txt:
            transaction = Transaction.objects.create(
                transaction=operation, type=operation[0], date=operation[1:9], value=(int(operation[9:19])/100), cpf=operation[19:30], card=operation[30:42], hour=operation[42:48], owner=operation[48:62], establishment=operation[62:80],)
            establishment, created = Establishment.objects.get_or_create(
                name=transaction.establishment)
            if (transaction.type in revenue):
                establishment.balance += Decimal(transaction.value)
            if (transaction.type in cost):
                establishment.balance -= Decimal(transaction.value)
            establishment.save()

        return super().create(validated_data)

    def save(self, **kwargs):
        return super().save(**kwargs)
