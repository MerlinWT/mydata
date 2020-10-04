#!/usr/bin/env python3


class Model:
    name = None

    def serialize(self):
        return self.__dict__

    def save(self, connection):
        data = self.serialize()
        fields = [*data]
        values = [*data.values()]

        connection.cursor().execute(
            f'INSERT INTO {self.name} ({",".join(fields)}) VALUES ({",".join(["?"] * len(values))})',
            values
        )
        connection.commit()
