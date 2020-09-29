#!/usr/bin/env python3
from .json import main as json_response


def main(error):
    json_response({"error": str(error)})
