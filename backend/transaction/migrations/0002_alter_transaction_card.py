# Generated by Django 4.1.5 on 2023-01-30 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='card',
            field=models.CharField(max_length=12),
        ),
    ]
