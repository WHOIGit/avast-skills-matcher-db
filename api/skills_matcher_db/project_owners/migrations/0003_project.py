# Generated by Django 3.1.13 on 2021-12-07 17:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('project_owners', '0002_auto_20211129_1429'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('engineers', models.ManyToManyField(related_name='projects_assigned', to=settings.AUTH_USER_MODEL)),
                ('project_owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects_owned', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]