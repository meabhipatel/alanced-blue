import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddEmploymentPopup = ({ closeAddEmployment }) => {

    const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(true);


  return (
    <div className="fixed z-10 inset-0 overflow-y-auto mt-28">
    <div className="fixed inset-0 bg-black opacity-50"></div>
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white rounded-lg w-[90%] md:w-[61%] p-6 px-8 relative z-20">
    <div className="flex justify-between items-center">
        <h1 className="font-cardo text-[26px] text-[#031136] font-normal">Add Employment</h1>
        <button onClick={closeAddEmployment} className="text-gray-500 hover:text-gray-700">
            <i class="bi bi-x-lg"></i>
        </button>
    </div>
    <div className='mt-10'>
            <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Company</h1>
            <input type="text" className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder='Ex: Wiz91'/>
            <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Title</h1>
            <input type="text" className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder='Python Developer'/>
            <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Location</h1>
            <div className="flex justify-between space-x-6"> 
           <div className="flex-1">
         <input type="text" className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder='City'/>
    </div>
    <div className="flex-1">
        <input type="text" className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder='Country'/>
    </div>
</div>
<h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Duration</h1>
<p className="font-cardo text-[18px] text-[#031136] font-normal text-left opacity-50">From</p>
<div className="flex justify-between items-center mt-2 mb-6">
        <select className="border py-2 px-2 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 mr-5 flex-1 bg-white opacity-50">
            <option value="" disabled selected>month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>
        <select className="border py-2 px-2 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 flex-1 bg-white opacity-50">
            <option value="" disabled selected>year</option>
            {Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, idx) => 1980 + idx).map(year => (
                <option key={year} value={year}>{year}</option>
            ))}
        </select>
            </div>
            {!isCurrentlyWorking && (<>
            <p className="font-cardo text-[18px] text-[#031136] font-normal text-left opacity-50">To</p>
<div className="flex justify-between items-center mt-2 mb-6">
        <select className="border py-2 px-2 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 mr-5 flex-1 bg-white opacity-50">
            <option value="" disabled selected>month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>
        <select className="border py-2 px-2 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 flex-1 bg-white opacity-50">
            <option value="" disabled selected>year</option>
            {Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, idx) => 1980 + idx).map(year => (
                <option key={year} value={year}>{year}</option>
            ))}
        </select>
            </div>
            </>)}
<label class="flex items-center font-inter relative cursor-pointer mb-4">
                <input class="hidden" type="checkbox"  defaultChecked={true}
    onChange={() => setIsCurrentlyWorking(prev => !prev)}  />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal opacity-50">I Currently Work Here</span>
            </label>
            <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Description</h1>
            <textarea name="" id="" cols="30" rows="5" className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600'></textarea>
            <div className="mt-8 flex justify-end">
            <Link to=''><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold" >Add</span></Link>
            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]" onClick={closeAddEmployment}>
                <Link to=''><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
            </div>     
            </div>
            </div>
</div>
    </div>
</div>
  )
}

export default AddEmploymentPopup