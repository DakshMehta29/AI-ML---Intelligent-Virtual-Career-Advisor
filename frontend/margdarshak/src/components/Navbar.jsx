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
          <li><a href="/resume" className="tracking-tight hover:text-neutral-400 transition-all duration-300">Resume Tips</a></li>
          <li><a href="/roadmaps" className="tracking-tight hover:text-neutral-400 transition-all duration-300">Career Roadmaps</a></li>
          <li><a href="/book-slot" className="tracking-tight hover:text-neutral-400 transition-all duration-300">Book a Slot</a></li>
        </ul>

        {/* Right - Sign In Button */}
        <div>
          <div
            className="flex bg-neutral-900 tracking-tighter text-white text-[18px] px-4 py-3 rounded-sm hover:bg-neutral-700 transition-all duration-200 gap-1.5 items-center"
          >
            Sign Up
            <GoArrowRight size={22} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
