from django.shortcuts import render
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from .models import Product
from .serializers import ProductSerializer, DetailedProductSerializer
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    serializer = DetailedProductSerializer(product)
    return Response(serializer.data)