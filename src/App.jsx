import { useEffect } from 'react'
import { initUI } from './components/index.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Offer from './components/Offer.jsx'
import Portfolio from './components/Portfolio.jsx'
import Journey from './components/Journey.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

function App() {
  useEffect(() => {
    return initUI();
  }, []);

  return (
  <div>
  <Header/>
  <Hero/>
  <About/>
  <Skills/>
  <Offer/>
  <Portfolio/>
  <Journey/>
  <Contact/>
  <Footer/>
  </div>
  );
}

export default App
