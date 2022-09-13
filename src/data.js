// import icons
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io"
import { MdEmail } from "react-icons/md";

// import images
import AboutImg from '../src/assets/img/about-2.png';
import Feature1Img from '../src/assets/img/features/feature1a.png';
import Feature2Img from '../src/assets/img/features/feature2a.png';
import Feature3Img from '../src/assets/img/features/feature3a.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import HeroImage from '../src/assets/img/hero-img-2.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';
import Logo from '../src/assets/img/logo-2.png';

export const navigationData = [
  {
    name: 'Home',
    href: '/hero',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Portfolio',
    href: '/features',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const heroData = {
  myName: `Arif Gunawan`,
  title: ` Software Quality Assurance.`,
  subtitle:
    'Software Quality Assurance tester with a demonstrated history of working in the financial industry. skilled in business processes, technology, and analytical skills. Professional tester with an engineering background.',
  btnText: 'Contact me',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'A Quality Assurance tester with an informatics engineering background',
  subtitle:
    `My name is Arif. I am a quality assurance engineer with an interest in automation programming. I am passionate about evaluating and providing solutions, as well as challenging myself to improve my skills. I'm developing an automation script using the Robot Framework and Selenium. I am used to doing User Acceptance Tests (UAT) both manually and automatically. I always improve myself with every project I get. I am a dedicated person who pursues a dream. I am hard-working and results-oriented. I always strive to be the best version of myself.`,
};

export const featuresData = {
  title: 'Portfolio',
  subtitle:
    `Some of the features and projects that i provide for those of you who 
    need my skills or want to hire me.`,
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Web Automation',
      description:
        'Simple functional testing with the Robot Framework to select some filter functions and validate that they are displayed correctly.',
      linkText: 'Github link',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Mobile Automation',
      description:
        'Simple automation testing with the Robot Framework and Appium Library to select some filter functions on our Flutter app.',
      linkText: 'Upload soon',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Portofolio Web',
      description:
        'Create a portfolio website using react js and the tailwind CSS framework. .',
      linkText: 'Github link',
      delay: '800',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Flutter App',
      description:
        `Create a simple mobile app using Flutter for the test sample's needs.`,
        linkText: 'Upload soon',
      delay: '900',
    },
  ],
};

export const contactData = {
  title: 'Contact me',
  title2: 'Send me a message',
  subtitle: 'You can send me an email and contact me on the social media links below or whatsapp number for a quick response.',
  sosmed : [
    {
      icon: <MdEmail size={25}/>,
      href: '#',
      text: 'arifgunawan.professional@gmail.com'
    },
    {
      icon: <IoLogoWhatsapp size={25}/>,
      href: 'https://wa.me/+6282229710709',
      text: '(+62) 822-2972-0709',
    },
    {
      icon: <FaLinkedin size={25}/>,
      href: 'https://www.linkedin.com/in/arif-gunawan-a46a71215/',
      text: 'linkedin.com/in/arif',
    },
    {
      icon: <FaGithub size={25}/>,
      href: 'https://www.github.com/ayekgun/',
      text: 'github.com/ayekgun',
    },
  ],
  btn:`Send email`,
  btnIcon: <FaTelegramPlane size={90}/>,
  footerText:'This site is made using React JS and the Tailwind CSS framework. Thank you for visiting this page',
  logo:Logo,
}

