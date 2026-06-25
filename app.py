from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="../frontend")

@app.route("/")
def home():
    return send_from_directory("../frontend", "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory("../frontend", path)

def create_app():
    return app

if __name__ == "__main__":
    app.run(debug=True)