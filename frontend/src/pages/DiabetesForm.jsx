import { useState } from "react";

const DiabetesForm = () => {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: ""
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value ? parseFloat(value) : ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict-diabetes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Prediction request failed.");

      const result = await response.json();
      setPrediction(result.prediction);
    } catch (err) {
      console.error("Prediction Error:", err);
      setPrediction("Error fetching prediction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Diabetes Prediction</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: "Pregnancies", name: "Pregnancies" },
          { label: "Glucose Level", name: "Glucose" },
          { label: "Blood Pressure (mm Hg)", name: "BloodPressure" },
          { label: "Skin Thickness (mm)", name: "SkinThickness" },
          { label: "Insulin Level", name: "Insulin" },
          { label: "BMI (Body Mass Index)", name: "BMI", step: "0.1" },
          { label: "Diabetes Pedigree Function", name: "DiabetesPedigreeFunction", step: "0.01" },
          { label: "Age", name: "Age" }
        ].map((field) => (
          <div key={field.name} className="flex flex-col">
            <label htmlFor={field.name} className="mb-1 font-medium text-gray-700">{field.label}</label>
            <input
              type="number"
              id={field.name}
              name={field.name}
              step={field.step || "1"}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
      </form>

      <div className="mt-6 text-center">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </div>

      {prediction !== null && (
        <div className="mt-6 text-center text-lg font-medium">
          {typeof prediction === "string" ? (
            prediction
          ) : prediction === 1 ? (
            <>
              <p className="text-red-600 font-semibold">⚠️ You HAVE Diabetes</p>
              <div className="mt-4">
  <button
    className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    onClick={() => window.location.href = "/doctors/Diabetologist"}
  >
    Show Recommended Doctors
  </button>
</div>
            </>
          ) : (
            <p className="text-green-600">✅ You do NOT have Diabetes</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DiabetesForm;