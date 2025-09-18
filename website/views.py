from django.shortcuts import render

from website.models import CommunityInvolvement, ProfessionalExperience


def website(request):
    context = {
        "experiences": ProfessionalExperience.objects.all().order_by("-start_date"),
        "communities": CommunityInvolvement.objects.all().order_by("-start_year"),
    }

    return render(request, "website/base.html", context)
