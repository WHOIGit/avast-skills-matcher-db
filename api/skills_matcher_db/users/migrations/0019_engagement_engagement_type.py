# Generated by Django 3.1.13 on 2022-03-31 15:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0018_auto_20220324_1743'),
    ]

    operations = [
        migrations.AddField(
            model_name='engagement',
            name='engagement_type',
            field=models.CharField(choices=[('PROJECT_OWNER_INITIATED', 'Project Owner Initiated'), ('EXPERT_INITIATED', 'SME Initiated')], default='PROJECT_OWNER_INITIATED', max_length=50),
        ),
    ]
