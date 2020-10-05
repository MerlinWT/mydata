#!/usr/bin/env python3
import cgi

from db.models.base.factory import create as models_factory
from response.error import main as error_response
from response.json import main as json_response
from db.connection import get as get_connection

fields = cgi.FieldStorage()
model_name = fields.getfirst('model')
pk = fields.getfirst('pk', None)
pk_value = fields.getfirst('pkv', None)

model = models_factory(model_name)

if model:
    connection, error = get_connection()
    if not error:
        where = ''
        where_values = []

        if pk:
            where = f'WHERE {pk} = ?'
            where_values = [pk_value]

        json_response(
            model.get(connection, where, where_values)
        )
    else:
        error_response(error)
else:
    error_response(f'model [{model_name}] not found')
