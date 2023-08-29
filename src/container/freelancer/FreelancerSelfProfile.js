import React, { useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import freelancercover from '../../components/images/freelancercover.png'
import edit from '../../components/images/edit.png'
import profilepic from '../../components/images/profilepic.png'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import { Link, useNavigate } from 'react-router-dom'
import verify from '../../components/images/verify.png'
import location from '../../components/images/location.png'
import availablenow from '../../components/images/availablenow.png'
import jobsuccess from '../../components/images/jobsuccess.png'
import pin from '../../components/images/pin.png'
import threedot from '../../components/images/threedot.png'
import share from '../../components/images/share.png'
import updownarrow from '../../components/images/updownarrow.png'
import plus from '../../components/images/plus.png'
import cupbook from '../../components/images/cupbook.png'
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import testimonial from '../../components/images/testimonial.png'
import certificate from '../../components/images/certificate.png'
import del from '../../components/images/delete.png'
import experience from '../../components/images/experience.png'
import { useDispatch, useSelector } from 'react-redux'


const FreelancerSelfProfile = () => {

  
  const [isAvailable, setIsAvailable] = useState(true);

  const [active, setActive] = React.useState(1);
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  
  const [selectedButton, setSelectedButton] = useState('Graphic Design');
  const [selectedButtons, setSelectedButtons] = useState('Github');
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
   <div class="flex flex-col md:flex-row">
    <div class="md:w-[30%] p-4 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-30 mb-4 md:mb-0">
        <div class="relative w-28 h-28 mx-auto">
            <img src={profilepic} alt="Profile" class="rounded-full w-full h-full border border-gray-200" />
            <div class="absolute top-1 left-2 p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
                <img src={edit} alt="edit" />
            </div>
            <div class="absolute bottom-3 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
    </div>
    <div class="md:w-[70%] border border-gray-200 border-opacity-30 flex flex-col md:flex-row">
        <div class="w-full md:w-3/4 pt-5 text-left pl-8">
            <div className="flex items-center">
                <h1 className="font-cardo text-[24px] text-[#031136] font-normal mr-1">Ayan Jain</h1>
                <img className="h-4 w-4" src={verify} alt="Verification" />
            </div>
            <div className="flex items-center my-2">
                <img src={location} alt="Location" className="h-[13px] mr-1" />
                <p className="text-[#797979] text-[14px] font-inter">Vidisha, India – 3:11 pm local time</p>
            </div>

            <div className="flex space-x-1 mt-2">
                <button
                    onClick={() => setIsAvailable(true)}
                    className={`flex items-center justify-center text-[#0A142F] font-inter opacity-50 text-[13px] py-2 px-4 focus:outline-none rounded-full ${isAvailable ? 'ring-1 ring-gray-400' : ''}`}>
                    <img src={availablenow} alt="" className='h-[16px] mr-2' />
                    Available now
                </button>
                <button
                    onClick={() => setIsAvailable(false)}
                    className={`text-center text-[#0A142F] font-inter opacity-50 text-[13px] py-2 px-4 focus:outline-none rounded-full ${!isAvailable ? 'ring-1 ring-gray-400' : ''}`}>
                    Off
                </button>
                <div class="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-1">
                    <img src={edit} alt="edit" />
                </div>
            </div>
            <div className="flex items-center mt-3">
                <img src={jobsuccess} alt="" className="h-[22px] mr-2" />
                <p className="font-inter text-[#797979] text-[13px]">84% Job Success</p>
            </div>
        </div>
        <div class="w-full md:w-1/4 px-auto pt-8">
            <Link to=''><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-2 font-semibold">See Public View</span></Link>
            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75] mt-3 mr-2">
                <Link to=''><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Profile Settings</p></button></Link>
            </div>
        </div>
    </div>
</div>
<div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] py-4 pl-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left mb-4 md:mb-0">
        <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1 mb-3">Graphic Design</h1>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
            <div className="">
                <h4 className='text-[#031136] font-cardo font-bold text-[23px]'>$300+</h4>
                <p className='text-[#0A142F] font-inter opacity-50 text-[14px]'>Earnings</p>
            </div>
            <div className="">
                <h4 className='text-[#031136] font-cardo font-bold text-[23px]'>6</h4>
                <p className='text-[#0A142F] font-inter opacity-50 text-[14px]'>Jobs</p>
            </div>
            <div className="">
                <h4 className='text-[#031136] font-cardo font-bold text-[23px]'>33</h4>
                <p className='text-[#0A142F] font-inter opacity-50 text-[14px]'>Hours</p>
            </div>
        </div>
    </div>
    <div class="w-full md:w-[70%] py-4 px-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
        <div className="flex items-center justify-between">
            <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">View Profile</h1>
            <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-1">
                <img src={edit} alt="Edit" />
            </div>
        </div>
        <div className='my-3 flex flex-wrap'>
        <Link to=''  className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'Graphic Design' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Graphic Design')}>
                    Graphic Design
                </span>
            </Link>
            <Link to='' className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'UI/UX Design' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('UI/UX Design')}>
                    UI/UX Design
                </span>
            </Link>
            <Link to='' className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'Logo Design' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Logo Design')}>
                    Logo Design
                </span>
            </Link>
            <Link to=''className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'All Work' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('All Work')}>
                    All Work
                </span>
            </Link>
        </div>
    </div>
</div>
    <div class="flex flex-col md:flex-row">
    <div class="flex flex-col w-full md:w-[30%] py-4 pl-4 md:pl-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
    <div>
        <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1 mb-3">All Stats</h1>
    <div className="grid grid-cols-3 gap-3">
    <div className="">
        <h4 className='text-[#031136] font-cardo font-bold text-[23px]'>$1K+</h4>
        <p className='text-[#0A142F] font-inter opacity-50 text-[14px]'>Total Earnings</p>
    </div>
    <div className="">
    <h4 className='text-[#031136] font-cardo font-bold text-[23px]'>6</h4>
    <p className='text-[#0A142F] font-inter opacity-50 text-[14px]'>Total Jobs</p>
    </div>
    <div className="">
    <h4 className='text-[#031136] font-cardo font-bold text-[23px]'>33</h4>
    <p className='text-[#0A142F] font-inter opacity-50 text-[14px]'>Total Hours</p>
    </div>
    </div>
        </div>
        <div class="border-b opacity-50 my-5"></div>
        <div className='mt-2 pr-8'>
        <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Video introduction</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={plus} alt="more" />
        </div>
    </div>
    </div>
        </div>
    </div>

    <div class="w-full md:w-[70%] py-4 px-4 md:px-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
    <div className="flex justify-between items-center">
    <div className="flex items-center">
        <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-2">Graphic Design Specialist</h1>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={edit} alt="Edit" className="align-middle" />
        </div>
    </div>
    <div className="flex items-center">
        <h1 className="font-cardo text-[20px] text-[#031136] font-bold mr-2">$8.00/Hr</h1>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={pin} alt="pin" className="align-middle" />
        </div>
    </div>
</div>
   <p className='font-inter opacity-50 text-[#0A142F] text-[13px] py-1'>Specializes in Graphic Design</p>
   <p className='font-inter opacity-50 text-[#0A142F] text-[14px]'>I've been a graphic designer for more than 6+ years, assisting organizations and people to successfully market themselves. I have worked as a freelancer for both profit and nonprofit organizations. All facets of design, from letterhead, newsletters, and invitations to huge graphics and website banners, as well as website maintenance, are under my area of expertise....</p>
   <h1 className="font-cardo text-[18px] text-[#031136] font-normal py-2 cursor-pointer">See More</h1>
    </div>
</div>

<div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] px-4 md:px-8 bg-[#FFFFFF] py-6 border border-gray-200 border-opacity-30 text-left">
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Video introduction</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={edit} alt="edit" />
        </div>
    </div>
    </div>
    <p className='font-inter text-[#0A142F] text-[14px] py-1'>More than 30 hrs/week</p>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px]'>Open to contract to hire</p>
    </div>

    <div class="w-full md:w-[70%] pt-6 px-4 md:px-8 bg-[#FFFFFF] border border-gray-100 border-opacity-40 text-left">
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Work History</h1>
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
        className={`font-inter opacity-50 text-[#0A142F] text-[13px] py-2 inline-block pr-8 relative cursor-pointer`} 
        onClick={() => setSelected('completed')}
    >
        Completed Jobs (4)
        {selected === 'completed' && <span style={underlineStyle}></span>}
    </p>

    <p 
        className={`font-inter opacity-50 text-[#0A142F] text-[13px] py-2 inline-block relative cursor-pointer`} 
        onClick={() => setSelected('inProgress')}
    >
        In Progress (2)
        {selected === 'inProgress' && <span style={underlineStyle}></span>}
    </p>

    </div>
</div>

<div class="flex flex-col md:flex-row">
    <div class="flex flex-col w-full md:w-[30%] py-4 px-4 md:px-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
    <div class="">
        <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Video introduction</h1>
    <div className="flex items-center space-x-2">
    <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={plus} alt="more" />
        </div>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={edit} alt="edit" />
        </div>
    </div>
    </div>
    <p className='font-inter text-[#0A142F] text-[14px] py-1'>English : <span className='opacity-50'>Native or Bilingual</span></p>
    <p className='font-inter text-[#0A142F] text-[14px]'>Hindi : <span className='opacity-50'>Native or Bilingual</span></p>
        </div>
        <div class="border-b opacity-50 my-5"></div>
        <div class="">
        <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Verifications</h1>
    <p className='font-inter text-[#0A142F] text-[14px] py-1 inline-block mr-1'>ID : <span className='opacity-50'>Verified</span></p>
    <img src={verify} alt="" className='inline-block h-3 w-3'/>
    <div className="flex items-center justify-between">
    <p className='font-inter text-[#0A142F] text-[14px] py-1 opacity-50'>Military Veteran</p>
    <div className="flex items-center space-x-2">
    <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={plus} alt="more" />
        </div>
    </div>
    </div>
        </div>
        <div class="border-b opacity-50 my-5"></div>
        <div class="">
        <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Education</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={plus} alt="more" />
        </div>
    </div>
    </div> 
    <div class="border-b opacity-50 my-5"></div>
    <div className='my-3 flex flex-wrap'>
        <Link to=''  className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-6 ${selectedButtons === 'Github' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-1`}
                    onClick={() => setSelectedButtons('Github')}>
                    Github
                </span>
            </Link>
            <Link to='' className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-6 ${selectedButtons === 'StackOverflow' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButtons('StackOverflow')}>
                    StackOverflow
                </span>
            </Link>
        </div>
        </div>
    </div>

    <div class="w-full md:w-[70%] py-4 px-4 md:px-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
    <div className="flex justify-between items-center">
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] py-1'>Banner designer for Dental Clinic</p>
    <div className="flex items-center space-x-2">
        <div className="text-[16px] text-yellow-500 mr-1 inline-block">★★★★★</div>
        <p className='font-inter opacity-50 text-[#0A142F] text-[14px] inline-block'>5.0</p>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 inline-block">
            <img src={share} alt="share" />
        </div>
    </div>
</div>
   <p className='font-inter opacity-50 text-[#0A142F] text-[12px]'>Dec 26, 2022 - Dec 27, 2022</p>
   <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-3'>"Great job and great guy to work with!! Fast work and very responsive and skilled. Thank you so much!"</p>
   <div class="grid grid-cols-3 gap-4 my-6">
  <div class="">
    <p className='font-cardo text-[#031136] text-[16px] font-bold'>$30.00</p>
  </div>
  <div class="">
    <p className='font-cardo text-[#031136] text-[16px] font-bold'>Fixed Price</p>
  </div>
  <div class=""></div>
</div>
<div class="border-b opacity-50 my-4"></div>
<div className="flex justify-between items-center">
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] py-1'>Banner designer for Dental Clinic</p>
    <div className="flex items-center space-x-2">
        <div className="text-[16px] text-yellow-500 mr-1 inline-block">★★★★★</div>
        <p className='font-inter opacity-50 text-[#0A142F] text-[14px] inline-block'>5.0</p>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 inline-block">
            <img src={share} alt="share" />
        </div>
    </div>
</div>
   <p className='font-inter opacity-50 text-[#0A142F] text-[12px]'>Dec 26, 2022 - Dec 27, 2022</p>
   <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-3'>"Great job and great guy to work with!! Fast work and very responsive and skilled. Thank you so much!"</p>
   <div class="grid grid-cols-3 gap-4 my-6">
  <div class="">
    <p className='font-cardo text-[#031136] text-[16px] font-bold'>$30.00</p>
  </div>
  <div class="">
    <p className='font-cardo text-[#031136] text-[16px] font-bold'>Fixed Price</p>
  </div>
  <div class=""></div>
</div>
<div class="border-b opacity-50 my-4"></div>
<h1 className="font-cardo text-[20px] text-[#031136] font-normal text-right cursor-pointer">Show More</h1>
    </div>
</div>

<div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] pt-3 px-4 md:px-8 bg-[#FFFFFF] py-8 border-l border-gray-200 border-opacity-30 text-left"></div>

    <div class="w-full md:w-[70%] pt-3 px-4 md:px-8 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-30 text-left">
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Portfolio (4)</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={updownarrow} alt="" />
        </div>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={plus} alt="More" />
        </div>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={edit} alt="edit" />
        </div>
    </div>
    </div>
    <div className='w-[190px] h-[165px] inline-block mt-4 mr-2'>
    <div className='w-full h-[150px] border border-gray-100'>
        <img src={cupbook} alt="" />
    </div>
    <p className='font-inter text-[#0A142F] text-[13px] pt-2'>Figma Design</p>
   </div>
   <div className='w-[190px] h-[165px] inline-block mt-4 mr-2'>
    <div className='w-full h-[150px] border border-gray-100'>
        <img src={cupbook} alt="" />
    </div>
    <p className='font-inter text-[#0A142F] text-[13px] pt-2'>Figma Design</p>
   </div>
    <div className="flex justify-end items-center gap-6 mt-5">
  <IconButton
    size="sm"
    variant="outlined"
    onClick={prev}
    disabled={active === 1}
    style={{ backgroundImage: 'linear-gradient(45deg, #00BF58, #E3FF75)', border: 'none' }}
  >
    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-white" />
  </IconButton>

  
  {[...Array(5)].map((_, index) => {
    const pageNumber = index + 1;
    return (
      <span
        key={pageNumber}
        className={`px-0 py-1 ${active === pageNumber ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#00BF58] to-[#E3FF75] font-bold font-inter text-[14px] cursor-pointer' : 'text-[#0A142F] font-bold font-inter text-[14px] cursor-pointer'}`}
        onClick={() => setActive(pageNumber)}
      >
        {pageNumber}
      </span>
    );
  })}

  <IconButton
    size="sm"
    variant="outlined"
    onClick={next}
    disabled={active === 5}
    style={{ backgroundImage: 'linear-gradient(45deg, #00BF58, #E3FF75)', border: 'none' }}
  >
    <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-white" />
  </IconButton>
</div>
    </div>
</div>

<div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] pt-3 px-4 md:px-8 bg-[#FFFFFF] py-8 border-l border-gray-200 border-opacity-30 text-left"></div>

    <div class="w-full md:w-[70%] pt-3 px-4 md:px-8 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-30 text-left">
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Skills & Expertise</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={edit} alt="edit" />
        </div>
    </div>
    </div>
    <p className='font-inter text-[#0A142F] text-[13px] py-2'>Graphic Design Deliverables</p>
    <Link to=''><span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2'>Social Media Imagery</span></Link>
    <Link to=''><span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2'>Infographic</span></Link>
    <p className='font-inter text-[#0A142F] text-[13px] pt-6 pb-2'>Graphic Design Services</p>
    <Link to=''><span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2'>Advertising Design</span></Link>
    </div>
</div>
<div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] pt-3 px-4 md:px-8 bg-[#FFFFFF] py-8 border-l border-b border-gray-200 border-opacity-30 text-left"></div>

    <div class="w-full md:w-[70%] pt-3 px-4 md:px-8 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-30 text-left">
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Your Project Catalog</h1>
    <div className="flex items-center space-x-2">
    <Link to=''><span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2'>Manage Projects</span></Link>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-4'>Projects are a new way to earn on Upwork that helps you do more of the work you love to do. Create project offerings that highlight your strengths and attract more clients.</p>
    </div>
    </div>
    <div className='my-6 p-4 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-40'>
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Testimonials</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={plus} alt="more" />
        </div>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-2 text-left'>Endorsements from past clients</p>
    <img src={testimonial} alt="" className='mx-auto mt-2'/>
    <p className='font-inter opacity-50 text-[#0A142F] text-[16px] py-2'>Showcasing client testimonials can strengthen your profile. (+5%)</p>
    <p className='font-inter text-[#0A142F] text-[14px]'>Request a testimonial</p>
    </div>
    <div className='my-6 p-4 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-40'>
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Certifications</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={plus} alt="more" />
        </div>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-2 text-left'>Endorsements from past clients</p>
    <img src={certificate} alt="" className='mx-auto mt-2'/>
    <p className='font-inter opacity-50 text-[#0A142F] text-[16px] py-2'>Listing your certifications can help prove your specific knowledge or abilities. (+10%)You can <br />
    add them manually or import them from Credly.</p>
    <div class="flex justify-center items-center">
    <div class="flex space-x-12 font-inter text-[#0A142F] text-[14px]">
        <p>Add manually</p>
        <p>Import from Credly</p>
    </div>
</div>
    </div>
    <div className='my-6 p-4 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-40'>
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Employment history</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={plus} alt="more" />
        </div>
    </div>
    </div>
    <div class="border-b opacity-50 my-3"></div>
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[18px] text-[#031136] font-normal mr-1">Graphic Designer | Wiz91 Technologies</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={edit} alt="edit" />
        </div>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={del} alt="delet" />
        </div>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-2 text-left'>January 2021 - Present</p>
    <div class="border-b opacity-50 my-3"></div>
    <h1 className="font-cardo text-[20px] text-[#031136] font-normal mx-auto cursor-pointer">Show More</h1>
    </div>
    <div className='my-6 p-4 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-40'>
    <div className="flex items-center justify-between">
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Other Experiences</h1>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={plus} alt="more" />
        </div>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-2 text-left'>Endorsements from past clients</p>
    <img src={experience} alt="" className='mx-auto mt-2'/>
    <p className='font-inter opacity-50 text-[#0A142F] text-[16px] py-2'>Highlighting relevant experiences can boost your visibility in our search results. (+5%)</p>
    <p className='font-inter text-[#0A142F] text-[14px]'>Add an experience</p>
    </div>
   </div>
   <HomeSection4/>
   <Footer/>
   </>
  )
}

export default FreelancerSelfProfile