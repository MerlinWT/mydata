#!/usr/bin/env python3
import cgi

from api.crud.create import main as create_model
from response.error import main as error_response
from response.json import main as json_response

fields = cgi.FieldStorage()
model_name = fields.getfirst('model')

model = create_model(model_name, fields)

if model:
    json_response({
        'form-data': model.serialize()
    })
else:
    error_response(f'model [{model_name}] not found')
