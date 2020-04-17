from flask import *

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/aaaa', methods=["POST"])
def res_json():
    return jsonify(
        {
            "XXXXXXXX": "YYYYYYYYYYYYYYYYYYY"
        }
     )


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
