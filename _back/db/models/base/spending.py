#!/usr/bin/env python3
from db.models.base.dated import Dated


class Spending(Dated):
    shop = None
    sum = None

    def deserialize(self, fields):
        super().deserialize(fields)

        self.shop = fields.getfirst('shop')
        self.sum = float(fields.getfirst('sum'))
