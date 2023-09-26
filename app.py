from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient('mongodb://localhost:27017/')
db = client['livestream_app']
overlay_collection = db['overlays']

# Define your CRUD endpoints here (create, read, update, delete overlays)

if __name__ == '__main__':
    app.run(debug=True)
