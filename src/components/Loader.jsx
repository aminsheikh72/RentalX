import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-t-red-500 border-l-transparent border-r-transparent border-b-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-4 border-b-red-500 border-l-transparent border-r-transparent border-t-transparent rounded-full animate-spin-reverse"></div>
        <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
