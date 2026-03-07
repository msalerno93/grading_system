from sql_conn import get_sql_connection

# GET function to retrieve all grade_types from the database
def get_all_grade_types(connection):

    cursor = connection.cursor()
    #SQL query to select all grade_types from the database
    query = ("SELECT * FROM grading_system.grade_types;")
    cursor.execute(query)

    response = []

    for (grade_type_id, type_name) in cursor:
        response.append({
            "grade_type_id": grade_type_id,
            "type_name": type_name,
        })
    print(response)
    return response

#UPDATE function to add a new grade_type to the database
def add_grade_type(connection, grade_type):
    cursor = connection.cursor()
    #SQL query to insert a new grade_type information into the database
    query = ("INSERT INTO grading_system.grade_types (type_name) VALUES (%s)")
    data = (grade_type['type_name'],)
    cursor.execute(query, data)
    connection.commit()

#DELETE function to remove a grade_type from the database using their grade_type_id
def delete_grade_type(connection, grade_type_id):
    cursor = connection.cursor()
    #SQL query to delete a grade_type from the database based on their grade_type_id
    query = "DELETE FROM grading_system.grade_types WHERE grade_type_id = %s"
    cursor.execute(query, (grade_type_id,))
    connection.commit()

#UPDATE function to update a grade_type's information in the database using their grade_type_id
def update_grade_type(connection, grade_type_id, grade_type):
    cursor = connection.cursor()
    #SQL query to update a grade_type's information in the database based on their grade_type_id
    query = ("UPDATE grading_system.grade_types "
            "SET type_name = %s "
            "WHERE grade_type_id = %s")
    data = (grade_type['type_name'], grade_type_id)
    cursor.execute(query, data)
    connection.commit()

    
if __name__ == "__main__":
    connection = get_sql_connection()
    print(delete_grade_type(connection, 6))