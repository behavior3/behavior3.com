import os
import json
import collections
from flask import abort
from flask import render_template
from flask import url_for
from flask import request
from flask import Response
from behavior3 import app

@app.route("/")
def home():
    return render_template('m_home.jinja')

@app.route("/editor")
def editor():
    return render_template('m_editor.jinja')

@app.route("/libraries")
def libraries():
    return render_template('m_libraries.jinja')

@app.route("/documentation")
def documentation():
    return render_template('m_documentation.jinja')

@app.route("/community")
def community():
    return render_template('m_community.jinja')

@app.route("/donation")
def donation():
    return render_template('m_donation.jinja')
