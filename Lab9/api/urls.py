from django.urls import path
from api.views import company_list

urlpatterns = [
    path("companies/", company_list)
]

/api/companies - List of all Companies
/api/companies/<int:id>/ - Get one Company
/api/companies/<int:id>/vacancies/ - List of Vacancies by Company
/api/vacancies/ - List of all Vacancies
/api/vacancies/<int:id>/ - Get one Vacancy
/api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary
