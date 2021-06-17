from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiCommands, name='api-cmds'),
    path('pizzas/', views.pizzaList, name='pizza-list'),
    path('pizzas/<int:id>/', views.pizzaById, name='pizza-by-id'),
    path('drinks/', views.drinkList, name='drink-list'),
    path('drinks/<int:id>', views.drinkById, name='drink-by-id')


]