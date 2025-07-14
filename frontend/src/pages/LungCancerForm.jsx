import { useState } from "react";

const LungCancerForm = () => {
  const [formData, setFormData] = useState({
    AGE: "",
    SMOKING: "",
    YELLOW_FINGERS: "",
    ANXIETY: "",
    PEER_PRESSURE: "",
    "CHRONIC DISEASE": "",
    FATIGUE: "",
    ALLERGY: "",
    WHEEZING: "",
    "ALCOHOL CONSUMING": "",
    COUGHING: "",
    "SHORTNESS OF BREATH": "",
    "SWALLOWING DIFFICULTY": "",
    "CHEST PAIN": "",
    GENDER_M: "", // 1 for Male, 0 for Female
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

      const response = await fetch("http://localhost:5000/predict-lung-cancer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(numericData),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction");
      }

      const result = await response.json();
      setPrediction(result.prediction);
    } catch (error) {
      console.error("Error:", error);
      setPrediction("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const yesNoDropdown = (name, label) => (
    <div className="flex flex-col">
      <label>{label}</label>
      <select name={name} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
    </div>
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lung Cancer Prediction</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="number"
          name="AGE"
          placeholder="Age"
          onChange={handleChange}
          required
          className="p-2 border"
        />

        {yesNoDropdown("SMOKING", "Smoking")}
        {yesNoDropdown("YELLOW_FINGERS", "Yellow Fingers")}
        {yesNoDropdown("ANXIETY", "Anxiety")}
        {yesNoDropdown("PEER_PRESSURE", "Peer Pressure")}
        {yesNoDropdown("CHRONIC DISEASE", "Chronic Disease")}
        {yesNoDropdown("FATIGUE", "Fatigue")}
        {yesNoDropdown("ALLERGY", "Allergy")}
        {yesNoDropdown("WHEEZING", "Wheezing")}
        {yesNoDropdown("ALCOHOL CONSUMING", "Alcohol Consuming")}
        {yesNoDropdown("COUGHING", "Coughing")}
        {yesNoDropdown("SHORTNESS OF BREATH", "Shortness of Breath")}
        {yesNoDropdown("SWALLOWING DIFFICULTY", "Swallowing Difficulty")}
        {yesNoDropdown("CHEST PAIN", "Chest Pain")}

        <div className="flex flex-col">
          <label>Gender</label>
          <select name="GENDER_M" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </div>

        <button
          type="submit"
          className="p-2 bg-red-600 text-white font-semibold mt-4"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>

      {prediction !== null && (
        <p className="mt-4 text-lg font-medium">
          {typeof prediction === "string"
            ? prediction
            : prediction === 1
            ? "⚠️ You HAVE a risk of Lung Cancer"
            : "✅ You do NOT have a risk of Lung Cancer"}
        </p>
      )}
    </div>
  );
};

export default LungCancerForm;