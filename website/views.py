from django.shortcuts import render

from website.models import ProfessionalExperience


def website(request):
    context = {
        "experiences": ProfessionalExperience.objects.all().order_by("-start_date")
    }

    return render(request, "website/base.html", context)
