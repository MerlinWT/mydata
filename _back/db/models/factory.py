#!/usr/bin/env python3

from db.models.dated import Dated
from db.models.spending import Spending
from db.models.bicycle import Bicycle
from db.models.exercises import Exercises


def create(name, fields):
    _map = {
        'dated': Dated,
        'spending': Spending,
        'bicycle': Bicycle,
        'exercises': Exercises,
    }

    model = None
    if name in _map:
        model = _map[name]()
        model.deserialize(fields)

    return model
