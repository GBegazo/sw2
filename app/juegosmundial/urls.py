from django.urls import path
from django.conf.urls import url

from app.juegosmundial.views import juegosmundialbien
from app.juegosmundial.views import equipoidealdescrip
from app.juegosmundial.views import polladescrip
from app.juegosmundial.views import triviainfo
from app.juegosmundial.views import triviajuego
from app.juegosmundial.views import triviafinal


app_name = 'juegosmundial'

urlpatterns = [
    url(r'^juegosbien/', juegosmundialbien, name='juegos_listar'),
    url(r'^equipoideal/', equipoidealdescrip, name='equipoidealinfo'),
    url(r'^polla/',polladescrip , name='pollainfo'),
    url(r'^trivia/info', triviainfo, name='triviainfo'),
    url(r'^trivia/juego',triviajuego , name='triviajuego'),
    url(r'^trivia/final',triviafinal , name='triviafinal'),

]
