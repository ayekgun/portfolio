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

const App = ({ refs }) => {

  const homeRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const apaaja = useRef(null);

  const mudun = (ref)=> {
    console.log('opo isine?',ref)
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  

  // aos initialization
  Aos.init({
    duration: 1800
  })
  
  return (
    <Fragment>
      <div onClick={()=> {mudun(apaaja.current)}}
      className='z-50 absolute'
      >
        <button className='h-15 w-15 bg-red font-bold text-3xl'>
          click me
        </button>
      </div>

      <div ref={homeRef} className="App">
        <HashRouter className='overflow-hidden'>
          <Hero refs={{ homeRef, heroRef, aboutRef, featuresRef, contactRef, footerRef }}/>
          <About ref={aboutRef}/>
          <Features ref={featuresRef}/>
          <Contact ref={contactRef}/>
          <Footer ref={footerRef}/>
        </HashRouter> 
      </div>
      <div className='font-bold text-3xl'>
        <h1 ref={apaaja}>apa aja</h1>
      </div>

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={[h,a]}/>
          <Route path='/hero' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>                             */}
    </Fragment>
  );
};

export default App;
