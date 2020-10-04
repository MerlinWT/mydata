#!/usr/bin/env python3
from db.models.base.factory import create as models_factory


def main(model_name, fields):
    return models_factory(model_name, fields)
