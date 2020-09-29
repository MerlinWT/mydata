#!/usr/bin/env python3
from db.models.base import Base


class Dated(Base):
    date = None

    def deserialize(self, fields):
        self.date = int(fields.getfirst('date'))
