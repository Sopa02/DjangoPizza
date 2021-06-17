from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Pizza, Drink
from .serializer import pSerializer, dSerializer

# Create your views here.
@api_view(['GET'])
def apiCommands(request):
    api_urls={
        'Commands':'api/',
        'Pizza list':'api/pizzas/',
        'Pizza by id':'api/pizza/<id>/',
        'Drink list':'api/drinks/',
        'Drink by id':'api/drins/<id>'
    }
    return Response(api_urls)

#Pizzas-------------------------------------------------------
@api_view(['GET'])
def pizzaList(request):
    pizzas = Pizza.objects.all()
    sPizza = pSerializer(pizzas, many=True)
    return Response(sPizza.data)

@api_view(['GET'])
def pizzaById(request,id):
    pizza = Pizza.objects.get(id=id)
    sPizza = pSerializer(pizza, many=False)
    return Response(sPizza.data)
#Drinks-------------------------------------------------------
@api_view(['GET'])
def drinkList(request):
    drinks = Drink.objects.all()
    sDrink = dSerializer(drinks, many=True)
    return Response(sDrink.data)

@api_view(['GET'])
def drinkById(request,id):
    drink = Drink.objects.get(id=id)
    sDrink = dSerializer(drink, many=False)
    return Response(sDrink.data)