import mariadb


def get():
    try:
        conn = mariadb.connect(
            user="mydata",
            password="passw0rd",
            host="db",
            port=3306,
            database="mydata"

        )

        return conn, None
    except mariadb.Error as e:
        return False, e
