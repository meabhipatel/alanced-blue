import React from 'react'
import coinbase from '../images/coinbase.png'
import slack from '../images/slack.png'
import adobe from '../images/adobe.png'
import spotify from '../images/spotify.png'
import webflow from '../images/webflow.png'
import zoom from '../images/zoom.png'
import circlecheck from '../images/circlecheck.png'
import happyclient from '../images/happyclient.png'
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
import { Link } from 'react-router-dom'

const HomeSection1 = () => {
  return (
    <div>
        <h4 className="pt-16 font-cardo text-[20px]">Trusted by 4,000+ companies</h4>
        <div class="grid grid-cols-6 gap-4 px-32 mt-8">
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
<hr className='mx-28 my-9'/>
<div class="grid grid-cols-2 gap-4 px-32 mt-6">
    <div class="p-4 ml-24">
    <div class="relative p-10">
  <div class="absolute top-0 left-0 w-[190px] h-[210px] rounded shadow-lg">
  <img src={client2} alt="" />
  </div>
  <div class="absolute top-[65px] left-[170px] w-[220px] h-[295px] rounded shadow-lg">
  <img src={client1} alt="" className='h-[295px] w-[222px]'/>
  </div>
  <div class="absolute top-[276.5px] left-[30px] p-6 w-[170px] h-[83px] rounded shadow-lg z-20 bg-white">
    <img src={happyclient} alt="" />
  </div>
</div>
    </div>
    <div class="p-4 text-left">
      <h4 className='font-cardo text-[23px] text-[#0A142F] mt-5'>Simple Solutions for Complex <br />Connections</h4>
      <p className='font-inter text-[13px] opacity-50 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of type <br /> and scrambled it to make a type specimen book. It has survived not <br /> only five centuries, but also the leap into electronic typesetting,<br /> remaining essentially unchanged. It was popularised in the 1960s with <br />the release of Letraset sheets containing Lorem Ipsum passages, and <br /> more recently with desktop publishing software like Aldus PageMaker <br /> including versions of Lorem Ipsum.</p>
      <div class="flex items-center space-x-3 mt-4">
        <img src={circlecheck} alt="" className='h-5 w-5'/>
    <span className='pr-6 font-inter text-[15px]'>High Analysis</span>
    <img src={circlecheck} alt="" className='h-5 w-5'/>
    <span className='font-inter text-[15px]'>Certified Institute</span>
</div>
<div className='mt-7'>
<Link to=''><span class="text-sm px-4 py-[10px] lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Read More</span></Link>
</div>
    </div>
</div>

    </div>
  )
}

export default HomeSection1