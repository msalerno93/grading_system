from flask import Flask, request, jsonify
from flask_cors import CORS
import teachers_dao as teachers_dao
import students_dao as students_dao
import subjects_dao as subjects_dao
from sql_conn import get_sql_connection

app = Flask(__name__)
CORS(app)

connection = get_sql_connection()

# TEACHERS ROUTES
@app.route('/teachers', methods=['GET'])
def get_teachers():
    return jsonify(teachers_dao.get_all_teachers(connection))

@app.route('/teachers/<int:teacher_id>', methods=['DELETE'])
def delete_teacher(teacher_id):
    teachers_dao.delete_teacher(connection, teacher_id)
    return jsonify({"success": True})

@app.route('/teachers/<int:teacher_id>', methods=['PUT'])
def update_teacher(teacher_id):
    teacher_data = request.get_json()
    teachers_dao.update_teacher(connection, teacher_id, teacher_data)
    return jsonify({"success": True})

@app.route('/teachers', methods=['POST'])
def add_teacher():
    teacher_data = request.get_json()
    teachers_dao.add_teacher(connection, teacher_data)
    return jsonify({"success": True})

#____________________________________________________________________

# STUDENTS ROUTES
@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students_dao.get_all_students(connection))

@app.route('/students/with-grades', methods=['GET'])
def get_students_with_grades():
    return jsonify(students_dao.get_all_students_with_grades(connection))

@app.route('/students/<int:student_id>', methods=['DELETE'])
def delete_student(student_id):
    students_dao.delete_student(connection, student_id)
    return jsonify({"success": True})

@app.route('/students/<int:student_id>', methods=['PUT'])
def update_student(student_id):
    student_data = request.get_json()
    students_dao.update_student(connection, student_id, student_data)
    return jsonify({"success": True})

@app.route('/students', methods=['POST'])
def add_student():
    student_data = request.get_json()
    students_dao.add_student(connection, student_data)
    return jsonify({"success": True})


#____________________________________________________________________

# SUBJECTS ROUTES

@app.route('/subjects', methods=['GET'])
def get_subjects():
    return jsonify(subjects_dao.get_all_subjects(connection))

@app.route('/subjects/<int:subject_id>', methods=['DELETE'])
def delete_subject(subject_id):
    subjects_dao.delete_subject(connection, subject_id)
    return jsonify({"success": True})

@app.route('/subjects/<int:subject_id>', methods=['PUT'])
def update_subject(subject_id):
    subject_data = request.get_json()
    subjects_dao.update_subject(connection, subject_id, subject_data)
    return jsonify({"success": True})

@app.route('/subjects', methods=['POST'])
def add_subject():
    subject_data = request.get_json()
    subjects_dao.add_subject(connection, subject_data)
    return jsonify({"success": True})

#____________________________________________________________________


# Grades


if __name__ == '__main__':
    print("Starting server...")
    app.run(port=5000, debug=True)