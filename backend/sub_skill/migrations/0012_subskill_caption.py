# Generated by Django 2.0.5 on 2018-12-03 00:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sub_skill', '0011_auto_20181202_2251'),
    ]

    operations = [
        migrations.AddField(
            model_name='subskill',
            name='caption',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
    ]
