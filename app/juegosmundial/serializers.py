from rest_framework import serializers
from .models import PrexRes
from .models import Pregunta
from .models import Respuesta

class PrexResSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrexRes
        fields = '__all__'

class PreguntaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pregunta
        fields = '__all__'

class RespuestaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Respuesta
        fields = '__all__'