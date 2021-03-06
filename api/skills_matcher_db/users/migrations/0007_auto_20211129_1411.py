# Generated by Django 3.1.13 on 2021-11-29 14:11

from django.db import migrations, models
import skills_matcher_db.users.models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20211128_1623'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_type',
            field=skills_matcher_db.users.models.ChoiceArrayField(base_field=models.CharField(blank=True, choices=[('CLIENT', 'Client'), ('ENGINEER', 'Engineer'), ('PROJECT_OWNER', 'Project Owner')], max_length=50), blank=True, null=True, size=None),
        ),
    ]
