import React, { useEffect } from "react"
import faqimg1 from '../assets/images/faq1.jpg'
import faqimg2 from '../assets/images/faq2.jpg'
import faqimg3 from '../assets/images/faq3.jpg'
import faqimg4 from '../assets/images/faq4.jpg'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useDarkMode } from "../DarkModeContext"
import { Accordion } from 'flowbite-react';

const Faq = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section id='faq' className={`${darkMode ? 'dark bg-black' : 'light bg-white'}w-full lg:px-20 px-10 lg:py-20 py-10 grid lg:grid-cols-2 gird-cols-1 justify-center items-start gap-14`}>
      <div id="left" className="flex flex-col justify-center item-center gap-12">
        <h1 data-aos='zoom-in' className="text-6xl text-black font-bold text-center dark:text-white">Frequently Asked Questions</h1>
        <div data-aos='slide-up' className="w-full">
          <Accordion className="flex flex-col items-center gap-2 ">
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa?
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa?
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa?
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa?
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">What are your opening hours</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa?
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <button data-aos="flip-up" className='bg-orange-500 text-lg text-white px-8 py-4 rounded-full 
        font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>CONTACT US</button>
      </div>
       <div id="image box" className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4">
        <img data-aos="zoom-in" src={faqimg1} alt="" className="w-[400px] h-[400px] rounded-xl"/>
        <img data-aos="zoom-in" src={faqimg2} alt="" className="w-[400px] h-[400px] rounded-xl"/>
        <img data-aos="zoom-in" src={faqimg3} alt="" className="w-[400px] h-[400px] rounded-xl"/>
        <img data-aos="zoom-in" src={faqimg4} alt="" className="w-[400px] h-[400px] rounded-xl"/>
       </div>
    </section>
  )
}

export default Faq