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


def create_sub(sub: list) -> dict:
    """
    This function convert list to dict representing the substitution.
    """
    return {
        "lesson_id": sub[0],
        "teacher": sub[1],
        "group": sub[2],
        "lesson_name": sub[3],
        "classroom": sub[4],
        "notes": sub[5],
    }


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
        all_substitutions += sorted(teacher_subs, key=lambda sub: sub["lesson_id"])
    return jsonify({"data": all_substitutions})


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({"error": "Not found"}), 404)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
