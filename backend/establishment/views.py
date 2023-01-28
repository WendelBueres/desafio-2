from rest_framework import generics
from .serializers import EstablishmentSerializers
from .models import Establishment
from drf_spectacular.utils import extend_schema


@extend_schema(tags=["establishment"])
class EstablishmentView(generics.ListAPIView):
    serializer_class = EstablishmentSerializers
    queryset = Establishment.objects.all()
