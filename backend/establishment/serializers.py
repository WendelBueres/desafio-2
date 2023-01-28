from rest_framework import serializers
from establishment.models import Establishment


class EstablishmentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Establishment
        fields = '__all__'
