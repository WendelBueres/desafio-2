from django.db import models


def upload_to(instance, filename):
    return 'files/{filename}'.format(filename=filename)


class Cnab(models.Model):
    name = models.CharField(max_length=800)
    file = models.FileField(upload_to=upload_to)
