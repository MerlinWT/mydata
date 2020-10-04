#!/usr/bin/env python3

from api.version import get as get_version
from db.connection import get as get_connection
from response.error import main as error_response
from response.json import main as json_response

connection, error = get_connection()
if not error:
    version = get_version(
        connection.cursor()
    )

    json_response({"current": version})
else:
    error_response(error)
