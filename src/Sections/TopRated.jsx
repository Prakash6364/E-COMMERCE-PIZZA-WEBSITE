import React, { useEffect } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pizza from '../Components/export'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useDarkMode } from "../DarkModeContext"
const TopRated = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        arrows:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  };
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section id="pizza" className={`${darkMode ? 'dark bg-black' : 'light bg-white'} h-fit w-full lg:px-20 px-3 lg:py-20 
    py-10 flex flex-col justify-center items-center gap-6`}>
      <h1 data-aos='zoom-in' className="text-6xl text-black dark:text-white font-bold text-center">TOP RATED</h1>
      <p data-aos='zoom-up' className='text-xl text-black dark:text-slate-100 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quidem atque minus, esse aperiam dolores voluptas nihil! Voluptates corporis   sunt quibusdam ea aut modi magni fugit. Laudantium fuga debitis dolorem.
      </p>
      <div data-aos="slide-up" className="lg:w-[90%] w-full">
        <Slider {...settings}>
        {
          pizza.map((item, index) =>
          (
            <div key={index} id='product-box' className='bg-black dark:bg-gray-80 p-8 flex flex-col justify-center items-center gap=4 rounded-lg'>
              <img src={item.image} alt='product img' className='rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer' />
              <h1 className='text-white text-center text-2xl font-bold dark:text-white'>{item.title}</h1>
              <h1 className='text-orange-600 font-bold text-3xl'>{item.price}</h1>
              <p className='text-lg text-white dark:text-white text-center'>{item.para}</p>
              <button data-aos="flip-up" className='bg-orange-500 text-lg text-white px-8 py-4 rounded-full 
        font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black'>ORDER NOW</button>
            </div>
          ))
        }
      </Slider>
    </div>
    </section >
  )
}

export default TopRated