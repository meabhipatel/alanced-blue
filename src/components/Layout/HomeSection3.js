import React from 'react'
import credibility from '../images/credibility.png'
import flexibility from '../images/flexibity.png'
import value from '../images/value.png'
import boxarrow from '../images/boxarrow.png'
import womanwithtab from '../images/womanwithtab.png'
import uparrow from '../images/uparrow.png'
import downarrow from '../images/downarrow.png'
import cupbook from '../images/cupbook.png'
import { Link } from 'react-router-dom'

const HomeSection3 = () => {
  return (
    <div>
    <div className='bg-[#F6FAFD] mt-10 pb-7'>
        <h1 className='font-cardo text-xl md:text-[26px] text-center pt-6 inline-block text-[#0A142F]'>
        Why Choose Alanced?
            <div className="border-b-2 border-gray-300 w-1/4 sm:w-1/6 mx-auto mt-3.5"></div>
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 px-4 md:px-32 text-center">
        <div class="p-4">
         <img src={credibility} alt="" className='mx-auto'/>
        <p className='opacity-50'>01</p>
        <h5 className='font-inter font-semibold py-4 text-[#0A142F]'>Streamlined Process</h5>
        <p className='opacity-50'>Our platform is designed to simplify the freelance experience, from project posting to hiring and payment, ensuring efficiency and transparency every step of the way.</p>
        <img src={boxarrow} alt="" className='mx-auto mt-2 cursor-pointer'/>
   </div>
    <div class="p-4">
    <img src={flexibility} alt="" className='mx-auto'/>
     <p className='opacity-50'>02</p>
    <h5 className='font-inter font-semibold py-4 text-[#0A142F]'>Secure and Reliable</h5>
    <p className='opacity-50'>We prioritize the security and reliability of our platform, offering secure payments and robust support to both freelancers and clients.</p>
         <img src={boxarrow} alt="" className='mx-auto mt-8 cursor-pointer'/>
    </div>
    <div class="p-4">
    <img src={value} alt="" className='mx-auto'/>
    <p className='opacity-50'>03</p>
    <h5 className='font-inter font-semibold py-4 text-[#0A142F]'>Community and Support</h5>
    <p className='opacity-50'> Join a supportive community of freelancers where collaboration, learning, and growth are encouraged. Our commitment to your success extends beyond just finding gigs—it's about nurturing a thriving freelance career.</p>
        <img src={boxarrow} alt="" className='mx-auto mt-8 cursor-pointer'/>
    </div>
        </div>
        <div className='mt-5 text-center'>
            <Link to='/why-alanced' onClick={() => window.scroll(0, 0)}><span class="text-sm px-4 py-[10px] bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white font-semibold">Why Choose Alanced</span></Link>
        </div>
    </div>
    <div>
        <h1 className='font-cardo text-xl md:text-[26px] text-center pt-16 inline-block text-[#0A142F]'>
            Work Your Way
            <div className="border-b-2 border-gray-300 w-1/2 md:w-1/3 mx-auto mt-3.5"></div>
        </h1>
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 mt-6 px-4 md:px-32">
        <div class="flex-1 p-4 pb-0">
        <img src={womanwithtab} alt="" className='-mt-20 h-[440px] ml-[180px]'/>
    </div>
    <div class="flex-1 p-4 text-left">
        <p className='font-inter font-semibold text-xs'>Choose from four payment terms and create Agreements.</p>
        <div class="flex items-center space-x-3 mt-4">
        <img src={uparrow} alt="" className='h-5 w-5'/>
    <span className='font-cardo text-[18px] font-[700px] text-[#0A142F]'>Fixed Price</span>
    </div>
    <div class="flex items-center space-x-3 mt-4">
        <img src={downarrow} alt="" className='h-5 w-5'/>
    <span className='font-cardo text-[18px] font-[700px] text-[#0A142F]'>Hourly</span>
    </div>
    <div class="flex items-center space-x-3 mt-4">
        <img src={downarrow} alt="" className='h-5 w-5'/>
    <span className='font-cardo text-[18px] font-[700px] text-[#0A142F]'>Task-Based</span>
    </div>
    <div class="flex items-center space-x-3 mt-4">
        <img src={downarrow} alt="" className='h-5 w-5'/>
    <span className='font-cardo text-[18px] font-[700px] text-[#0A142F]'>Recurring Payment</span>
    </div>
    <div className='mt-8'>
<Link to='/terms' onClick={() => window.scroll(0 ,0)}><span class="text-sm px-4 py-[10px] lg:mt-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white font-semibold">Learn About Agreements</span></Link>
</div>
    </div>
        </div>
    </div>
    {/* <div className='bg-[#F6FAFD]'>
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 px-4 md:px-[145px]">
        <div class="flex-1 p-4 text-left">
    <h1 className='font-cardo text-[26px] pt-20 inline-block text-[#0A142F]'>
    Get Book Copy Today!
    <div className="border-b-2 border-[#1B3764] w-1/6 my-4 opacity-62"></div>
    </h1>
    <p className='opacity-50 font-inter text-[13px]'>This the first true value generator on the Internet. It uses alphas dictionary <br /> of over 200 Latin words.</p>
<div className='mt-8'>
<Link to=''><span class="text-sm px-4 py-[10px] lg:mt-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white font-semibold">Sign In</span></Link>
</div>
    </div>
    <div class="flex-1 p-4">
        <img src={cupbook} alt="" />
    </div>
</div>
        </div> */}
    </div>
  )
}

export default HomeSection3