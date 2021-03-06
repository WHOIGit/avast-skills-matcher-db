# Generated by Django 3.1.13 on 2022-01-28 19:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0011_auto_20220128_1850'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='favorites',
        ),
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('engineer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='favored_by', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='favorites', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
