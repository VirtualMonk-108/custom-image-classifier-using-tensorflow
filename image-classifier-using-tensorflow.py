from flask import Flask
app = Flask(__name__)

@app.route('/')
def image_classifier_using_tensorflow():
    return 'WEB APP'
