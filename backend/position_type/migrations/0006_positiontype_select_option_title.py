# Generated by Django 2.0.5 on 2018-12-07 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('position_type', '0005_auto_20181201_0034'),
    ]

    operations = [
        migrations.AddField(
            model_name='positiontype',
            name='select_option_title',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
