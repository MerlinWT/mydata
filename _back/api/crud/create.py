#!/usr/bin/env python3
from db.models.base.factory import create as models_factory


def main(connection, model_name, data):
    model = models_factory(model_name, data)

    if model:
        model.save(connection)
        return model.serialize({"name"}), None
    else:
        return None, f'model [{model_name}] not found'
