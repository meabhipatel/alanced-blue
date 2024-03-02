import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import Footer from '../../components/Layout/Footer'
import HomeSection4 from '../../components/Layout/HomeSection4'
import girlimg from '../../components/images/Untitled-1.png'
import { Link } from 'react-router-dom'
import coinbase from '../../components/images/coinbase.png'
import spotify from '../../components/images/spotify.png'
import slack from '../../components/images/slack.png'
import adobe from '../../components/images/adobe.png'
import webflow from '../../components/images/webflow.png'
import zoom from '../../components/images/zoom.png'
import Selfboy from '../../components/images/busi.png'
import WomanT from '../../components/images/WomanTalk.png'

const Enterprises = () => {
  return (
    <>
    <Navbar/>
    <div className=' container-sm px-32 mt-10'>
        <div className=' flex flex-row border border-gray-200 rounded-lg border-opacity-[50%] bg-[#dcf7ea]'>
            <div className=' basis-6/12 mt-8 text-left'>
                <h1 className=' ml-8 font-jost  font-bold text-[22px] text-blue-700'>Alanced</h1>
                <div class="w-20 ml-8  mt-1 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] rounded-lg"></div>
                <div class="border-gray-600 border-b-2 rounded-lg"></div>
                </div>
                <h1 className=' ml-8 font-jost text-[35px] mt-5 font-semibold text-blue-600'>Your Trusted </h1>
                <h1 className=' ml-8 font-jost text-[28px] font-semibold text-blue-600'>Partner For Design And</h1>
                <h1 className=' ml-8 font-jost text-[28px] font-semibold text-blue-600'>Web Development.</h1>
                <p className=' ml-8 font-inter font-normal text-[16px] mt-8 opacity-[50%]'>Count on us for ongoing maintenance and support, <br/>ensuring your website stays secure. </p>
                <Link to='/sign-up' onClick={() => window.scroll(0, 0)}><span class="inline-block text-sm px-4 py-[10px] mt-8 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white mr-2 font-semibold ml-8">Let's Connect</span></Link>
            </div>
            <div className=' basis-6/12'><img src={girlimg} alt="" className=' rounded-lg rounded-tl-none rounded-bl-none'/></div>
        </div>
        <div>
        <h4 className="pt-10 font-cardo text-[20px]">Trusted by 4,000+ companies</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 cursor-pointer">
    <div class="p-4">
        <img src={coinbase} alt="" />
    </div>
    <div class="p-4">
    <img src={spotify} alt="" />
    </div>
    <div class="p-4">
    <img src={slack} alt="" />
    </div>
    <div class="p-4">
    <img src={adobe} alt="" />
    </div>
    <div class="p-4">
    <img src={webflow} alt="" />
    </div>
    <div class="p-4">
    <img src={zoom} alt="" />
    </div>
</div>
        </div>
        <h1 className='font-cardo text-[30px] mt-5'>Key Features</h1>
        <div class="w-24 mt-1 relative mx-auto">
                <div class="absolute inset-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] rounded-lg"></div>
                <div class="border-gray-600 border-b-2 rounded-lg"></div>
                </div>
        <div className='flex flex-row space-x-8 mt-10'>
            <div className=' basis-3/12 border border-blue-200 rounded-lg border-opacity-[50%] p-6 shadow-md bg-[#daf6f8]'>
                <div className='text-left text-2xl'><i class="bi bi-boxes"></i></div>
                <h1 className=' font-cardo text-[30px] text-left mt-2'>Talent</h1>
                <p className=' font-cardo text-[18px] text-left mt-3'>Unleash our exceptional talent to fuel your project's success.</p>
                <div className='text-left mt-3'><Link to='/view-all/freelancer' onClick={() => window.scroll(0, 0)}><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-[#9cdcfa] border rounded border-none text-white mr-2 font-semibold">View Features</span></Link></div>
            </div>
            <div className=' basis-3/12 border border-blue-200 rounded-lg border-opacity-[50%] p-6 shadow-md bg-[#e6ebfc]'>
            <div className=' text-left text-2xl'><i class="bi bi-shield-lock"></i></div>
            <h1 className=' font-cardo text-[30px] text-left mt-2'>Security</h1>
                <p className=' font-cardo text-[18px] text-left mt-3'>Protecting your digital assets with state-of-the-art security solutions.</p>
                <div className='text-left mt-3'><Link to='/safety-security' onClick={() => window.scroll(0, 0)}><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r bg-[#d2c8f8] border rounded border-none text-white mr-2 font-semibold">View Features</span></Link></div>
            </div>
            <div className=' basis-3/12 border border-blue-200 rounded-lg border-opacity-[50%] p-6 shadow-md bg-[#e3f7e9]'>
            <div className=' text-left text-2xl'><i class="fa fa-file-pdf-o" aria-hidden="true"></i></div>
            <h1 className=' font-cardo text-[30px] text-left mt-2'>Work</h1>
                <p className=' font-cardo text-[18px] text-left mt-3'>Your go-to partner for exceptional web development and design.</p>
                <div className='text-left mt-3'><Link to='/projects'  onClick={() => window.scroll(0, 0)}><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r bg-[#addac2] border rounded border-none text-white mr-2 font-semibold">View Features</span></Link></div>
            </div>
            <div className=' basis-3/12 border border-blue-200 rounded-lg border-opacity-[50%] p-6 shadow-md bg-[#f5f5f4]'>
            <div className=' text-left text-2xl'><i class="bi bi-geo-alt"></i></div>
            <h1 className=' font-cardo text-[30px] text-left mt-2'>Centralized Hub</h1>
                <p className=' font-cardo text-[18px] text-left mt-3'>A centralized hub is a single point of control or coordination.</p>
                <div className='text-left mt-3'><Link to='/'  onClick={() => window.scroll(0, 0)}><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r bg-[#c7c7bf] border rounded border-none text-white mr-2 font-semibold">View Features</span></Link></div>
            </div>
        </div>
        <div className=' flex flex-row mt-16 border border-gray-200 rounded-lg border-opacity-[50%]'>
            <div className=' basis-6/12'><img src={Selfboy} alt="" className='rounded-lg rounded-tr-none rounded-br-none' /></div>
            <div className=' basis-6/12 text-left pl-12'>
                <h1 className=' font-cardo text-[30px] mt-1'>How It Works</h1>
                <div class="w-32  mt-1 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] rounded-lg"></div>
                <div class="border-gray-600 border-b-2 rounded-lg"></div>
                </div>
                <div className=' flex flex-row mt-8'>
                    <div className=' basis-1/12'><i class="bi bi-check-lg text-blue-600 text-[25px]"></i></div>
                    <div className=' basis-11/12'><p className='text-base'>Freelancers build profiles showcasing skills, experience,<br/> and portfolios.</p></div>
                </div>
                <div className=' flex flex-row mt-3'>
                    <div className=' basis-1/12'><i class="bi bi-check-lg text-blue-600 text-[25px]"></i></div>
                    <div className=' basis-11/12'><p className='text-base'>Clients post projects, specifying requirements and budget.</p></div>
                </div>
                <div className=' flex flex-row mt-3'>
                    <div className=' basis-1/12'><i class="bi bi-check-lg text-blue-600 text-[25px]"></i></div>
                    <div className=' basis-11/12'><p className='text-base'>Clients deposit funds that are held until the project <br/> is completed.</p></div>
                </div>
                <div className=' flex flex-row mt-3'>
                    <div className=' basis-1/12'><i class="bi bi-check-lg text-blue-600 text-[25px]"></i></div>
                    <div className=' basis-11/12'><p className='text-base'>Messaging tools enable clients and freelancers to<br/> discuss projects.</p></div>
                </div>
                <div className=' flex flex-row mt-3'>
                    <div className=' basis-1/12'><i class="bi bi-check-lg text-blue-600 text-[25px]"></i></div>
                    <div className=' basis-11/12'><p className='text-base'>Payments may be released in stages upon achieving <br/> project milestones.</p></div>
                </div>
                <div className=' flex flex-row mt-3'>
                    <div className=' basis-1/12'><i class="bi bi-check-lg text-blue-600 text-[25px]"></i></div>
                    <div className=' basis-11/12'><p className='text-base'>Clients and freelancers can rate and review each other.</p></div>
                </div>
            </div>
        </div>
        <div className=' flex flex-row mt-16 border border-gray-200 rounded-lg border-opacity-[50%]'>
            <div className=' basis-9/12 bg-[#f5f5f4] rounded-lg rounded-tr-none rounded-br-none'><h1 className=' text-left mt-5 ml-5 font-cardo text-[25px]'>Contact Alanced to explore tailored strategies and solutions for improving <br/> your business.</h1>
            <div className=' text-left'> <Link to='/contact-us' onClick={() => window.scroll(0, 0)}><span class="inline-block text-sm px-4 py-[10px] mt-8 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white mr-2 font-semibold ml-8">Contact Us</span></Link></div>
            </div>
            <div className=' basis-3/12'><img src={WomanT} alt="" className='rounded-lg rounded-tl-none rounded-bl-none'/></div>
        </div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default Enterprises
