
import './App.css'
import Footer from './components/footer'
import GetStarted from './components/Getstarted'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='text-4xl text-neutral-800 font-inter'>
      <Navbar/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App
