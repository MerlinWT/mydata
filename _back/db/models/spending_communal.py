#!/usr/bin/env python3
from db.models.base.spending import Spending


class SpendingCommunal(Spending):
    name = 'spending_communal'
