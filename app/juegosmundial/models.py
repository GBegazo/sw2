from django.db import models

class Pregunta(models.Model):
    descpregunta =  models.CharField(max_length=400)
    
    def __str__ (self):
        return self.descpregunta


class Respuesta(models.Model):
    descrespuesta =  models.CharField(max_length=400)
    def __str__ (self):
        return self.descrespuesta

class PrexRes(models.Model):
    idpregunta =  models.ForeignKey(Pregunta ,on_delete=models.CASCADE,)
    idrespuesta =  models.ForeignKey(Respuesta ,on_delete=models.CASCADE)
    res_val = models.BooleanField(default=False)

    def __str__ (self):
        return str(self.idpregunta) + " / " + str(self.idrespuesta) + " / " + str(self.res_val)