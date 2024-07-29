import React from 'react';
import { ScrollParallax } from 'react-just-parallax';
import { cyber_one, cyber_two, cyber_three, cyber_four } from '../../assets/index';
import { motion } from 'framer-motion';
import { isTouchableDevice } from '../../utils/helper';

const Experience = () => {

  let isMobile = isTouchableDevice();
  return (
    <div id='experience' className='min-h-screen bg-n-7 pt-20'>
      <div className='flex justify-center items-center pb-20'>
        <h1 className='text-[60px] text-center'>
          My Journey
        </h1>
      </div>

      <div id='experience' className='flex px-4 md:px-10 flex-col pb-40 w-full gap-40'>
        <div className='flex justify-between grow'>
          {isMobile ? <>
            <div className='flex items-start flex-col'>
              <h3 className='text-5xl'>2021</h3>
              <h4 className='text-3xl pt-1 pb-5 text-color-1'>The Beginning of the Journey</h4>
              <p className='text-left md:w-[700px]'>
                In 2021, I embarked on my adventure in web development. I undertook various self-study projects and practiced algorithms. Additionally, I completed an intensive 1500-hour course that simulated a real work environment.
              </p>
            </div>
          </> :
            <>
              <div data-aos="fade-right" className='flex items-start flex-col'>
                <h3 className='text-5xl'>2021</h3>
                <h4 className='text-3xl pt-1 pb-5 text-color-1'>The Beginning of the Journey</h4>
                <p className='text-left md:w-[700px]'>
                  In 2021, I embarked on my adventure in web development. I undertook various self-study projects and practiced algorithms. Additionally, I completed an intensive 1500-hour course that simulated a real work environment.
                </p>
              </div>
            </>}

          <ScrollParallax>
            {isMobile ? <>
              <div className='flex justify-end'>
                <motion.img loading="lazy" initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }} className='h-40 w-40 rounded-full hidden lg:block' src={cyber_one} alt="" />
              </div>
            </> : <>
              <div data-aos="fade-right" className='flex justify-end'>
                <motion.img loading="lazy" initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }} className='h-40 w-40 rounded-full hidden lg:block' src={cyber_one} alt="" />
              </div>
            </>}

          </ScrollParallax>
        </div>
        <div className='flex-row-reverse justify-between grow'>
          {isMobile ? <>
            <div className='flex items-end flex-col'>
              <h3 className='text-5xl'>2022</h3>
              <h4 className='text-3xl pt-1 pb-5 text-color-1 text-right'>Building Strong Foundations</h4>
              <p className='text-right md:w-[700px]'>
                During 2022, I worked as a freelance developer, creating projects for various clients. This year was crucial for honing my skills and gaining practical experience in frontend development.
              </p>
            </div>
          </> : <>
            <div data-aos="fade-left" className='flex items-end flex-col'>
              <h3 className='text-5xl'>2022</h3>
              <h4 className='text-3xl pt-1 pb-5 text-color-1 text-right'>Building Strong Foundations</h4>
              <p className='text-right md:w-[700px]'>
                During 2022, I worked as a freelance developer, creating projects for various clients. This year was crucial for honing my skills and gaining practical experience in frontend development.
              </p>
            </div>
          </>}
          <ScrollParallax>
            {isMobile ? <>
              <div className='flex'>
                <motion.img loading="lazy" initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }} className='h-40 w-40 rounded-full hidden lg:block' src={cyber_two} alt="" />
              </div>
            </> : <>
              <div data-aos="fade-left" className='flex'>
                <motion.img loading="lazy" initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }} className='h-40 w-40 rounded-full hidden lg:block' src={cyber_two} alt="" />
              </div>
            </>}

          </ScrollParallax>
        </div>
        <div className='flex justify-between grow'>
          {isMobile ? <>
            <div className='flex items-start flex-col'>
              <h3 className='text-5xl'>2023</h3>
              <h4 className='text-3xl pt-1 pb-5 text-color-1'>My First Professional Job</h4>
              <p className='text-left md:w-[700px]'>
                In 2023, I landed my first job as a frontend developer at <strong className='text-color-7'><a target='_blank' href="https://totalcoin.com/">Totalcoin.</a> </strong>  For a year, I applied my knowledge in a professional setting and significantly grew as a developer.
              </p>
            </div>
          </> : <>
            <div data-aos="fade-right" className='flex items-start flex-col'>
              <h3 className='text-5xl'>2023</h3>
              <h4 className='text-3xl pt-1 pb-5 text-color-1'>My First Professional Job</h4>
              <p className='text-left md:w-[700px]'>
                In 2023, I landed my first job as a frontend developer at <strong className='text-color-7'><a target='_blank' href="https://totalcoin.com/">Totalcoin.</a> </strong>  For a year, I applied my knowledge in a professional setting and significantly grew as a developer.
              </p>
            </div>
          </>}
          <ScrollParallax>
            {isMobile ? <>
              <div className='flex justify-end'>
                <motion.img loading="lazy" initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }} className='h-40 w-40 rounded-full hidden lg:block' src={cyber_three} alt="" />
              </div>
            </> : <>
              <div data-aos="fade-right" className='flex justify-end'>
                <motion.img loading="lazy" initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }} className='h-40 w-40 rounded-full hidden lg:block' src={cyber_three} alt="" />
              </div>
            </>}

          </ScrollParallax>
        </div>
        <div className='flex flex-col justify-between grow'>
          {isMobile ? <>
            <div className='flex items-end flex-col'>
              <h3 className='text-5xl'>2024</h3>
              <h4 className='text-3xl pt-1 pb-5 text-color-1 text-right'>Venturing into New Horizons</h4>
              <p className='text-right md:w-[700px]'>
                In 2024, I returned to freelancing and founded a software development company. Currently, I am working on AI-related projects, exploring new technologies, and expanding my horizons.
              </p>
            </div>
          </> : <>
            <div data-aos="fade-left" className='flex items-end flex-col'>
              <h3 className='text-5xl'>2024</h3>
              <h4 className='text-3xl pt-1 pb-5 text-color-1 text-right'>Venturing into New Horizons</h4>
              <p className='text-right md:w-[700px]'>
                In 2024, I returned to freelancing and founded a software development company. Currently, I am working on AI-related projects, exploring new technologies, and expanding my horizons.
              </p>
            </div>
          </>}
          <ScrollParallax>
            {isMobile ? <>
              <div className='flex justify-between grow'>
                <motion.img loading="lazy" initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }} className='h-40 w-40 rounded-full hidden lg:block' src={cyber_four} alt="" />
              </div>
            </> : <>
              <div data-aos="fade-left" className='flex justify-between grow'>
                <motion.img loading="lazy" initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }} className='h-40 w-40 rounded-full hidden lg:block' src={cyber_four} alt="" />
              </div>
            </>}
          </ScrollParallax>
        </div>
      </div>

    </div>
  );
};

export default Experience;
