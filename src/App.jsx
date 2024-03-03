import React from 'react'
import Header from './Sections/Header'
import Hero from './Sections/Hero'

import TopRated from './Sections/TopRated'
import BestSellers from './Sections/BestSellers'
import Faq from './Sections/Faq'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import { DarkModeProvider } from './DarkModeContext'
import About from './Sections/About'



const App = () => {
  return (
    <>
  <DarkModeProvider>
  <Header/>
    <Hero/>
    <About/>
    <TopRated/>
    <BestSellers/>
    <Faq/>
    <Contact/>
    <Footer/>
  </DarkModeProvider>
   
      
    
    
    </>
  )
}

export default App