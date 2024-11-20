import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { input } = useSelector((store) => store.user);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        {/* Image Section */}
        <img
          className="w-full md:w-1/3 object-cover"
          src="../../card.avif"
          alt="Healthcare"
        />
        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Efficient Care Begins Here
          </h2>
          {/* Greeting */}
          <h6 className="text-lg font-semibold text-gray-800 mb-2">
            Hello, {input?.Name || "Guest"}!
          </h6>
          <p className="text-gray-700 mb-4">
            We have successfully received your report. Our team will review it
            and contact you shortly with further updates. Thank you for trusting us with your healthcare needs!
          </p>
          {/* User Info */}
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-800 font-medium mb-1">
              <span className="font-semibold">Name:</span> {input?.Name || "N/A"}
            </p>
            <p className="text-gray-800 font-medium">
              <span className="font-semibold">Age:</span> {input?.Age || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
