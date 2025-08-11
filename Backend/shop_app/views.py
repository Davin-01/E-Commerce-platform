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
    product = get_object_or_404(Product, slug__iexact=slug)
    serializer = DetailedProductSerializer(product)
    return Response(serializer.data)

def add_item(request):
    cart_code = request.data.get("cart_code")
    product_id = request.data.get("product_id")

    cart, created = Cart.objects.get_or_create(cart_code = cart_code)
    product = Product.objects.get(id=product_id)

    cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
    cart_item.quantity += 1
    cart_item.save()

    serializer = CartItemSerializer(cart_item)
    return Response(serializer.data)