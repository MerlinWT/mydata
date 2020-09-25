#!/usr/bin/env python3
import json
import os
import sys

con = int(os.environ["CONTENT_LENGTH"])
req_body = sys.stdin.read(con)
my_dict = json.loads(req_body)

print("Content-Type: application/json\n")
print(
    json.dumps(
        {
            'result': 'ok',
            'request': my_dict['payload']
        }
    )
)
