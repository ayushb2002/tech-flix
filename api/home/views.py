from django.shortcuts import render

def index(request):
    return render(request, "home/index.html")

def aboutUs(request):
    return render(request, "home/aboutUs.html")

def prepare(request):
    return render(request, "home/prepare.html")

def login(request):
    return render(request, "home/login.html")

def register(request):
    return render(request, "home/register.html")


# user - admin
# password - techflix