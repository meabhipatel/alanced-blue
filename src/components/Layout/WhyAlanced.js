import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import HomeSection4 from './HomeSection4'
import topimg2 from '../images/womanwithtab.png'
import { Link } from 'react-router-dom'
import topimg from '../images/refrel.png'

const WhyAlanced = () => {
  return (
    <>
    <Navbar/>
    <div className='container-sm px-32 mt-10'>
      <div className=' flex flex-row border border-gray-200 bg-[#dcf7ea] rounded bg-opacity-50'>
        <div className=' basis-8/12'>
          <h1 className='ml-8 text-left font-jost text-[26px] mt-6 font-semibold text-lime-600'>Take part in the global job market platform.</h1>
          <p className=' ml-8 font-inter font-normal text-[16px] mt-3 opacity-[50%] text-left'>Are you geared up to take your business<br/> or career to the next level?. </p>
          <div className=' flex flex-row mt-3  mb-5 ml-7'>
            <Link to='/view-all/freelancer'><div className=' basis-2/12' ><button className='h-10 w-28 text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-5 text-base font-semibold rounded'>Find Talent</button></div></Link>
            <Link to='/projects'><div class="p-0.5 mt-5 rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75] ml-5">
            <button class="px-2 py-1 bg-[#f8faf9] rounded"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-bold text-sm py-[4px] px-[8px]">Find Work</p></button>
            </div></Link>
            </div>
        </div>
        <div className=' basis-4/12'><img src={topimg} alt="" className='h-48 mx-auto'/></div>
      </div>
      <div className=' flex flex-row border border-gray-200 rounded'>
        <div className=' basis-6/12'></div>
        <div className=' basis-6/12'></div>
      </div>
    </div>
    </>
  )
}

export default WhyAlanced
