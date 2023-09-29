import React, { useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import { Link } from 'react-router-dom'
import search from '../../components/images/SearchOutlined.png'
import searchbtn from '../../components/images/searchbtn.png'
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux'
import { GetViewHirerSelfProjectssAction } from '../../redux/Hirer/HirerAction'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ViewAllJobPost = () => {
    
   const viewhirerselfproject = useSelector(state => state.hirer.viewhirerselfproject)
   const accessToken = useSelector(state => state.login.accessToken); 
   const dispatch = useDispatch();
   
   React.useEffect(() => {
    dispatch(GetViewHirerSelfProjectssAction(accessToken))
  }, [])
  

    const [selectedButton, setSelectedButton] = useState('All Job Posts');
    const commonStyle = "inline-block text-sm py-[10px] mt-4 lg:mt-0 border rounded font-semibold"; 


  const [active, setActive] = React.useState(1);
 
  const next = () => {
    window.scrollTo(0, 0)
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    window.scrollTo(0, 0)
    if (active === 1) return;
 
    setActive(active - 1);
  };

  const isJobOpen = (deadline) => {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    return now < deadlineDate;
}

function timeAgo(postedTimeStr) {
  const postedTime = new Date(postedTimeStr);
  const currentTime = new Date();

  const deltaInMilliseconds = currentTime - postedTime;
  const deltaInSeconds = Math.floor(deltaInMilliseconds / 1000);
  const deltaInMinutes = Math.floor(deltaInSeconds / 60);
  const deltaInHours = Math.floor(deltaInMinutes / 60);
  const deltaInDays = Math.floor(deltaInHours / 24);

  if (deltaInMinutes < 1) {
      return "just now";
  } else if (deltaInMinutes < 60) {
      return `${deltaInMinutes}m ago`;
  } else if (deltaInHours < 24) {
      return `${deltaInHours}h ago`;
  } else if (deltaInDays < 30) {
      return `${deltaInDays}d ago`;
  } else if (deltaInDays < 365) {
      const months = Math.floor(deltaInDays / 30);
      return `${months} month ago`;
  } else {
      const years = Math.floor(deltaInDays / 365);
      return `${years} year ago`;
  }
}

  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
    <div className='mt-3 flex flex-wrap'>
    <Link to='/View-all/Job-post' className="flex-grow md:flex-none p-1">
                <span 
                    className={`${commonStyle} px-3 my-3 md:px-8 text-base font-inter font-bold ${selectedButton === 'All Job Posts' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('All Job Posts')}>
                    All Job Posts
                </span>
            </Link>  
            <Link to=''className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 font-inter font-normal text-sm text-[#797979] opacity-[50%] ${selectedButton === 'All Contracts' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-[50%]"} mr-3`}
                    onClick={() => setSelectedButton('All Contracts')}>
                    All Contracts
                </span>
            </Link>
    </div>
    <div className='my-2 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left'>
    <section className='flex items-center p-2 bg-white rounded-lg m-5 border w-[49%]'>
    <div className='flex items-center mr-1 space-x-1'>
        <img src={search} alt="Search Icon" className="h-3 w-3" />
        <input className='w-28 lg:w-40 xl:w-[30rem] h-7 text-xs lg:text-sm outline-none' placeholder='Search Job Postings' />
    </div>
    <button className='rounded h-7 w-7 p-2 text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>
        <img src={searchbtn} alt="Search Icon" />
    </button>
</section>
{viewhirerselfproject != null ? 
<div>
{viewhirerselfproject && viewhirerselfproject.map((project, index) => {
                 
                //  const isJobOpen = (deadline) => {
                //   const deadlineDate = new Date(deadline);
                //   const now = new Date();
                //   return now < deadlineDate;
                // }

                return(<>
    <div className='px-4 md:px-8 py-5 border-b border-gray-200 hover:bg-[#F6FAFD] border-opacity-30' key={index}>
<div class="flex">
  <div class="flex-[40%]">
  <Link to='/View/Job-post' state={{project}} onClick={() => window.scrollTo(0, 0)}>
  <p className="font-inter text-[#0A142F] text-[16px] font-medium hover:underline hover:text-green-600">{project.title}</p>
  </Link>
  <p className='font-inter opacity-50 text-[#0A142F] text-[14px] font-normal py-1'>Hourly - Intermediate - Posted {timeAgo(project.Project_created_at)}</p>
  {/* <span className='border px-4 py-1 border-gray-300 rounded bg-[#E4EBE4] font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2 font-semibold'>Open</span> */}
  <span className={`px-4 py-1 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2 font-semibold ${isJobOpen(project.deadline) ? 'bg-[#E4EBE4] text-green-800 border border-green-800' : 'bg-yellow-100 text-yellow-700 border border-yellow-700'}`}>
              {isJobOpen(project.deadline) ? 'Open' : 'Closed'}
            </span>
  </div>
  <div class="flex-[40%] flex">
    <div class="flex-1 p-2">
    <p className="font-inter text-[#0A142F] text-[16px] font-medium">7</p>
    <p className="font-inter text-[#0A142F] opacity-50 text-[16px] font-medium">Proposals</p>
    </div>
    <div class="flex-1 p-2">
    <p className="font-inter text-[#0A142F] text-[16px] font-medium">0</p>
    <p className="font-inter text-[#0A142F] opacity-50 text-[16px] font-medium">Messaged</p>
    </div>
    <div class="flex-1 p-2">
    <p className="font-inter text-[#0A142F] text-[16px] font-medium">0</p>
    <p className="font-inter text-[#0A142F] opacity-50 text-[16px] font-medium">Hired</p>
    </div>
  </div>
  <div class="flex-[20%] text-center">
  <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75] mt-3 mr-2">
                <Link to='/View-all/proposals' state={{ project, isOpen: isJobOpen(project.deadline) }} onClick={() => window.scrollTo(0, 0)}><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">View Proposals</p></button></Link>
            </div>
  </div>
</div>
    </div>
    </>
      )
  })}</div>: <div>
    {[...Array(8)].map((_) => {
      return (
  <div className='flex mt-5'>
    <div className='pl-6'>
    <Skeleton height={20} width={120}/>
    <Skeleton height={20} width={250} style={{marginTop: 10}}/>
    <Skeleton height={30} width={60} style={{marginTop: 10}}/>
    </div>
    <div className='ml-48'>
    <Skeleton height={45} inline="true" count={2} width={100} style={{marginLeft:60}}/>
    <Skeleton height={45} inline="true" width={60} style={{marginLeft:60}}/>
    </div>
    <Skeleton height={40} width={150} style={{marginLeft: 140}}/>
    </div>
    );})}
    </div>
    
    }
    <div className="flex justify-end items-center gap-6 m-4">
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
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default ViewAllJobPost