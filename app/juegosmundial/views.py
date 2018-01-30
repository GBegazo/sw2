from django.shortcuts import render
from django.http import HttpResponse

from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PrexRes
from .models import Pregunta
from .models import Respuesta
from .serializers import PreguntaSerializer
from .serializers import RespuestaSerializer
from .serializers import PrexResSerializer

# Create your views here.

def juegosmundialbien(request):
	return render(request, 'usuario/bienvenido.html')

def equipoidealdescrip(request):
	return render(request, 'juegos/DescripEquipoIdeal.html')	

def polladescrip(request):
	return render(request, 'juegos/DescripPolla.html')

#TRIVIA
def triviainfo(request):
	return render(request, 'juegos/trivia/descripcion.html')

def triviajuego(request):
	return render(request, 'juegos/trivia/juego.html')

def triviafinal(request):
	return render(request, 'juegos/trivia/final.html')



class triviaList(APIView):
	def get(self,request):
		preguntag = Pregunta.objects.all()
		respuestag = Respuesta.objects.all()
		prexres = PrexRes.objects.all()

		serializerPregunta = PreguntaSerializer(preguntag , many=True)
		serializerRespuesta = RespuestaSerializer(respuestag , many=True)
		serializerPreXRes = PrexResSerializer(prexres , many=True)

		return Response(serializerPreXRes.data + serializerPregunta.data + serializerRespuesta.data)

	def post(self):
		pass
