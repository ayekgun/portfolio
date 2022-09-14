import React from 'react';

// import Hero data
import {heroData} from '../data'

// import components
import Header from '../components/Header'

const Hero = () => {
  // destructure hero data
  const {myName, title, subtitle, btnText, image, id} = heroData
  return <section className='lg:h-[900px] py-12'>
    <Header />
    <div className="container mx-auto h-full relative" id={id}>
      <div className='flex flex-col items-center xl:flex-row h-full md:py-24'>
        <div className='text-center xl:text-left mt-12'>
        {/* Text */}    
          <h1 className='h2 xl:h1 xl:max-w-[700px]' data-aos='fade-down' data-aos-delay='300'>{myName}</h1>
        {/* {Title} */}
        <h2 className='h3 xl:h2 xl:max-w-[700px] mb-8 xl:mb-12' data-aos='fade-down' data-aos-delay='400'>{title}</h2>
        {/* {Subtitle} */}
        <p className='text-justify lead xl:max-w-[380px] mb-6 lg:mb-12' data-aos='fade-down' data-aos-delay='500'>{subtitle}</p>                 
        {/* {Button Text} */}
          <button className='btn3 xl:btn btn-primary mb-8 xl:mb-0' data-aos='fade-down' data-aos-delay='500'>{btnText}</button>
        {/* {Image} */}
          <div className='xl:absolute xl:-right-16 xl:bottom-16' data-aos='fade-up' data-aos-delay='500' data-aos-offset='-100'>
            <img src={image} alt="" className='mx-auto xl:mx-0' />
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Hero;
