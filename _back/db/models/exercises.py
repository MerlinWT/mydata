#!/usr/bin/env python3
from db.models.dated import Dated


class Exercises(Dated):
    push_ups = None
    squats = None
    abdominal = None
    pull_ups = None

    def deserialize(self, fields):
        super().deserialize(fields)

        self.push_ups = int(fields.getfirst('push-ups')),
        self.squats = int(fields.getfirst('squats')),
        self.abdominal = int(fields.getfirst('abdominal')),
        self.pull_ups = int(fields.getfirst('pull-ups')),
