#!/usr/bin/env python3
from db.models.base.dated import Dated


class SportExercises(Dated):
    name = 'sport_exercises'

    push_ups = None
    squats = None
    abdominal = None
    pull_ups = None

    def deserialize(self, fields):
        super().deserialize(fields)

        self.push_ups = int(fields.getfirst('push_ups')),
        self.squats = int(fields.getfirst('squats')),
        self.abdominal = int(fields.getfirst('abdominal')),
        self.pull_ups = int(fields.getfirst('pull_ups')),
