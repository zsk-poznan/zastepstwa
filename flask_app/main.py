from flask import Flask, escape, request, render_template
import get_data

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/zastepstwa")
def zastepstwa():
    teachers = get_data.main()
    return render_template("z.html", teachers=teachers)


@app.route("/zastepstwa-pelne")
def zastepstwa_original():
    teachers = get_data.main()
    return render_template("z-pelne.html", teachers=teachers, i=0, len=len)


@app.route("/nauczyciel", methods=["GET"])
def nauczyciel():
    teachers = get_data.main()
    teacher = request.args.get("name")
    return render_template(
        "nauczyciel.html", teachers=teachers, teacher=teacher, len=len, i=0
    )


@app.route("/komunikaty")
def komunikaty():
    return render_template("komunikaty.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
