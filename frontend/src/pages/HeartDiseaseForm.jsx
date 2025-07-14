import { useState } from "react";

const HeartDiseaseForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: ""
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const numericData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [key, parseFloat(value)])
      );

      const response = await fetch("http://localhost:5000/predict-heart-disease", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(numericData),
      });

      if (!response.ok) throw new Error("Failed to fetch prediction");

      const result = await response.json();
      setPrediction(result.prediction);
    } catch (error) {
      console.error("Error:", error);
      setPrediction("Error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Heart Disease Predictor</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Age */}
        <div className="flex flex-col">
          <label htmlFor="age" className="mb-1 font-medium text-gray-700">Age</label>
          <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required className="p-2 border border-gray-300 rounded" />
        </div>

        {/* Sex */}
        <div className="flex flex-col">
          <label htmlFor="sex" className="mb-1 font-medium text-gray-700">Sex</label>
          <select name="sex" id="sex" value={formData.sex} onChange={handleChange} required className="p-2 border border-gray-300 rounded">
            <option value="">Select Sex</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>

        {/* Chest Pain Type */}
        <div className="flex flex-col">
          <label htmlFor="cp" className="mb-1 font-medium text-gray-700">Chest Pain Type</label>
          <select name="cp" id="cp" value={formData.cp} onChange={handleChange} required className="p-2 border border-gray-300 rounded">
            <option value="">Select Type</option>
            <option value="0">Typical Angina</option>
            <option value="1">Atypical Angina</option>
            <option value="2">Non-anginal Pain</option>
            <option value="3">Asymptomatic</option>
          </select>
        </div>

        {/* Resting BP */}
        <div className="flex flex-col">
          <label htmlFor="trestbps" className="mb-1 font-medium text-gray-700">Resting Blood Pressure</label>
          <input type="number" name="trestbps" id="trestbps" value={formData.trestbps} onChange={handleChange} required className="p-2 border border-gray-300 rounded" />
        </div>

        {/* Cholesterol */}
        <div className="flex flex-col">
          <label htmlFor="chol" className="mb-1 font-medium text-gray-700">Cholesterol</label>
          <input type="number" name="chol" id="chol" value={formData.chol} onChange={handleChange} required className="p-2 border border-gray-300 rounded" />
        </div>

        {/* Fasting Blood Sugar */}
        <div className="flex flex-col">
          <label htmlFor="fbs" className="mb-1 font-medium text-gray-700">Fasting Blood Sugar &gt; 120?</label>
          <select name="fbs" id="fbs" value={formData.fbs} onChange={handleChange} required className="p-2 border border-gray-300 rounded">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        {/* Rest ECG */}
        <div className="flex flex-col">
          <label htmlFor="restecg" className="mb-1 font-medium text-gray-700">Resting ECG Results</label>
          <select name="restecg" id="restecg" value={formData.restecg} onChange={handleChange} required className="p-2 border border-gray-300 rounded">
            <option value="">Select</option>
            <option value="0">Normal</option>
            <option value="1">ST-T Abnormality</option>
            <option value="2">LV Hypertrophy</option>
          </select>
        </div>

        {/* Max Heart Rate */}
        <div className="flex flex-col">
          <label htmlFor="thalach" className="mb-1 font-medium text-gray-700">Max Heart Rate Achieved</label>
          <input type="number" name="thalach" id="thalach" value={formData.thalach} onChange={handleChange} required className="p-2 border border-gray-300 rounded" />
        </div>

        {/* Exercise Induced Angina */}
        <div className="flex flex-col">
          <label htmlFor="exang" className="mb-1 font-medium text-gray-700">Exercise Induced Angina</label>
          <select name="exang" id="exang" value={formData.exang} onChange={handleChange} required className="p-2 border border-gray-300 rounded">
            <option value="">Select</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>

        {/* ST Depression */}
        <div className="flex flex-col">
          <label htmlFor="oldpeak" className="mb-1 font-medium text-gray-700">ST Depression</label>
          <input type="number" name="oldpeak" id="oldpeak" step="any" value={formData.oldpeak} onChange={handleChange} required className="p-2 border border-gray-300 rounded" />
        </div>

        {/* Slope */}
        <div className="flex flex-col">
          <label htmlFor="slope" className="mb-1 font-medium text-gray-700">Slope of the Peak</label>
          <select name="slope" id="slope" value={formData.slope} onChange={handleChange} required className="p-2 border border-gray-300 rounded">
            <option value="">Select</option>
            <option value="0">Upsloping</option>
            <option value="1">Flat</option>
            <option value="2">Downsloping</option>
          </select>
        </div>

        {/* Major Vessels */}
        <div className="flex flex-col">
          <label htmlFor="ca" className="mb-1 font-medium text-gray-700">Major Vessels (0–3)</label>
          <input type="number" name="ca" id="ca" value={formData.ca} onChange={handleChange} required className="p-2 border border-gray-300 rounded" />
        </div>

        {/* Thalassemia */}
        <div className="flex flex-col">
          <label htmlFor="thal" className="mb-1 font-medium text-gray-700">Thalassemia</label>
          <select name="thal" id="thal" value={formData.thal} onChange={handleChange} required className="p-2 border border-gray-300 rounded">
            <option value="">Select</option>
            <option value="1">Normal</option>
            <option value="2">Fixed Defect</option>
            <option value="3">Reversible Defect</option>
          </select>
        </div>
      </form>

      <div className="mt-6 text-center">
        <button type="submit" onClick={handleSubmit} disabled={loading} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {loading ? "Predicting..." : "Predict"}
        </button>
      </div>

      {prediction !== null && (
        <div className="mt-6 text-center text-lg font-medium">
          {typeof prediction === "string" ? (
            prediction
          ) : prediction === 1 ? (
            <>
              <p className="text-red-600 font-semibold">⚠️ You HAVE a Heart Disease</p>
              <div className="mt-4">
  <button
    className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    onClick={() => window.location.href = "/doctors/Cardiologist"}
  >
    Show Recommended Doctors
  </button>
</div>
            </>
          ) : (
            <p className="text-green-600">✅ You do NOT have a Heart Disease</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HeartDiseaseForm;