const express = require('express');
const axios = require('axios');

const quizRouter = express.Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;


const generateMCQs = async (domain) => {
    const prompt = `You're a quiz generator.Follow the format strictly. Here are examples:

    Topic: Python
    [
      {
        "question": "What is a correct syntax to define a function in Python?",
        "options": ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"],
        "answer": "def myFunc():"
      },
      {
        "question": "What keyword is used for loops in Python?",
        "options": ["for", "repeat", "loop", "iterate"],
        "answer": "for"
      }
    ]
    
    Now generate 5 MCQs for the topic: "${domain}"
    Return only the JSON.`;
    

try {
    const response = await axios.post(GEMINI_URL, {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    });

    const textResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    // console.log("Raw Gemini response:\n", textResponse);

    const cleanJSON = (rawText) => {
      return rawText
        .replace(/```json\n?/gi, '')
        .replace(/```/g, '')
        .trim();
    };

    const cleaned = cleanJSON(textResponse);
    const mcqs = JSON.parse(cleaned);
    return mcqs;
  } catch (error) {
    console.error('Error calling Gemini or parsing response:', error.message);
    return null;
  }
};
quizRouter.post('/generatequiz', async (req, res) => {
  const { domain } = req.body;

  if (!domain) {
    return res.status(400).json({ error: "Missing domain in request body" });
  }

  const questions = await generateMCQs(domain);

  if (!questions || !Array.isArray(questions)) {
    return res.status(500).json({ error: "Failed to generate quiz questions" });
  }

  res.json({ domain, questions });
});

module.exports = {
    quizRouter
};
