#!/usr/bin/env python3
import inspect
import time


class Model:
    id = None
    name = None

    def serialize(self, exclude: set = {}):
        attributes = inspect.getmembers(self, lambda a: not (inspect.isroutine(a)))
        attributes = [a for a in attributes if not (a[0].startswith('__') and a[0].endswith('__'))]

        serialised = {}
        for attribute in attributes:
            if attribute[0] not in exclude:
                serialised[attribute[0]] = attribute[1]

        return serialised

    def deserialize(self, values):
        for field in values:
            setattr(self, field, values[field])

    def save(self, connection):
        data = self.serialize({"id", "name"})

        fields = [*data]
        values = [*data.values()]

        cursor = connection.cursor()
        cursor.execute(
            f'INSERT INTO {self.name} ({",".join(fields)}) VALUES ({",".join(["?"] * len(values))})',
            values
        )
        connection.commit()

        self.id = cursor.lastrowid

    def get(self, connection, where='', where_values=[]):
        models = []

        data = self.serialize({"name"})
        fields = [*data]

        cursor = connection.cursor()
        cursor.execute(
            f'SELECT {",".join(fields)} FROM {self.name} {where}', where_values
        )

        for values in cursor:
            data = {}
            i = 0
            for field in fields:
                if field == 'date':
                    data[field] = time.mktime(values[i].timetuple())
                else:
                    data[field] = values[i]
                i += 1
            models.append(data)

        return models
