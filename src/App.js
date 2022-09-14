import React, {Component, Fragment, useRef, useEffect} from 'react';

import { HashRouter, useLocation, BrowserRouter, Route, Routes} from "react-router-dom";

// import animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// import components
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

  // aos initialization
  Aos.init({
    duration: 1800
  })
  
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
