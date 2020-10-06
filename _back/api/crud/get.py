#!/usr/bin/env python3
from db.models.base.factory import create as models_factory


def main(connection, model_name, pk, pk_value):
    where = ''
    where_values = []

    model = models_factory(model_name)

    if model:
        if pk:
            where = f'WHERE {pk} = ?'
            where_values = [pk_value]

        model.get(connection, where, where_values)
        return model.get(connection, where, where_values), None
    else:
        return None, f'model [{model_name}] not found'
