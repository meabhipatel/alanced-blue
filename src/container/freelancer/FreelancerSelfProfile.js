import React, { useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import freelancercover from '../../components/images/freelancercover.png'
import edit from '../../components/images/edit.png'
import profilepic from '../../components/images/profilepic.png'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import { Link } from 'react-router-dom'
import verify from '../../components/images/verify.png'
import location from '../../components/images/location.png'
import availablenow from '../../components/images/availablenow.png'
import jobsuccess from '../../components/images/jobsuccess.png'
import pin from '../../components/images/pin.png'
import threedot from '../../components/images/threedot.png'
import share from '../../components/images/share.png'


const FreelancerSelfProfile = () => {
  
  const [isAvailable, setIsAvailable] = useState(true);

  const [selectedButton, setSelectedButton] = useState('Graphic Design');
  const commonStyle = "inline-block text-sm py-[10px] mt-4 lg:mt-0 border rounded font-semibold";

  const [selected, setSelected] = useState('completed');

  const underlineStyle = {
        content: '""',
        display: 'block',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, #00BF58, #E3FF75)'
    };

  return (
   <>
   <Navbar/>
   <div className='mt-4 mx-[9%]'>
   <img src={freelancercover} alt="" className=''/>
   <div class="flex">
    <div class="w-[30%] p-4 bg-[#FFFFFF] py-8 border border-gray-100 border-opacity-50">
    <div class="relative w-28 h-28 mx-auto">
    <img src={profilepic} alt="Profile" class="rounded-full w-full h-full border border-gray-200"/> 
    <div class="absolute top-1 left-2 p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
        <img src={edit} alt="" />
    </div>
    <div class="absolute bottom-3 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
</div>
    </div>
    <div class="w-[70%] border border-gray-100 border-opacity-50 flex">
        <div class="w-3/4 pt-5 text-left pl-8">
        <div className="flex items-center">
        <h1 className="font-cardo text-xl text-[#031136] font-normal mr-1">Ayan Jain</h1>
        <img className="h-4 w-4" src={verify} alt="Verification badge" />
        </div>
        <div className="flex items-center my-2">
            <img src={location} alt="Location icon" className="h-[13px] mr-1"/>
            <p className="text-[#797979] text-xs font-inter">Vidisha, India – 3:11 pm local time</p>
        </div>
        
        <div className="flex space-x-1 mt-2">
        <button
        onClick={() => setIsAvailable(true)}
        className={`flex items-center justify-center text-[#0A142F] font-inter opacity-50 text-[12px] py-2 px-4 focus:outline-none rounded-full ${isAvailable ? 'ring-1 ring-gray-400' : ''}`}
        >
        <img src={availablenow} alt="" className='h-[16px] mr-2'/> 
        Available now
        </button>
        <button
        onClick={() => setIsAvailable(false)}
        className={`text-center text-[#0A142F] font-inter opacity-50 text-[12px] py-2 px-4 focus:outline-none rounded-full ${!isAvailable ? 'ring-1 ring-gray-400' : ''}`}
        >
        Off
        </button>
        <div class="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-1">
        <img src={edit} alt="" />
        </div>
        </div>
        <div className="flex items-center mt-3">
        <img src={jobsuccess} alt="" className="h-[22px] mr-2"/>
        <p className="font-inter text-[#797979] text-[12px]">84% Job Success</p>
        </div>

        </div>
        <div class="w-1/4 px-auto pt-8">
        <Link to=''><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-2 font-semibold">See Public View</span></Link>
      <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75] mt-3 mr-2">
      <Link to=''><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Profile Settings</p></button></Link>
</div>
        </div>
    </div>
</div>
<div class="flex">
    <div class="w-[30%] pt-3 pl-8 bg-[#FFFFFF] py-8 border border-gray-100 border-opacity-50 text-left">
    <h1 className="font-cardo text-[18px] text-[#031136] font-normal mr-1 mb-3">Graphic Design</h1>
    <div className="grid grid-cols-3 gap-3">
    <div className="">
        <h4 className='text-[#031136] font-cardo font-bold text-[20px]'>$300+</h4>
        <p className='text-[#0A142F] font-inter opacity-50 text-[11px]'>Earnings</p>
    </div>
    <div className="">
    <h4 className='text-[#031136] font-cardo font-bold text-[20px]'>6</h4>
    <p className='text-[#0A142F] font-inter opacity-50 text-[11px]'>Jobs</p>
    </div>
    <div className="">
    <h4 className='text-[#031136] font-cardo font-bold text-[20px]'>33</h4>
    <p className='text-[#0A142F] font-inter opacity-50 text-[11px]'>Hours</p>
    </div>
</div>

    </div>
    <div class="w-[70%] pt-3 px-8 bg-[#FFFFFF] py-8 border border-gray-100 border-opacity-50 text-left">
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[18px] text-[#031136] font-normal mr-1">View Profile</h1>
    <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-1">
        <img src={edit} alt="Edit" />
    </div>
    </div>
    <div className='my-3'>
            <Link to=''>
                <span className={`${commonStyle} px-8 ${selectedButton === 'Graphic Design' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-6`}
                    onClick={() => setSelectedButton('Graphic Design')}>
                    Graphic Design
                </span>
            </Link>
            <Link to=''>
                <span className={`${commonStyle} px-8 ${selectedButton === 'UI/UX Design' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-6`}
                    onClick={() => setSelectedButton('UI/UX Design')}>
                    UI/UX Design
                </span>
            </Link>
            <Link to=''>
                <span className={`${commonStyle} px-9 ${selectedButton === 'Logo Design' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-6`}
                    onClick={() => setSelectedButton('Logo Design')}>
                    Logo Design
                </span>
            </Link>
            <Link to=''>
                <span className={`${commonStyle} px-11 ${selectedButton === 'All Work' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-6`}
                    onClick={() => setSelectedButton('All Work')}>
                    All Work
                </span>
            </Link>
        </div>
    </div>
    </div>
    <div class="flex">
    <div class="w-[30%] pt-3 pl-8 bg-[#FFFFFF] py-8 border border-gray-100 border-opacity-50 text-left">
    <h1 className="font-cardo text-[18px] text-[#031136] font-normal mr-1 mb-3">All Stats</h1>
    <div className="grid grid-cols-3 gap-3">
    <div className="">
        <h4 className='text-[#031136] font-cardo font-bold text-[20px]'>$1K+</h4>
        <p className='text-[#0A142F] font-inter opacity-50 text-[11px]'>Total Earnings</p>
    </div>
    <div className="">
    <h4 className='text-[#031136] font-cardo font-bold text-[20px]'>6</h4>
    <p className='text-[#0A142F] font-inter opacity-50 text-[11px]'>Total Jobs</p>
    </div>
    <div className="">
    <h4 className='text-[#031136] font-cardo font-bold text-[20px]'>33</h4>
    <p className='text-[#0A142F] font-inter opacity-50 text-[11px]'>Total Hours</p>
    </div>
    </div>
    </div>
    <div class="w-[70%] pt-4 px-8 bg-[#FFFFFF] py-8 border border-gray-100 border-opacity-50 text-left">
    <div className="flex justify-between items-center">
    <div className="flex items-center">
        <h1 className="font-cardo text-[16px] text-[#031136] font-normal mr-2">Graphic Design Specialist</h1>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={edit} alt="Edit" className="align-middle" />
        </div>
    </div>
    <div className="flex items-center">
        <h1 className="font-cardo text-[18px] text-[#031136] font-bold mr-2">$8.00/Hr</h1>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={pin} alt="pin" className="align-middle" />
        </div>
    </div>
</div>
   <p className='font-inter opacity-50 text-[#0A142F] text-[11px] py-1'>Specializes in Graphic Design</p>
   <p className='font-inter opacity-50 text-[#0A142F] text-[11px]'>I've been a graphic designer for more than 6+ years, assisting organizations and people to successfully market themselves. I have worked as a freelancer for both profit and nonprofit organizations. All facets of design, from letterhead, newsletters, and invitations to huge graphics and website banners, as well as website maintenance, are under my area of expertise....</p>
   <h1 className="font-cardo text-[14px] text-[#031136] font-normal py-2 cursor-pointer">See More</h1>
    </div>
    </div>
    <div class="flex">
    <div class="w-[30%] pt-3 pl-8 bg-[#FFFFFF] py-8 border border-gray-100 border-opacity-50 text-left"></div>
    <div class="w-[70%] pt-3 px-8 bg-[#FFFFFF] border border-gray-100 border-opacity-50 text-left">
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[16px] text-[#031136] font-normal mr-1">Work History</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={threedot} alt="View More" />
        </div>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={edit} alt="Edit" />
        </div>
    </div>
    </div>
    <p 
        className={`font-inter opacity-50 text-[#0A142F] text-[11px] py-2 inline-block pr-8 relative cursor-pointer`} 
        onClick={() => setSelected('completed')}
    >
        Completed Jobs (4)
        {selected === 'completed' && <span style={underlineStyle}></span>}
    </p>

    <p 
        className={`font-inter opacity-50 text-[#0A142F] text-[11px] py-2 inline-block relative cursor-pointer`} 
        onClick={() => setSelected('inProgress')}
    >
        In Progress (2)
        {selected === 'inProgress' && <span style={underlineStyle}></span>}
    </p>

    </div>
    </div>
    <div class="flex">
    <div class="w-[30%] pt-3 pl-8 bg-[#FFFFFF] py-8 border border-gray-100 border-opacity-50 text-left"></div>
    <div class="w-[70%] pt-3 px-8 bg-[#FFFFFF] py-8 border border-gray-100 border-opacity-50 text-left">
    <div className="flex justify-between items-center">
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] py-1'>Banner designer for Dental Clinic</p>
    <div className="flex items-center space-x-2">
        <div className="text-sm text-yellow-500 mr-1 inline-block">★★★★★</div>
        <p className='font-inter opacity-50 text-[#0A142F] text-[11px] inline-block'>5.0</p>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 inline-block">
            <img src={share} alt="share" />
        </div>
    </div>
</div>
   <p className='font-inter opacity-50 text-[#0A142F] text-[10px]'>Dec 26, 2022 - Dec 27, 2022</p>
   <p className='font-inter opacity-50 text-[#0A142F] text-[12px] pt-3'>"Great job and great guy to work with!! Fast work and very responsive and skilled. Thank you so much!"</p>
   <div class="grid grid-cols-3 gap-4 my-6">
  <div class="">
    <p className='font-cardo text-[#031136] text-[14px] font-bold'>$30.00</p>
  </div>
  <div class="">
    <p className='font-cardo text-[#031136] text-[14px] font-bold'>Fixed Price</p>
  </div>
  <div class=""></div>
</div>
<div class="border-b opacity-50"></div>

    </div>
    </div>
   </div>
   <HomeSection4/>
   <Footer/>
   </>
  )
}

export default FreelancerSelfProfile