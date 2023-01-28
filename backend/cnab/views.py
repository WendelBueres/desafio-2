from django.shortcuts import render
from rest_framework import generics
from rest_framework.parsers import FormParser, MultiPartParser
from drf_spectacular.utils import extend_schema
import ipdb

from .models import Cnab
from .serializers import CnabSerializers


@extend_schema(tags=["cnab"])
class CnabView(generics.ListCreateAPIView):
    queryset = Cnab.objects.all()
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = CnabSerializers
