import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { input } = useSelector((store) => store.user);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <motion.img
          className="w-full md:w-1/3 object-cover"
          src="../../card.avif"
          alt="Healthcare"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between">
          {/* Title */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Efficient Care Begins Here
          </motion.h2>
          {/* Greeting */}
          <motion.h6
            className="text-lg font-semibold text-gray-800 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hello, {input?.Name || "Guest"}!
          </motion.h6>
          <motion.p
            className="text-gray-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            We have successfully received your report. Our team will review it
            and contact you shortly with further updates. Thank you for trusting us with your healthcare needs!
          </motion.p>
          {/* User Info */}
          <motion.div
            className="bg-gray-50 p-4 rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-800 font-medium mb-1">
              <span className="font-semibold">Name:</span> {input?.Name || "N/A"}
            </p>
            <p className="text-gray-800 font-medium">
              <span className="font-semibold">Age:</span> {input?.Age || "N/A"}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
