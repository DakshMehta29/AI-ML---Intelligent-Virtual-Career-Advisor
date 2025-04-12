import React, { useState } from "react";

const skillOptions = ["C", "C++", "Python", "JavaScript", "React", "SQL", "Java", "HTML/CSS"];

const Assessment = () => {
  const [skills, setSkills] = useState([{ name: "" }]);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [customProfession, setCustomProfession] = useState("");

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index].name = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { name: "" }]);
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const finalProfession = profession === "Other" ? customProfession : profession;
  
    const domain = {
      name,
      profession: finalProfession,
      skills,
    };
  
    try {
      const response = await fetch("http://localhost:3001/api/v1/quiz/generatequiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain }),
      });
  
      const data = await response.json();
      console.log("Server Response:", data);
      alert("Assessment submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the assessment.");
    }
  };
  
  

  return (
    <div className="bg-neutral-100 min-h-screen text-neutral-900 px-6 py-10 md:px-20">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Skill Assessment</h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded bg-white"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium">Your Profession</label>
          <select
            required
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="p-2 border rounded bg-white"
          >
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Businessman">Businessman</option>
            <option value="Other">Other</option>
          </select>

          {profession === "Other" && (
            <input
              type="text"
              placeholder="Please specify your profession"
              value={customProfession}
              onChange={(e) => setCustomProfession(e.target.value)}
              className="p-2 border rounded bg-white"
            />
          )}
        </div>

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 border rounded shadow-sm flex flex-col md:flex-row items-center gap-4"
          >
            <select
              className="p-2 border rounded w-full"
              value={skill.name}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              required
            >
              <option value="">Select Skill</option>
              {skillOptions.map((opt, idx) => (
                <option key={idx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="text-center">
          <button
            type="button"
            onClick={addSkill}
            className="bg-neutral-700 hover:bg-neutral-800 text-white px-4 py-2 rounded-md"
          >
            + Add Another Skill
          </button>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Submit Assessment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Assessment;
