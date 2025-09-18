from django.shortcuts import render

from website.models import CommunityInvolvement, Content, ProfessionalExperience


def website(request):
    context = {
        "experiences": ProfessionalExperience.objects.all().order_by("-start_date"),
        "communities": CommunityInvolvement.objects.all().order_by("-start_year"),
        "publications": {
            "presentations": Content.objects.filter(type="Presentations").order_by(
                "-published_at"
            ),
            "articles": Content.objects.filter(type="Articles").order_by("-published_at"),
        },
    }

    return render(request, "website/base.html", context)
