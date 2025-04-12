import { useState , useEffect , useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { CiMinimize1 } from "react-icons/ci";
import { LuSend } from "react-icons/lu";
import { SiPerplexity } from "react-icons/si";



const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your actual API key

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const chatRef = useRef(null);
  
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  

  const fetchChatResponse = async (message) => {
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          contents: [
            { role: "user", parts: [{ text: "You are an assistant for students to assist them with providing factual data and resources restrict yourself from answering unethical questions and insult regarding our college ssit . Answer in about 8 to 9 sentences." }] },
            { role: "user", parts: [{ text: message }] }
          ],
        }
      );
      return (
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't fetch a response."
      );
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      return "There was an error. Please try again later.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    const botResponse = await fetchChatResponse(input);
    const botMessage = { text: botResponse, sender: "bot" };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex  justify-center w-full fixed bottom-2 right-2 sm:bottom-6 sm:right-6">
      {!isOpen ? (
        
        <motion.div
        
          onClick={() => setIsOpen(true)}
          className="max-w-[48px] w-full h-12 absolute bottom-0 right-0 bg-neutral-100 text-neutral-900 border-[1px] border-neutral-200 rounded-full  font-semibold flex items-center justify-center  shadow-sm hover:bg-neutral-200 transition-colors duration-300 cursor-pointer font-inter"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ width: 0, opacity: 0, x: 50 }}
          
          transition={{ type: "spring", stiffness: 100 }}
        >
         <SiPerplexity  className="text-neutral-900"size={20}/>
         
        </motion.div>
        
      ) : (
        <motion.div
          className="max-w-[358px] absolute bottom-0 right-0 bg-neutral-100 text-neutral-900 font-inter border-[1px] border-neutral-200 shadow-lg rounded-xl overflow-hidden"
          initial={{ opacity: 0, width: 0, x:50 }}
          animate={{ opacity: 1, width: "24rem" , x:0 }}
          exit={{ opacity: 0, width: 0, x:50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{overflow: "hidden"}}
        >
          <div className="bg-neutral-100 text-neutral-900 font-inter p-2 flex justify-between items-center font-semibold">
            <span className="p-2 text-orange-600"><SiPerplexity size={18}/></span>
            <div onClick={() => { setIsOpen(false); setShowWelcome(true); }}
                className="text-neutral-900  font-inter hover:scale-[112%] transition-all duration-300 cursor-pointer  p-2 rounded-md"><CiMinimize1 size={18}/></div>
          </div>
          <div ref={chatRef} className="p-3 h-64 overflow-y-auto space-y-2">
          {showWelcome && (
              <motion.div
                className="text-xl font-semibold font-inter tracking-tighter text-neutral-900 p-2 cursor-default select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
               <span className="text-orange-600"> Hi! </span> I'm your study assistant. Ask me anything about your subjects .
              </motion.div>
            )}
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`flex flex-col gap-1 p-2 rounded-lg max-w-[80%] font-inter text-[12px]  ${
                  msg.sender === "user" ? "bg-neutral-900 text-neutral-50 ml-auto w-fit " : "bg-neutral-200/40 text-neutral-800"
                }`}
                initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                
                {msg.text}
              </motion.div>
            ))}
          </div>
          <div className="flex items-center border-t border-neutral-200 font-poppins p-2">
            <input
              type="text"
              className="flex-grow p-2 border border-neutral-200 placeholder:tracking-tighter placeholder:text-sm   rounded-md bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
              placeholder="Ask a study question..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (showWelcome) setShowWelcome(false);
              }}
              onKeyDown={handleKeyDown}
            />
            <div
              onClick={handleSend}
              className="ml-2 cursor-pointer select-none flex gap-2 items-center bg-neutral-900 px-3 py-[10px] tracking-tighter text-sm rounded-md text-white hover:bg-neutral-800 font-inter "
            >
              Send<LuSend/>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
