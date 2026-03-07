from sql_conn import get_sql_connection

# GET function to retrieve all teachers from the database
def get_all_teachers(connection):

    cursor = connection.cursor()
    #SQL query to select all teachers from the database
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

#UPDATE function to add a new teacher to the database
def add_teacher(connection, teacher):
    cursor = connection.cursor()
    #SQL query to insert a new teacher information into the database
    query = ("INSERT INTO grading_system.teachers (first_name, last_name) "
            "VALUES (%s, %s)")
    data = (teacher['first_name'], teacher['last_name'])
    cursor.execute(query, data)
    connection.commit()

#DELETE function to remove a teacher from the database using their teacher_id
def delete_teacher(connection, teacher_id):
    cursor = connection.cursor()
    #SQL query to delete a teacher from the database based on their teacher_id
    query = "DELETE FROM grading_system.teachers WHERE teacher_id = %s"
    cursor.execute(query, (teacher_id,))
    connection.commit()

#UPDATE function to update a teacher's information in the database using their teacher_id
def update_teacher(connection, teacher_id, teacher):
    cursor = connection.cursor()
    #SQL query to update a teacher's information in the database based on their teacher_id
    query = ("UPDATE grading_system.teachers "
            "SET first_name = %s, last_name = %s "
            "WHERE teacher_id = %s")
    data = (teacher['first_name'], teacher['last_name'], teacher_id)
    cursor.execute(query, data)
    connection.commit()

    
if __name__ == "__main__":
    connection = get_sql_connection()
    print(update_teacher(connection, 4, {"first_name": "John", "last_name": "Doe"}))