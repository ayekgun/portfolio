import React from 'react';

// import { Link, NavLink, useLocation } from "react-router-dom";
import { Link } from 'react-scroll'

// import navigation data 
import {navigationData} from '../data'

// import App from '../App'
const NavMobile = () => {
  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4'>
      {
        navigationData.map((item, index)=> {
          return (
            <li key={index}>
              <Link to={item.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              delay={200}
              ignoreCancelEvents={false}
              >{item.name}</Link>
            </li>
          )
        })
      }
    </ul>
  )
};

export default NavMobile;
