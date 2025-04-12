import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetStarted from './components/Getstarted';
import Assessment from './components/Assessment';
import Roadmaps from './components/Roadmaps';
import Resume from './components/Resume';
import Session from './components/Session';
import Signup from './components/Signup';

function App() {
  return (
    <div className='text-neutral-800 font-inter'>
      <Navbar />
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/roadmaps" element={<Roadmaps/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/session" element={<Session/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
