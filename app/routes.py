from flask import render_template, redirect, url_for, request
import os
from app import app

APP_ROOT = os.path.dirname(os.path.abspath(__file__))

path = ''

@app.route('/', methods=['GET', 'POST'])
def index():
    user = {'username': 'Yauvan', 'path': path}
    return render_template('index.html', title='Tensorflow Image Classifier', user=user)

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    target = os.path.join(APP_ROOT, 'static/')

    if not os.path.isdir(target):
        os.mkdir(target)

    for file in request.files.getlist('image'):
        print(file)
        filename = file.filename
        destination = '/'.join([target, filename])
        print(destination)
        file.save(destination)
        path = filename

    return filename


if __name__ == '__main__':
     app.run(port=5000, debug=True)
