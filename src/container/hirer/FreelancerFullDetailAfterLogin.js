import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import profilepic from '../../components/images/profilepic.png'
import verify from '../../components/images/verify.png'
import locations from '../../components/images/location.png'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'

const FreelancerFullDetailAfterLogin = () => {

  const location = useLocation();
  const freelancer = location.state && location.state.free;

  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const accessToken = useSelector(state => state.login.accessToken);  
//   const freelancerselfprofile = useSelector(state => state.freelancer.freelancerselfprofile)
//   const [freelancerproject, setfreelancerproject] = useState([]);
//   const id = freelancerselfprofile && freelancerselfprofile[0].id ? freelancerselfprofile[0].id : '';
//   const [selectedProjects, setSelectedProjects] = useState(null);

  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
    <div className="flex mt-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30">
  <div className="flex-[20%] p-6">
  <div className="relative w-24 h-24">
                    <img src={"https://aparnawiz91.pythonanywhere.com/"+freelancer.images_logo} alt="Profile" className="rounded-full w-full h-full border border-gray-200" />
                    <div class="absolute bottom-3 right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
  </div>
  <div className="flex-[30%] py-6">
  <div className="flex items-center">
                <h1 className="font-cardo text-[24px] text-[#031136] font-normal mr-1">{freelancer.first_Name}
            </h1>
                <img className="h-4 w-4" src={verify} alt="Verification" />
            </div>
            <div className="flex items-center my-1">
                <img src={locations} alt="Location" className="h-[13px] mr-1" />
                <p className="text-[#797979] text-[14px] font-inter">{freelancer.Address ? freelancer.Address:'NA'}</p>
            </div>
            {/* <p className="text-green-600 text-[16px] font-inter py-3 font-semibold cursor-pointer hover:underline">View Profile</p> */}
  </div>
  <div className="flex-[50%] p-6 text-right">
  <span class="inline-block text-sm px-10 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-4 font-semibold">Message</span>
            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75] mt-3 mr-2">
                <button class="px-11 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Hire</p></button>
            </div>
  </div>
</div>
        <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] py-4 px-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
    <h1 className="font-cardo text-xl text-[#031136] font-normal">Applicant</h1>
    <p className="text-[#031136] opacity-50 text-[14px] font-inter py-2">{freelancer.first_Name} has applied to or been invited to your or your company's job </p>
    <h1 className="font-cardo text-xl text-[#031136] font-normal pt-4">Hourly Rate</h1>
    {/* <p className="text-[#031136] opacity-50 text-[14px] font-inter py-2">$5.00/hr</p> */}
    <h1 className="font-cardo text-xl text-[#031136] font-semibold inline-block py-2 opacity-50">$5.00/hr</h1>
    <h1 className="font-cardo text-xl text-[#031136] font-normal pt-4">Entry Level</h1>
    </div>
    <div class="w-full md:w-[70%] py-4 px-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
    <div className="flex justify-between items-center">
    <h1 className="font-cardo text-2xl text-[#031136] font-normal">Proposal Details</h1>
    <div>
        <h1 className="font-cardo text-xl text-[#031136] font-semibold">$4500/hr</h1>
        <p className="text-[#031136] opacity-50 text-[14px] font-inter font-semibold">Proposed bid</p>
    </div>
</div>
<div className="border-b opacity-60 my-3"></div>
<h1 className="font-cardo text-xl text-[#031136] font-normal">Cover Letter</h1>
<p className="text-[#031136] opacity-50 text-[14px] font-inter py-4">An online grocer is either a brick-and-mortar supermarket or grocery store that allows online ordering, or a standalone e-commerce service that includes grocery items. There is usually a delivery charge for this service.</p>
    </div>
    </div>
    <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
        <div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
        <h1 className="font-cardo text-xl text-[#031136] font-normal">View Profile</h1>
    <p className="text-[#031136] opacity-50 text-[14px] font-inter py-2 pb-6">Full Stack developer</p>
    <span class="text-sm px-16 py-[10px] lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">All Work</span>
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
    <h1 className="font-cardo text-xl text-[#031136] font-normal">Languages</h1>
    <p className='font-inter text-[#0A142F] text-[14px] py-1'>English : <span className='opacity-50'>Native or Bilingual</span></p>
    <p className='font-inter text-[#0A142F] text-[14px]'>Hindi : <span className='opacity-50'>Native or Bilingual</span></p>
    <h1 className="font-cardo text-xl text-[#031136] font-normal pt-6">Education</h1>
    <p className='font-inter text-[#0A142F] text-[14px] py-1'>B.Tech</p>
        </div>
    </div>
    <div class="w-full md:w-[70%] bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
        <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
        <div className="flex justify-between items-center">
    <h1 className="font-cardo text-2xl text-[#031136] font-normal">Full Stac developer</h1>
    <div>
        <h1 className="font-cardo text-xl text-[#031136] font-semibold inline-block">$5.00/hr</h1>
    </div>
</div>
<p className="text-[#031136] opacity-50 text-[14px] font-inter py-5">Hello, I am software developer working as a full stack Mean developer, I can do this work with good efficiency in less time, please let me know when we can connect and discuss further for this and other projects.</p>
        </div>
        
        {/* <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
    <h1 className="font-cardo text-2xl text-[#031136] font-normal">Portfolio</h1>
    <div className="flex flex-wrap -mx-2">  
        <div className='w-1/3 px-2 cursor-pointer' onClick={openPortfolio}>  
            <div className='w-full h-[165px] mt-4 border border-gray-100 overflow-hidden'>
                <img 
                    src={profilepic} 
                    alt="" 
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',  
                        width: '100%', 
                        height: '100%' 
                    }}
                />
            </div>
            <p className='font-inter text-green-600 text-[13px] pt-2 overflow-hidden whitespace-nowrap overflow-ellipsis hover:text-green-700 underline font-semibold'>Project Title</p>
        </div>
        {isPortfolioOpen && <Portfolio closePortfolio={closePortfolio} project={project}/>}
</div>
        </div> */}
        <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
    <h1 className="font-cardo text-2xl text-[#031136] font-normal">Skills</h1>
    <div className="text-left mt-5">
    {/* {bid.Freelancer_skills && 
  (() => {
    try {
      const skillsArray = JSON.parse(bid.Freelancer_skills.replace(/'/g, '"'));
      return skillsArray.map((skill, index) => (
        <div
          key={index}
          className="mr-3 focus:outline-none bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full w-28 text-green-800 px-3 py-[3px] my-1 text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]"
        >
          <p className="text-center">{skill}</p>
        </div>
      ));
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  })()
}  */}
    </div>
    </div>
    </div>
    </div>
    <div className='my-6 p-4 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-40 text-left'>
    <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Employment history</h1>
    <div class="border-b opacity-50 my-3"></div>
    <h1 className="font-cardo text-[18px] text-[#031136] font-normal mr-1">Graphic Designer | Wiz91 Technologies</h1>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-2 text-left'>January 2021 - Present</p>
    <div class="border-b opacity-50 my-3"></div>
    <h1 className="font-cardo text-[18px] text-[#031136] font-normal mr-1">UI/UX Designer | ABC Technologies</h1>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] pt-2 text-left'>April 2020 - January 2021</p>
    <div class="border-b opacity-50 my-3"></div>
    <h1 className="font-cardo text-[20px] text-[#031136] font-normal cursor-pointer">Show More</h1>
    </div>
    {/* </div> */}
    {/* </div> */}
  {/* </div> */}
  </div>
  <HomeSection4/>
  <Footer/>
    </>
  )
}

export default FreelancerFullDetailAfterLogin
