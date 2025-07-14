from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/chatbot", methods=["POST"])
def chatbot():
    data = request.get_json()
    message = data.get("message", "").lower()

    # Example logic — expand this based on actual symptoms
    if "fever" in message and "cough" in message:
        reply = "You might have a viral infection. Please rest, stay hydrated, and consult a doctor if symptoms worsen."
    elif "headache" in message:
        reply = "It could be due to stress or dehydration. Try resting and drinking water."
    elif "chest pain" in message:
        reply = "Chest pain can be serious. Please seek immediate medical attention."
    else:
        reply = "I'm not sure. Please describe your symptoms in more detail or consult a healthcare professional."

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)