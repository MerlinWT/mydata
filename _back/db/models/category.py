#!/usr/bin/env python3
from db.models.base.model import Model


class Category(Model):
    name = 'categories'

    id = None
    title = None
    prefix = None

    # def deserialize(self, fields):
    #     self.title = str(fields.getfirst('title')),
    #     self.title = str(fields.getfirst('prefix')),

