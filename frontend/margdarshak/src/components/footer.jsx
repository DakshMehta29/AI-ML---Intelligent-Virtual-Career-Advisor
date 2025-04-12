import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a1128] text-white px-6 py-10">
      {/* Leave a Reply Section */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-4">Leave a Reply:</h2>
        <form className="space-y-4">
          <textarea
            className="w-full p-3 rounded-md bg-[#1b2a4b] border border-gray-600 text-white"
            rows="4"
            placeholder="comment :"
          ></textarea>
          <div>
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-[#1b2a4b] border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              className="w-full p-2 rounded-md bg-[#1b2a4b] border border-gray-600 text-white"
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="saveInfo" className="mr-2" />
            <label htmlFor="saveInfo">Save my Name and Email for later</label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-600 pt-10">
        {/* Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Info</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Compressions</li>
            <li>Customers</li>
            <li>Service</li>
            <li>Collection</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold text-lg mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Free Courses</li>
            <li>Latest Technologies</li>
            <li>Projects</li>
            <li>New Uploads</li>
            <li>Resume Enhancer</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Customer Agreement</li>
            <li>Privacy Policy</li>
            <li>Security</li>
            <li>Testimonials</li>
            <li>Media Kit</li>
          </ul>
        </div>

        {/* Blog Posts and Events */}
        <div>
          <h3 className="font-bold text-lg mb-4">Blog Posts and Events</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to our Blogs & Events for a weekly dose of News of Events and Latest
            Technology, Updates, helpful tips.
          </p>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full bg-[#1b2a4b] border border-gray-600 rounded-l text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r">
              SUBSCRIBE
            </button>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 text-xl text-white">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
