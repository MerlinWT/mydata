#!/usr/bin/env python3
from db.models.base.model import Model


class Dated(Model):
    date = None

    def deserialize(self, fields):
        self.date = fields.getfirst('date')
