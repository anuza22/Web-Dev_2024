import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.serializers import CompanySerializer


from api.models import Company
from api.models import Vacancy

def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)



# CRUD  =>  create / read / update / delete
@csrf_exempt
def category_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        # categories_json = [c.to_json() for c in categories]
        # return JsonResponse(categories_json, safe=False)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(name=data.get("name"))

        return JsonResponse(company.to_json(), status=201)


@csrf_exempt
def company_detail(request, pk=None):
    try:
        company = Company.objects.get(id=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    if request.method == "GET":
        serializer = CompanySerializer(company)
        # return JsonResponse(category.to_json())
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        company.name = data.get("name")
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"deleted": True})


# def category_products(request, pk=None):
#     try:
#         category = Company.objects.get(id=pk)
#     except Company.DoesNotExist as e:
#         return JsonResponse({"error": str(e)}, status=400)

#     products_json = [p.to_json() for p in category.products.all()]

#     return JsonResponse(products_json, safe=False)