#!/usr/bin/env python3
import json


def main(obj):
    print("Content-Type: application/json; charset=UTF-8\n")
    print(json.dumps(obj), end="")
