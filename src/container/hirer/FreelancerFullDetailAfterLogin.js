import React, { useEffect } from 'react'
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
import FreelancerPortfolio from './HirerAllPopup/FreelancerPortfolio'

const FreelancerFullDetailAfterLogin = () => {

  const location = useLocation();
  const freelancer = location.state && location.state.free;
  console.log(freelancer,"freelancer_detail")

  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const accessToken = useSelector(state => state.login.accessToken);  
  const [freelancerproject, setfreelancerproject] = useState([]);
  const id = freelancer.id
//   const freelancerselfprofile = useSelector(state => state.freelancer.freelancerselfprofile)
//   const [freelancerproject, setfreelancerproject] = useState([]);
//   const id = freelancerselfprofile && freelancerselfprofile[0].id ? freelancerselfprofile[0].id : '';
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
    <Navbar/>
   <div className=' container-sm px-28 mt-14'>
    <div className=' flex flex-row'>
      <div className=' basis-3/12 pl-14'>
      <div className="relative w-24 h-24">
            <img src={"https://aparnawiz91.pythonanywhere.com/"+freelancer.images_logo} alt="Profile" className="rounded-full w-full h-full border border-gray-200" />
            <div class="absolute bottom-3 right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className='text-left pl-2 mt-10'>
          <h1 className=' font-cardo text-[20px] fond-semibold'>Experiance level</h1>
          <p className='font-cardo text-lg fond-semibold text-gray-500'>{freelancer.Address ? freelancer.experience_level.replace(/_/g, ' '):'NA'}</p>
        </div>
        <div className='text-left pl-2 mt-5 '>
          <h1 className=' font-cardo text-[20px] fond-semibold'>Category</h1>
          <p className='font-cardo text-lg fond-semibold text-gray-500'>{freelancer.category ? freelancer.category: "NA"}</p>
        </div>
        <div className='text-left pl-2 mt-5 '>
          <h1 className=' font-cardo text-[20px] fond-semibold'>Hourly Rate</h1>
          <p className='font-cardo text-lg fond-semibold text-gray-500'>${freelancer.Address ? freelancer.hourly_rate:0}</p>
        </div>
        <div className='text-left pl-2 mt-5 '>
          <h1 className=' font-cardo text-[20px] fond-semibold'>Educations</h1>
          <p className='font-cardo text-lg fond-semibold text-gray-500'>{freelancer.qualification ? freelancer.qualification : "NA"}</p>
        </div>
        <div className='text-left pl-2 mt-5 '>
          <h1 className=' font-cardo text-[20px] fond-semibold'>Languages</h1>
          <p className='font-cardo text-lg fond-semibold text-gray-500'>English</p>
          <p className='font-cardo text-lg fond-semibold text-gray-500'>Hindi</p>
        </div>
      </div>
      <div className=' basis-9/12'>
        <div className=' flex flex-row'>
          <div className=' basis-6/12'>
          <div className="flex items-center">
          <h1 className="font-cardo text-[24px] text-[#031136] font-normal mr-1">{freelancer.first_Name ? freelancer.first_Name+ ' '+freelancer.last_Name: " NA"}</h1>
                <img className="h-4 w-4" src={verify} alt="Verification" />
            </div>
            <div className="flex items-center my-1">
                <img src={locations} alt="Location" className="h-[13px] mr-1" />
                <p className="text-[#797979] text-[14px] font-inter">{freelancer.Address ? freelancer.Address:'NA'}</p>
            </div>
          </div>
          <div className=' basis-3/12 text-right'>
          <span class="inline-block text-sm px-10 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-4 font-semibold">Message</span>
          </div>
          <div className=' basis-3/12 text-left'>
          <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]  mr-2">
                <button class="px-11 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Hire</p></button>
            </div>
          </div>
        </div>
        <div className='mt-[8%]'>
        <p className='font-cardo text-[22px] fond-semibold text-left'>About Freelancer</p>
        <div class="w-28  mt-2 ml-1 relative">
        <div class="absolute inset-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-lg"></div>
        <div class="border-gray-600 border-b-2 rounded-lg"></div>
      </div>
      <p className="text-[#031136] opacity-50 text-[14px] font-inter py-5 text-left pr-8">{freelancer.Address ? freelancer.about:'NA'}</p>
        </div>
        <div className=' mt-6'>
        <p className='font-cardo text-[22px] fond-semibold text-left'>Skills</p>
        <div class="w-8 mt-2 ml-1 relative">
        <div class="absolute inset-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-lg"></div>
        <div class="border-gray-600 border-b-2 rounded-lg"></div>
      </div>
      <div className="text-left mt-5">
          {freelancer.skills
        ? JSON.parse(freelancer.skills.replace(/'/g, '"')).map((skill, index) => (
            <div
              key={index} // Add a key prop for each skill for React to identify them uniquely.
              className="mr-3 focus:outline-none mb-3 bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full text-green-800 px-8 py-[3px] text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]"
            >
              <p className="text-center">{skill}</p>
            </div>
          ))
        : "NA"}
            </div>
        </div>
        <div className='mt-8'>
        <p className='font-cardo text-[22px] fond-semibold text-left'>Portfolio ({freelancerproject ? freelancerproject.length : 0})</p>
        <div class="w-20  mt-2 ml-1 relative">
        <div class="absolute inset-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-lg"></div>
        <div class="border-gray-600 border-b-2 rounded-lg"></div>
      </div>
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
    {isPortfolioOpen && <FreelancerPortfolio project={selectedProjects} closePortfolio={closePortfolio} />}
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
      </div>
    </div>
   </div>
  <HomeSection4/>
  <Footer/>
    </>
  )
}

export default FreelancerFullDetailAfterLogin
