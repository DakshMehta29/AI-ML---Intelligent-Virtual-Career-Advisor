import React, { useState } from "react";

const skillOptions = ["C", "C++", "Python", "JavaScript", "React", "SQL", "Java", "HTML/CSS"];

const Assessment = () => {
  const [skills, setSkills] = useState([{ name: "", level: 0 }]);

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { name: "", level: 0 }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Skills submitted:", skills);
    // You can send this to backend/AI for generating questions
  };

  return (
    <div className="bg-[#0e1629] min-h-screen text-white px-6 py-10 md:px-20">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Skill Assessment</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1e2a47] p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4"
          >
            <select
              className="text-black p-2 rounded w-full md:w-1/2"
              value={skill.name}
              onChange={(e) => handleSkillChange(index, "name", e.target.value)}
              required
            >
              <option value="" disabled>
                Select Skill
              </option>
              {skillOptions.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            <div className="flex flex-col w-full md:w-1/2">
              <label className="mb-1 text-sm">Skill Level (0 to 5)</label>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={skill.level}
                onChange={(e) => handleSkillChange(index, "level", e.target.value)}
                className="w-full"
              />
              <span className="text-sm text-gray-300 text-right">Level: {skill.level}</span>
            </div>
          </div>
        ))}

        <div className="text-center">
          <button
            type="button"
            onClick={addSkill}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          >
            + Add Another Skill
          </button>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Submit Skills
          </button>
        </div>
      </form>
    </div>
  );
};

export default Assessment;
