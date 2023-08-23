import React from 'react'
import cupbook from '../images/cupbook.png'
import { Link } from 'react-router-dom'

const HomeSection4 = () => {
  return (
    <div>
      <div className='bg-[#F6FAFD]'>
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 px-4 md:px-[145px]">
        <div class="flex-1 p-4 text-left">
    <h1 className='font-cardo text-[26px] pt-20 inline-block text-[#0A142F]'>
    Get Book Copy Today!
    <div className="border-b-2 border-[#1B3764] w-1/6 my-4 opacity-62"></div>
    </h1>
    <p className='opacity-50 font-inter text-[13px]'>This the first true value generator on the Internet. It uses alphas dictionary <br /> of over 200 Latin words.</p>
<div className='mt-8'>
<Link to=''><span class="text-sm px-4 py-[10px] lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Sign In</span></Link>
</div>
    </div>
    <div class="flex-1 p-4">
        <img src={cupbook} alt="" />
    </div>
</div>
        </div>
    </div>
  )
}

export default HomeSection4
