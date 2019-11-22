from flask import Flask, escape, request, render_template
import get_data

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/zastepstwa')
def zastepstwa():
    teachers = get_data.main()
    return render_template("zastepstwa.html", teachers=teachers)

@app.route('/nauczyciel', methods=['GET'])
def nauczyciel():
    teachers = get_data.main()
    teacher = request.args.get("name")
    return render_template("nauczyciel.html", teachers=teachers, teacher=teacher, len=len, i=0)

@app.route('/komunikaty')
def komunikaty():
    return render_template("komunikaty.html")