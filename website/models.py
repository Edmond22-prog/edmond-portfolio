from django.db import models


class Skill(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Skills"
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name


class ProfessionalExperience(models.Model):
    EMPLOYMENT_TYPE = (
        ("Full-time", "Full-time"),
        ("Part-time", "Part-time"),
        ("Self-employed", "Self-employed"),
        ("Freelance", "Freelance"),
        ("Contract", "Contract"),
        ("Internship", "Internship"),
        ("Apprenticeship", "Apprenticeship"),
        ("Seasonal", "Seasonal"),
    )

    LOCATION_TYPE = (
        ("On-site", "On-site"),
        ("Hybrid", "Hybrid"),
        ("Remote", "Remote"),
    )

    title = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100)
    company_url = models.URLField(blank=True, null=True)
    company_location = models.CharField(max_length=100)
    company_logo = models.ImageField(upload_to="company_logos", blank=True, null=True)
    employment_type = models.CharField(
        max_length=20, choices=EMPLOYMENT_TYPE, default="Freelance"
    )
    location_type = models.CharField(
        max_length=10, choices=LOCATION_TYPE, default="Remote"
    )
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    is_current = models.BooleanField(default=True)
    description = models.TextField()
    skills = models.ManyToManyField(Skill, null=False, blank=False)

    class Meta:
        verbose_name_plural = "Professional Experiences"
        ordering = ["-start_date"]

    def __str__(self) -> str:
        return f"{self.title} at {self.company_name}"
