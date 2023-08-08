import React from 'react'
import logo from './Alanced.png'

const Navbar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap p-6">
  <div class="flex items-center flex-shrink-0 ml-[128px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-xl tracking-widest ml-2">ALANCED</span>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-0">
    <div class="text-sm lg:flex-grow mr-[80px] -mt-5">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0e mr-4">
        Find Talent
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
        Find Work
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
        Why Alanced
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0">
        Enterprise
      </a>
    </div>
    <div className='mr-[100px]'>
      <a href="#" type='button' class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-2">Sign In</a>
      {/* <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded  border-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-4 lg:mt-0">Sign Up</a> */}
      <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
    <button class="px-2 py-1 bg-[#E2F9EE]"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Sign Up</p></button>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
