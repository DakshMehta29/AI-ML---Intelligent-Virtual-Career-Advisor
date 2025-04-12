import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white  ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-neutral-900 tracking-tighter">Career-Advisor</div>

        {/* Center - Links */}
        <ul className="hidden md:flex  gap-8 text-neutral-700 text-[16px] font-medium">
          <li><Link
            to="/assessment"
            className="hover:text-neutral-400 tracking-tight transition-all duration-300"
          >
            Assessment
          </Link></li>
          <li><Link to="/resume" className="tracking-tight hover:text-neutral-400 transition-all duration-300">
          Resume Tips
          </Link></li>
          <li><Link to="/roadmaps" className="tracking-tight hover:text-neutral-400 transition-all duration-300">
          Career Roadmaps
          </Link></li>
          <li><Link to="/session" className="tracking-tight hover:text-neutral-400 transition-all duration-300">Book a Slot
          </Link></li>
        </ul>

        {/* Right - Sign In Button */}
        <div>
          <div
<<<<<<< HEAD
            className="flex bg-neutral-900 tracking-tighter text-white text-[18px] px-4 py-2 rounded-sm hover:bg-neutral-700 transition-all duration-200 gap-1.5 items-center"
          >
            Sign Up
            <GoArrowRight size={22} />
=======
            className="flex flex-row  bg-neutral-900 tracking-tighter text-white text-[18px] px-4 py-3 rounded-sm hover:bg-neutral-700 transition-all duration-200 gap-1.5 items-center"
          ><Link to="/sign-up" className='flex gap-1.5 items-center'>

              SignUp <GoArrowRight size={22} />
            </Link>
>>>>>>> 40ea431c7fb8548881b8021b8dfa7b895c989b7a
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
