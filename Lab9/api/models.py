from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=400)
    description = models.TextField()
    city = models.CharField(max_length=400)
    address = models.CharField(max_length=600)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'ID: {self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
    
class Vacancy(models.Model):
    name = models.CharField(max_length=400)
    salary = models.FloatField()
    description = models.TextField()
    company = models.ForeignKey(Company,
                                on_delete=models.CASCADE,
                                related_name='company')

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
           'id' : self.id,
            'name' : self.name,
            'salary' : self.salary,
            'description' : self.description,
            'company': self.company  
        }

