# Generated by Django 5.0.2 on 2024-04-07 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employeepanel', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empdetail',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
