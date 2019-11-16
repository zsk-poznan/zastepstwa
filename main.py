from flask import Flask, escape, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/zastepstwa')
def zastepstwa():
    teachers = [
        {
            'lesson': 'Marek Nowak',
            'teacher': 'EDB'
        },
        {
            'lesson': 'Marek Nowak',
            'teacher': 'EDB'
        },
        {
            'lesson': 'Marek Nowak',
            'teacher': 'EDB'
        }
        ]   
    return render_template("zastepstwa.html", teachers=teachers)

@app.route('/komunikaty')
def komunikaty():
    return render_template("komunikaty.html")