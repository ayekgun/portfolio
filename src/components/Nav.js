import React from 'react';

import { Link } from 'react-scroll'

// import navigation data
import { navigationData } from '../data';

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-x-8 hover:cursor-pointer'>
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
