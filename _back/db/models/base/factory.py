#!/usr/bin/env python3

from db.models.version import Version

from db.models.category import Category
from db.models.group import Group

from db.models.spending_products import SpendingProducts
from db.models.spending_chemistry import SpendingChemistry
from db.models.spending_appliances import SpendingAppliances
from db.models.spending_communal import SpendingCommunal
from db.models.spending_communication import SpendingCommunication
from db.models.spending_clothes import SpendingClothes
from db.models.spending_bicycle import SpendingBicycle

from db.models.sport_bicycle import SportBicycle
from db.models.sport_exercises import SportExercises
from db.models.sport_volleyball import SportVolleyball
from db.models.sport_ping_pong import SportPingPong


def create(name, fields=None):
    _map = {
        'version': Version,

        'category': Category,
        'group': Group,

        'spending_products': SpendingProducts,
        'spending_chemistry': SpendingChemistry,
        'spending_appliances': SpendingAppliances,
        'spending_communal': SpendingCommunal,
        'spending_communication': SpendingCommunication,
        'spending_clothes': SpendingClothes,
        'spending_bicycle': SpendingBicycle,

        'sport_bicycle': SportBicycle,
        'sport_exercises': SportExercises,
        'sport_volleyball': SportVolleyball,
        'sport_ping_pong': SportPingPong,
    }

    model = None
    if name in _map:
        model = _map[name]()
        if fields:
            model.deserialize(fields)

    return model
