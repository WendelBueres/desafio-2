from django.urls import path

from . import views

urlpatterns = [
    path('establishments/', views.EstablishmentView.as_view())
]
