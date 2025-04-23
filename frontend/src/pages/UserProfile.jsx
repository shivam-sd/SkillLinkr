import React from "react";
import profilelogo from "../assets/profilelogo.jpg";
import { Link , useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";

const UserProfile = () => {
  const user = useSelector((state) => state?.user?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutUser = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_USERS_BASE_URL}users/logout`, {
        withCredentials: true,
      });

      localStorage.removeItem("token");
      toast.success("Logged out successfully");
      dispatch(setUserDetails(null));
      navigate("/login")
      // console.log("Logout successful:", response.data);
    } catch (err) {
      // console.error("Logout error:", err);
      toast.error(err?.response?.data?.error || "Logout failed");
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  

  return (
    <div>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-[#6597c8] min-h-screen p-5"
      >
        <div className="max-w-6xl mx-auto bg-[#2d67be] p-8 rounded-xl shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section */}
            <div className="md:w-1/3 text-center bg-gradient-to-b from-[#e0eafc] to-[#cfdef3] p-6 rounded-xl shadow-lg">
              <img
                src={profilelogo}
                alt="User Img"
                className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 mb-4"
              />
              <h2 className="text-xl font-semibold">{user?.name || "User"}</h2>
              <p className="text-sm text-gray-700">Full Stack Developer</p>
              <p className="text-yellow-500 text-lg mt-1">★ 8.5 / 10</p>

              <div className="text-left mt-6 bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-bold mb-2">About Me</h4>
                <p className="text-sm">
                  {
                    !user?.bio || user?.bio?.trim("") == "" ? <>
                      I'm skilled in Web Design, Website Markup, and building sleek One Page websites.
                    I focus on clean, responsive designs that are both visually appealing and easy to use.
                    </> : user?.bio
                  }
               
                </p>
              </div>

              <Link
                to="/user-list"
                className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 w-full text-center"
              >
                View Others Profile
              </Link>

              <button
                onClick={handleLogoutUser}
                className="mt-6 w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition shadow-md"
              >
                Logout
              </button>
            </div>

            {/* Right Section */}
            <div className="md:w-2/3 space-y-6">
              {/* User Info */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4">Your Details</h3>
                <p><b>Full Name:</b> {user?.name || "Not provided"}</p>
                <p><b>Address:</b> {user?.address || "Not provided"}</p>
                <div className="mt-4">
                  <Link
                  to={`/edit-profile/${user?._id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                    Edit Profile
                  </Link>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-white p-6 rounded-xl flex-1 shadow-md hover:scale-105 transition">
                  <h4 className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 text-center">
                    Offered Skills
                  </h4>
                  <ul className="space-y-2">
                    <li className="bg-gray-100 px-3 py-1 rounded-md">{user?.skillyouoffre || "Not specified"}</li>
                    {/* <li className="bg-gray-100 px-3 py-1 rounded-md">Website Markup</li>
                    <li className="bg-gray-100 px-3 py-1 rounded-md">One Page</li> */}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl flex-1 shadow-md hover:scale-105 transition">
                  <h4 className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 text-center">
                    Wanted Skills
                  </h4>
                  <ul className="space-y-2">
                    <li className="bg-gray-100 px-3 py-1 rounded-md">{user?.skillyouwant || "Not specified"}</li>
                    {/* <li className="bg-gray-100 px-3 py-1 rounded-md">Backend API</li> */}
                  </ul>
                </div>
              </div>

              {/* History & Reviews */}
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-white p-6 rounded-xl flex-1 shadow-md hover:scale-105 transition">
                  <h4 className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 text-center">
                    Swap History
                  </h4>
                  <ul className="space-y-2">
                    <li className="bg-gray-100 px-3 py-1 rounded-md">Frontend Swap with Rohit (Apr 2024)</li>
                    <li className="bg-gray-100 px-3 py-1 rounded-md">Database Access with Simran (Feb 2024)</li>
                    <li className="bg-gray-100 px-3 py-1 rounded-md">Landing Page Project with Aman (Jan 2024)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl flex-1 shadow-md hover:scale-105 transition">
                  <h4 className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 text-center">
                    Reviews
                  </h4>
                  <ul className="space-y-2">
                    <li className="bg-gray-100 px-3 py-1 rounded-md">⭐⭐⭐⭐ - "Very cooperative and skilled!" - Aditi</li>
                    <li className="bg-gray-100 px-3 py-1 rounded-md">⭐⭐⭐ - "Good but response time could improve." - Rahul</li>
                    <li className="bg-gray-100 px-3 py-1 rounded-md">⭐⭐⭐⭐⭐ - "Perfect trade, great guy!" - Meena</li>
                  </ul>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default UserProfile;
