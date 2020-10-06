#!/usr/bin/env python3
import sys

from db.connection import get as get_connection

if len(sys.argv) > 1:
    if sys.argv[1] == 'fixtures':
        from cli.fixtures import main as apply_fixtures

        apply_fixtures(get_connection()[0])

        print('fixtures applied')
    else:
        print(f'{sys.argv[1]} command not found')
