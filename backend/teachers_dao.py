from sql_conn import get_sql_connection

def get_all_teachers(connection):

    cursor = connection.cursor()
    query = ("SELECT * FROM grading_system.teachers;")
    cursor.execute(query)

    response = []

    for (teacher_id, first_name, last_name) in cursor:
        response.append({
            "teacher_id": teacher_id,
            "first_name": first_name,
            "last_name": last_name
        })
    print(response)
    return response

def add_teacher(connection, teacher):
    cursor = connection.cursor()
    query = ("INSERT INTO grading_system.teachers (first_name, last_name) "
            "VALUES (%s, %s)")
    data = (teacher['first_name'], teacher['last_name'])
    cursor.execute(query, data)
    connection.commit()

# def delete_order_details_by_product(connection, product_id):
#     cursor = connection.cursor()
#     query = "DELETE FROM tech_app.order_details WHERE product_id = %s"
#     cursor.execute(query, (product_id,))
#     connection.commit()

# def delete_product(connection, product_id):
#     cursor = connection.cursor()
#     query = ("DELETE FROM tech_app.products WHERE product_id = %s")
#     data = (product_id,)
#     cursor.execute(query, data)
#     connection.commit()
#     return cursor.rowcount

# def update_product(connection, product_id, product):
#     cursor = connection.cursor()
#     query = ("UPDATE tech_app.products "
#             "SET name = %s, unit_id = %s, price_per_unit = %s "
#             "WHERE product_id = %s")
#     data = (product['name'], product['unit_id'], product['price_per_unit'], product_id)
#     cursor.execute(query, data)
#     connection.commit()
#     return cursor.rowcount
if __name__ == "__main__":
    connection = get_sql_connection()
    print(add_teacher(connection, {"first_name": "James", "last_name": "Bond"}))