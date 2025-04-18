import React from "react";
import {
  FaUserEdit,
  FaEye,
  FaBuilding,
  FaTrophy,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Image from "../assets/bgimage.webp";

// Background Image URL from Unsplash (replace with your own if needed)
const bgImage = Image;

const FreshGraduates = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Header />
      <motion.section
        className="w-full bg-gray-50 overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* 🔷 Background Image */}
        <div
          className="w-full h-[300px] md:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* 🔷 Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-10">
          {/* 🔹 Left Box */}
          <motion.div
            className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md font-bold font-Poppins"
            variants={fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900 mb-4">
              Kick-start your career with your dream company
            </h2>
            <p className="text-gray-700 mb-3">
              Transitioning from college to the professional world, many young
              people feel disoriented, confused, dissatisfied, and overwhelmed.
            </p>
            <p className="text-gray-700 mb-6">
              Skill Exchange helps talented and skilled fresh graduates build
              skill profiles and apply to drives from top recruiters. This helps
              in landing their dream job in line with their educational
              qualifications and core skill sets.
            </p>
            <button className="bg-blue-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-md text-sm font-semibold transition">
              Start Building Your Skill Profile
            </button>
          </motion.div>

          {/* 🔹 Right Box - Features */}
          <motion.div
            className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md space-y-4"
            variants={fadeIn}
          >
            <Feature
              icon={<FaUserEdit />}
              text="Create customized skill profile"
            />
            <Feature
              icon={<FaTrophy />}
              text="Showcase core skillset, assessment scores and other talent"
            />
            <Feature icon={<FaEye />} text="Be visible to top organisations" />
            <Feature
              icon={<FaBuilding />}
              text="Have a competitive edge over peers"
            />
            <Feature
              icon={<FaBriefcase />}
              text="Get access to multiple jobs from top employers"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        className="w-full overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Who Can Apply Section */}
        <section className="bg-cyan-100 py-12 px-4 text-center flex flex-col items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
            Who Can Apply
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                id: "01",
                text: "Individuals certified by XpertSwap ",
              },
              {
                id: "02",
                text: "Individuals pre-assessed by XpertSwap",
              },
              {
                id: "03",
                text: "Students who are about to take or have just taken the course-end examinations",
              },
              {
                id: "04",
                text: "Recent graduates with up to two years of experience",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                className="bg-gradient-to-b to-gray-400 from-blue-700 font-bold tracking-wider text-white rounded-md py-6 px-4 shadow-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold mb-2">{item.id}</h3>
                <p className="text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <Link
            to={"/register"}
            className="mt-10 bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-indigo-800 transition text-sm font-medium"
          >
            Register Now
          </Link>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-12 px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-blue-700 shadow-md text-white rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
            variants={fadeIn}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-1">
                Build your skill profile to land in your dream job.
              </h3>
              <p className="text-sm">
                We’ll be glad to have you with us, see you soon!
              </p>
            </div>
            <Link
              to={"/register"}
              className="bg-white text-indigo-900 px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
            >
              Register
            </Link>
          </motion.div>
        </section>
        <Footer />
      </motion.div>
    </>
  );
};

// 🔄 Feature Box Component
const Feature = ({ icon, text }) => (
  <div className="flex items-start space-x-3 text-gray-800 border-b border-gray-200 pb-2">
    <div className="text-indigo-900 text-lg">{icon}</div>
    <p className="text-sm sm:text-base font-Poppins font-bold">{text}</p>
  </div>
);

export default FreshGraduates;
