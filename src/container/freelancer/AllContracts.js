import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import search from '../../components/images/SearchOutlined.png'
import searchbtn from '../../components/images/searchbtn.png'
import { Link } from 'react-router-dom'
import gradientdot from '../../components/images/gradientdot.png'
import threedot from '../../components/images/threedot.png'

const AllContracts = () => {

    const [active, setActive] = React.useState(1);
 
    const next = () => {
      if (active === 5) return;
   
      setActive(active + 1);
    };
   
    const prev = () => {
      if (active === 1) return;
   
      setActive(active - 1);
    };

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
            <div className=' basis-1/12 mt-4'><i class="bi bi-sliders text-3xl mr-9"></i></div>
        </div>
        <div className='mt-8  border border-[#E7E8F2] py-5 px-5 rounded'>
        <div className='mt-3'>
        <div className=' flex flex-row'>
            <div className=' basis-8/12'>
                <h1 className=' font-cardo text-lg font-normal text-left'>UI UX design for Education Resources Mobile App</h1>
                <p className='font-inter text-[14px] text-[#031136]  mt-3 text-left font-normal'>Staffed by: <span className='opacity-50'>AMIT B. at Wiz91 Technologies</span></p>
            </div>
            <div className=' basis-3/12'><Link to=''><button className='rounded h-8 w-36  text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]  text-sm font-bold ml-20'>See Timesheet</button></Link></div>
            <div className=' basis-1/12'><div class="p-1 w-7 h-7 bg-white rounded-full border border-gray-200 mt-1 mx-auto">
            <img src={gradientdot} alt="" /></div>
        </div>
        </div>
        <div className=' flex flex-row'>
            <div className=' basis-5/12'>
            <p className='font-inter text-[14px] text-[#031136] py-2 font-normal text-left'>Hired by: <span className='opacity-50'>Aloha Apps</span></p>
            </div>
            <div className=' basis-5/12'>
            <p className='font-inter text-[14px] text-[#031136] font-normal text-left'>
        Active: <span className='text-[#03C058]'>5:10 hrs</span> <span className='opacity-50 text-[#0A142F]'>this week</span></p>
            </div>
            <div className=' basis-2/12'>
            <p className='font-inter text-[14px] text-[#0A142F] opacity-50 font-normal text-center'>Aug 31 - Present</p>
            </div>
        </div>
        </div>
        <div className='mt-5'>
        <div className=' flex flex-row'>
            <div className=' basis-8/12'>
                <h1 className=' font-cardo text-lg font-normal text-left'>UI UX design for Education Resources Mobile App</h1>
                <p className='font-inter text-[14px] text-[#031136]  mt-3 text-left font-normal'>Staffed by: <span className='opacity-50'>AMIT B. at Wiz91 Technologies</span></p>
            </div>
            <div className=' basis-3/12'><Link to=''><button className='rounded h-8 w-36 text-[#797979cc] text-sm font-inter border border-gray-200 ml-20'>See Timesheet</button></Link></div>
            <div className=' basis-1/12'><div class="p-1 w-7 h-7 bg-white rounded-full border border-gray-400 mt-1 mx-auto">
            <img src={threedot} alt="" /></div>
        </div>
        </div>
        <div className=' flex flex-row'>
            <div className=' basis-5/12'>
            <p className='font-inter text-[14px] text-[#031136] py-2 font-normal text-left'>Hired by: <span className='opacity-50'>Aloha Apps</span></p>
            </div>
            <div className=' basis-5/12'>
            <p className='font-inter text-[14px] text-[#031136] font-normal text-left'>
        Active: <span className='text-[#03C058]'>5:10 hrs</span> <span className='opacity-50 text-[#0A142F]'>this week</span></p>
            </div>
            <div className=' basis-2/12'>
            <p className='font-inter text-[14px] text-[#0A142F] opacity-50 font-normal text-center'>Aug 31 - Present</p>
            </div>
        </div>
        </div>
        <div className='mt-5'>
        <div className=' flex flex-row'>
            <div className=' basis-8/12'>
                <h1 className=' font-cardo text-lg font-normal text-left'>UI UX design for Education Resources Mobile App</h1>
                <p className='font-inter text-[14px] text-[#031136]  mt-3 text-left font-normal'>Staffed by: <span className='opacity-50'>AMIT B. at Wiz91 Technologies</span></p>
            </div>
            <div className=' basis-3/12'><Link to=''><button className='rounded h-8 w-36 text-[#797979cc] text-sm font-inter border border-gray-200 ml-20'>See Timesheet</button></Link></div>
            <div className=' basis-1/12'><div class="p-1 w-7 h-7 bg-white rounded-full border border-gray-400 mt-1 mx-auto">
            <img src={threedot} alt="" /></div>
        </div>
        </div>
        <div className=' flex flex-row'>
            <div className=' basis-5/12'>
            <p className='font-inter text-[14px] text-[#031136] py-2 font-normal text-left'>Hired by: <span className='opacity-50'>Aloha Apps</span></p>
            </div>
            <div className=' basis-5/12'>
            <p className='font-inter text-[14px] text-[#031136] font-normal text-left'>
        Active: <span className='text-[#03C058]'>5:10 hrs</span> <span className='opacity-50 text-[#0A142F]'>this week</span></p>
            </div>
            <div className=' basis-2/12'>
            <p className='font-inter text-[14px] text-[#0A142F] opacity-50 font-normal text-center'>Aug 31 - Present</p>
            </div>
        </div>
        </div>
        <div className='mt-5'>
        <div className=' flex flex-row'>
            <div className=' basis-8/12'>
                <h1 className=' font-cardo text-lg font-normal text-left'>UI UX design for Education Resources Mobile App</h1>
                <p className='font-inter text-[14px] text-[#031136]  mt-3 text-left font-normal'>Staffed by: <span className='opacity-50'>AMIT B. at Wiz91 Technologies</span></p>
            </div>
            <div className=' basis-3/12'><Link to=''><button className='rounded h-8 w-36 text-[#797979cc] text-sm font-inter border border-gray-200 ml-20'>See Timesheet</button></Link></div>
            <div className=' basis-1/12'><div class="p-1 w-7 h-7 bg-white rounded-full border border-gray-400 mt-1 mx-auto">
            <img src={threedot} alt="" /></div>
        </div>
        </div>
        <div className=' flex flex-row'>
            <div className=' basis-5/12'>
            <p className='font-inter text-[14px] text-[#031136] py-2 font-normal text-left'>Hired by: <span className='opacity-50'>Aloha Apps</span></p>
            </div>
            <div className=' basis-5/12'>
            <p className='font-inter text-[14px] text-[#031136] font-normal text-left'>
        Active: <span className='text-[#03C058]'>5:10 hrs</span> <span className='opacity-50 text-[#0A142F]'>this week</span></p>
            </div>
            <div className=' basis-2/12'>
            <p className='font-inter text-[14px] text-[#0A142F] opacity-50 font-normal text-center'>Aug 31 - Present</p>
            </div>
        </div>
        </div>
        <div className=' mt-7'>
            <div className=' flex flex-row'>
            <div className=' basis-4/12'><h1 className=' font-cardo font-normal text-lg text-left'>1 - 10 of 12 contracts</h1></div>
            <div className=' basis-8/12'>
            <div className="flex justify-end items-center mr-6">
            <div className="flex items-center justify-center w-8 h-8 text-gray-500 border border-gray-200 p-1 cursor-pointer" onClick={prev}
                disabled={active === 1}>
                -
            </div>
            <div className="flex border-t border-b border-gray-200 p-1 gap-4">
                {[...Array(5)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                    <span
                    key={pageNumber}
                    className={`w-6 h-6 flex items-center justify-center cursor-pointer ${
                        active === pageNumber
                        ? 'bg-gradient-to-r from-[#00BF58] to-[#E3FF75] font-bold font-inter text-white text-xs rounded-sm'
                        : 'text-gray-500 font-bold font-inter text-xs'
                    }`}
                    onClick={() => setActive(pageNumber)}
                    >
                    {pageNumber}
                    </span>
                );
                })}
            </div>
            <div className="flex items-center justify-center w-8 h-8 text-gray-500 border border-gray-200 p-1 cursor-pointer" onClick={next}
                disabled={active === 5}>
                +
            </div>

            </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default AllContracts
