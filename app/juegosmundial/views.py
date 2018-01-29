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


def index_juegosmundial(request):
	return HttpResponse("<h1>Soy la pagina principal de la pagina adopción</h1>")

def juegosmundialbien(request):
	return render(request, 'usuario/bienvenido.html')
def triviadescrip(request):
	return render(request, 'juegos/DescripTrivia.html')	

def equipoidealdescrip(request):
	return render(request, 'juegos/DescripEquipoIdeal.html')	

def polladescrip(request):
	return render(request, 'juegos/DescripPolla.html')


def triviajuegos(request):
	return render(request, 'juegos/TriviaJuego.html')

class ejemploList(APIView):
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
