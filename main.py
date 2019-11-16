from flask import Flask, escape, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/zastepstwa')
def zastepstwa():
    teachers = [
        {
            'name': 'Marek Nowak',
            'lesson': 'EDB'
        },
        {
            'name': 'Norber Mocek',
            'lesson': 'Geografia'
        },
                {
            'name': 'XYZ',
            'lesson': 'WF'
        }
        ]   
    return render_template("zastepstwa.html", teachers=teachers)

@app.route('/komunikaty')
def komunikaty():
    return render_template("komunikaty.html")