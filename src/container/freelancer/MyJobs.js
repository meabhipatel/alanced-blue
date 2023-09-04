import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import gradientdot from '../../components/images/gradientdot.png'
import search from '../../components/images/SearchOutlined.png'
import threedot from '../../components/images/threedot.png'
import { Link } from 'react-router-dom'

const MyJobs = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
    <div className="flex justify-between items-center">
    <div className="flex items-center">
    <h1 className='font-cardo text-[21px] text-[#031136] font-normal pt-4 text-left'>My Jobs</h1>
    </div>
    <div className="flex items-center">
    <h1 className='font-cardo text-[19px] text-[#031136] font-normal pt-4 text-left opacity-50 mr-1'>Earnings available now:</h1>
    <h1 className='font-cardo text-[19px] text-[#031136] font-bold pt-4 text-left mr-2'>$0.00</h1>
    <div class="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-4">
        <img src={gradientdot} alt="" />
    </div>
    </div>
</div>
<div className='my-4 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left'>
<div className='px-4 md:px-2 py-4 border-b border-gray-200 border-opacity-30'>
<div className="flex justify-between items-center">
    <div className="flex items-center">
    <h1 className='font-inter text-[16px] font-semibold text-[#031136] p-3'>Active Contracts</h1>
    </div>
    <div className="flex items-center">
    <div className='flex items-center mr-1 space-x-1 border p-1 w-[200px] rounded-md'>
        <img src={search} alt="Search Icon" className="h-3 w-3 mr-1" />
        <input className='w-28 lg:w-40 xl:w-[160px] h-7 text-xs lg:text-sm outline-none' placeholder='Search Contracts' />
    </div>
    </div>
</div>
</div>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30'>
<div className="flex justify-between items-center">
    <div className="flex items-center">
    <h1 className='font-cardo text-[18px] text-[#031136]'>UI UX design for Education Resources Mobile App</h1>
    </div>
    <div className="flex items-center">
    <Link to=''>
            <span className='inline-block text-sm py-[6px] px-4 mt-4 lg:mt-0 border rounded font-semibold bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none mr-2'>
            See Timesheet
            </span>
        </Link>
        <div class="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-1">
        <img src={gradientdot} alt="" />
    </div>
    </div>
</div>
<p className='font-inter text-[14px] text-[#031136] pt-1'>Staffed by: <span className='opacity-50'>AMIT B. at Wiz91 Technologies</span></p>
<div className="flex justify-between items-center">
    <p className='font-inter text-[14px] text-[#031136] py-2'>
        Hired by: <span className='opacity-50'>Aloha Apps</span>
    </p>
    
    <p className='font-inter text-[14px] text-[#031136]'>
        Active: <span className='text-[#03C058]'>5:10 hrs</span> <span className='opacity-50 text-[#0A142F]'>this week</span>
    </p>
    
    <p className='font-inter text-[14px] text-[#0A142F] opacity-50'>
        Aug 31 - Present
    </p>
</div>
</div>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30'>
<div className="flex justify-between items-center">
    <div className="flex items-center">
    <h1 className='font-cardo text-[18px] text-[#031136]'>UI UX design for Education Resources Mobile App</h1>
    </div>
    <div className="flex items-center">
    <Link to=''>
            <span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2'>
            See Timesheet
            </span>
        </Link>
        <div class="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-1">
        <img src={threedot} alt="" />
    </div>
    </div>
</div>
<p className='font-inter text-[14px] text-[#031136] pt-1'>Staffed by: <span className='opacity-50'>AMIT B. at Wiz91 Technologies</span></p>
<div className="flex justify-between items-center">
    <p className='font-inter text-[14px] text-[#031136] py-2'>
        Hired by: <span className='opacity-50'>Aloha Apps</span>
    </p>
    
    <p className='font-inter text-[14px] text-[#031136]'>
        Active: <span className='text-[#03C058]'>5:10 hrs</span> <span className='opacity-50 text-[#0A142F]'>this week</span>
    </p>
    
    <p className='font-inter text-[14px] text-[#0A142F] opacity-50'>
        Aug 31 - Present
    </p>
</div>
</div>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30'>
<div className="flex justify-between items-center">
    <div className="flex items-center">
    <h1 className='font-cardo text-[18px] text-[#031136]'>UI UX design for Education Resources Mobile App</h1>
    </div>
    <div className="flex items-center">
    <Link to=''>
            <span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2'>
            See Timesheet
            </span>
        </Link>
        <div class="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-1">
        <img src={threedot} alt="" />
    </div>
    </div>
</div>
<p className='font-inter text-[14px] text-[#031136] pt-1'>Staffed by: <span className='opacity-50'>AMIT B. at Wiz91 Technologies</span></p>
<div className="flex justify-between items-center">
    <p className='font-inter text-[14px] text-[#031136] py-2'>
        Hired by: <span className='opacity-50'>Aloha Apps</span>
    </p>
    
    <p className='font-inter text-[14px] text-[#031136]'>
        Active: <span className='text-[#03C058]'>5:10 hrs</span> <span className='opacity-50 text-[#0A142F]'>this week</span>
    </p>
    
    <p className='font-inter text-[14px] text-[#0A142F] opacity-50'>
        Aug 31 - Present
    </p>
</div>
</div>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30'>
<div className="flex justify-between items-center">
    <div className="flex items-center">
    <h1 className='font-cardo text-[18px] text-[#031136]'>UI UX design for Education Resources Mobile App</h1>
    </div>
    <div className="flex items-center">
    <Link to=''>
            <span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2'>
            See Timesheet
            </span>
        </Link>
        <div class="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-1">
        <img src={threedot} alt="" />
    </div>
    </div>
</div>
<p className='font-inter text-[14px] text-[#031136] pt-1'>Staffed by: <span className='opacity-50'>AMIT B. at Wiz91 Technologies</span></p>
<div className="flex justify-between items-center">
    <p className='font-inter text-[14px] text-[#031136] py-2'>
        Hired by: <span className='opacity-50'>Aloha Apps</span>
    </p>
    
    <p className='font-inter text-[14px] text-[#031136]'>
        Active: <span className='text-[#03C058]'>5:10 hrs</span> <span className='opacity-50 text-[#0A142F]'>this week</span>
    </p>
    
    <p className='font-inter text-[14px] text-[#0A142F] opacity-50'>
        Aug 31 - Present
    </p>
</div>
</div>
<div className='px-4 md:px-8 py-6 border-b border-gray-200 border-opacity-30'>
<Link to=''><span class="text-sm py-[8px] lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold lg:px-[462px] px-6">View All Contracts</span></Link>
</div>
</div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default MyJobs