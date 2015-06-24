from flask import Flask
app = Flask(__name__)

from behavior3 import view

if __name__ == "__main__":
    app.run(debug=True)