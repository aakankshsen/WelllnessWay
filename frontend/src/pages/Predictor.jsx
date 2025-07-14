import { useNavigate } from "react-router-dom";

const Predictor = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">
        Select a Disease Predictor
      </h2>

      <div className="flex gap-20">
        <button
          onClick={() => navigate("/predictor/heart-disease")}
          className="w-64 h-64 bg-red-600 text-white text-2xl font-semibold rounded-2xl shadow-lg hover:bg-red-700 transition-all"
        >
          Heart Disease
        </button>

        <button
          onClick={() => navigate("/predictor/diabetes")}
          className="w-64 h-64 bg-green-600 text-white text-2xl font-semibold rounded-2xl shadow-lg hover:bg-green-700 transition-all"
        >
          Diabetes
        </button>
      </div>
    </div>
  );
};

export default Predictor;