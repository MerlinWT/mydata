#!/usr/bin/env python3
import cgi
import json

fields = cgi.FieldStorage()
data = {
    'date': fields.getfirst('date'),
    'push-ups': fields.getfirst('push-ups'),
    'squats': fields.getfirst('squats'),
    'abdominal': fields.getfirst('abdominal'),
    'pull-ups': fields.getfirst('pull-ups'),
}

print("Content-Type: application/json\n")
print(json.dumps({'form-data': data}))
