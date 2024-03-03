import React, { useEffect } from "react";
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import about1 from '../assets/images/about1.jpg'

import Aos from "aos";
import 'aos/dist/aos.css'
import { useDarkMode } from "../DarkModeContext";
const About = () => {
    useEffect(() => {
        Aos.init({
              offset:200,
              duration:800,
            easing: 'ease-in-sine',
            delay: 100,
        })
    }, [])
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <>
            <section id="about" className={`${darkMode ? 'dark bg-black' : 'light bg-white'}w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10`}>
                <div data-aos="zoom-in" data-aos-delay="200" className="border[4px] border-orange-600 dark:border-
            orange-400 p-14 flex flex-col  justify-center items-center gap-6 rounded-x1 hover:bg-orange-100 cursor-pointer">
                    <img src={icon1} alt="" className="w-[80px] h-[80px] transform hover:scale-105 transition duration -300 cursor-pointer"></img>
                    <h1 className="text-black text-2xl font-lg text-center ">ABOUT US</h1>

                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className="border[4px] border-orange-600 dark:border-
            orange-400 p-14 flex flex-col  justify-center items-center gap-6 rounded-x1 hover:bg-orange-100 cursor-pointer">
                    <img src={icon2} alt="" className="w-[80px] h-[80px] transform hover:scale-105 transition duration -300 cursor-pointer"></img>
                    <h1 className="text-black text-2xl font-lg text-center ">ORGANIC</h1>

                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className="border[4px] border-orange-600 dark:border-
            orange-400 p-14 flex flex-col  justify-center items-center gap-6 rounded-x1 hover:bg-orange-100 cursor-pointer">
                    <img src={icon3} alt="" className="w-[80px] h-[80px] transform hover:scale-105 transition duration -300 cursor-pointer"></img>
                    <h1 className="text-black text-2xl font-lg text-center ">PIZZA</h1>

                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className="border[4px] border-orange-600 dark:border-
            orange-400 p-14 flex flex-col  justify-center items-center gap-6 rounded-x1 hover:bg-orange-100 cursor-pointer">
                    <img src={icon4} alt="" className="w-[80px] h-[80px] transform hover:scale-105 transition duration -300 cursor-pointer"></img>
                    <h1 className="text-black text-2xl font-lg text-center ">PASTA</h1>

                </div>
                </section>
                <section className={`${darkMode ? 'dark bg-black' : 'light bg-white'}w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
                    <div>
                        <img data-aos="zoom-in" src={about1} alt="about image" className="lg:w-[800px] lg:h-[600px] rounded-x1"/>

                    </div>
                    <div className="flex flex-col justify-center items-center gap-8">
                        <h1 data-aos='zoom-in' className="text-2xl text-black dark:text-white font-semibold text-ceneter">WELCOME TO</h1>
                         <h1 data-aos='zoom-in' className="text-6xl text-black dark:text-white font-bold text-center">
                            pizzazz pies
                         </h1>
                         <p data-aos="zoom-in" className="text-xl text-slate-800 dark:text-slate-100 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea obcaecati at a consequuntur corporis quaerat, sed molestias aut, distinctio exercitationem quae consequatur, voluptate mollitia magni atque itaque incidunt sunt et!</p>
                         <button data-aos="flip-up" className='bg-orange-500 text-lg text-white px-8 py-4 rounded-full 
        font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>ORDER NOW</button>
                    </div>
              </section>
        </>

    )
}
export default About