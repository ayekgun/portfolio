import React, {useEffect, useRef} from 'react';

import { NavLink, useLocation } from "react-router-dom";

// import navigation data 
import {navigationData} from '../data'

// import App from '../App'
const NavMobile = ({refs}) => {
  const {ref} = useRef(null);
  const scrollSmoothHandler = ref => {
    console.log("Triggered.");
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  // const location = useLocation();
  // useEffect(() => {
    // console.log("location", location.pathname);
    // switch (location.pathname) {
    //   case "/hero":
    //     scrollSmoothHandler(refs.heroRef);
    //     break;
    //   case "/about":
    //     scrollSmoothHandler(refs.aboutRef);
    //     break;
    //   case "/features":
    //     scrollSmoothHandler(refs.featuresRef);
    //     break;
    //   case "/footer":
    //     scrollSmoothHandler(refs.footerRef);
    //     break;

    //   default:
    //     scrollSmoothHandler(refs.homeRef);
    //     break;
    // }
  // }, [location, refs]);
  
  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4'>
      {
        navigationData.map((item, index)=> {
          return (
            <li key={index}>
              {/* <a className='text-white' href={item.href}>{item.name}</a> */}
              <NavLink exact  to='{item.href}' activeClassName="selected"
              onClick={()=> {console.log(`iki hlo ${ref}`)}}
              >{item.name}</NavLink>
            </li>
          )
        })
      }
    </ul>
  )
};

export default NavMobile;
