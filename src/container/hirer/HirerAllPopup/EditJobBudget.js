import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EditJobBudget = ({closeJobBudget,project}) => {

    const [selectedOption, setSelectedOption] = useState('hourly');

  return (
    <>
    <div className="fixed z-10 inset-0 overflow-y-auto mt-14">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 px-8 relative z-20">
                    <div className="flex justify-between items-center">
                        <h1 className="font-cardo text-[26px] text-[#031136] font-normal">Edit Project Budget</h1>
                        <button onClick={closeJobBudget} className="text-gray-500 hover:text-gray-700">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className='mt-8'>
                    <div className="flex-1">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full mb-8">
            <div 
                className={`flex sm:block items-center w-full sm:flex-1 p-6 border ${selectedOption === 'hourly' ? 'border-lime-300' : ''} hover:border-lime-300 hover:shadow-md transition duration-300 cursor-pointer h-[120px] sm:h-auto`}
                onClick={() => setSelectedOption('hourly')}
            >
                <i className="bi bi-alarm text-3xl sm:-mt-3 mr-4 sm:mr-0 text-green-600"></i>
                <h5 className='text-left font-cardo text-2xl lg:pt-3'>Hourly Rate</h5>
            </div>
            <div 
                className={`flex sm:block items-center w-full sm:flex-1 p-6 border ${selectedOption === 'fixed' ? 'border-lime-300' : ''} hover:border-lime-300 hover:shadow-md transition duration-300 cursor-pointer h-[120px] sm:h-auto`}
                onClick={() => setSelectedOption('fixed')}
            >
                <i className="bi bi-tag-fill sm:-mt-3 mr-4 sm:mr-0 text-3xl text-green-600"></i>
                <h5 className='text-left font-cardo text-2xl lg:pt-3'>Fixed Budget</h5>
            </div>
        </div>
        
        <div className="min-h-[200px]"> 
            {selectedOption === 'hourly' && (
                <div>
                    <div className="flex space-x-16">
                        <div className="flex flex-col">
                            <label className="block text-xl mt-3 font-cardo" htmlFor="fromInput">From</label>
                            <div className="flex items-center">
                                <input id="fromInput" type="text" placeholder="" className="flex-1 w-full mr-1 p-2 border my-1 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600" />
                                <span>/hr</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-xl mt-3 font-cardo" htmlFor="toInput">To</label>
                            <div className="flex items-center">
                                <input id="toInput" type="text" placeholder="" className="flex-1 w-full mr-1 p-2 border my-2 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600" />
                                <span>/hr</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg opacity-50 font-cardo font-medium py-4">Set your Hourly Rate</p>
                </div>
            )}

            {selectedOption === 'fixed' && (
                <div>
                    <label className="block text-xl mt-3 font-cardo" htmlFor="maxBudgetInput">Maximum Budget</label> 
                    <input id="maxBudgetInput" type="text" className='border my-2 p-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder=''/>
                    <p className="text-lg opacity-50 font-cardo font-medium py-4">Set your Project Budget</p>
                </div>
            )}
        </div>
    </div>
                            <div className="flex justify-end">
                            <Link to='' state={{project}}><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold" >Save</span></Link>
                            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]" onClick={closeJobBudget}>
                                <Link to='' state={{project}}><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
                            </div>     
                            </div>
                            </div>
                </div>
                    </div>
                </div>
    </>
  )
}

export default EditJobBudget