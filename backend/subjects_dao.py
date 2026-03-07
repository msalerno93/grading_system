from sql_conn import get_sql_connection

# GET function to retrieve all teachers from the database
def get_all_subjects(connection):

    cursor = connection.cursor()
    #SQL query to select all subjects from the database
    query = ("SELECT * FROM grading_system.subjects;")
    cursor.execute(query)

    response = []

    for (subject_id, subject_name, description) in cursor:
        response.append({
            "subject_id": subject_id,
            "subject_name": subject_name,
            "description": description
        })
    print(response)
    return response

#UPDATE function to add a new subject to the database
def add_subject(connection, subject):
    cursor = connection.cursor()
    #SQL query to insert a new subject information into the database
    query = ("INSERT INTO grading_system.subjects (subject_name, description) "
            "VALUES (%s, %s)")
    data = (subject['subject_name'], subject['description'])
    cursor.execute(query, data)
    connection.commit()

#DELETE function to remove a subject from the database using their subject_id
def delete_subject(connection, subject_id):
    cursor = connection.cursor()
    #SQL query to delete a subject from the database based on their subject_id
    query = "DELETE FROM grading_system.subjects WHERE subject_id = %s"
    cursor.execute(query, (subject_id,))
    connection.commit()

#UPDATE function to update a subject's information in the database using their subject_id
def update_subject(connection, subject_id, subject):
    cursor = connection.cursor()
    #SQL query to update a subject's information in the database based on their subject_id
    query = ("UPDATE grading_system.subjects "
            "SET subject_name = %s, description = %s "
            "WHERE subject_id = %s")
    data = (subject['subject_name'], subject['description'], subject_id)
    cursor.execute(query, data)
    connection.commit()

    
if __name__ == "__main__":
    connection = get_sql_connection()
    print(delete_subject(connection, 4))