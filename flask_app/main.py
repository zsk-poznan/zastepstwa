from flask import Flask, jsonify, make_response
from flask_cors import CORS
import get_data

app = Flask(__name__)
CORS(app)

app.config["JSON_AS_ASCII"] = False


@app.route("/api/teacher", methods=["GET"])
def get_teachers():
    teachers = get_data.main()
    return jsonify({"data": list(teachers.keys())})


@app.route("/api/teacher/<string:name>", methods=["GET"])
def get_by_teacher(name):
    teachers = get_data.main()
    subs = teachers.get(name)
    substitutions_of_teacher = [
        {
            "lesson_id": sub[0],
            "teacher": sub[1],
            "group": sub[2],
            "lesson_name": sub[3],
            "classroom": sub[4],
            "notes": sub[5],
        }
        for sub in subs
    ]
    return jsonify({"data": substitutions_of_teacher})


@app.route("/api/teacher/all", methods=["GET"])
def get_all():
    teachers = get_data.main()
    return jsonify({"data": teachers})


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({"error": "Not found"}), 404)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
