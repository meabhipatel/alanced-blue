import React from 'react'
import background from '../images/alanced-back.png'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Background = () => {
  return (
    <>
    <Navbar/>
    <div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${background})` }}>
        
        <div className='text-left pt-36 ml-[11.5vw] -mt-[1.5vh]'>
          <h1 className='text-[50px] font-cardo font-semibold leading-[67.7px] mt-2 text-[#031136]'>Welcome to Alanced: <br/> Your Gateway to  <br/> Freelance Success</h1>
          <h2 className='mt-6 text-[#797979] text-[16px] font-inter font-normal leading-[26px] mb-3.5'>Are you ready to turn your skills into a thriving freelance career?<br/> At Alanced, we empower talented individuals like you to seize control <br/>of your professional journey. Whether you're a seasoned expert or just<br/> starting out, our platform offers everything you need to thrive in the world of freelancing.

</h2>
          <Link to='/sign-up'><span class="inline-block text-sm px-4 py-[10px] lg:mt-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white mr-2 font-semibold">Get Started</span></Link>
        </div>
    </div>
    </>
  )
}

export default Background
