#!/usr/bin/env python3
import cgi
import json

fields = cgi.FieldStorage()
data = {
    'date': fields.getfirst('date'),
    'duration': fields.getfirst('duration'),
    'distance': fields.getfirst('distance'),
}

print("Content-Type: application/json\n")
print(json.dumps({'form-data': data}))
