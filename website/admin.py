from django.contrib import admin

from website.models import CommunityInvolvement, Content, ProfessionalExperience, Skill


@admin.register(ProfessionalExperience)
class ProfessionalExperienceAdmin(admin.ModelAdmin):
    filter_horizontal = ("skills",)
    list_display = ("title", "company_name", "start_date", "end_date", "is_current")
    list_filter = ("employment_type", "location_type", "is_current")
    search_fields = ("title", "company_name", "company_location", "description")


@admin.register(CommunityInvolvement)
class CommunityInvolvementAdmin(admin.ModelAdmin):
    list_display = ("community_name", "title", "start_year", "end_year")
    list_filter = ("start_year", "end_year")
    search_fields = ("community_name", "title", "summary")


@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ("title", "type", "scope", "published_at")
    list_filter = ("type",)
    search_fields = ("title", "scope")


admin.site.register(Skill)

admin.site.site_header = "Edmond Makolle Admin"
