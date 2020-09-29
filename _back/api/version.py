#!/usr/bin/env python3


def get(connection):
    version = None

    connection.execute("SELECT value FROM version")
    for value in connection:
        version = value

    return version
