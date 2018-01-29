from django.urls import path
from django.conf.urls import url

from app.juegosmundial.views import index_juegosmundial,juegosmundialbien,triviadescrip,equipoidealdescrip,polladescrip,triviajuegos

app_name = 'juegosmundial'

urlpatterns = [
    path('index/', index_juegosmundial),
    url(r'^juegosbien/', juegosmundialbien, name='juegos_listar'),
    url(r'^triviainfos/', triviadescrip, name='triviainfo'),
    url(r'^equipoideal/', equipoidealdescrip, name='equipoidealinfo'),
    url(r'^polla/',polladescrip , name='pollainfo'),
    url(r'^triviajuego/',triviajuegos , name='triviajuego'),

]
