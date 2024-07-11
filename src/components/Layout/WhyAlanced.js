import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import HomeSection4 from './HomeSection4'
import { Link } from 'react-router-dom'
import topimg from '../images/searchg.png'
import create from '../images/screate.png'
import earn from '../images/searn.png'
import  pay from '../images/spay.png'
import call from '../images/call1.jpg'



const WhyAlanced = () => {
  return (
    <>
    <Navbar/>
    <div className='container-sm px-32 mt-10'>
      <div className=' flex flex-row border border-gray-200 rounded'>
        <div className=' basis-8/12'>
          <h1 className='ml-8 text-left font-jost text-[26px] mt-6 font-semibold text-blue-600'>Engage with the global job marketplace platform.



</h1>
          <div class="w-36 ml-8  mt-1 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] rounded-lg"></div>
                <div class="border-gray-600 border-b-2 rounded-lg"></div>
                </div>
          <p className=' ml-8 font-jost  text-[15px] mt-4 opacity-[70%] text-left'>Are you ready to elevate your business or career to the next level?



</p>
          <div className=' flex flex-row mt-3  mb-3 ml-7'>
            <Link to='/find-talent'><div className=' basis-2/12' ><button className='h-10 w-28 text-white bg-gradient-to-r from-[#0909E9] to-[#00D4FF] mt-5 text-base font-semibold rounded'>Find Talent</button></div></Link>
            <Link to='/jobs'><div class="p-0.5 mt-5 rounded bg-gradient-to-b from-[#0909E9] to-[#00D4FF] ml-5">
            <button class="px-2 py-1 bg-[#f8faf9] rounded"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-bold text-sm py-[4px] px-[8px]">Find Work</p></button>
            </div></Link>
            </div>
        </div>
        <div className=' basis-4/12'><img src={topimg} alt="" className='h-40 mt-[6%] mb-[5%] mx-auto'/></div>
      </div>
      <div className=' mt-12'>
        <div className=' flex flex-row'>
          <div className='basis-3/12'><img src={create} alt="" className='h-36 ml-1 mx-auto' /></div>
          <div className='basis-9/12 mt-5'>
            <h1 className=' font-jost font-semibold text-left text-[22px]'>Sign up for your free profile now.</h1>
            <p className=' font-jost text-[15px] mt-3 opacity-50 text-left mb-5'>Focus on including professional skills and experience directly relevant to your target job. This approach is crucial, particularly if your skills and work history differ from your current career goals, as it allows you to highlight the expertise that hiring managers value most.</p>
          </div>
        </div>
        <div className=' flex flex-row mt-5'>
          <div className='basis-3/12'><img src={earn} alt="" className='h-32 ml-1 mx-auto' /></div>
          <div className='basis-9/12 mt-5'>
            <h1 className=' font-jost font-semibold text-left text-[22px]'>Promote financial growth</h1>
            <p className=' font-jost text-[15px] mt-3 opacity-50 text-left mb-5'>"Foster financial growth" involves purposeful actions or strategies designed to nurture and stimulate the growth of one's financial resources, investments, or wealth. This may include activities like saving, investing, and seizing opportunities to boost income.</p>
          </div>
        </div>
        <div className=' flex flex-row mt-5'>
          <div className='basis-3/12'><img src={pay} alt="" className='h-32 ml-1 mx-auto' /></div>
          <div className='basis-9/12 mt-5'>
            <h1 className=' font-jost font-semibold text-left text-[22px]'>Secure and dependable payment method.</h1>
            <p className=' font-jost text-[15px] mt-3 opacity-50 text-left mb-5'>A secure and reliable payment method ensures that sensitive data, including personal and financial information, is protected during financial transactions. It guarantees accurate and prompt processing of payments while prioritizing data security.</p>
          </div>
        </div>
      </div>
        {/* <div className=' flex flex-row border border-gray-200 rounded mt-12'>
          <div className=' basis-6/12 ml-16 border-r border-gray-200'>
            <h1 className='font-jost text-[24px] mt-8 text-left font-semibold' >Create a job posting and hire talent.</h1>
            <div class="w-32  mt-2 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] rounded-lg"></div>
                <div class="border-gray-600 border-b-2 rounded-lg"></div>
                </div>
            <h1 className='font-jost text-[18px] mt-3 opacity-70 text-left'>Discover the perfect talent match in our Talent <br/>Marketplace.</h1>
            <p className='font-jost text-[15px] mt-4 opacity-70 text-left'>Publish your job listing on the global job market and <br/> anticipate a wave of proposals from skilled<br/> individuals spanning the globe</p>
            <p className='font-jost text-[15px] mt-4 opacity-70 text-left'>Our cutting-edge algorithms assist in identifying <br/> top candidates tailored to your needs.You have <br/> the opportunity to thoroughly review  profiles,<br/> portfolios, and feedback before granting<br/> approval.</p>
            <div className=' text-left mb-8'> <Link to='/find-talent' onClick={() => window.scroll(0, 0)}><span class="inline-block text-[16px] px-5 py-[10px] mt-8 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white mr-2 text-base font-semibold ">Talents</span></Link></div>
          </div>
          <div className=' basis-6/12 ml-16'>
          <h1 className='font-jost text-[24px] mt-8 text-left font-semibold' >Explore projects and get opportunities.</h1>
          <div class="w-32  mt-2 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] rounded-lg"></div>
                <div class="border-gray-600 border-b-2 rounded-lg"></div>
                </div>
            <h1 className='font-jost text-[18px] mt-3 opacity-70 text-left'>Initiate essential tasks without delay using Project<br/> Catalog.</h1>
            <p className='font-jost text-[15px] mt-4 opacity-70 text-left'>Dive into a world of projects and unlock valuable work.<br/> discover a realm of possibilities and embark on <br/>your journey to new horizons.</p>
            <p className='font-jost text-[15px] mt-4 opacity-70 text-left'>Our platform offers a gateway to a world of diverse <br/>projects, where you can explore, engage, and <br/>embark on new ventures. Whether you're a seasoned<br/> professional looking to expand your horizons or a<br/> fresh talent eager to make your mark.</p>
            <div className=' text-left mb-8'> <Link to='/jobs' onClick={() => window.scroll(0, 0)}><span class="inline-block text-[16px] px-7 py-[10px] mt-8 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white mr-2 font-semibold text-base">Works</span></Link></div>
          </div>
        </div> */}
        {/* <div className=' flex flex-row mt-12 mb-5'>
          <div className=' basis-9/12 ml-4'>
            <h1 className='text-left font-jost text-[26px] mt-6 font-semibold'>We are available 24/7</h1>
            <div class="w-32  mt-2 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] rounded-lg"></div>
                <div class="border-gray-600 border-b-2 rounded-lg"></div>
                </div>
            <p className='font-jost  text-[15px] mt-4 opacity-[70%] text-left'>Our availability is unwavering, ensuring your access to our services around the clock, 24 hours a day, 7 days a week. Whenever you need assistance, support, or have inquiries, we're here to respond promptly, no matter the time or day. Our commitment to round-the-clock availability means you can rely on us for assistance, guidance, and peace of mind at any hour, making your experience seamless and convenient.</p>
          </div>
          <div className='basis-3/12'><img src={call} alt="" className='h-40 mx-auto mt-5' /></div>
        </div> */}
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default WhyAlanced
