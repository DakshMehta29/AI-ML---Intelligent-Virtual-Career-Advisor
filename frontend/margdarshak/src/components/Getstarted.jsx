import React from "react";
import { Link } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";



const GetStarted = () => {
  return (
    <div className="flex flex-col items-center bg-neutral-50 text-neutral-900 px-6 py-10 md:px-20 space-y-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-48 space-y-4 pb-72 border-b border-neutral-200">
        <div className="text-3xl text-neutral-800 md:text-6xl tracking-tight font-bold">
          Empowering Your  <span className=" bg-gradient-to-tl
from-[#c2410c] via-[#f97316] to-[#fdba74] text-transparent bg-clip-text ">Career Journey</span>
        </div>
        <p className="text-neutral-400 tracking-tight max-w-2xl text-[16px] mx-auto">
          From assessments to expert guidance, we provide everything you need to
          build your dream career — all in one place.
        </p>
        <Link
          to="/get-started"
          className="flex items-center justify-center bg-neutral-900 hover:bg-neutral-700 text-white text-[18px] px-5 py-3 rounded-md transition duration-200 gap-2"
        >
          Get Started <GoArrowRight size={24} />
        </Link>

      </div>
      <div className="flex justify-center text-4xl font-semibold tracking-tighter text-neutral-800 ">Careeer Pathways</div>
      <div className="flex max-w-5xl gap-12">
        
        <div className="max-w-sm mx-auto bg-neutral-200/40 rounded-md  overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://www.corpnce.com/wp-content/uploads/2020/05/machine-learning.jpg"
            alt="Machine Learning"
            className="max-w-full h-64 object-cover m-2 rounded-sm overflow-hidden"
          />
          <div className="px-3 py-2">
            <div className="text-lg tracking-tighter font-semibold text-neutral-800">Machine Learning</div>
          </div>
        </div>

        {/* new card */}
        <div className="max-w-sm mx-auto bg-neutral-200/40 rounded-md  overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg"
            alt="Machine Learning"
            className="max-w-full h-64 object-cover m-2 rounded-sm overflow-hidden"
          />
          <div className="px-3 py-2">
            <div className="text-lg tracking-tighter font-semibold text-neutral-800">Cyber Security</div>
          </div>
        </div>
         {/* new card */}

         <div className="max-w-sm mx-auto bg-neutral-200/40 rounded-md  overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src="https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg"
            alt="Machine Learning"
            className="max-w-full h-64 object-cover m-2 rounded-sm overflow-hidden"
          />
          <div className="px-3 py-2">
            <div className="text-lg tracking-tighter font-semibold text-neutral-800">Full-stack Developer</div>
          </div>
        </div>


      </div>

      {/* Footer CTA (Optional) */}
      <div className="text-center pt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Margdarshak. All rights reserved.
      </div>
    </div>
  );
};

export default GetStarted;
