import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tracker from './components/Tracker'
import Header from './components/Header'
import Test from './components/Test'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  // console.log(landingPageData);
  return(
  
    <div>
   <Header/>
   <Tracker/>
   <Hero/>
   <Features/>
   <Test/>
   <Footer/>

   
    </div>
  )

  
}

export default App
