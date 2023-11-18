import React from 'react'
import Navbar from '../../components/Layout/Navbar';
import HomeSection4 from '../../components/Layout/HomeSection4';
import Footer from '../../components/Layout/Footer';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { formatDate, formatDateInput, getCurrentTime } from './TimeFunctions';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ViewHiringDetail = () => {
    const accessToken = useSelector(state => state.login.accessToken);
    const location = useLocation();
    const findhiring = location.state && location.state.hire;
    const hire_id = findhiring && findhiring.hire_id ? findhiring.hire_id :"";
    console.log(hire_id,"chkhireid")
    
    const [showFullDescription, setShowFullDescription] = useState(false);
    
        const toggleDescription = () => {
            setShowFullDescription(!showFullDescription);
        };
    
    const descriptionToShow = showFullDescription ? (findhiring && findhiring.project_description
        ? findhiring.project_description:"")
        : findhiring.project_description.slice(0, 200);

    const handleAcceptProject = async () => {
        try {
            const response = await axios.put(`https://alanced.pythonanywhere.com/freelance/projects/accept/${hire_id}`, {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if (response.data.status === 200) {
                toast.success("Hiring Request Accepted Successfully")
            } 

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const handleRejectProject = async () => {
        try {
            const response = await axios.put(`https://alanced.pythonanywhere.com/freelance/projects/reject/${hire_id}`, {}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            if (response.data.status === 200) {
                toast.success("You have Rejected the Hiring Request")
            } 

        } catch (error) {
            toast.error(error.response.data.message);
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
            return `${deltaInMinutes} minute ago`;
        } else if (deltaInHours < 24) {
            return `${deltaInHours} hour ago`;
        } else if (deltaInDays < 30) {
            return `${deltaInDays} day ago`;
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
        <div className='container-sm px-36'>
            <h1 className='font-inter text-2xl text-left mt-5'>Hiring Details</h1>
            <div className=' flex flex-row my-3'>
                <div className=' basis-9/12'>
                <div className=' mt-8  border border-[#E7E8F2] py-8 px-8 rounded-lg'>
            <h1 className=' text-2xl font-cardo font-semibold text-left'>Job Details</h1>
                <div className=' flex flex-row mt-6'>
                    <div className=' basis-8/12'>
                    <h1 className=' text-xl font-inter font-medium text-left'>{findhiring && findhiring.project_title ? findhiring.project_title : ""}</h1>
                    <div className=' flex flex-row'>
                    <div className=' basis-4/12 mt-5'><div  class="focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1]  rounded-xl text-sm font-semibold text-green-800 py-[3px] dark:bg-[#dffdee] dark:hover:bg-[#dffdee]  w-[90%] bg-opacity-[60%]">{findhiring && findhiring.project_category? findhiring.project_category:""}</div></div>
                    <div className=' basis-4/12 mt-5 ml-2'><p className=' text-sm font-medium font-inter text-left opacity-[50%]'>Received {timeAgo(findhiring && findhiring.Received_time ? findhiring.Received_time:"")}</p></div>
                    </div>
                    <p className='font-inter text-[15px] font-medium mt-3 text-left opacity-[70%]'>
                        {descriptionToShow}
                    </p>
                    {findhiring && findhiring.project_description ? (findhiring.project_description.length > 200 && (
                        <p
                        className='mt-3 text-base font-semibold text-green-600 text-left cursor-pointer'
                        onClick={toggleDescription}
                        >
                        {showFullDescription ? 'less' : 'more'}
                        </p>
                    )):""}
                    </div>
                    <div className=' basis-1/12'></div>
                    <div className=' basis-3/12 border-l border-[#E7E8F2]'>
                        <div className=' flex flex-row ml-4'>
                            <div className=' basis-3/12'><i class="fa fa-user-secret" aria-hidden="true"></i></div>
                            <div className=' basis-6/12'>
                                <p className=' text-[14px] font-normal text-left'>{findhiring && findhiring.project_exp_level ? findhiring.project_exp_level.replace(/_/g, ' '):""}</p>
                                <p className=' text-[12px] font-normal text-left opacity-50'>Experience level</p>
                            </div>
                        </div>
                        <div className=' flex flex-row ml-4 mt-4'>
                            <div className=' basis-3/12'><i class="bi bi-tag-fill"></i></div>
                            <div className=' basis-9/12'>
                                <p className=' text-[14px] font-normal text-left'>{findhiring && findhiring.hiring_budget_type ? findhiring.hiring_budget_type: " "}</p>
                                <p className=' text-[12px] font-normal text-left opacity-50'>Budget</p>
                            </div>
                        </div>
                        <div className=' flex flex-row ml-4 mt-4'>
                            <div className=' basis-3/12'><i class="bi bi-calendar2-check-fill"></i></div>
                            <div className=' basis-8/12'>
                                <p className=' text-[14px] font-normal text-left'>{formatDate(findhiring && findhiring.project_deadline ? findhiring.project_deadline: " ")}</p>
                                <p className=' text-[12px] font-normal text-left opacity-50'>Project Deadline</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className=' mt-5' />
                <h1 className='text-base font-medium font-inter text-left mt-5'>Skills & Experties</h1>
                <div className="text-left mt-5">
                {JSON.parse(findhiring && findhiring.project_skills.replace(/'/g,'"')).map((skill,index)=>(
                    <div className="mr-3 focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-28 text-green-800 px-3 py-[3px] text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%] mt-4">
                    <p className=" text-center">{skill}</p>
                </div>
                ))}
                </div>
                <hr className=' mt-8' />
                <div className=' flex flex-row'>
                    <div className=' basis-6/12'><h1 className='mt-4 text-2xl font-cardo font-semibold text-left'>Hiring Details</h1></div>
                </div>
                <div>
                <p className='text-[15px] font-medium font-inter text-left mt-5'>Client's Hiring Budget</p>
                <p className='text-[15px] font-medium font-inter text-left opacity-70'>${findhiring && findhiring.hiring_budget ? findhiring.hiring_budget:""}</p>
                <p className='text-[15px] font-medium font-inter text-left mt-5'>Client's Budget Type</p>
                <p className='text-[15px] font-medium font-inter text-left opacity-70'>{findhiring && findhiring.hiring_budget_type ? findhiring.hiring_budget_type:""}</p>
                <p className='text-[15px] font-medium font-inter text-left mt-5'>Client's Message</p>
                <p className='text-[15px] font-medium font-inter text-left opacity-70'>{findhiring && findhiring.message ? findhiring.message:""}</p>
                <hr className='mt-5' />
                <div className='mt-4 text-left'>
        <span class="inline-block text-sm px-8 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-4 font-semibold cursor-pointer" onClick={handleAcceptProject}>Accept</span>
      <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
      <button class="px-8 py-1 bg-[#E2F9EE]"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[6px] cursor-pointer" onClick={handleRejectProject}>Reject</p></button>
</div> 
</div>   
                </div>
            </div>
           
                </div>
                <div className=' basis-3/12'>
                    <div className='mt-8 ml-7'>
                        <p className=' text-[17px] font-inter font-normal text-left'>About the client</p>
                    </div>
                    <div className='mt-5 ml-7'>
                        <p className=' text-[17px] font-inter font-normal text-left'>Location</p>
                        <p className='text-[15px] font-inter font-normal opacity-75 mt-2 text-left'>{findhiring && findhiring.hirer_location ? findhiring.hirer_location:""}</p>
                        <p className='text-[15px] font-inter font-normal opacity-75  text-left'>{getCurrentTime()}</p>
                    </div>
                    <div className='mt-5 ml-7'>
                        <p className=' text-[17px] font-inter font-normal text-left'>History</p>
                        <p className='text-[12px] font-inter font-normal opacity-75 mt-2 text-left'>Member since {formatDateInput(findhiring && findhiring.hirer_creation_date ? findhiring.hirer_creation_date:"")}</p>
                    </div>
                </div>
            </div>
        </div>
        <HomeSection4/>
        <Footer/>
        </>
      )
}

export default ViewHiringDetail