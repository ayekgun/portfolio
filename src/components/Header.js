import React, {useState} from 'react';

// import components
import Logo from  '../assets/img/logo-2.png'
import Nav from  './Nav'
import NavMobile from  './NavMobile'

// import Icons
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

// import cv
import CV from '../assets/CV-Arif-Gunawan.pdf';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header className='mb-12 lg:mb-0 z-20 px-4 lg:px-0 relative'
    data-aos='fade-down'
    data-aos-delay='1200'
    data-aos-duration='1000'> 
      <div className="container mx-auto">
        <div className='flex items-center justify-between relative'>
          <div className='flex items-center gap-x-[110px]'>
            {/* {Logo} */}
            <div>
              <img src={Logo} alt="" />
            </div>
            {/* nav - initially is hidden / show on large screen */}
            <div className='hidden lg:flex'> 
              <Nav />
            </div>
          </div>
          {/* nav Mobile - initially is show / hidden on large screen */}
          <div className={`${navMobile ? 'max-h-52' : 'max-h-0'} lg:hidden absolute top-24 w-full left-0 right-0 bg-accent-tertiary font-bold rounded transition-all overflow-hidden`}> 
            <NavMobile />
          </div>
          {/* button request demo */}
          <a href={CV} download='CV - Arif Gunawan.pdf'>
            <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
              Download CV <BsArrowRight className=' text-2xl text-accent-primary group-hover:text-white transition'/>
            </button>
          </a>
          {/* hamburger nav btn / only shows on mobile screens */}
          <div onClick={()=> setNavMobile(!navMobile)}
          className="lg:hidden text-2xl text-primary cursor-pointer">
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
