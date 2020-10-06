#!/usr/bin/env python3
import cgi
#
from response.error import main as error_response
from response.json import main as json_response
from db.connection import get as get_connection

fieldStorage = cgi.FieldStorage()
params = {}
for key in fieldStorage.keys():
    params[key] = fieldStorage[key].value


end_point = params.pop("end-point")

fields = cgi.FieldStorage()

connection, error = get_connection()
if not error:
    if end_point == 'create':
        from api.crud.create import main as create
        result, error = create(connection, params.pop("model"), params)

        json_response({"created": result, "error": error})
    elif end_point == 'get':
        from api.crud.get import main as get

        result, error = get(connection, params.pop("model"), params.pop("pk", None), params.pop("pkv", ''))
        json_response({"rows": result, "error": error})
    else:
        error_response('Unknown end-point')
else:
    error_response(error)
