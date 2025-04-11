import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProductForm() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    localStorage.setItem("productName", productName);
    localStorage.setItem("description", description);
    navigate("/analyse"); // Navigate to analysis page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-[650px] h-[60%] p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-2xl  font-bold text-center text-blue-400 mb-4">AI Forecasting</h2>
        <input 
          type="text" 
          placeholder="Product Name" 
          value={productName} 
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mb-4"
        />
        <textarea 
          placeholder="Product Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white mb-4 h-24"
        ></textarea>
        <button 
          onClick={handleAnalyze}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Analyze
        </button>
      </div>
    </div>
  );
}
