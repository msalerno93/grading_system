from sql_conn import get_sql_connection

# GET function to retrieve all students from the database
def get_all_students(connection):

    cursor = connection.cursor()
    #SQL query to select all students from the database
    query = ("SELECT * FROM grading_system.students;")
    cursor.execute(query)

    response = []

    for (student_id, first_name, last_name) in cursor:
        response.append({
            "student_id": student_id,
            "first_name": first_name,
            "last_name": last_name
        })
    print(response)
    return response

#UPDATE function to add a new student to the database
def add_student(connection, student):
    cursor = connection.cursor()
    #SQL query to insert a new student information into the database
    query = ("INSERT INTO grading_system.students (first_name, last_name) "
            "VALUES (%s, %s)")
    data = (student['first_name'], student['last_name'])
    cursor.execute(query, data)
    connection.commit()

#DELETE function to remove a student from the database using their student_id
def delete_student(connection, student_id):
    cursor = connection.cursor()
    #SQL query to delete a student from the database based on their student_id
    query = "DELETE FROM grading_system.students WHERE student_id = %s"
    cursor.execute(query, (student_id,))
    connection.commit()

#UPDATE function to update a student's information in the database using their student_id
def update_student(connection, student_id, student):
    cursor = connection.cursor()
    #SQL query to update a student's information in the database based on their student_id
    query = ("UPDATE grading_system.students "
            "SET first_name = %s, last_name = %s "
            "WHERE student_id = %s")
    data = (student['first_name'], student['last_name'], student_id)
    cursor.execute(query, data)
    connection.commit()

    
if __name__ == "__main__":
    connection = get_sql_connection()
    print(delete_student(connection, 5))