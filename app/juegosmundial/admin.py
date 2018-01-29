from django.contrib import admin
from .models import Pregunta
from .models import Respuesta
from .models import PrexRes

admin.site.register(Pregunta)
admin.site.register(Respuesta)
admin.site.register(PrexRes)
