#!/usr/bin/env python3
from db.models.base.model import Model


class Group(Model):
    name = 'groups'

    id = None
    title = None

    def deserialize(self, fields):
        self.title = str(fields.getfirst('title')),

