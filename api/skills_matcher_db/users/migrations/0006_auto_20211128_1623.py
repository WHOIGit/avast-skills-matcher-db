# Generated by Django 3.1.13 on 2021-11-28 16:23

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20211128_1534'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='type',
        ),
        migrations.AddField(
            model_name='user',
            name='user_type',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('CLIENT', 'Client'), ('ENGINEER', 'Engineer'), ('PROJECT_OWNER', 'Project Owner')], max_length=50), blank=True, null=True, size=None),
        ),
    ]
