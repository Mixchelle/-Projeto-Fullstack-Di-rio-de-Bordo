from django.urls import path
from .views import RegistroListCreateView

urlpatterns = [
    path('registros/', RegistroListCreateView.as_view()),  # 👌 certinho
]
