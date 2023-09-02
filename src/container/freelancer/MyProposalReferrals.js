import React, { useState } from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import { Link } from 'react-router-dom'
import refrel from '../../components/images/refrel.png'


const MyProposalReferrals = () => {

  const [selectedButton, setSelectedButton] = useState('Referrals');
    const commonStyle = "inline-block text-sm py-[10px] mt-4 lg:mt-0 border rounded font-semibold"; 

  return (
    <>
    <Navbar/>
    <div className='mt-2 container px-40'>
      <h1 className='font-cardo text-[21px] text-[#031136] font-normal pt-4 text-left'>My proposals</h1>
    <div className='my-3 flex flex-wrap'>
    <Link to='' className="flex-grow md:flex-none p-1">
                <span 
                    className={`${commonStyle} px-3 my-3 md:px-8 ${selectedButton === 'Active' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Active')}>
                    Active
                </span>
            </Link>  
            <Link to=''className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'Referrals' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Referrals')}>
                    Referrals
                </span>
            </Link>
            <Link to=''className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'Archieved' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('Archieved')}>
                    Archieved
                </span>
            </Link>
    </div>
    <div>
        <img src={refrel} alt="" className=' mx-auto' />
    </div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default MyProposalReferrals