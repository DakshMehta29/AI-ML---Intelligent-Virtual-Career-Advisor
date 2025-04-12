import React from "react";
import { Wand2, Scan, FileText, CloudUpload, Sparkles } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 p-8 md:px-20">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Resume Builder</h1>
      <p className="text-center mb-12 text-lg">
        Build a standout resume with AI-powered tools, feedback systems, and modern templates.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Resume Enhancer */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-blue-600" />
            <h2 className="text-xl font-semibold">AI Resume Enhancer</h2>
          </div>
          <p>
            Optimize your resume with personalized AI suggestions — from bullet points to action verbs and role-based enhancements.
          </p>
        </div>

        {/* Resume Scanner */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Scan className="text-green-600" />
            <h2 className="text-xl font-semibold">ATS Scanner</h2>
          </div>
          <p>
            Scan your resume for ATS (Applicant Tracking System) compatibility. Ensure keyword alignment and structure perfection.
          </p>
        </div>

        {/* Resume Templates */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-purple-600" />
            <h2 className="text-xl font-semibold">Smart Templates</h2>
          </div>
          <p>
            Choose from modern, professional templates designed by hiring experts. Just plug in your details and download!
          </p>
        </div>

        {/* Upload Resume */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <div className="flex items-center gap-3 mb-4">
            <CloudUpload className="text-orange-600" />
            <h2 className="text-xl font-semibold">Upload & Analyze</h2>
          </div>
          <p>
            Upload your existing resume in PDF or DOCX format. Get instant AI-powered feedback on content quality and layout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
