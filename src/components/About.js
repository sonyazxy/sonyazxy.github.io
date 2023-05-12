import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer
import {useInView} from 'react-intersection-observer'
//motion
import {motion} from 'framer-motion';
//variant
import {fadeIn} from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div 
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top'></motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}} 
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I love reading, traveling, and exploring possibilities.</h3>
            <p className='mb-6'>
              Currently, I am<br />
              ... a Backend Developer at <a href="https://ubcmint.github.io/" target="_blank">UBC MINT</a>, internal software subteam where we are building a team mangement web app.
              <br />
              ... a Frontend Developer Intern at COSMIO, 
              a startup company specializing in developing a Customer Support Chatbot based on ChatGPT with domain-specific knowledge.
              <br /><br />
            </p>
            {/* stas */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={2} /> : null}
                </div>
                <div className='front-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={10} duration={2} /> : null}
                  {inView ? "+" : null}
                </div>
                <div className='front-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={3} duration={2} /> : null}
                  {inView ? "." : null}
                  {inView ? <CountUp start={0} end={7} duration={2} /> : null} 
                  {inView ? "/ 4.0" : null}
                </div>
                <div className='front-primary text-sm tracking-[2px]'>
                  GPA <br />
                  at UBC
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
