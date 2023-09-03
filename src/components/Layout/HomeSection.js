import React from 'react'
import search from '../images/SearchOutlined.png'


const Section = () => {
    return(
        <>
        <section className='flex justify-center '>
            <div className='lg:w-[77vw] w-[95vw] bg-white -mt-[46px] p-2 lg:h-24 -mt-12 rounded-2xl lg:flex justify-center items-center shadow-lg'>
                <div className='flex flex-row p-4 lg:border-r-2 lg:border-r-[#1C3865]'>
                    <img src={search}></img>
                    <input className='w-96 ml-4 lg:mr-48' placeholder='Search'></input>
                </div>
                <div className=''>
                <select id="countries" class="bg-gray-50 text-[#797979] text-sm font-inter font-normal rounded-lg  block  p-2.5 ml-5">
                <option selected>Talent</option>
                <option value="">Project</option>
                <option value="">Jobs</option>
                </select>
                </div>
                <div className='lg:ml-12 mt-2'>
                    <button className='rounded h-12 w-28 lg:ml-6 font-semibold text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>Search</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section