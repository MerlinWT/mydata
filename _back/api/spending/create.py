#!/usr/bin/env python3
import cgi
import json

fields = cgi.FieldStorage()
data = {
    'date': fields.getfirst('date'),
    'shop': fields.getfirst('shop'),
    'sum': fields.getfirst('sum'),
}

print("Content-Type: application/json\n")
print(json.dumps({'form-data': data}))
