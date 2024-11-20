import React from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion

const About = () => {
  return (
    <>
      <motion.section
        className="py-24 relative"
        initial={{ opacity: 0 }} // Start from opacity 0
        animate={{ opacity: 1 }} // Animate to opacity 1
        transition={{ duration: 1 }} // 1 second duration for opacity transition
      >
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            {/* Image Section */}
            <motion.div
              className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last"
              initial={{ x: -100 }} // Start from the left
              animate={{ x: 0 }} // Animate to the original position
              transition={{ duration: 1 }} // 1 second duration for horizontal animation
            >
              <motion.div
                className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
                initial={{ opacity: 0 }} // Start from opacity 0
                animate={{ opacity: 1 }} // Animate to opacity 1
                transition={{ duration: 1, delay: 0.2 }} // Slight delay for image
              >
                <img
                  className="rounded-xl object-cover"
                  src="https://media.post.rvohealth.io/wp-content/uploads/2020/07/doctor-doing-a-medical-exam-732x549-thumbnail.jpg"
                  alt="about Us image"
                />
              </motion.div>
              <motion.img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
                alt="about Us image"
                initial={{ opacity: 0 }} // Start from opacity 0
                animate={{ opacity: 1 }} // Animate to opacity 1
                transition={{ duration: 1, delay: 0.5 }} // Slight delay for image
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
              initial={{ opacity: 0 }} // Start from opacity 0
              animate={{ opacity: 1 }} // Animate to opacity 1
              transition={{ duration: 1, delay: 0.5 }} // Slight delay for text
            >
              <motion.div
                className="w-full flex-col justify-center items-start gap-8 flex"
                initial={{ y: 50 }} // Start from below (y-axis)
                animate={{ y: 0 }} // Animate to the original position
                transition={{ duration: 0.8 }} // Animation duration for vertical movement
              >
                <motion.div
                  className="w-full flex-col justify-start lg:items-start items-center gap-3 flex"
                  initial={{ opacity: 0 }} // Start from opacity 0
                  animate={{ opacity: 1 }} // Animate to opacity 1
                  transition={{ duration: 1, delay: 0.6 }} // Slight delay for text
                >
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    “Your health is our priority. We are always here, dedicated to providing you with the best care, whenever you need us.”
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    "At [Hospital/Clinic Name], we’re dedicated to providing compassionate, personalized care. Our experienced doctors are always here to ensure your well-being with the highest quality treatment. From routine check-ups to specialized care, we’re committed to helping you live a healthier, happier life."
                  </p>
                </motion.div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <motion.div
                    className="flex-col justify-start items-start inline-flex"
                    initial={{ scale: 0.8 }} // Start from a smaller scale
                    animate={{ scale: 1 }} // Animate to the original scale
                    transition={{ duration: 0.5, delay: 0.8 }} // Slight delay for scaling effect
                  >
                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">15+</h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                  </motion.div>
                  <motion.div
                    className="flex-col justify-start items-start inline-flex"
                    initial={{ scale: 0.8 }} // Start from a smaller scale
                    animate={{ scale: 1 }} // Animate to the original scale
                    transition={{ duration: 0.5, delay: 1 }} // Slight delay for scaling effect
                  >
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">1000+</h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Successful Operations</h6>
                  </motion.div>
                  <motion.div
                    className="flex-col justify-start items-start inline-flex"
                    initial={{ scale: 0.8 }} // Start from a smaller scale
                    animate={{ scale: 1 }} // Animate to the original scale
                    transition={{ duration: 0.5, delay: 1.2 }} // Slight delay for scaling effect
                  >
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">10000+</h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Patients</h6>
                  </motion.div>
                </div>
              </motion.div>

              <motion.button
                className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                initial={{ y: 20 }} // Start from below
                animate={{ y: 0 }} // Animate to the original position
                transition={{ duration: 0.6, delay: 1.4 }} // Slight delay for button animation
              >
                <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default About;
