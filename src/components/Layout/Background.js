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
          <h6 className='text-[#797979] text-lg font-semibold tracking-wider'><span className='text-[#031136] indent-4'>Unlock:</span>  Your Potential with Alanced</h6>
          <h1 className='text-[50px] font-cardo font-semibold leading-[67.7px] mt-2 text-[#031136]'>Welcome to Alanced: <br/>  Your Hub for  <br/> Freelance Excellence</h1>
          <h6 className='mt-6 text-[#797979] text-[16px] font-inter font-normal leading-[26px] mb-3.5'>At Alanced, we believe in empowering freelancers and businesses to connect, <br/>collaborate, and create remarkable results.</h6>
          <Link to='/sign-up'><span class="inline-block text-sm px-4 py-[10px] lg:mt-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white mr-2 font-semibold">Get Started</span></Link>
        </div>
    </div>
    </>
  )
}

export default Background
