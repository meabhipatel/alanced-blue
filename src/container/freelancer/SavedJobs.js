import React, { useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import thumbdown from '../../components/images/thumbdown.png'
import heart from '../../components/images/heart.png'
import verify from '../../components/images/verify.png'
import location from '../../components/images/location.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetViewAllSavedJobsAction } from '../../redux/Freelancer/FreelancerAction'
import axios from 'axios'
import { useEffect } from 'react'

const SavedJobs = () => {

    const accessToken = useSelector(state => state.login.accessToken);  
    const initialSavedJobs = useSelector(state => state.freelancer.viewallsavedjob);
    const [savedJobs, setSavedJobs] = useState(initialSavedJobs);
    
    const dispatch = useDispatch();
    const [selectedButton, setSelectedButton] = useState('Saved Jobs');
    const commonStyle = "inline-block text-sm py-[10px] mt-4 lg:mt-0 border rounded font-semibold"; 

    useEffect(() => {
        dispatch(GetViewAllSavedJobsAction(accessToken));
    }, [dispatch, accessToken]);

    useEffect(() => {
        setSavedJobs(initialSavedJobs);
    }, [initialSavedJobs]);

    const [expandedProjects, setExpandedProjects] = useState([]);

    const handleToggleDescription = (index) => {
        const updatedState = [...expandedProjects];
        updatedState[index] = !updatedState[index];
        setExpandedProjects(updatedState);
    };

    const toggleJobSaveStatus = async (jobId) => {
        try {
            const response = await axios.post(
                `https://aparnawiz91.pythonanywhere.com/freelance/saved-projects/${jobId}`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            );

            if (response.status === 200 && response.data.isSaved === false) {
                const updatedJobs = savedJobs.filter(job => job.Project_id !== jobId);
                setSavedJobs(updatedJobs);
            }
        } catch (error) {
            console.error("Error toggling the job save status", error);
        }
    };

   
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
    <div className='my-3 flex flex-wrap'>
    <Link to='/saved-jobs' className="flex-grow md:flex-none p-1">
                <span 
                    className={`${commonStyle} px-3 my-3 md:px-8 text-base font-inter font-bold ${selectedButton === 'Saved Jobs' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Saved Jobs')}>
                    Saved Jobs
                </span>
            </Link>  
            <Link to='/search-jobs'className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 font-inter font-normal text-sm text-[#797979] opacity-[50%] ${selectedButton === 'Search' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-[50%]"} mr-3`}
                    onClick={() => setSelectedButton('Search')}>
                    Search
                </span>
            </Link>
    </div>
    <div className='my-4 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left'>
    {savedJobs && <>{savedJobs.map((job,index)=> {
        const words = job.Project_Description.split(' ');
        const displayWords = expandedProjects[index] || words.length <= 50 ? words : words.slice(0, 50);

        const currentDate = new Date();
        const jobDeadline = new Date(job.deadline); 
              return(
    <div className='px-4 md:px-8 py-5 border-b border-gray-200 border-opacity-30'>
         {currentDate > jobDeadline && (
                <p className='font-inter opacity-50 text-[#FFC107] text-[16px] font-normal py-3'>
                    Job is no longer available
                </p>
            )}
    <div className="flex items-center justify-between">
    <p className="font-inter text-[#0A142F] text-[16px] font-medium"> {job.Project_Name}</p>
    <div className="flex items-center space-x-2">
        {/* <div className="p-1 w-8 h-8 bg-white rounded-full border border-gray-200">
            <img src={thumbdown} alt="" className='mt-1' />
        </div> */}
        <div className="p-1 w-8 h-8 bg-white rounded-full border border-gray-200 cursor-pointer" onClick={() => toggleJobSaveStatus(job.Project_id)}>
        <i class="fa fa-heart p-1 text-green-600" aria-hidden="true"></i>
        </div>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[14px] font-normal py-3'>
            {job.Project_Rate} - Intermediate - Est. Budget: ${job.Project_Rate == 'Hourly' ? job.Project_Min_Hourly_Rate+"/hr" +" - "+ "$"+job.Project_Max_Hourly_Rate+"/hr" : job.Project_Fixed_Budget } - Posted {timeAgo(job.Project_Created)}
        </p>
    <p className='font-inter text-opacity-50 text-[#0A142F] text-[16px] font-normal py-3'>{displayWords.join(' ')} 
                {words.length > 50 && (
                    <span 
                        className="font-cardo text-[#031136] text-[18px] font-semibold cursor-pointer pl-2" 
                        onClick={() => handleToggleDescription(index)}
                    >
                        {expandedProjects[index] ? 'Less' : 'More'}
                    </span>
                )}</p>
        <img src={verify} alt="" className='inline-block h-5 w-5 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[16px] font-normal opacity-50 inline-block'>Payment verified</p>
        <div className="text-[16px] text-[#FFC107] inline-block mx-3">★★★★★</div>
        {/* <img src={location} alt="" className='inline-block h-3 w-3 mr-1'/> */}
        <i class="bi bi-geo-alt inline-block  mr-1"></i>
        <p className='font-inter text-[#0A142F] text-[16px] font-normal opacity-50 inline-block'>India</p>
    </div>
      )
    })}</>}
    </div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default SavedJobs