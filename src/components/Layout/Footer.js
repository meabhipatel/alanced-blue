import React from 'react'
import logo from '../images/Alanced-footer.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import fb from '../images/fb.png';
import arrow from '../images/arrow.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className="footer-1 bg-white py-8 sm:py-12">
  <div className="container mx-auto px-4">
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-20">
    <div class="p-4 text-left">
    <h5 class="text-xl font-bold font-cardo mb-6">Product</h5>
        <ul class="list-none footer-links text-gray-500">
          <Link to='/view-all/freelancer' onClick={() => window.scrollTo(0, 0)}>
          <li class="mb-2 hover:text-green-600 hover:underline">Recruiting</li>
          </Link>
          <Link to='/projects' onClick={() => window.scrollTo(0, 0)}>
          <li class="mb-2 hover:text-green-600 hover:underline">Career</li>
          </Link>
          <li class="mb-2 hover:text-green-600 hover:underline">Enterprise Solution</li>
          <li class="mb-2 hover:text-green-600 hover:underline">Alanced Foundation</li>
        </ul>
    </div>
    <div class="p-4 text-left">
    <h5 class="text-xl font-bold mb-6 font-cardo">Information</h5>
        <ul class="list-none footer-links text-gray-500">
          <li class="mb-2 hover:text-green-600 hover:underline">FAQ</li>
          <li class="mb-2 hover:text-green-600 hover:underline">Blog</li>
          <li class="mb-2 hover:text-green-600 hover:underline">Support</li>
        </ul>
    </div>
    <div class="p-4 text-left">
    <h5 class="text-xl font-bold mb-6 font-cardo">Company</h5>
        <ul class="list-none footer-links text-gray-500">
          <li class="mb-2 hover:text-green-600 hover:underline">About us</li>
          <li class="mb-2 hover:text-green-600 hover:underline">Contact us</li>
          <li class="mb-2 hover:text-green-600 hover:underline">Safety & Security</li>
        </ul>
    </div>
    <div class="p-4">
    <div className='bg-[#F4F5F9] lg:h-[220px] lg:w-[350px] -mt-6 lg:-ml-[100px]'>
        <h5 class="text-xl font-bold font-cardo pt-[22px] text-start ml-[23px]">Subscribe</h5>
        <input type="email" className='mt-3 lg:-ml-[60px] p-2 text-sm focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder='Email Address'/>
        <button class="inline-block text-sm px-4 py-[12px] lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold"><img src={arrow} alt="" /></button>
        <p className='text-[14px] pt-3 text-left pl-6 opacity-50'>Hello, we are Lift Media. Our goal is to translate <br />the positive effects from revolutionizing how <br /> companies engage with their clients & their <br /> team.</p>
        </div>
    </div>
    </div>

    <hr className="mx-4 my-6 sm:mx-14"/>

    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5 px-4 sm:px-[55px]">
      <div className="flex-1 flex justify-start p-4 pl-0 pt-1">
      <div class="md:w-1/6 flex items-center flex-shrink-0">
        <img src={logo} alt="" />
        <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
      </div>
      </div>
      <div className="flex-1 flex justify-center p-4 pt-1">
      <div class="flex space-x-4 w-full">
        <div class="flex-1 p-2 font-bold font-larsseit text-[14px] cursor-pointer">Terms</div>
        <div class="flex-1 p-2 font-bold font-larsseit text-[14px] cursor-pointer">Privacy</div>
        <div class="flex-1 p-2 font-bold font-larsseit text-[14px] cursor-pointer">Cookies</div>
    </div>
      </div>
      <div className="flex-1 flex justify-end p-4 pr-0 pt-1">
      <div class="flex sm:justify-center xl:justify-start md:justify-end">
          <a  class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-gradient-to-r from-[#00BF58] to-[#E3FF75] hover:border-[#B6F36F]">
            <img src={linkedin} alt="" className='ml-2 mt-1'/>
          </a>
          <a class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-gradient-to-r from-[#00BF58] to-[#E3FF75] hover:border-[#B6F36F]">
          <img src={fb} alt="" className='ml-2.5 mt-1'/>
          </a>
          <a  class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-gradient-to-r from-[#00BF58] to-[#E3FF75] hover:border-[#B6F36F]">
          <img src={twitter} alt="" className='ml-2 mt-1.5'/>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer