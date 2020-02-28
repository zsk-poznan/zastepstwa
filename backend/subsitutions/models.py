from django.db import models

# Create your models here.
class SubstitutionModel(models.Model):
  lesson_number = models.IntegerField()
  absent_teacher = models.CharField(max_length=30)
  class_tag = models.CharField(max_length=30)
  subject_name = models.CharField(max_length=30)
  classroom = models.CharField(max_length=30)
  substitute_teacher = models.CharField(max_length=30)