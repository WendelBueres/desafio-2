from rest_framework import generics
from drf_spectacular.utils import extend_schema

from .serializers import TransactionSerializers
from .models import Transaction


@extend_schema(tags=["transaction"])
class TransactionView(generics.ListAPIView):
    serializer_class = TransactionSerializers
    queryset = Transaction.objects.all()
