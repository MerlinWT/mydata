#!/usr/bin/env python3
from db.models.dated import Dated


class Bicycle(Dated):
    duration = None
    distance = None

    def deserialize(self, fields):
        super().deserialize(fields)

        self.duration = int(fields.getfirst('duration'))
        self.distance = int(fields.getfirst('distance'))
