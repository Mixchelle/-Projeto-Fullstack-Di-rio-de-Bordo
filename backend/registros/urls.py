from django.urls import path
from .views import RegistroListCreateView, RegistroRetrieveUpdateDestroyView

urlpatterns = [
    path('registros/', RegistroListCreateView.as_view(), name='registro-list-create'),
    path('registros/<int:pk>/', RegistroRetrieveUpdateDestroyView.as_view(), name='registro-detail'),
]