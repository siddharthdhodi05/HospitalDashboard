import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { useDispatch } from 'react-redux';
import { setInput } from '../redux/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const report = () => {
    dispatch(setInput(null))
  }

  return (
    <>
      <motion.div 
        className="p-6 space-y-8"
        initial={{ opacity: 0 }}          // Initial opacity set to 0
        animate={{ opacity: 1 }}          // Animating opacity to 1
        transition={{ duration: 1 }}      // Animation duration
      >
        {/* Header Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ y: -50 }}            
          animate={{ y: 0 }}              
          transition={{ duration: 0.8 }}  
        >
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Welcome to HMS</h1>
          <button 
            onClick={report} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit us Your report
          </button>
        </motion.div>

        
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }} 
        >
          {/* Image */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ x: -100 }}         
            animate={{ x: 0 }}            
            transition={{ duration: 1 }}  
          >
            <img
              src="../../public/9.jpg" 
              alt="Hospital Overview"
              className="rounded-full shadow-md w-full"
            />
          </motion.div>

          
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center flex-col"
            initial={{ x: 100 }}         
            animate={{ x: 0 }}           
            transition={{ duration: 1 }} 
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
              "Your health is our priority. Trusted care for every generation."
            </h2>
            <div className="py-6">
              <p className="px-2 text-xl text-justify">
                At XYZ Hospital, we are committed to providing exceptional healthcare with compassion and expertise. Our dedicated team of doctors and nurses ensures that every patient receives personalized care in a comfortable and safe environment.
              </p>
              <p className="px-2 text-xl text-justify">
                From routine checkups to specialized treatments, your health is our top priority. Experience care driven by professionalism and a genuine concern for your well-being. Let us help you on your journey to better health.
              </p>
            </div>
          </motion.div>
        </motion.div>

        
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }} 
        >
          {[
            { title: "Total Patients", value: "1,234" },
            { title: "Appointments Today", value: "42" },
            { title: "Available Beds", value: "15" },
            { title: "Pending Reports", value: "7" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} 
            >
              <h3 className="text-sm font-medium mb-2">{stat.title}</h3>
              <div className="text-2xl font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        
        <motion.div
          className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="flex flex-col gap-4">
            {[
              { label: "Schedule Appointment", link: "/appointments/new" },
              { label: "Admit Patient", link: "/patients/admit" },
              { label: "Check Inventory", link: "/inventory/check" },
              { label: "Generate Report", link: "/reports/generate" },
            ].map((action, index) => (
              <motion.a
                key={index}
                href={action.link}
                className="block px-4 py-2 text-center bg-blue-600 text-white rounded hover:bg-blue-700"
                initial={{ y: -10 }}            
                animate={{ y: 0 }}              
                transition={{ duration: 0.3, delay: index * 0.2 }} 
              >
                {action.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
