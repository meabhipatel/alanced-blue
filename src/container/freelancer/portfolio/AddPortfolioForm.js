import React, { useState} from 'react'
import Navbar from '../../../components/Layout/Navbar'
import Footer from '../../../components/Layout/Footer'
import HomeSection4 from '../../../components/Layout/HomeSection4'
import { Link } from 'react-router-dom'

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
            
            <div className="p-8">
                {/* Display the current step at the top */}
                <div className='container-sm px-40 mt-16'>
        <div className=' flex flex-row'>
            <div className=' basis-3/12'>
            <div className=" w-56">
            <ul className="text-left">
                <li className="px-6 py-2 bg-green-600 cursor-pointe rounded-lg text-white font-semibold text-base">Add Portfolio</li>
                <li className="px-6 py-2  rounded-full font-semibold text-base  opacity-50 cursor-not-allowed"  disabled>Select Templete</li>
                <li className="px-6 py-2 rounded-full font-semibold text-bas opacity-50 cursor-not-allowed" disabled>Add Details</li>
                <li className="px-6 py-2 rounded-full font-semibold text-bas opacity-50 cursor-not-allowed" disabled>Preview</li>
            </ul>
            </div>
            </div>
            <div className=' basis-9/12'>
            {step === 1 && (
            <div>
                {/* <input className="border p-2 w-full mb-4" type="text" placeholder="Enter job title" />/ */}
                <div className='border border-[#E7E8F2] py-8 px-8 rounded-xl'>
                    <h1 className=' text-left font-cardo text-2xl font-normal'>Add portfolio project</h1>
                    <p className='text-left font-inter text-base font-normal mt-8'>Project Title</p>
                    <input type="text" class=" mt-3 bg-green-50 border border-gray-300 dark:text-gray-400 placeholder-gray-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-96 p-2.5 dark:bg-green-600 dark:border-green-500" placeholder="Enter Project Title"></input>
                    <p className=' text-left mt-8 font-inter text-base font-normal'>Related Upwork Job<span className=' text-sm opacity-[50%]'> (optional)</span></p>
                    <p className='text-left mt-3 font-inter text-base font-thin opacity-[80%]'>Once you've completed contracts on Upwork,</p>
                    <p className='text-left font-inter text-base font-thin opacity-[80%]'>you'll be able to link your work.</p>
                    <p className=' text-left mt-8 font-inter text-base font-normal'>Completion Date<span className=' text-sm opacity-[50%]'> (optional)</span></p>
                    <input type="date" class=" mt-3 bg-green-50 border border-gray-300 dark:text-gray-400 placeholder-gray-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-96 p-2.5 dark:bg-green-600 dark:border-green-500" placeholder=""></input>
                    <div className=' flex flex-row mt-16'>
                        <div className=' basis-6/12'>
                        <div class="p-0.5 inline-block rounded-full bg-gradient-to-b from-[#00BF58] to-[#E3FF75] mr-[15rem]">
                        <Link to='/freelancer/edit-profile'><button class="px-2 py-1 bg-[#E2F9EE] rounded-full"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-bold text-sm py-[4px] px-[16px]">Cancel</p></button></Link>
                        </div> 
                        </div>
                        <div className=' basis-6/12'>
                        <span class="inline-block text-sm px-6 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded-full border-none text-white mr-2 font-bold ml-[8rem]">Go To Select Templete</span>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {step === 2 && (
            <div>
                <textarea className="border p-2 w-full" rows="4" placeholder="Describe the work to be done"></textarea>
            </div>
        )}
        {step === 3 && (
            <div>
                <input className="border p-2 w-full mb-4" type="text" placeholder="E.g., JavaScript, React.js, Frontend Development" />
            </div>
        )}
        {/* {step === 4 && (
            <div>
                <input className="border p-2 w-full mb-4" type="text" placeholder="Enter budget details" />
            </div>
        )} */}
        {/* ... continue with other steps similarly */}
        <div className="flex justify-between mt-4">
            {step > 1 && <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">Back</button>}
            {step < 3 && <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next: {stepsLabels[step]}</button>}
            {/* Replace '5' with the number of your last step */}
        </div>
        </div>
        </div>
        </div>
            </div>
            <Footer />
        </>
  )
}

export default AddPortfolioForm


{/* <h2 className="text-xl mb-4">{`Step ${step}/3: Add ${stepsLabels[step - 1]}`}</h2> */}

// {step === 1 && (
//     <div>
//         <input className="border p-2 w-full mb-4" type="text" placeholder="Enter job title" />
//     </div>
// )}
// {step === 2 && (
//     <div>
//         <textarea className="border p-2 w-full" rows="4" placeholder="Describe the work to be done"></textarea>
//     </div>
// )}
// {step === 3 && (
//     <div>
//         <input className="border p-2 w-full mb-4" type="text" placeholder="E.g., JavaScript, React.js, Frontend Development" />
//     </div>
// )}
// {/* {step === 4 && (
//     <div>
//         <input className="border p-2 w-full mb-4" type="text" placeholder="Enter budget details" />
//     </div>
// )} */}
// {/* ... continue with other steps similarly */}
// <div className="flex justify-between mt-4">
//     {step > 1 && <button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">Back</button>}
//     {step < 3 && <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next: {stepsLabels[step]}</button>}
//     {/* Replace '5' with the number of your last step */}
// </div>