import React from 'react'
import logo from '../images/Alanced.png'
import { Link } from 'react-router-dom'
import navback from '../images/Nav_Background.png'

const Navbar = () => {
  return (
    <div className='sticky z-50 top-0 bg-cover' style={{ backgroundImage: `url(${navback})`}}>
      <nav class="flex items-center justify-between flex-wrap p-6">
  <div class="flex items-center flex-shrink-0 ml-[129px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-0">
    <div class="text-sm lg:flex-grow ml-[45px] -mt-5">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0e mr-12 font-inter text-[16px] text-[#031136]">
        Find Talent
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 mr-12 font-inter text-[16px] text-[#031136]">
        Find Work
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 mr-12 font-inter text-[16px] text-[#031136]">
        Why Alanced
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 font-inter text-[16px] text-[#031136]">
        Enterprise
      </a>
    </div>
    <div className='mr-[100px]'>
      <Link to='/login'><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-2 font-semibold">Sign In</span></Link>
      <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
      <Link to='/choose'><button class="px-2 py-1 bg-[#E2F9EE]"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[6px]">Sign Up</p></button></Link>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
