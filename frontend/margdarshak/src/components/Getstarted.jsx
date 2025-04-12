import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const sections = [
  {
    title: "Kickstart Your Career",
    content:
      "Start your journey with our smart assessment. Discover your strengths, explore career options, and unlock personalized guidance tailored just for you. Learn what industries suit you best and how you can stand out in the job market.",
    reverse: false,
  },
  {
    title: "Get Guidance",
    content:
      "Talk to industry experts and mentors who’ll guide you with real-world advice to shape your career direction confidently. From resume reviews to mock interviews, get the support you need to grow.",
    reverse: true,
  },
  {
    title: "Resume Tips",
    content:
      "Build a professional resume using best practices and AI suggestions. Learn what recruiters are looking for, tailor your resume for different roles, and boost your chances of getting shortlisted.",
    reverse: false,
  },
  {
    title: "1-on-1 Session with Experts",
    content:
      "Book a session with professionals and receive personalized insights to grow in your chosen field. Clarify your doubts, plan your goals, and receive constructive feedback for improvement.",
    reverse: true,
  },
];

const GetStarted = () => {
  return (
    <div className="bg-[#0e1629] text-white px-6 py-10 md:px-20 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4 pb-10 border-b border-gray-600">
        <h1 className="text-3xl md:text-4xl font-bold">
          Empowering Your Career Journey
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          From assessments to expert guidance, we provide everything you need to
          build your dream career — all in one place.
        </p>
        <Link
          to="/get-started"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-md transition duration-200"
        >
          Get Started
        </Link>
        <div className="mt-4 animate-bounce text-gray-400">↓</div>
      </div>

      {sections.map((sec, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-stretch justify-between gap-8 py-10 border-b border-gray-600 ${
            sec.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[40%] h-full flex items-center justify-center">
            <img
              src={logo}
              alt="Section Logo"
              className="rounded-lg shadow-lg object-cover w-full h-full max-h-60 md:max-h-full"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[60%] flex flex-col justify-between text-center md:text-left">
            <div>
              <h2 className="text-2xl font-semibold mb-3">{sec.title}</h2>
              <p className="text-base leading-relaxed text-gray-300">
                {sec.content}
              </p>
            </div>
            <div className="mt-4 flex justify-center md:justify-start">
              <Link
                to="/get-started"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-md transition duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Footer CTA (Optional) */}
      <div className="text-center pt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Margdarshak. All rights reserved.
      </div>
    </div>
  );
};

export default GetStarted;
