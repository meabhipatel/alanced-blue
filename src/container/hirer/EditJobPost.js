import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import edit from '../../components/images/edit.png'
import { Link, useLocation } from 'react-router-dom'
import ProjectList from '../freelancer/ProjectList'

const EditJobPost = () => {

    const location = useLocation();
    const project = location.state && location.state.project;

  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
    <h1 className="font-cardo text-[26px] text-[#031136] text-left font-normal p-3">Edit Job Post</h1>
    <div className='my-2 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left'>
    <div className='border-b border-gray-200 border-opacity-30 py-5 px-8 flex justify-between items-center'>
    <h1 className="font-inter text-xl text-[#031136] text-left font-semibold">{project.title}</h1>
    <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer">
        <img src={edit} alt="more" />
    </div>
</div>
<div className='border-b border-gray-200 border-opacity-30 py-5 px-8 flex justify-between items-center'>
    <h1 className="font-inter text-md text-[#031136] text-left font-normal opacity-40">{project.description}</h1>
    <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer">
        <img src={edit} alt="more" />
    </div>
</div>
<div className='border-b border-gray-200 border-opacity-30 py-5 px-8'>
    <div className='flex justify-between items-center'>
    <div className="flex flex-col">
        <h1 className="font-inter text-lg text-[#031136] font-semibold text-left">category</h1>
        <h1 className="font-inter text-md opacity-50 text-[#031136] font-normal text-left py-1">{project.category}</h1>
    </div>
    <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer">
        <img src={edit} alt="more" />
    </div>
</div>
<div className='flex justify-between items-center mt-5'>
    <div className="flex flex-col">
        <h1 className="font-inter text-lg text-[#031136] font-semibold text-left">Skills</h1>
        <div className="text-left my-3">
        {project.skills_required && 
        (() => {
            try {
            const skillsArray = JSON.parse(project.skills_required.replace(/'/g, '"'));
            return skillsArray.map((skill, index) => (
                <div
                key={index}
                className="mr-3 focus:outline-none bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full w-28 text-green-800 px-3 py-[3px] text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]"
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
    <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer">
        <img src={edit} alt="more" />
    </div>
</div>
<div className='flex justify-between items-center mt-5'>
    <div className="flex flex-col">
        <h1 className="font-inter text-lg text-[#031136] font-semibold text-left pb-2">Scope</h1>
        <h1 className="font-inter text-md opacity-50 text-[#031136] font-normal text-left py-1">Project Deadline : {project.deadline}</h1>
        <h1 className="font-inter text-md opacity-50 text-[#031136] font-normal text-left py-1">Experience Level : Expert </h1> 
    </div>
    <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer">
        <img src={edit} alt="more" />
    </div>
</div>
<div className='flex justify-between items-center mt-5'>
    <div className="flex flex-col">
        <h1 className="font-inter text-lg text-[#031136] font-semibold text-left pb-2">Budget</h1>
        <h1 className="font-inter text-md opacity-50 text-[#031136] font-normal text-left py-1">${project.budget} /hr</h1>
        </div>
    <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer">
        <img src={edit} alt="more" />
    </div>
</div>
</div>
<div className='flex justify-end m-5'>
<Link to='/View/Job-post' state={{project}} onClick={() => window.scrollTo(0, 0)}>
<span class="text-sm px-6 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Save Job Post</span>
</Link>
</div>

    </div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default EditJobPost