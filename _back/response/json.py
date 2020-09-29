#!/usr/bin/env python3
import json


def main(obj):
    print("Content-Type: application/json\n")
    print(json.dumps(obj), end="")
