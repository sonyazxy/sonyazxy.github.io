import React from 'react';
//images
import Image from '../assets/sonya-avatar.jpg';
//icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up',0.3)} 
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount:0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              SONYA <span>ZHAO</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up',0.4)} 
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount:0.7}}
              className='mb-6 text-[36px] lg:text-[60px] 
              font-sencondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Developer', 
                  3000,
                  'Dedicated Learner', 
                  3000,
                  'Designer', 
                  3000,
                ]} 
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up',0.5)} 
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount:0.7}}
              className='mb-8 max-w-xl mx-auto lg:mx-0'
            >
              Hi! 👋 My name is Sonya, thanks for stopping by! <br></br>
              I'm an undergraduate student studing Computer Engineering at UBC,
              who have hands-on experience on both hardware and software development.
            </motion.p>
            
            {/* <motion.div 
              variants={fadeIn('up',0.6)} 
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount:0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>Contact me</button>
              <a href='#'className='text-gradient btnn-link'>
                My Portfolio
              </a>
            </motion.div> */}

            {/* socials */}
            <motion.div 
              variants={fadeIn('up',0.7)} 
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount:0.7}}
              className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://github.com/sonyazxy' target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/sonya-zhao/' target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/s.onya_z/' target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down',0.5)} 
            initial="hidden"
            whileInView={'show'}
            // viewport={{ once: false, amount:0.7}}
            className='lg:flex flex-1 max-w-[320px] lg:max-w-[440px] self-center'
          >
            <img src={Image} alt='' style={{ borderRadius: '5px' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
