import React from 'react'
import search from '../images/SearchOutlined.png'


const Section = () => {
    return(
        <>
        <section className='flex justify-center '>
            <div className='w-[77vw] h-24 -mt-16 rounded-2xl flex justify-center items-center shadow-lg'>
                <div className='flex flex-row p-4 border-r-2 border-r-[#1C3865]'>
                    <img src={search}></img>
                    <input className='w-96 ml-4 mr-48' placeholder='Search'></input>
                </div>
                <div className='w-40 mr-36'>
                    Talent
                </div>
                <div className='ml-12'>
                    <button className='rounded h-12 w-28 ml-6 font-semibold text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>Search</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section