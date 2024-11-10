from flask import Flask, request, jsonify, Response
import requests
import os

app = Flask(__name__)


@app.route('/attendance', methods=['POST'])
def takeAttendance():
    data = request.get_json()
    # Request body...

    # Logic...
    res = "res..."

    return Response(res, status=200, mimetype='application/json')

@app.route('/StudentImages', methods=['POST'])
def StudentImages():
    # Logic...
    return None