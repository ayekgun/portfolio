import React from 'react';

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// import navigation data
import { navigationData } from '../data';

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-x-8'>
      {
        navigationData.map((item, index)=> {
          return (
            <li key={index}>
              <Link to={item.href}
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
              delay={200}
              ignoreCancelEvents={false}
              >{item.name}</Link>
            </li>
          )
        })
      }
    </ul>
    </nav> 
  );
};

export default Nav;
