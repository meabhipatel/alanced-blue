import React from 'react'
import Navbar from './Navbar'
import Background from './Background'
import Footer from './Footer'
import Section from './HomeSection'
import HomeSection1 from './HomeSection1'
import HomeSection3 from './HomeSection3'

const Header = () => {
  return (
    <div>
      <Background/>
      <Section/>
      <HomeSection1/>
      <HomeSection3/>
      <Footer/>
      
    </div>
  )
}

export default Header



