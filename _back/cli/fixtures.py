def main(connection):
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
            "sql": "insert into mydata.groups (id, title, model, category_id) values (?, ?, ?, ?)",
            "values": [
                [1, 'Продукты', 'spending_products', 1],
                [2, 'Химия', 'spending_chemistry', 1],
                [3, 'Техника', 'spending_appliances', 1],
                [4, 'Коммунальные услуги', 'spending_communal', 1],
                [5, 'Связь', 'spending_communication', 1],
                [6, 'Одежда', 'spending_clothes', 1],
                [7, 'Велосипед', 'spending_bicycle', 1],

                [8, 'Велосипед', 'sport_bicycle', 2],
                [9, 'Упражнения', 'sport_exercises', 2],
                [10, 'Волейбол', 'sport_volleyball', 2],
                [11, 'Пинг-понг', 'sport_ping_pong', 2],
            ]
        },
    ]

    cursor = connection.cursor()

    for fixture in fixtures:
        for current_values in fixture["values"]:
            cursor.execute(fixture["sql"], current_values)

    connection.commit()

