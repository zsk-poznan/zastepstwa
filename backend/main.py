from flask import Flask, jsonify, make_response
from flask_cors import CORS

import get_data
from utils import filter_dismissed_lessons, create_sub

app = Flask(__name__)
CORS(app)

app.config["JSON_AS_ASCII"] = False


@app.route("/api/teacher", methods=["GET"])
def get_teachers():
    teachers = list(get_data.main().keys())
    filtered_teachers = filter_dismissed_lessons(teachers)
    return jsonify({"data": filtered_teachers})


@app.route("/api/teacher/<string:name>", methods=["GET"])
def get_by_teacher(name):
    teachers = get_data.main()
    subs = teachers.get(name)
    substitutions_of_teacher = [create_sub(sub) for sub in subs]
    return jsonify({"data": substitutions_of_teacher})


@app.route("/api/teacher/all", methods=["GET"])
def get_all():
    substitutions = get_data.main()
    all_substitutions = []
    for teacher in substitutions.keys():
        teacher_subs = [
            {**create_sub(sub), "substitute_teacher": teacher}
            for sub in substitutions[teacher]
        ]
        all_substitutions += sorted(teacher_subs,
                                    key=lambda sub: sub["lesson_id"])
    return jsonify({"data": all_substitutions})


@app.route("/api/date", methods=["GET"])
def get_date():
    date = get_data.date()
    return jsonify({"date": date})


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({"error": "Not found"}), 404)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
