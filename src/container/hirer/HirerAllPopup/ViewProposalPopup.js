import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import profilepic from '../../../components/images/profilepic.png'
import verify from '../../../components/images/verify.png'
import locations from '../../../components/images/location.png'
import { useState } from 'react'
import Portfolio from './Portfolio'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


const ViewProposalPopup = ({ closeViewProposal, bid }) => {
    const bidData = { bid };
    const location = useLocation();
  const project = location.state && location.state.project;

  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const accessToken = useSelector(state => state.login.accessToken);  
  const freelancerselfprofile = useSelector(state => state.freelancer.freelancerselfprofile)
  const [freelancerproject, setfreelancerproject] = useState([]);
  const id = freelancerselfprofile && freelancerselfprofile[0].id ? freelancerselfprofile[0].id : '';
  const [selectedProjects, setSelectedProjects] = useState(null);

  useEffect(() => {
    if(id) { 
        axios.get(`https://aparnawiz91.pythonanywhere.com/freelance/View-all/Freelancer/Self-Project/${id}`)
            .then(response => {
                if (response.data.status === 200) {
                    setfreelancerproject(response.data.data);
                } else {
                    console.log(response.data.message || 'Error fetching project');
                }
            })
            .catch(err => {
                console.log(err.message);
            });
    }
}, [id]); 

const [active, setActive] = React.useState(1);
 
  const next = () => {
      if (active === Math.ceil(freelancerproject.length / 6)) return;
      setActive(active + 1);
  };

  const prev = () => {
      if (active === 1) return;
      setActive(active - 1);
  };

  // 1. Chunk the Array
  const chunkArray = (array, size) => {
      let chunked = [];
      for (let i = 0; i < array.length; i += size) {
          chunked.push(array.slice(i, i + size));
      }
      return chunked;
  }

  const chunkedProjects = chunkArray(freelancerproject, 6);

  const openPortfolio = (project) => {
    setSelectedProjects(project);
    setIsPortfolioOpen(true);
  };

  const closePortfolio = () => {
    setSelectedProjects(null);
    setIsPortfolioOpen(false);
  };
    
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-10 mt-20">
    <div className="fixed inset-0 bg-black opacity-10"></div>
  <div className="bg-white p-6 rounded-lg shadow-xl w-3/4 h-[94%] z-20 overflow-y-scroll">
    <div className='flex flex-row'>
        <div className='basis-6/12 cursor-pointer'><i class="bi bi-chevron-left font-bold text-black text-lg" onClick={closeViewProposal}></i></div>
        <div className=' basis-6/12'>
            <Link to="/View/proposal" state={{project,bidData}}>
            <div className=' text-right font-cardo font-normal text-base'>
            <i class="bi bi-box-arrow-up-right"></i> Open proposal in a new window
            </div>
            </Link>
        </div>
    </div>
    <div className=' container px-2'>
    <div className="flex mt-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30">
  <div className="flex-[20%] p-6">
  <div className="relative w-24 h-24">
                    <img src={"https://aparnawiz91.pythonanywhere.com/"+bid.freelancer_profilepic} alt="Profile" className="rounded-full w-full h-full border border-gray-200" />
                    <div class="absolute bottom-3 right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
  </div>
  <div className="flex-[30%] py-6">
  <div className="flex items-center">
                <h1 className="font-cardo text-[24px] text-[#031136] font-normal mr-1">{bid.freelancer_Name}
            </h1>
                <img className="h-4 w-4" src={verify} alt="Verification" />
            </div>
            <div className="flex items-center my-1">
                <img src={locations} alt="Location" className="h-[13px] mr-1" />
                <p className="text-[#797979] text-[14px] font-inter">{bid.freelancer_address ? bid.freelancer_address:'NA'}</p>
            </div>
            <p className="text-green-600 text-[16px] font-inter py-3 font-semibold cursor-pointer hover:underline">View Profile</p>
  </div>
  <div className="flex-[50%] p-6 text-right">
  <Link to=''><span class="inline-block text-sm px-10 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-4 font-semibold">Message</span></Link>
            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75] mt-3 mr-2">
                <Link to=''><button class="px-11 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Hire</p></button></Link>
            </div>
  </div>
</div>
        <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] py-4 px-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
    <h1 className="font-cardo text-xl text-[#031136] font-normal">Applicant</h1>
    <p className="text-[#031136] opacity-50 text-[14px] font-inter py-2">{bid.freelancer_Name} has applied to or been invited to your or your company's job {project.title} </p>
    </div>
    <div class="w-full md:w-[70%] py-4 px-8 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
    <div className="flex justify-between items-center">
    <h1 className="font-cardo text-2xl text-[#031136] font-normal">Proposal Details</h1>
    <div>
        <h1 className="font-cardo text-xl text-[#031136] font-semibold">${bid.bid_amount}/hr</h1>
        <p className="text-[#031136] opacity-50 text-[14px] font-inter font-semibold">Proposed bid</p>
    </div>
</div>
<div className="border-b opacity-60 my-3"></div>
<h1 className="font-cardo text-xl text-[#031136] font-normal">Cover Letter</h1>
<p className="text-[#031136] opacity-50 text-[14px] font-inter py-4">{bid.description}</p>
    </div>
    </div>
    <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[30%] bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
        <div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
        <h1 className="font-cardo text-xl text-[#031136] font-normal">View Profile</h1>
    <p className="text-[#031136] opacity-50 text-[14px] font-inter py-2 pb-6">{bid.freelancer_category}</p>
    <Link to=''><span class="text-sm px-16 py-[10px] lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">All Work</span></Link>
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
        <h1 className="font-cardo text-xl text-[#031136] font-normal">Hours Per Week</h1>
    <p className="text-[#031136] opacity-50 text-[14px] font-inter pb-6">more than 30 hrs/week</p>
    <h1 className="font-cardo text-xl text-[#031136] font-normal">Languages</h1>
    <p className='font-inter text-[#0A142F] text-[14px] py-1'>English : <span className='opacity-50'>Native or Bilingual</span></p>
    <p className='font-inter text-[#0A142F] text-[14px]'>Hindi : <span className='opacity-50'>Native or Bilingual</span></p>
    <h1 className="font-cardo text-xl text-[#031136] font-normal pt-6">Education</h1>
    <p className='font-inter text-[#0A142F] text-[14px] py-1'>BSC (CS)</p>
    <p className='font-inter text-[#0A142F] text-[14px] opacity-50'>Davv</p>
    <p className='font-inter text-[#0A142F] text-[14px] opacity-50'>2018-2021</p>
        </div>
    </div>
    <div class="w-full md:w-[70%] bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
        <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
        <div className="flex justify-between items-center">
    <h1 className="font-cardo text-2xl text-[#031136] font-normal">{bid.freelancer_category}</h1>
    <div>
        <h1 className="font-cardo text-xl text-[#031136] font-semibold inline-block">$5.00/hr</h1>
    </div>
</div>
<p className="text-[#031136] opacity-50 text-[14px] font-inter py-5">Hello, I am software developer working as a full stack Mean developer, I can do this work with good efficiency in less time, please let me know when we can connect and discuss further for this and other projects.</p>
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
        <h1 className="font-cardo text-2xl text-[#031136] font-normal">Portfolio ({freelancerproject && freelancerproject ? freelancerproject.length : 0})</h1>
    <div className="flex flex-wrap -mx-2">  
    {chunkedProjects[active - 1] && chunkedProjects[active - 1].map((pro, index) => (
        <div className='w-1/3 px-2 cursor-pointer' key={index} onClick={() => openPortfolio(pro)}>  
            <div className='w-full h-[165px] mt-4 border border-gray-100 overflow-hidden'>
                <img 
                    src={"https://aparnawiz91.pythonanywhere.com/"+pro.images_logo} 
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
            <p className='font-inter text-green-600 text-[13px] pt-2 overflow-hidden whitespace-nowrap overflow-ellipsis hover:text-green-700 underline font-semibold'>{pro.project_title}</p>
        </div>
    ))}
    {isPortfolioOpen && <Portfolio project={selectedProjects} closePortfolio={closePortfolio} />}
</div>
   <div className="flex justify-end items-center gap-6 mt-5">
{freelancerproject.length > 6 && (
  <>
    <IconButton
      size="sm"
      variant="outlined"
      onClick={prev}
      disabled={active === 1}
      style={{ backgroundImage: 'linear-gradient(45deg, #00BF58, #E3FF75)', border: 'none' }}
    >
      <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-white" />
    </IconButton>

    {[...Array(Math.ceil(freelancerproject.length / 6))].map((_, index) => {
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
      disabled={active === Math.ceil(freelancerproject.length / 6)}
      style={{ backgroundImage: 'linear-gradient(45deg, #00BF58, #E3FF75)', border: 'none' }}
    >
      <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-white" />
    </IconButton>
  </>
)}
</div>
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
    {bid.Freelancer_skills && 
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
} 
    </div>
    </div>
    </div>
    </div>
    <div className='my-6 p-4 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-40'>
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
    </div>
    </div>
  </div>
</>)
}

export default ViewProposalPopup