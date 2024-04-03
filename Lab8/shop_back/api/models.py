from django.db import models

    
class Category(models.Model):
    name = models.CharField(max_length=400)
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
    
class Product_model(models.Model):
    name = models.CharField(max_length=400)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.CharField(max_length=255, default='NULL')
    category_id = models.IntegerField(default = 1)
    # category = models.ForeignKey(Category,
    #                              on_delete=models.CASCADE,
    #                              related_name='products')

    class Meta:
        verbose_name = 'Product_model'
        verbose_name_plural = 'Product_models'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
           'id' : self.id,
            'name' : self.name,
            'price' : self.price,
            'description' : self.description,
            'count' : self.count,
            'is_active' : self.is_active,
            'category': self.category  
        }
