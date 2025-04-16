import React from "react";
import aboutComp from "../assets/aboutComp.jpeg";

const AboutCompo = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-10  md:border-4 md:border-gray-500 rounded-lgb bg-white shadow-xl shadow-blue-400 ">
      <div className="lg:w-1/2">
        <h3 className="text-red-600 font-semibold text-lg">About Us</h3>
        <h1 className="text-4xl font-bold mt-2 text-gray-900">
          Welcome To Rental<span className="text-red-700">X</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Since 1992 we have not only committed ourselves to delivering
          exceptional repair and maintenance service to worldwide automotive
          owners.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center space-x-2">
            <i className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-square"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </i>
            <span className=" text-gray-600">We are a trusted name</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-square"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </i>
            <span className=" text-gray-600">
              Have a larger stock of vehicles
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-square"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </i>
            <span className=" text-gray-600">We deal in all brands</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check-square"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
            </i>
            <span className=" text-gray-600">
              We are at worldwide locations
            </span>
          </div>
        </div>

        <div className="mt-8 flex items-center space-x-4">
          <div className="border-l-4 border-red-700 pl-4">
            <h3 className="text-xl font-bold text-red-700">Robertho Garcia</h3>
            <p className="text-gray-500">President</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        <img src={aboutComp} alt="Car Image" className="w-full" />
      </div>
    </div>
  );
};

export default AboutCompo;
