import React, {useRef} from 'react';

// import emailJs
import emailjs from '@emailjs/browser';

// import data contact
import { contactData } from '../data';

const Contact = ()=> {
  const {title, title2, subtitle, sosmed, btn, btnIcon, id} = contactData
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'gmail_template', form.current, 'BB851YAqATmxYj-hp', e.target)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className='my-[30px] xl:mt-[30px]'>
      <div className=' mb-8 xl:mb-[80px]' 
      data-aos='fade-down'
      data-aos-delay='100'
      >
        <h1 className='h2 text-center'>{title}</h1>
      </div>
      <div className="container mx-auto" id={id}>
        <div className="bg-tertiary/10 rounded-xl xl:rounded-[50px] min-h-[460px] px-2 xl:px-12 pb-12 grid  grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 gap-4 item-center justify-between 
        py-[50px] static"
        data-aos='fade-up'
        data-aos-delay='200'
        >
          <div className='hidden xl:block max-w-full absolute -z-20 xl:self-center justify-self-end xl:justify-self-center -translate-x-5 xl:-translate-x-72 -translate-y-8 overflow-hidden xl:scale-[220%]'>
            <div className='text-tertiary/[7%]'
            data-aos='zoom-in-up'
            data-aos-delay='800'
            >{ btnIcon }</div>
          </div>
          <div className='text-justify px-8 xl:px-0'>
            <h1 className='h3 mb-10'
            data-aos='fade-up'
            data-aos-delay='600'
            >{title2}</h1>
            <h1 
            data-aos='fade-up'
            data-aos-delay='700'
            >{subtitle}</h1>
          </div>
          {/* icon */}
          <div className='hidden xl:flex mt-28'
          data-aos='fade-up'
          data-aos-delay='700'
          >
            <div>
              {
                sosmed.map((contact, index)=> {
                  const {icon, text, href} = contact;
                  return (
                    <div key={index} >
                      <a href={href} target='parent' className='flex gap-x-8 group'>
                        <div className='mb-[20px] group-hover:animate-bounce duration-500 delay-300 transition-all'>{icon}</div>
                        <h1 className='font-medium text-center'>{text}</h1>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className=' xl:col-start-2 xl:row-span-full bg-tertiary/15  rounded-[6%] xl:rounded-l-[20%] xl:rounded-r-xl shadow-none xl:shadow-xl p-8 flex flex-col gap-y-6' 
          data-aos='zoom-in-right'
          data-aos-delay='500'>
            <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col space-y-4'>
              {/* name */}
              <div className='bg-blend-saturation'>
                <label  className='text-sm' htmlFor="">Your name</label>
                <input type="text" name='name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
              </div>
              {/* email address */}
              <div>
                <label  className='text-sm' htmlFor="">Email address</label>
                <input type="email" name='email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
              </div>
              {/* email text */}
              <div>
                <label  className='text-sm' htmlFor="">Message</label>
                <textarea name='message' rows={7} type="email" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
              </div>
              <div className='flex justify-end relative'>
                  <button type='submit' className='btn2 xl:btn btn-primary h-'>{btn}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
