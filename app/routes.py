from flask import render_template
from app import app


@app.route('/', methods=['GET'])
def index():
    user = {'username': 'Yauvan'}
    return render_template('index.html', title='Tensorflow Image Classifier', user=user)
