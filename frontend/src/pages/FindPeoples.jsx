import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiLinksLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const FindPeoples = () => {
  const [showBackButton, setShowBackButton] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();

  const handleDotForBack = () => {
    setShowBackButton(!showBackButton);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_USERS_BASE_URL}all/users`);
        setAllUsers(response?.data?.allUsers || []);
      } catch (err) {
        toast.error("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      setFilteredUsers([]);
      return;
    }

    const result = allUsers.filter((user) => {
      const nameMatch = user?.name?.toLowerCase().includes(searchTerm.toLowerCase());
      const skillOfferMatch = user?.skillyouoffre?.toLowerCase().includes(searchTerm.toLowerCase());
      const skillWantMatch = user?.skillyouwant?.toLowerCase().includes(searchTerm.toLowerCase());
      return nameMatch || skillOfferMatch || skillWantMatch;
    });

    setFilteredUsers(result);
  }, [searchTerm, allUsers]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full min-h-screen bg-gray-100 flex items-center justify-center lg:p-10"
      >
        <div className="w-full h-screen max-w-6xl bg-gradient-to-t from-gray-100 to-blue-700 lg:rounded-lg shadow-lg p-5 relative">
          {/* Toggle Button on Mobile */}
          <div className="lg:hidden absolute right-5 top-6">
            <BsThreeDotsVertical
              className="text-white text-2xl cursor-pointer"
              onClick={handleDotForBack}
            />
            {showBackButton && (
              <Link to={"/"} className="absolute top-0 right-8 text-white bg-red-600 px-3 py-1 rounded transition-all duration-200">
                Back
              </Link>
            )}
          </div>

          {/* Header */}
          <h1 className="text-3xl text-white font-bold font-Poppins mb-8 ml-5 flex items-center gap-2">
            <RiLinksLine className="text-md" />
            XpertSwap
          </h1>

          {/* Intro Section */}
          <div className="mt-5 px-3 justify-between lg:pr-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <h3 className="text-4xl text-white font-bold font-Poppins">GlobeConnect</h3>
              <p className="text-lg font-medium font-Poppins mt-2 text-gray-100">
                Connect with people in your area to exchange skills
              </p>
              <button className="text-sm font-semibold font-Poppins px-4 py-2 bg-white text-blue-600 rounded-md mt-4 hover:bg-blue-50 transition">
                Filter
              </button>
            </div>

            <div className="search flex items-center bg-white rounded-full shadow-md hover:shadow-lg transition outline-none w-full h-11 pl-5">
              <input
                type="text"
                placeholder="Search People's"
                className="outline-none w-full text-md font-bold font-Poppins p-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="bg-blue-600 h-full w-10 cursor-pointer p-2 text-white rounded-r-full" />
            </div>
          </div>

          {/* Conditional Messages */}
          {searchTerm.trim() === "" && (
            <div className="text-Black text-center text-2xl font-semibold mt-10">
              🔍 Search for people to connect.
            </div>
          )}

          {searchTerm.trim() !== "" && filteredUsers.length === 0 && (
            <div className="text-black text-center text-2xl font-semibold mt-10">
              😕 No users found.
            </div>
          )}

          {/* User Cards */}
          {filteredUsers.length > 0 && (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10 lg:p-3">
              {filteredUsers.map((user, index) => (
                <div
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition"
                  key={index}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://www.nimble-made.com/cdn/shop/articles/business-formal-men_30509580-8eff-4a45-bbae-3e6122c8f52a.jpg?v=1743535951"
                      alt={user?.name}
                      className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
                    />
                    <h4 className="text-lg font-bold font-Poppins">{user?.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {user?.skillyouoffre && (
                      <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-lg shadow">
                        {user.skillyouoffre}
                      </span>
                    )}
                    {user?.skillyouwant && (
                      <span className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-lg shadow">
                        {user.skillyouwant}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => navigate(`/other-user-profile/${user._id}`)}
                      className="bg-blue-600 text-white font-semibold font-Poppins px-4 py-1 rounded hover:bg-blue-700 transition shadow-md"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default FindPeoples;
