import React, { useEffect } from "react"
import contact1 from '../assets/images/contact1.jpg'
import { FaMapLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useDarkMode } from "../DarkModeContext"
const Contact = () => {
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
    <section id="contact" className={`${darkMode ? 'dark bg-slate-900' : 'light bg-black'}w-full lg:px-20 px-10 lg:py-20 py-10 
    h-fit flex flex-col justify-center items-center bg-cover bg-center`} style={{ backgroundImage: `url(${contact1})` }}>
      <div className=" lg:w-[80%] w-full grid lg:grid-cols-3 grid-cols-1 justify-cenetr items-center gap-10">
        <div data-aos="zoom-in" data-aos-delay='200' className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col
  justify-center items-center gap gap-4 border-l-[10px] border-orange-500">
          <div id="icon box" className="p-5 rounded-full bg-black hover:bg-orange-500 dark:bg-orange-500 text-white cursor-pointer 
   transform hover:scale-105 transform duration-300">
            <FaMapLocationDot className="w-[35px] h-[35px]" />
         </div>
          <h1 className="text-2xl text-black dark:text-white font-bold">REACH US</h1>
          <p className="text-center text-lg dark:text-white text-slate-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, sequi?</p>
          <button className="bg-orange-500 hover:bg-black text-white rounded-full px-6 py-3 font-bold">OPEN MAP</button>
        </div>

        <div data-aos="zoom-in" data-aos-delay='200' className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col
  justify-center items-center gap gap-4 border-l-[10px] border-orange-500">
          <div id="icon box" className="p-5 rounded-full bg-black hover:bg-orange-500 dark:bg-orange-500 text-white cursor-pointer 
   transform hover:scale-105 transform duration-300">
            <MdEmail className="w-[35px] h-[35px]" />
           </div>
          <h1 className="text-2xl text-black dark:text-white font-bold">EMAIL US</h1>
          <p className="text-center text-lg dark:text-white text-slate-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, sequi?</p>
          <button className="bg-orange-500 hover:bg-black text-white rounded-full px-6 py-3 font-bold">pizzapies@gmail.com</button>
        </div>

        <div data-aos="zoom-in" data-aos-delay='200' className="bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col
  justify-center items-center gap gap-4 border-l-[10px] border-orange-500">
          <div id="icon box" className="p-5 rounded-full bg-black hover:bg-orange-500 dark:bg-orange-500 text-white cursor-pointer 
   transform hover:scale-105 transform duration-300">
            <FaPhoneAlt className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-2xl text-black dark:text-white font-bold">CALL US</h1>
          <p className="text-center text-lg dark:text-white text-slate-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, sequi?</p>
          <button className="bg-orange-500 hover:bg-black text-white rounded-full px-6 py-3 font-bold">+09 87654321</button>
        </div>


      </div>
    </section>
  )
}

export default Contact