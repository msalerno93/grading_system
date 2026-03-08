from sql_conn import get_sql_connection

# GET function to retrieve all grades from the database
def get_all_grades(connection):

    cursor = connection.cursor()
    # SQL query to select all grades
    query = ("SELECT * FROM grading_system.grades;")
    cursor.execute(query)

    response = []

    for (grade_id, student_subject_id, grade_type_id, score) in cursor:
        response.append({
            "grade_id": grade_id,
            "student_subject_id": student_subject_id,
            "grade_type_id": grade_type_id,
            "score": float(score)
        })

    print(response)
    return response


# INSERT function to add a new grade
def add_grade(connection, grade):
    cursor = connection.cursor()
    # SQL query to insert a new grade
    query = ("INSERT INTO grading_system.grades (student_subject_id, grade_type_id, score) "
             "VALUES (%s, %s, %s)")
    data = (grade['student_subject_id'], grade['grade_type_id'], grade['score'])
    cursor.execute(query, data)
    connection.commit()


# DELETE function to remove a grade by grade_id
def delete_grade(connection, grade_id):
    cursor = connection.cursor()
    # SQL query to delete a grade
    query = "DELETE FROM grading_system.grades WHERE grade_id = %s"
    cursor.execute(query, (grade_id,))
    connection.commit()


# UPDATE function to update a grade
def update_grade(connection, grade_id, grade):
    cursor = connection.cursor()
    # SQL query to update a grade
    query = ("UPDATE grading_system.grades "
             "SET student_subject_id = %s, grade_type_id = %s, score = %s "
             "WHERE grade_id = %s")
    data = (grade['student_subject_id'], grade['grade_type_id'], grade['score'], grade_id)
    cursor.execute(query, data)
    connection.commit()


if __name__ == "__main__":
    connection = get_sql_connection()
    print(get_all_grades(connection))
