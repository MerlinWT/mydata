#!/usr/bin/env python3
from db.models.base.model import Model


class Version(Model):
    name = 'version'

    value = None

    # def deserialize(self, fields):
    #     self.value = str(fields.getfirst('value')),

