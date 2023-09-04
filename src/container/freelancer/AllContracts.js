import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import search from '../../components/images/SearchOutlined.png'
import searchbtn from '../../components/images/searchbtn.png'

const AllContracts = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-5 container-sm px-40'>
        <h1 className=' font-cardo font-normal text-2xl text-left'>All Contracts</h1>
        <div className=' flex flex-row'>
            <div className=' basis-11/12'>
            <section className='flex items-center p-1 rounded-lg border border-[#E7E8F2] mt-4'>
                <div className='flex items-center mr-1 space-x-1 w-full'>
                    <img src={search} alt="Search Icon" className="h-5 w-5" />
                    <input className='w-full  h-7 font-normal lg:text-sm border-0 outline-none font-inter text-sm' placeholder='Search contracts' />
                </div>
                <button className='rounded h-8 w-8 p-2 text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>
                    <img src={searchbtn} alt="Search Icon" />
                </button>
            </section>
            </div>
            <div className=' basis-1/12 mt-3'><i class="bi bi-sliders text-3xl mr-9"></i></div>
        </div>
{/* <form>  
    <div class="relative mt-5">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <i class="bi bi-search"></i>
        </div>
        <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="absolute right-[3px] bottom-1 rounded h-8 w-8 text-xs font-semibold bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white"><i class="bi bi-search"></i></button>
    </div>
</form> */}
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default AllContracts
