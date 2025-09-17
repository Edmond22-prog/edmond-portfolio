from django.urls import path

from website.views import display_base

urlpatterns = [
    path("", display_base, name="display_base"),
]
