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
    <footer class="footer-1 bg-white py-8 sm:py-12">
  <div class="container mx-auto px-4">
    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 text-left ml-8">
        <h5 class="text-xl font-bold font-cardo mb-6">Product</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Employee database</a>
          </li>
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Payroll</a>
          </li>
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Absences</a>
          </li>
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Time tracking</a>
          </li>
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Shift Planner</a>
          </li>
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Recruiting</a>
          </li>
        </ul>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0 text-left">
        <h5 class="text-xl font-bold mb-6 font-cardo">Information</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">FAQ</a>
          </li>
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Blog</a>
          </li>
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Support</a>
          </li>
        </ul>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0 text-left">
        <h5 class="text-xl font-bold mb-6 font-cardo">Company</h5>
        <ul class="list-none footer-links">
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">About us</a>
          </li>
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Career</a>
          </li>
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Contact us</a>
          </li>
          <li class="mb-2">
            <a href="#" class="hover:text-green-800">Lift media</a>
          </li>
        </ul>
      </div>
      <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
        <div className='bg-[#F4F5F9] h-[220px] w-[350px] -mt-6'>
        <h5 class="text-xl font-bold font-cardo pt-[22px] text-start ml-[22px]">Subscribe</h5>
        <input type="email" className='mt-3 -ml-[60px] p-1' placeholder='Email Address'/>
        <Link to=''><button class="inline-block text-sm px-4 py-[10px] lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold"><img src={arrow} alt="" /></button></Link>
        <p className='text-[14px] pt-3'>Hello, we are Lift Media. Our goal is to translate <br />the positive effects from revolutionizing how <br /> companies engage with their clients & their team.</p>
        </div>
      </div>
    </div>

    <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t text-[#0A142F]">
      <div class="sm:w-full px-4 -mt-6 md:w-1/6 flex items-center flex-shrink-0">
        <img src={logo} alt="" />
        <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/6 md:mt-0 ml-[250px]">
        <h6 class="font-bold mb-2 font-larsseit -mt-5 text-[14px]">Terms</h6>
        </div>
        <div class="sm:w-1/2 md:w-1/6 md:mt-0">
        <h6 class="font-bold mb-2 font-larsseit -mt-5 -ml-[290px] text-[14px]">Privacy</h6>
        </div>
        <div class="sm:w-1/2 md:w-1/6 md:mt-0">
        <h6 class="font-bold mb-2 font-larsseit -mt-5 -ml-[590px] text-[14px]">Cookies</h6>
        </div>
        <div class="flex sm:justify-center xl:justify-start md:justify-end -mt-8 ml-[1160px]">
          <a href="" class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
            <img src={linkedin} alt="" className='ml-2 mt-1'/>
          </a>
          <a href="" class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
          <img src={fb} alt="" className='ml-2.5 mt-1'/>
          </a>
          <a href="" class="w-8 h-8 border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
          <img src={twitter} alt="" className='ml-2 mt-1.5'/>
          </a>
        </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer