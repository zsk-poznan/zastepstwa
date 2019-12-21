from flask import Flask, jsonify, make_response
import get_data

app = Flask(__name__)


@app.route("/api/", methods=["GET"])
def get_all():
    teachers = get_data.main()
    return jsonify({'data': teachers})

@app.route("/api/<string:name>", methods=["GET"])
def get_by_teacher(name):
    teachers = get_data.main()
    teacher = teachers.get(name)
    return jsonify({'data': teacher})

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
