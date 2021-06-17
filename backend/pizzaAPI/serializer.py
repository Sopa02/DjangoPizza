from rest_framework import serializers
from .models import Pizza,Drink

class pSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizza
        fields = '__all__'
class dSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = '__all__'
