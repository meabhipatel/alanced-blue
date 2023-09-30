import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import frame from '../../components/images/Frame.png'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ViewJobPost = () => {

    const location = useLocation();
  const project = location.state && location.state.project;
  const viewhirerselfproject = useSelector(state => state.hirer.viewhirerselfproject)
  

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12; 
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; 
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
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
    <h1 className="font-cardo text-[26px] text-[#031136] text-left font-normal p-3">{project.title}</h1>
    <div className='my-2 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left'>
    <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-[70%] bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
        <div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
        <p className="font-inter text-green-700 text-[16px] font-medium">{project.category}</p>
        <p className="font-inter text-[#031136] opacity-50 text-sm font-medium py-1">posted {timeAgo(project.Project_created_at)}</p>
        <p className="font-inter text-[#031136] text-sm font-normal py-3"><i class="bi bi-geo-alt-fill text-green-700"></i> Worldwide</p>
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
        <p className="font-inter text-[#031136] text-lg font-medium">{project.title}</p>  
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
  <div className="flex mb-4">
  <div className="flex-1 py-4 flex">
    <i class="bi bi-alarm flex-shrink-0 mr-3"></i> 
    <div>
        <p className="font-inter text-[#031136] text-md font-medium">Less than 30 hrs/week</p>
        <p className="font-inter text-[#031136] text-sm font-medium opacity-50">Hourly</p>
    </div>
</div>

    <div className="flex-1 py-4 flex">
    <i class="bi bi-calendar-minus flex-shrink-0 mr-3"></i>
    <div>
        <p className="font-inter text-[#031136] text-md font-medium">Less than a month</p>
        <p className="font-inter text-[#031136] text-sm font-medium opacity-50">Project Length</p>
    </div> 
    </div>
  </div>
  <div className="flex">
    <div className="flex-1 py-4 flex">
    <i class="bi bi-coin flex-shrink-0 mr-3"></i>
    <div>
        <p className="font-inter text-[#031136] text-md font-medium"> ${project.budget}</p>
        <p className="font-inter text-[#031136] text-sm font-medium opacity-50">Fixed</p>
    </div> 
    </div>
    <div className="flex-1 py-4 flex">
    <i class="bi bi-mortarboard-fill flex-shrink-0 mr-3"></i>
    <div>
        <p className="font-inter text-[#031136] text-md font-medium">Expert</p>
        <p className="font-inter text-[#031136] text-sm font-medium opacity-50">Experience Level</p>
    </div> 
    </div>
  </div>
</div>
<div className='border-b border-gray-200 border-opacity-30 py-6 px-8 flex items-center'>
    <div className="flex-1"> 
        <p className="font-inter text-[#031136] text-lg font-medium">Contract-to-hire opportunity</p>  
        <p className="font-inter text-[#031136] opacity-50 text-md font-medium py-2">This lets talent know that this job could become full time.</p>
        <p className="font-inter text-green-700 text-md font-semibold py-3 cursor-pointer">Learn more</p>
    </div>
    <div className="ml-4"> 
        <img src={frame} alt="" className='h-32 w-32'/>
    </div>
</div>
<div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
        <p className="font-inter text-[#031136] text-lg font-medium">Skills and Expertise</p> 
        <div className="text-left mt-5">
        {JSON.parse(project.skills_required.replace(/'/g,'"')).map((skill,index)=>(
                <div className="mr-3 my-2 focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-28 text-green-800 px-3 py-[3px] text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]">
                <p className=" text-center">{skill}</p>
            </div>
            ))}
    </div> 
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-6 px-8'>
        <p className="font-inter text-[#031136] text-lg font-medium py-4">Activity on this job</p> 
        <p className="font-inter text-[#031136] text-md font-medium py-1">Proposals : <i class="bi bi-question-circle-fill text-green-700"></i><span className='opacity-50'> 10 to 15</span></p>
        <p className="font-inter text-[#031136] text-md font-medium py-1">Interviewing : <span className='opacity-50'> 0</span></p>
        <p className="font-inter text-[#031136] text-md font-medium py-1">Invites sent : <span className='opacity-50'> 0</span></p>
        <p className="font-inter text-[#031136] text-md font-medium py-1">Unanswered invites : <span className='opacity-50'> 0</span></p>
        </div>
        </div>
        <div class="w-full md:w-[30%] bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left">
        <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
        <Link to='/edit/Job-post' state={{project}} onClick={() => window.scrollTo(0, 0)}>
        <p className="font-inter text-green-700 text-md font-normal py-1"><i class="bi bi-pencil mr-1"></i> Edit Job Post</p>
        </Link>
        <Link to='/View/Job-post' state={{project}} onClick={() => window.scrollTo(0, 0)}><p className="font-inter text-green-700 text-md font-normal py-1"><i class="bi bi-eye mr-1"></i> View Job Post</p></Link>
        {/* <p className="font-inter text-green-700 text-md font-normal py-1"><i class="bi bi-trash mr-1"></i> Delete Job Post</p> */}
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
        <p className="font-inter text-[#031136] text-lg font-medium py-4">About the client</p> 
        <p className="font-inter text-[#031136] opacity-50 text-md font-medium py-2 mr-2 inline-block">Payment method not verified</p><i class="bi bi-question-circle-fill text-green-700 inline-block"></i>
        <p className="font-inter text-[#031136] text-md font-medium">India</p>
        <p className="font-inter text-[#031136] opacity-50 text-md font-medium">{getCurrentTime()}</p>
        <p className="font-inter text-[#031136] text-md font-medium py-2">{viewhirerselfproject && viewhirerselfproject ? viewhirerselfproject.length : 0} job posted</p>
        <p className="font-inter text-[#031136] text-sm font-medium opacity-50">Member since Sep 20, 2023</p>
        </div>
        <div className='border-b border-gray-200 border-opacity-30 py-4 px-8'>
        <p className="font-inter text-[#031136] text-lg font-medium py-4">Job link</p>
        <input type="text" className='border my-2 py-1.5 px-2 rounded-md w-full bg-[#E4EBE4] cursor-not-allowed' disabled placeholder='https://www.alanced.com/jobs'/>
        <p className="font-inter text-green-700 text-md font-semibold py-3 cursor-pointer">copy link</p>
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

export default ViewJobPost