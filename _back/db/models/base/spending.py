#!/usr/bin/env python3
from db.models.base.dated import Dated


class Spending(Dated):
    shop = None
    sum = None

    # def deserialize(self, values):
    #     super().deserialize(values)
    #
    #     self.shop = str(values["shop"])
    #     self.sum = float(values["sum"])
