# Generated by Django 5.0.3 on 2024-03-09 04:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_react_id_num'),
    ]

    operations = [
        migrations.AddField(
            model_name='react',
            name='driver',
            field=models.BooleanField(default=False),
        ),
    ]