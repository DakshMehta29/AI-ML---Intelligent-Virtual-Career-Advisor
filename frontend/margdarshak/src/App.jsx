import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GetStarted from './components/Getstarted';
import Assessment from './components/Assessment';

function App() {
  return (
    <div className='text-neutral-800 font-inter'>
      <Navbar />
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
