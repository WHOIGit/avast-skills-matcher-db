# Generated by Django 3.1.13 on 2021-11-12 20:50

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('skills', '0002_auto_20211112_2047'),
        ('engineers', '0003_auto_20211112_1847'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='EngineerAddon',
            new_name='EngineerProfile',
        ),
    ]
