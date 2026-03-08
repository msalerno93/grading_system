from sql_conn import get_sql_connection

# GET function to retrieve all student-subject enrollments
def get_all_student_subjects(connection):

    cursor = connection.cursor()
    query = ("SELECT * FROM grading_system.student_subject;")
    cursor.execute(query)

    response = []

    for (student_subject_id, student_id, subject_id) in cursor:
        response.append({
            "student_subject_id": student_subject_id,
            "student_id": student_id,
            "subject_id": subject_id
        })

    print(response)
    return response


# GET function to retrieve all subjects for a specific student
def get_subjects_for_student(connection, student_id):

    cursor = connection.cursor()
    query = ("SELECT ss.student_subject_id, ss.student_id, ss.subject_id, s.subject_name "
             "FROM grading_system.student_subject ss "
             "JOIN grading_system.subjects s ON ss.subject_id = s.subject_id "
             "WHERE ss.student_id = %s;")

    cursor.execute(query, (student_id,))

    response = []

    for (student_subject_id, student_id, subject_id, subject_name) in cursor:
        response.append({
            "student_subject_id": student_subject_id,
            "student_id": student_id,
            "subject_id": subject_id,
            "subject_name": subject_name
        })

    print(response)
    return response


# GET function to retrieve all students enrolled in a specific subject
def get_students_for_subject(connection, subject_id):

    cursor = connection.cursor()
    query = ("SELECT ss.student_subject_id, ss.student_id, ss.subject_id, "
             "st.first_name, st.last_name "
             "FROM grading_system.student_subject ss "
             "JOIN grading_system.students st ON ss.student_id = st.student_id "
             "WHERE ss.subject_id = %s;")

    cursor.execute(query, (subject_id,))

    response = []

    for (student_subject_id, student_id, subject_id, first_name, last_name) in cursor:
        response.append({
            "student_subject_id": student_subject_id,
            "student_id": student_id,
            "subject_id": subject_id,
            "first_name": first_name,
            "last_name": last_name
        })

    print(response)
    return response


# INSERT function to enroll a student in a subject
def enroll_student_in_subject(connection, student_id, subject_id):

    cursor = connection.cursor()
    query = ("INSERT INTO grading_system.student_subject (student_id, subject_id) "
             "VALUES (%s, %s)")
    data = (student_id, subject_id)

    cursor.execute(query, data)
    connection.commit()


# DELETE function to remove a student from a subject
def delete_student_subject(connection, student_subject_id):

    cursor = connection.cursor()
    query = "DELETE FROM grading_system.student_subject WHERE student_subject_id = %s"
    cursor.execute(query, (student_subject_id,))
    connection.commit()


if __name__ == "__main__":
    connection = get_sql_connection()
    print(get_subjects_for_student(connection, 1))