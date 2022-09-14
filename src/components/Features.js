import React from 'react';

// import features data
import { featuresData } from '../data';

// import icons
import {BsArrowRight} from 'react-icons/bs';

const Features = () => {
  // destructure features data 
  const {title, subtitle, list, id} = featuresData;
  return (<section className='mt-[120px] xl:my-[150px]'>
    <div className="container mx-auto" id={id}>
      {/* text */}
      <div className='text-center'>
        <h1 className='h2 mb-6 xl:mb-12'
        data-aos='fade-down'
        data-aos-delay='100'
        >{title}</h1>
        <p className='lead max-w-[584px] mx-auto mb-16 xl:mb-24'
        data-aos='fade-down'
        data-aos-delay='200'
        >{subtitle}</p>
      </div>
      {/* feature list */}
      <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2 '> 
        {
          list.map((feature, index)=> {
            // destructure
            const {image,bgImage,title, description, linkText, href, delay} = feature;
            // feature items
            return (
              <div className='mb-[120px] w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto' key={index}
              data-aos='zoom-in'
              data-aos-offset='100'
              data-aos-delay={delay}
              >
                {/* background image */}
                <div className='hidden xl:flex absolute top-0 right-0 -z-10'>
                  <img src={bgImage} alt=""/>
                </div>
                {/* icons  image */}
                <div className='max-w-[120px] xl:max-w-[232px] xl:mr-7'
                data-aos='zoom-in-right'
                data-aos-delay={delay}
                ></div>
                <img src={image} alt="" />
                {/* text */}
                <div className='max-w-[220px] '>
                  <h3 className='h3 mb-4'>{title}</h3>
                  <p className='font-light italic mb-4'>{description}</p>
                  <div className='flex  items-center gap-x-2 group'>
                    <a className='text-primary font-bold' href={href} target='blank'>{linkText}</a>
                    <BsArrowRight className='text-xl text-accent-primary transition-all  group-hover:ml-[5px]'/>
                  </div>
                </div>
              </div> 
            )
          })
        } 
      </div>
    </div>
  </section>);
};

export default Features;
