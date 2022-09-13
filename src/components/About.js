import React, {forwardRef} from 'react';


// import about data
import { aboutData } from '../data';

const About = forwardRef((props, ref) => {
  const {image, title, subtitle}= aboutData;
  return (
    <section className='my-[30px] xl:mt-[50px]' 
    data-aos='fade-up'
    data-aos-offset='250'
    ref={ref}
    >
      <div className="container mx-auto">
        <div className='bg-tertiary/10 rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col xl:flex-row xl:items-center xl:text-left xl:gap-[60px] xl:pb-0'>
          {/* image */}
          <div className='flex-1 pt-10'>
            <img src={image} alt="" data-aos='zoom-in-left' />
          </div>
          <div className='flex-1 xl:pr-12 mt-20 xl:mt-0 mx-auto max-w-[474px] xl:mx-0 xl:text-left'>
            <h2 className='text-start h3 xl:h2 mb-10' data-aos='fade-up' data-aos-delay='300'>
              {title}
            </h2>
            <p className='text-justify' data-aos='fade-up' data-aos-delay='400'>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
// export {linkRef};
