#!/usr/bin/env python3
import mariadb
import json

version = "-2"

try:
    conn = mariadb.connect(
        user="mydata",
        password="passw0rd",
        host="db",
        port=3306,
        database="mydata"

    )

    cur = conn.cursor()

    cur.execute("SELECT value FROM version")
    for value in cur:
        version = value

except mariadb.Error as e:
    version = "-1"

print("Content-Type: application/json\n")
print(json.dumps({'current': version}), end="")
