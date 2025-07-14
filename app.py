from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
import logging

app = Flask(__name__)
CORS(app, resources={
    r"/predict-diabetes": {"origins": "*"},
    r"/predict-heart-disease": {"origins": "*"},
    r"/predict-lung-cancer": {"origins": "*"}
})

# Logging setup
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# ✅ Load models and scalers
try:
    diabetes_model = pickle.load(open("diabetes_rf_model.pkl", "rb"))
    diabetes_scaler = pickle.load(open("scaler.pkl", "rb"))

    heart_model = pickle.load(open("heart_disease_rf_model.pkl", "rb"))
    heart_scaler = pickle.load(open("scaler_heart.pkl", "rb"))

    lung_model = pickle.load(open("lung_cancer_lr_model.pkl", "rb"))
    lung_scaler = pickle.load(open("scaler_lung.pkl", "rb"))

    logger.info("All models and scalers loaded successfully ✅")
except Exception as e:
    logger.error("Error loading model or scaler: %s", str(e))
    diabetes_model = heart_model = lung_model = None
    diabetes_scaler = heart_scaler = lung_scaler = None

# ✅ Predict Diabetes
@app.route('/predict-diabetes', methods=['POST'])
def predict_diabetes():
    try:
        data = request.get_json()
        logger.info("Received data for diabetes: %s", data)

        features = [
            float(data['Pregnancies']), float(data['Glucose']), float(data['BloodPressure']),
            float(data['SkinThickness']), float(data['Insulin']), float(data['BMI']),
            float(data['DiabetesPedigreeFunction']), float(data['Age'])
        ]
        input_data = np.array(features).reshape(1, -1)

        if diabetes_scaler:
            input_scaled = diabetes_scaler.transform(input_data)
        else:
            return jsonify({"error": "Scaler for diabetes not loaded"}), 500

        if diabetes_model:
            prediction = diabetes_model.predict(input_scaled)
            return jsonify({"prediction": int(prediction[0])})
        else:
            return jsonify({"error": "Diabetes model not loaded"}), 500

    except Exception as e:
        logger.error("Error in diabetes prediction: %s", str(e))
        return jsonify({"error": str(e)}), 500

# ✅ Predict Heart Disease
@app.route('/predict-heart-disease', methods=['POST'])
def predict_heart_disease():
    try:
        data = request.get_json()
        logger.info("Received data for heart disease: %s", data)

        features = [
            float(data['age']), float(data['sex']), float(data['cp']),
            float(data['trestbps']), float(data['chol']), float(data['fbs']),
            float(data['restecg']), float(data['thalach']), float(data['exang']),
            float(data['oldpeak']), float(data['slope']), float(data['ca']),
            float(data['thal'])
        ]
        input_data = np.array(features).reshape(1, -1)

        if heart_scaler:
            input_scaled = heart_scaler.transform(input_data)
        else:
            return jsonify({"error": "Scaler for heart disease not loaded"}), 500

        if heart_model:
            prediction = heart_model.predict(input_scaled)
            return jsonify({"prediction": int(prediction[0])})
        else:
            return jsonify({"error": "Heart disease model not loaded"}), 500

    except Exception as e:
        logger.error("Error in heart disease prediction: %s", str(e))
        return jsonify({"error": str(e)}), 500

# ✅ Predict Lung Cancer
@app.route('/predict-lung-cancer', methods=['POST'])
def predict_lung_cancer():
    try:
        data = request.get_json()
        logger.info("Received data for lung cancer: %s", data)

        age = float(data["AGE"])
        smoking = float(data["SMOKING"])
        yellow_fingers = float(data["YELLOW_FINGERS"])
        anxiety = float(data["ANXIETY"])
        peer_pressure = float(data["PEER_PRESSURE"])
        chronic_disease = float(data["CHRONIC DISEASE"])
        fatigue = float(data["FATIGUE"])
        allergy = float(data["ALLERGY"])
        wheezing = float(data["WHEEZING"])
        alcohol = float(data["ALCOHOL CONSUMING"])
        coughing = float(data["COUGHING"])
        breath_short = float(data["SHORTNESS OF BREATH"])
        swallowing = float(data["SWALLOWING DIFFICULTY"])
        chest_pain = float(data["CHEST PAIN"])
        gender_m = float(data["GENDER_M"])

        # Feature Engineering
        age_squared = age ** 2
        age_cubed = age ** 3
        cumulative_risk = smoking + yellow_fingers + anxiety + peer_pressure + chronic_disease
        gender_m_smoking = gender_m * smoking
        alcohol_smoking_combo = alcohol * smoking

        age_young = 1 if age <= 30 else 0
        age_middle = 1 if 30 < age <= 60 else 0
        age_senior = 1 if age > 60 else 0

        features = [
            age, smoking, yellow_fingers, anxiety, peer_pressure,
            chronic_disease, fatigue, allergy, wheezing, alcohol,
            coughing, breath_short, swallowing, chest_pain,
            gender_m, gender_m_smoking, cumulative_risk,
            age_squared, age_cubed,
            age_middle, age_senior, age_young,
            alcohol_smoking_combo
        ]
        input_data = np.array(features).reshape(1, -1)

        if lung_scaler:
            input_scaled = lung_scaler.transform(input_data)
        else:
            return jsonify({"error": "Scaler for lung cancer not loaded"}), 500

        if lung_model:
            prediction = lung_model.predict(input_scaled)
            return jsonify({"prediction": int(prediction[0])})
        else:
            return jsonify({"error": "Lung cancer model not loaded"}), 500

    except Exception as e:
        logger.error("Error in lung cancer prediction: %s", str(e))
        return jsonify({"error": str(e)}), 500

# ✅ Start Server
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)