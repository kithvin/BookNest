import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind CSS Test Page
        </h1>
        <p className="text-gray-700 mb-6">
          If you’re seeing this layout styled properly, Tailwind CSS is working
          perfectly! 🎉
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">
          Test Button
        </button>
      </div>
    </div>
  );
};

export default App;
