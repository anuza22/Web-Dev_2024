from django.contrib import admin

# Register your models here.

import imp
from api.models import Vacancy
from api.models import Company

admin.site.register(Vacancy)
admin.site.register(Company)
