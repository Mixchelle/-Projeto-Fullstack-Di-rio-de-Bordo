from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse  # adiciona isso

def home(request):
    return JsonResponse({'mensagem': 'Servidor está ok ✅'})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('registros.urls')),  # ou o app da API
    path('', home),  # essa linha é a nova rota /
]
