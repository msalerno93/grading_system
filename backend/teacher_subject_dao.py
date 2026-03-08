from sql_conn import get_sql_connection

# GET function to retrieve all teacher-subject enrollments
def get_all_teacher_subjects(connection):

    cursor = connection.cursor()
    query = ("SELECT * FROM grading_system.teacher_subject;")
    cursor.execute(query)

    response = []

    for (teacher_subject_id, teacher_id, subject_id) in cursor:
        response.append({
            "teacher_subject_id": teacher_subject_id,
            "teacher_id": teacher_id,
            "subject_id": subject_id
        })

    print(response)
    return response


# GET function to retrieve all subjects for a specific teacher
def get_subjects_for_teacher(connection, teacher_id):

    cursor = connection.cursor()
    query = ("SELECT ss.teacher_subject_id, ss.teacher_id, ss.subject_id, s.subject_name "
             "FROM grading_system.teacher_subject ss "
             "JOIN grading_system.subjects s ON ss.subject_id = s.subject_id "
             "WHERE ss.teacher_id = %s;")

    cursor.execute(query, (teacher_id,))

    response = []

    for (teacher_subject_id, teacher_id, subject_id, subject_name) in cursor:
        response.append({
            "teacher_subject_id": teacher_subject_id,
            "teacher_id": teacher_id,
            "subject_id": subject_id,
            "subject_name": subject_name
        })

    print(response)
    return response


# GET function to retrieve all teachers enrolled in a specific subject
def get_teachers_for_subject(connection, subject_id):

    cursor = connection.cursor()
    query = ("SELECT ss.teacher_subject_id, ss.teacher_id, ss.subject_id, "
             "st.first_name, st.last_name "
             "FROM grading_system.teacher_subject ss "
             "JOIN grading_system.teachers st ON ss.teacher_id = st.teacher_id "
             "WHERE ss.subject_id = %s;")

    cursor.execute(query, (subject_id,))

    response = []

    for (teacher_subject_id, teacher_id, subject_id, first_name, last_name) in cursor:
        response.append({
            "teacher_subject_id": teacher_subject_id,
            "teacher_id": teacher_id,
            "subject_id": subject_id,
            "first_name": first_name,
            "last_name": last_name
        })

    print(response)
    return response


# INSERT function to enroll a teacher in a subject
def enroll_teacher_in_subject(connection, teacher_id, subject_id):

    cursor = connection.cursor()
    query = ("INSERT INTO grading_system.teacher_subject (teacher_id, subject_id) "
             "VALUES (%s, %s)")
    data = (teacher_id, subject_id)

    cursor.execute(query, data)
    connection.commit()


# DELETE function to remove a teacher from a subject
def delete_teacher_subject(connection, teacher_subject_id):

    cursor = connection.cursor()
    query = "DELETE FROM grading_system.teacher_subject WHERE teacher_subject_id = %s"
    cursor.execute(query, (teacher_subject_id,))
    connection.commit()


if __name__ == "__main__":
    connection = get_sql_connection()
    print(get_subjects_for_teacher(connection, 1))