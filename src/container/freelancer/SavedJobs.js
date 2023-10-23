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
import { toast } from 'react-toastify'
import { timeAgo } from './TimeFunctions'

const SavedJobs = () => {

    const accessToken = useSelector(state => state.login.accessToken);  
    const initialSavedJobs = useSelector(state => state.freelancer.viewallsavedjob);
    const [savedJobs, setSavedJobs] = useState(initialSavedJobs);
    
    const dispatch = useDispatch();

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
    
            const isSaved = response.data.isSaved;
    
            // Update localStorage
            localStorage.setItem(`isSaved_${jobId}`, JSON.stringify(isSaved));
    
            if (response.status === 200) {
                if (response.data.isSaved === false) {
                    toast.success("Job unsaved successfully!"); 
                    const updatedJobs = savedJobs.filter(job => job.Project_id !== jobId);
                    setSavedJobs(updatedJobs);
                } 
            }
        } catch (error) {
            console.error("Error toggling the job save status", error);
        }
    };
    


  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
    <h1 className="font-cardo text-[26px] text-[#031136] text-left font-normal p-3">Saved Jobs</h1>
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