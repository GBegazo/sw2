"""rusia2018sw2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.contrib.auth.views import login
from django.conf import settings
from django.conf.urls.static import static
from app.juegosmundial import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('juegosmundial/', include ('app.juegosmundial.urls',namespace = 'juegosmundial')),
    url(r'^usuario/', include('app.usuario.urls', namespace='usuario')),
    url(r'^$', login,{'template_name':'usuario/index.html'},name='login'),
    url(r'^api/trivia', views.triviaList.as_view()),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
