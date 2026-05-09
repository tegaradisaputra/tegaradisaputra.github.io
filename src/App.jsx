import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import HowToWork from './components/HowToWork'
import Projects from './components/Projects'
import Growth from './components/Growth'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <HowToWork/>
      <Projects/>
      <Growth/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
