import React from "react";
import aboutImage from "../assets/homeabout.jpg"; // Replace with your actual image

const AboutHero = () => {
  return (
    <section className="bg-[#2B1E5F] text-white py-12 px-4 md:px-12 mb-1 shadow-xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="transform rotate-[-3deg] bg-[#6EE7B7] p-4 rounded-xl">
            <img
              src={aboutImage}
              alt="About SwapSkills"
              className="rounded-lg object-cover max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            About <span className="text-indigo-300">SkillLinkr</span>
          </h2>
          <p className="text-sm sm:text-base mb-4 leading-relaxed text-gray-200">
            SkillLinkr is a platform for students and recent graduates to meet mentors, learners, and fellow professionals to exchange valuable skills.
            Whether you're preparing for your next job, learning something new, or sharing your expertise, SkillLinkr helps you build a strong skillset and connect meaningfully.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            The platform is also ideal for people and institutions seeking growth through collaboration.
            With curated matches and a growing talent network, SkillLinkr empowers users to unlock opportunities together.
          </p>

          <button className="mt-6 px-6 py-2 bg-white text-indigo-900 font-semibold rounded-md shadow hover:bg-gray-200 transition">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
