import React from 'react';
import {Link} from 'react-scroll'

// import contact data
import { contactData } from '../data';

const Footer = ()=> {
  // const apaaja = useRef(null);
  const{footerText,logo,sosmed} = contactData
  return (
    <section className='mt-[120px] pb-2 xl:mt-[220px] xl:pb-10'>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-4 xl:gap-8"
        data-aos='fade-up'
        data-aos-delay='200'
        data-aos-offset='-100'
        >
          <div className='hidden xl:block xl:max-w-[220px] order-3 hover:cursor-pointer'
          data-aos='fade-down'
          data-aos-delay='300'
          data-aos-offset='-100'
          >
            <Link 
            to='hero'
            spy={true}
            smooth={true}
            offset={-130}
            duration={500}
            delay={200}
            ignoreCancelEvents={false}
            >
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className='xl:hidden flex justify-center items-center gap-x-8 scale-150 mb-4'>
            {
              sosmed.map((contact, index)=> {
                const{icon, href} = contact;
                return (
                  <div key={index} >
                    <a href={href} target='parent' className='flex gap-x-8 group'>
                      <div className='hover:scale-[120%] transition-transform'>{icon}</div>
                    </a>
                  </div>
                )
              })
            }
          </div>
          <div className="text-sm font-light italic self-center max-w-[340px] xl:max-w-[360px]">
            <h1>{footerText}</h1>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1662815086">
        <div className="custom-shape-divider-top-1662815268">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Footer;