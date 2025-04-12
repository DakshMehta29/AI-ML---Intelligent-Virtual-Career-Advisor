import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-blue-600">LOGO</div>

        {/* Center - Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 text-lg font-medium">
          <li><a href="/assessment" className="hover:text-blue-600">Assessment</a></li>
          <li><a href="/resume" className="hover:text-blue-600">Resume Tips</a></li>
          <li><a href="/roadmaps" className="hover:text-blue-600">Career Roadmaps</a></li>
          <li><a href="/book-slot" className="hover:text-blue-600">Book a Slot</a></li>
        </ul>

        {/* Right - Sign In Button */}
        <div>
          <button 
            className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
