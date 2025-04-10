import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import register from "../assets/register.jpg";
import authImage from "../assets/authImage.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4682b4] to-[#add8e6] p-4">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl">
          {/* Info Section - Hidden on Mobile */}
          <div className="hidden md:flex flex-col items-center justify-center bg-blue-100 p-10 w-1/2 text-center">
            <img
              src={authImage}
              alt="SkillSwap Illustration"
              className="w-72 mb-6"
            />
            <p className="text-gray-700 text-lg">
              Swap what you know for what you want to learn.
              <br />
              No money. Just skills. Learn locally or online.
            </p>
          </div>

          {/* Sign Up Form */}
          <div className="flex-1 p-8 md:p-12 flex items-center justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Create Your Account
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Skill You Want"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Skill You Offer"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 text-md font-bold">
                   LogIn
                </Link>
              </p>
            </div>
          </div>
        </div>
           
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Signup;
