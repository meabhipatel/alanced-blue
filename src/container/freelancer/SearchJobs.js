import React, { useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import { Link } from 'react-router-dom'

const SearchJobs = () => {

    const [selectedButton, setSelectedButton] = useState('Search');
    const commonStyle = "inline-block text-sm py-[10px] mt-4 lg:mt-0 border rounded font-semibold";

  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
    <div className='my-3 flex flex-wrap'>
    <Link to='/savedjobs' className="flex-grow md:flex-none p-1">
                <span 
                    className={`${commonStyle} px-3 my-3 md:px-8 ${selectedButton === 'Saved Jobs' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Saved Jobs')}>
                    Saved Jobs
                </span>
            </Link>  
            <Link to='/searchjobs'className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'Search' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Search')}>
                    Search
                </span>
            </Link>
    </div>
    <div class="flex-1 border-t-2 border-gray-200 opacity-30 mt-3"></div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default SearchJobs