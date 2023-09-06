import React, { useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import { Link } from 'react-router-dom'
import availablenow from '../../components/images/availablenow.png'
import edit from '../../components/images/edit.png'

const MyProposals = () => {

  const [selectedButton, setSelectedButton] = useState('Active');
  const commonStyle = "inline-block text-sm py-[10px] mt-4 lg:mt-0 border rounded font-semibold"; 

  const [active, setActive] = React.useState(1);
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };

  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
      <h1 className='font-cardo text-[21px] text-[#031136] font-normal pt-4 text-left'>My proposals</h1>
    <div className='my-3 flex flex-wrap'>
    <Link to='/my-proposals' className="flex-grow md:flex-none p-1">
                <span 
                    className={`${commonStyle} px-3 my-3 md:px-8 ${selectedButton === 'Active' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Active')}>
                    Active
                </span>
            </Link>  
            <Link to='/freelancer/view-referals'className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'Referrals' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Referrals')}>
                    Referrals
                </span>
            </Link>
            <Link to='/freelancer/view-archived'className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'Archieved' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Archieved')}>
                    Archieved
                </span>
            </Link>
    </div>
    <div class="flex-1 border-t-2 border-gray-200 opacity-30 my-4"></div>
    <div className='my-4 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left'>
      <h1 className='font-inter text-[16px] font-bold text-[#031136] p-3'>Offers (0)</h1>
    </div>
    <div className='my-4 bg-[#FFFFFF] border p-3 border-gray-200 border-opacity-30 text-left flex items-center justify-between'>
    <h1 className='font-inter text-[16px] font-bold text-[#031136]'>Invitations to Interview (0)</h1>
    <div className="flex space-x-1">
        <button
            onClick={() => setIsAvailable(true)}
            className={`flex items-center justify-center text-[#0A142F] font-inter opacity-50 text-[13px] py-2 px-4 focus:outline-none rounded-full ${isAvailable ? 'ring-1 ring-gray-400' : ''}`}>
            <img src={availablenow} alt="" className='h-[16px] mr-2' />
            Available now
        </button>
        <button
            onClick={() => setIsAvailable(false)}
            className={`text-center text-[#0A142F] font-inter opacity-50 text-[13px] py-2 px-4 focus:outline-none rounded-full ${!isAvailable ? 'ring-1 ring-gray-400' : ''}`}>
            Off
        </button>
        <div class="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-1">
            <img src={edit} alt="edit" />
        </div>
    </div>
</div>
<div className='my-4 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left'>
<h1 className='font-inter text-[16px] font-bold text-[#031136] p-3'>Active Proposals (5)</h1>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30 flex items-center'>
    <div className='flex flex-col w-1/4'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Received Aug 30, 2023</h1>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>3 days ago</p>
    </div>

    <div className='flex-grow pl-[180px]'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Mobile App UI/UX Flat Design</h1>
    </div>

    <div className='flex flex-col w-1/4 items-end pr-4'>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>General Profile</p>
    </div>
</div>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30 flex items-center'>
    <div className='flex flex-col w-1/4'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Received Aug 22, 2023</h1>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>3 days ago</p>
    </div>

    <div className='flex-grow pl-[180px]'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Diseñador gráfico UI/UX web - medio tiempo </h1>
    </div>

    <div className='flex flex-col w-1/4 items-end pr-4'>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>General Profile</p>
    </div>
</div>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30 flex items-center'>
    <div className='flex flex-col w-1/4'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Received Aug 2, 2023</h1>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>3 days ago</p>
    </div>

    <div className='flex-grow pl-[180px]'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Need a figma designer for my startup</h1>
    </div>

    <div className='flex flex-col w-1/4 items-end pr-4'>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>General Profile</p>
    </div>
</div>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30 flex items-center'>
    <div className='flex flex-col w-1/4'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Received Jul 19, 2023</h1>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>3 days ago</p>
    </div>

    <div className='flex-grow pl-[180px]'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Looking for UI/UX Designer</h1>
    </div>

    <div className='flex flex-col w-1/4 items-end pr-4'>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>General Profile</p>
    </div>
</div>
</div>
<div className='my-4 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left'>
<h1 className='font-inter text-[16px] font-bold text-[#031136] p-3'>Submitted Proposals (57)</h1>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30 flex items-center'>
    <div className='flex flex-col w-1/4'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Initiated Sep 2, 2023</h1>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>8 hours ago</p>
    </div>

    <div className='flex-grow pl-[180px]'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Web designer for saas landing page</h1>
    </div>

    <div className='flex flex-col w-1/4 items-end pr-4'>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>General Profile</p>
    </div>
</div>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30 flex items-center'>
    <div className='flex flex-col w-1/4'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Initiated Sep 2, 2023</h1>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>16 hours ago</p>
    </div>

    <div className='flex-grow pl-[180px]'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Landing page design for a wine delivery website</h1>
    </div>

    <div className='flex flex-col w-1/4 items-end pr-4'>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>General Profile</p>
    </div>
</div>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30 flex items-center'>
    <div className='flex flex-col w-1/4'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Initiated Sep 1, 2023</h1>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>16 hours ago</p>
    </div>

    <div className='flex-grow pl-[180px]'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Senior React/React Native Developer</h1>
    </div>

    <div className='flex flex-col w-1/4 items-end pr-4'>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>General Profile</p>
    </div>
</div>
<div className='px-4 md:px-8 py-4 border-b border-gray-200 border-opacity-30 flex items-center'>
    <div className='flex flex-col w-1/4'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Initiated Sep 1, 2023</h1>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>1 day ago</p>
    </div>

    <div className='flex-grow pl-[180px]'>
        <h1 className='font-cardo text-[18px] text-[#031136]'>Looking for UI/UX Designer</h1>
    </div>

    <div className='flex flex-col w-1/4 items-end pr-4'>
        <p className='font-inter text-[14px] text-[#031136] opacity-50'>General Profile</p>
    </div>
</div>
<div className="flex justify-end items-center p-5">
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
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default MyProposals