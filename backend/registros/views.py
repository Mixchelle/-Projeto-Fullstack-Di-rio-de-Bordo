from rest_framework import generics
from .models import Registro
from .serializers import RegistroSerializer

class RegistroListCreateView(generics.ListCreateAPIView):
    queryset = Registro.objects.all().order_by('-criado_em')
    serializer_class = RegistroSerializer
