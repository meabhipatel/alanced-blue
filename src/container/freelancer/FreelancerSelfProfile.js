import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import freelancercover from '../../components/images/freelancercover.png'
import edit from '../../components/images/edit.png'
import profilepic from '../../components/images/profilepic.png'

const FreelancerSelfProfile = () => {
  return (
   <>
   <Navbar/>
   <div className='mt-4 mx-[9%]'>
   <img src={freelancercover} alt="" className=''/>
   <div class="flex">
    <div class="w-[30%] p-4 bg-[#FFFFFF] py-8 border border-gray-200">
    <div class="relative w-28 h-28 mx-auto">
    <img src={profilepic} alt="Profile" class="rounded-full w-full h-full border border-gray-200"/> 
    <div class="absolute top-1 left-2 p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
        <img src={edit} alt="" />
    </div>
    <div class="absolute bottom-3 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
</div>
    </div>
    <div class="w-[70%] border border-gray-200 flex">
        <div class="w-3/4">
           
        </div>
        <div class="w-1/4">
            
        </div>
    </div>
</div>
   </div>
   </>
  )
}

export default FreelancerSelfProfile