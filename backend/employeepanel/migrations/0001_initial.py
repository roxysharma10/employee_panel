# Generated by Django 5.0.2 on 2024-04-07 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Empdetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emp_name', models.CharField(max_length=120)),
                ('designation', models.CharField(max_length=120)),
                ('experience_details', models.TextField()),
                ('onboard_completed', models.BooleanField(default=False)),
            ],
        ),
    ]