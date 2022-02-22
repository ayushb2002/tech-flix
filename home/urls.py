from unicodedata import name
from django.urls import path
from . import views 

urlpatterns = [
    path("", views.index, name="index"),
    path("/aboutUs", views.aboutUs, name="aboutUs"),
    path("/prepare", views.prepare, name="prepare"),
    path("/login", views.login, name="login"),
    path("/register", views.register, name="register"),
]