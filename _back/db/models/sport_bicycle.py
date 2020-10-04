#!/usr/bin/env python3
from db.models.base.dated import Dated


class SportBicycle(Dated):
    name = 'sport_bicycle'

    duration = None
    distance = None

    def deserialize(self, fields):
        super().deserialize(fields)

        self.duration = float(fields.getfirst('duration'))
        self.distance = float(fields.getfirst('distance'))
