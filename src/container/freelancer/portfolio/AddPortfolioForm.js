import React, { useState} from 'react'
import Navbar from '../../../components/Layout/Navbar'
import Footer from '../../../components/Layout/Footer'
import HomeSection4 from '../../../components/Layout/HomeSection4'
import { Link } from 'react-router-dom'
import CategoryList from '../AllSelectionData/CategoryList'

const AddPortfolioForm = () => {

    const [step, setStep] = useState(1);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const stepsLabels = [
        'Title',
        'Job Description',
        'Skills',
        'Budget',
        // Add more step labels as needed
    ];

  return (
    <>
    <Navbar />
    
    <div className="container-sm px-40 mt-16">
        {/* Display the current step at the top */}
        {/* <h2 className="text-xl mb-4">{`Step ${step}/3: Add ${stepsLabels[step - 1]}`}</h2> */}

        {step === 1 && (
            <div>
                    <div className=' flex flex-row'>
                        <div className=' basis-3/12'>
                        <div className=" w-56">
                        <ul className="text-left">
                            <li className="px-6 py-2 bg-green-600 cursor-pointe rounded-lg text-white font-semibold text-base">Add Portfolio</li>
                            <li className="px-6 py-2  rounded-full font-semibold text-base  opacity-50 cursor-not-allowed"  disabled>Add Details</li>
                            <li className="px-6 py-2 rounded-full font-semibold text-bas opacity-50 cursor-not-allowed" disabled>Select Templetew</li>
                        </ul>
                        </div>
                        </div>
                        <div className=' basis-9/12'>
                            <div className='border border-[#E7E8F2] py-8 px-8 rounded-xl'>
                                <h1 className=' text-left font-cardo text-2xl font-normal'>Add portfolio project</h1>
                                <p className='text-left font-inter text-base font-normal mt-8'>Project Title<span className=' text-md font-bold opacity-[50%] text-red-700'>*</span></p>
                                <input 
                                    type="text" 
                                    name="title"
                                    className='border my-2 py-2 px-3 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' 
                                    placeholder="Describe What you did on the Project" 
                                />
                                <p className=' text-left mt-8 font-inter text-base font-normal'>Project Description<span className=' text-md font-bold opacity-[50%] text-red-700'>*</span></p>
                                {/* <textarea id="message" name="description"
                                 required  class="mt-3 w-full  px-3 py-2 border rounded-lg text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:shadow-outline focus:ring-lime-600 focus:border-lime-600  dark:focus:ring-lime-600 dark:focus:border-lime-600" rows='5'></textarea> */}
                                 <textarea id="message" name="description"
                                 required  class="mt-3 w-full  px-3 py-2 border rounded-lg text-gray-700 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"  rows='7'></textarea>
                            </div>
                        </div>
                    </div>
            </div>
        )}
        {step === 2 && (
            <div>
                <div className=' flex flex-row'>
                        <div className=' basis-3/12'>
                        <div className=" w-56">
                        <ul className="text-left">
                            <li className="px-6 py-2 rounded-full font-semibold text-bas opacity-50 cursor-not-allowed" disabled>Add Portfolio</li>
                            <li className="px-6 py-2 bg-green-600 cursor-pointe rounded-lg text-white font-semibold text-base">Add Details</li>
                            <li className="px-6 py-2 rounded-full font-semibold text-bas opacity-50 cursor-not-allowed" disabled>Select Templetew</li>
                        </ul>
                        </div>
                        </div>
                        <div className=' basis-9/12'>
                            <div className='border border-[#E7E8F2] py-8 px-8 rounded-xl'>
                                <h1 className=' text-left font-cardo text-2xl font-normal'>Add portfolio project</h1>
                                <p className='text-left font-inter text-base font-normal mt-8'>Select Category<span className=' text-md font-bold opacity-[50%] text-red-700'>*</span></p>
                                <input 
                                    type="text" 
                                    name="title"
                                    className='border my-2 py-2 px-3 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' 
                                    placeholder="Describe What you did on the Project" 
                                />
                                <p className=' text-left mt-8 font-inter text-base font-normal'>Skills Used<span className=' text-md font-bold opacity-[50%] text-red-700'>*</span></p>
                                 <textarea id="message" name="description"
                                 required  class="mt-3 w-full  px-3 py-2 border rounded-lg text-gray-700 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"  rows='7'></textarea>
                            </div>
                        </div>
                    </div>
            </div>
        )}
        {step === 3 && (
            <div>
                <div className=' flex flex-row'>
                        <div className=' basis-3/12'>
                        <div className=" w-56">
                        <ul className="text-left">
                            <li className="px-6 py-2 rounded-full font-semibold text-bas opacity-50 cursor-not-allowed" disabled>Add Portfolio</li>
                            <li className="px-6 py-2 rounded-full font-semibold text-bas opacity-50 cursor-not-allowed" disabled>Add Details</li>
                            <li className="px-6 py-2 bg-green-600 cursor-pointe rounded-lg text-white font-semibold text-base">Select Templetew</li>
                        </ul>
                        </div>
                        </div>
                        <div className=' basis-9/12'>
                            <div className='border border-[#E7E8F2] py-8 px-8 rounded-xl'>
                                <h1 className=' text-left font-cardo text-2xl font-normal'>Add portfolio project</h1>
                                <p className='text-left font-inter text-base font-normal mt-8'>Select Category<span className=' text-md font-bold opacity-[50%] text-red-700'>*</span></p>
                                <input 
                                    type="text" 
                                    name="title"
                                    className='border my-2 py-2 px-3 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' 
                                    placeholder="Describe What you did on the Project" 
                                />
                                <p className=' text-left mt-8 font-inter text-base font-normal'>Skills Used<span className=' text-md font-bold opacity-[50%] text-red-700'>*</span></p>
                                 <textarea id="message" name="description"
                                 required  class="mt-3 w-full  px-3 py-2 border rounded-lg text-gray-700 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"  rows='7'></textarea>
                            </div>
                        </div>
                    </div>
            </div>
        )}
        <div className="flex justify-between mt-4 ml-64">
            {step > 1 && <button onClick={() => {prevStep(); window.scrollTo(0,0)}} className="bg-gray-300 px-4 py-2 rounded">Back</button>}
            {step < 3 && <button onClick={() => {nextStep(); window.scrollTo(0,0)}} className="bg-blue-500 text-white px-4 py-2 rounded">Next: {stepsLabels[step]}</button>}
            {/* Replace '5' with the number of your last step */}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default AddPortfolioForm
