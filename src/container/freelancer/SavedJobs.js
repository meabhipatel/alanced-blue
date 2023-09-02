import React, { useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import thumbdown from '../../components/images/thumbdown.png'
import heart from '../../components/images/heart.png'
import verify from '../../components/images/verify.png'
import location from '../../components/images/location.png'
import { Link } from 'react-router-dom'

const SavedJobs = () => {

    const [selectedButton, setSelectedButton] = useState('Saved Jobs');
    const commonStyle = "inline-block text-sm py-[10px] mt-4 lg:mt-0 border rounded font-semibold"; 

  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
    <div className='my-3 flex flex-wrap'>
    <Link to='' className="flex-grow md:flex-none p-1">
                <span 
                    className={`${commonStyle} px-3 my-3 md:px-8 ${selectedButton === 'Saved Jobs' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Saved Jobs')}>
                    Saved Jobs
                </span>
            </Link>  
            <Link to='/myproposals'className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'Search' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Search')}>
                    Search
                </span>
            </Link>
    </div>
    <div className='my-4 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left'>
    <div className='px-4 md:px-8 py-5 border-b border-gray-200 border-opacity-30'>
    <p className='font-inter opacity-50 text-[#FFC107] text-[13px] py-3'>Job is no longer available</p>
    <div className="flex items-center justify-between">
    <p className="font-inter text-[#0A142F] text-[18px] font-semibold"> UI/UX Web Designer for multiple websites</p>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={thumbdown} alt="" />
        </div>
        <Link to='/savedjobs'><div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={heart} alt="" />
        </div></Link>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[13px] py-3'>Hourly - Intermediate - Est. Time: 1 - Posted 2 months ago</p>
    <p className='font-inter text-opacity-50 text-[#0A142F] text-[14px] py-3'>Need an experienced UI/UX and web designer who can create mockups and multiple websites. I will give details and a rough mockup for you to improve upon in some cases and in others you will create it from scratch.The projects you'll be working on:- FPS game site- Metaverse game site- Game studio site- Painting company siteand a few more I'll explain later.Please share your portfolio and give examples of similar designs you've done.Looking for someone with a minimalist eye who can create beautiful landing pages.  <span className="font-cardo text-[#031136] text-[18px] font-semibold cursor-pointer">More</span></p>
        <img src={verify} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>Payment verified</p>
        <div className="text-[16px] text-[#FFC107] inline-block mx-3">★★★★★</div>
        <img src={location} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>India</p>
    </div>
    <div className='px-4 md:px-8 py-5 bg-[#F6FAFD] border-b border-gray-200 border-opacity-30'>
    <p className='font-inter opacity-50 text-[#FFC107] text-[13px] py-3'>Job is no longer available</p>
    <div className="flex items-center justify-between">
    <p className="font-inter text-[#0A142F] text-[18px] font-semibold"> UI/UX Web Designer for multiple websites</p>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={thumbdown} alt="" />
        </div>
        <Link to='/savedjobs'><div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={heart} alt="" />
        </div></Link>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[13px] py-3'>Hourly - Intermediate - Est. Time: 1 - Posted 2 months ago</p>
    <p className='font-inter text-opacity-50 text-[#0A142F] text-[14px] py-3'>Need an experienced UI/UX and web designer who can create mockups and multiple websites. I will give details and a rough mockup for you to improve upon in some cases and in others you will create it from scratch.The projects you'll be working on:- FPS game site- Metaverse game site- Game studio site- Painting company siteand a few more I'll explain later.Please share your portfolio and give examples of similar designs you've done.Looking for someone with a minimalist eye who can create beautiful landing pages.  <span className="font-cardo text-[#031136] text-[18px] font-semibold cursor-pointer">More</span></p>
        <img src={verify} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>Payment verified</p>
        <div className="text-[16px] text-[#FFC107] inline-block mx-3">★★★★★</div>
        <img src={location} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>India</p>
    </div>
    <div className='px-4 md:px-8 py-5 border-b border-gray-200 border-opacity-30'>
    <p className='font-inter opacity-50 text-[#FFC107] text-[13px] py-3'>Job is no longer available</p>
    <div className="flex items-center justify-between">
    <p className="font-inter text-[#0A142F] text-[18px] font-semibold"> UI/UX Web Designer for multiple websites</p>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={thumbdown} alt="" />
        </div>
        <Link to='/savedjobs'><div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={heart} alt="" />
        </div></Link>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[13px] py-3'>Hourly - Intermediate - Est. Time: 1 - Posted 2 months ago</p>
    <p className='font-inter text-opacity-50 text-[#0A142F] text-[14px] py-3'>Need an experienced UI/UX and web designer who can create mockups and multiple websites. I will give details and a rough mockup for you to improve upon in some cases and in others you will create it from scratch.The projects you'll be working on:- FPS game site- Metaverse game site- Game studio site- Painting company siteand a few more I'll explain later.Please share your portfolio and give examples of similar designs you've done.Looking for someone with a minimalist eye who can create beautiful landing pages.  <span className="font-cardo text-[#031136] text-[18px] font-semibold cursor-pointer">More</span></p>
        <img src={verify} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>Payment verified</p>
        <div className="text-[16px] text-[#FFC107] inline-block mx-3">★★★★★</div>
        <img src={location} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>India</p>
    </div>
    <div className='px-4 md:px-8 py-5 border-b border-gray-200 border-opacity-30'>
    <p className='font-inter opacity-50 text-[#FFC107] text-[13px] py-3'>Job is no longer available</p>
    <div className="flex items-center justify-between">
    <p className="font-inter text-[#0A142F] text-[18px] font-semibold"> UI/UX Web Designer for multiple websites</p>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={thumbdown} alt="" />
        </div>
        <Link to='/savedjobs'><div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={heart} alt="" />
        </div></Link>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[13px] py-3'>Hourly - Intermediate - Est. Time: 1 - Posted 2 months ago</p>
    <p className='font-inter text-opacity-50 text-[#0A142F] text-[14px] py-3'>Need an experienced UI/UX and web designer who can create mockups and multiple websites. I will give details and a rough mockup for you to improve upon in some cases and in others you will create it from scratch.The projects you'll be working on:- FPS game site- Metaverse game site- Game studio site- Painting company siteand a few more I'll explain later.Please share your portfolio and give examples of similar designs you've done.Looking for someone with a minimalist eye who can create beautiful landing pages.  <span className="font-cardo text-[#031136] text-[18px] font-semibold cursor-pointer">More</span></p>
        <img src={verify} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>Payment verified</p>
        <div className="text-[16px] text-[#FFC107] inline-block mx-3">★★★★★</div>
        <img src={location} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>India</p>
    </div>
    <div className='px-4 md:px-8 py-5 border-b border-gray-200 border-opacity-30'>
    <p className='font-inter opacity-50 text-[#FFC107] text-[13px] py-3'>Job is no longer available</p>
    <div className="flex items-center justify-between">
    <p className="font-inter text-[#0A142F] text-[18px] font-semibold"> UI/UX Web Designer for multiple websites</p>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={thumbdown} alt="" />
        </div>
        <Link to='/savedjobs'><div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={heart} alt="" />
        </div></Link>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[13px] py-3'>Hourly - Intermediate - Est. Time: 1 - Posted 2 months ago</p>
    <p className='font-inter text-opacity-50 text-[#0A142F] text-[14px] py-3'>Need an experienced UI/UX and web designer who can create mockups and multiple websites. I will give details and a rough mockup for you to improve upon in some cases and in others you will create it from scratch.The projects you'll be working on:- FPS game site- Metaverse game site- Game studio site- Painting company siteand a few more I'll explain later.Please share your portfolio and give examples of similar designs you've done.Looking for someone with a minimalist eye who can create beautiful landing pages.  <span className="font-cardo text-[#031136] text-[18px] font-semibold cursor-pointer">More</span></p>
        <img src={verify} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>Payment verified</p>
        <div className="text-[16px] text-[#FFC107] inline-block mx-3">★★★★★</div>
        <img src={location} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>India</p>
    </div>
    </div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default SavedJobs