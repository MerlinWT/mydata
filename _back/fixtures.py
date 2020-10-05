from db.connection import get as get_connection

fixtures = [
    {
        "sql": "insert into mydata.version (value) values (?)",
        "values": [
            ['0.0.1'],
        ]
    },
    {
        "sql": "insert into mydata.categories (id, title, prefix) values (?, ?, ?)",
        "values": [
            [1, 'Расходы', 'spending'],
            [2, 'Спорт', 'sport']
        ]
    },
    {
        "sql": "insert into mydata.groups (id, title, category_id) values (?, ?, ?)",
        "values": [
            [1, 'Продукты', 1],
            [2, 'Химия', 1],
            [3, 'Техника', 1],
            [4, 'Коммунальные услуги', 1],
            [5, 'Связь', 1],
            [6, 'Одежда', 1],
            [7, 'Велосипед', 1],

            [8, 'Велосипед', 2],
            [9, 'Упражнения', 2],
            [10, 'Волейбол', 2],
            [11, 'Пинг-понг', 2],
        ]
    },
]

connection, error = get_connection()

cursor = connection.cursor()

for fixture in fixtures:
    for current_values in fixture["values"]:
        cursor.execute(fixture["sql"], current_values)

connection.commit()
