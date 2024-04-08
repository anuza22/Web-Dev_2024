from django.contrib import admin


import imp
from api.models import Vacancy
from api.models import Company

admin.site.register(Vacancy)
admin.site.register(Company)
