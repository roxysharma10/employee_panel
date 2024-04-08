from django.db import models

# Create your models here.

class Empdetail(models.Model):
	emp_name = models.CharField(max_length=120)
	designation = models.CharField(max_length=120)
	experience_details = models.TextField()
	onboard_completed = models.BooleanField(default=False)

	def _str_(self):
		return self.emp_name
