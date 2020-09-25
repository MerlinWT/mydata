#!/usr/bin/env python3
import cgi
import json

fields = cgi.FieldStorage()
data = {
    'date': fields.getfirst('date'),
}

print("Content-Type: application/json\n")
print(json.dumps({'form-data': data}))
