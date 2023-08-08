import React from 'react'
import background from './alanced-bg.png'
import Navbar from './Navbar'

const Background = () => {
  return (
    <div className="h-screen bg-center bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <Navbar/>
        <div className='text-left ml-[11vw] mt-16'>
          <h1 className='text-[#797979] text-lg font-semibold tracking-wider'><span className='text-[#031136] indent-4'>Popular:</span> Design Art Business Video Editing</h1>
          <h6 className='text-5xl font-serifadd font-semibold leading-[75px] mt-2'>Find & Hire <br/> Top 3% of expert <br/> on Alanced</h6>
          <h1 className='mt-6 text-[#797979] text-lg'>With the largest professional creative community online, simply <br/> search through from our website</h1>
        </div>
    </div>
  )
}

export default Background
