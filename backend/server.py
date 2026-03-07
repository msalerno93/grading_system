from flask import Flask, request, jsonify
from flask_cors import CORS
import backend.teachers_dao as teachers_dao
from sql_conn import get_sql_connection

app = Flask(__name__)
CORS(app)

connection = get_sql_connection()