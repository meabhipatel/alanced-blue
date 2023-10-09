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
import Selfboy from '../../components/images/enboy.jpg'

const Enterprises = () => {
  return (
    <>
    <Navbar/>
    <div className=' container-sm px-32 mt-10'>
        <div className=' flex flex-row border border-gray-200 rounded-lg border-opacity-[50%] bg-[#E2F9EE]'>
            <div className=' basis-6/12 mt-12 text-left'>
                <h1 className=' ml-8 font-cardo  font-bold text-[22px] text-lime-700'>Alanced</h1>
                <h1 className=' ml-8 font-cardo text-[35px] font-semibold text-lime-600'>Your Trusted </h1>
                <h1 className=' ml-8 font-cardo text-[28px] font-semibold text-lime-600'>Partner For Design And</h1>
                <h1 className=' ml-8 font-cardo text-[28px] font-semibold text-lime-600'>Web Development.</h1>
                <p className=' ml-8 font-cardo font-normal text-lg mt-8 opacity-[50%]'>Count on us for ongoing maintenance and support, <br/>ensuring your website stays secure and up-to-date while </p>
                <Link to='/contact-us'><span class="inline-block text-sm px-4 py-[10px] mt-8 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-2 font-semibold ml-8">Let's Connect</span></Link>
            </div>
            <div className=' basis-6/12'><img src={girlimg} alt="" className=' rounded-lg rounded-tl-none rounded-bl-none'/></div>
        </div>
        <div>
        <h4 className="pt-16 font-cardo text-[20px]">Trusted by 4,000+ companies</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 cursor-pointer">
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
        <div className='flex flex-row space-x-8 mt-10'>
            <div className=' basis-4/12 border border-gray-200 rounded-lg border-opacity-[50%] p-6 bg-[#cffafe]'>
                <div className='text-left text-2xl'><i class="bi bi-boxes"></i></div>
                <h1 className=' font-cardo text-[30px] text-left mt-2'>Talent</h1>
                <p className=' font-cardo text-[18px] text-left mt-3'>Unleash our exceptional talent to fuel your project's success.</p>
            </div>
            <div className=' basis-4/12 border border-gray-200 rounded-lg border-opacity-[50%] p-6 bg-[#e0e7ff]'>
            <div className=' text-left text-2xl'><i class="bi bi-shield-lock"></i></div>
            <h1 className=' font-cardo text-[30px] text-left mt-2'>Security</h1>
                <p className=' font-cardo text-[18px] text-left mt-3'>Protecting your digital assets with state-of-the-art security solutions</p>
            </div>
            <div className=' basis-4/12 border border-gray-200 rounded-lg border-opacity-[50%] p-6 bg-[#dcfce7]'>
            <div className=' text-left text-2xl'><i class="fa fa-file-pdf-o" aria-hidden="true"></i></div>
            <h1 className=' font-cardo text-[30px] text-left mt-2'>Work</h1>
                <p className=' font-cardo text-[18px] text-left mt-3'>Your go-to partner for exceptional web development and design.</p>
            </div>
        </div>
        <div className=' flex flex-row mt-12'>
            <div className=' basis-6/12'></div>
            <div className=' basis-6/12'></div>
        </div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default Enterprises
