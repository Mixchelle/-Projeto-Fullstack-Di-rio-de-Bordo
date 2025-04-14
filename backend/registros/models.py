from django.db import models

class Registro(models.Model):
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
        
    def delete(self, *args, **kwargs):
        super().delete(*args, **kwargs)
        return {'message': 'Registro deletado com sucesso'}