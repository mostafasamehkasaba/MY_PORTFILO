// import { useState } from 'react';

import { useEffect, useState } from 'react';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';


function App() {
useEffect(() => {
  window.addEventListener("scroll", () =>{
    if(window.scrollY > 900){
      setShowScroll(true)
    }else{
      setShowScroll(false)
    }
  })
},[])
  const [showScrool , setShowScroll] = useState(false)
  return (
    <div className="container" id="up">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#up" style={{opacity: showScrool ? 1 : 0 }}>
        <button className="scroolTotop">
          <img src="/public/arrow-up.svg" alt="" />
        </button>
      </a>
    </div>
  );
}

export default App
