from sql_conn import get_sql_connection

# GET function to retrieve all teachers from the database
def get_all_teachers(connection):
    cursor = connection.cursor(dictionary=True)

    query = """
        SELECT 
            t.teacher_id,
            t.first_name,
            t.last_name,
            (
                SELECT sub.subject_name
                FROM Teacher_Subject ts
                JOIN Subjects sub ON ts.subject_id = sub.subject_id
                WHERE ts.teacher_id = t.teacher_id
                ORDER BY ts.teacher_subject_id ASC
                LIMIT 1
            ) AS first_class
        FROM Teachers t
        ORDER BY t.teacher_id;
    """

    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    return result
    cursor = connection.cursor(dictionary=True)

    query = """
        SELECT 
            t.teacher_id,
            t.first_name,
            t.last_name,
            sub.subject_name AS first_class
        FROM Teachers t
        LEFT JOIN Teacher_Subject ts 
            ON t.teacher_id = ts.teacher_id
        LEFT JOIN Subjects sub 
            ON ts.subject_id = sub.subject_id
        GROUP BY 
            t.teacher_id,
            t.first_name,
            t.last_name
        ORDER BY 
            t.teacher_id;
    """

    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    return result

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