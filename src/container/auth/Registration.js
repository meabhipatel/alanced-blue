import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import registerimg from './register.png'
// import google from './google.png'
import google from '../../components/images/google.png'
import box from './box.png'
import registerimg2 from './register2.png'


const Registration = () => {
  return (
    <>
        <div class="flex items-center min-h-screen bg-gray-50">
        <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div class="flex flex-col md:flex-row">
                <div class="h-32 md:h-auto md:w-[45%]">
                    <img class="w-full h-[580px]" src={registerimg2}
                        alt="img"/>
                        {/* <img src={box} alt="" className='display: inline -mt-[188%] h-[18%] ml-[61%] animate-bounce'/> */}
                </div>
                <div class="flex items-center justify-center sm:px-14 md:w-[57%]">
                    <div class="w-full">
                    <div class="flex items-center justify-between -mt-[20px]">
                        <p className="inline-block ml-[170px] text-xs">Already have an account?</p>
                        <Link to='/login'><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Sign in</span></Link>
                    </div>
                      
                        <h1 class="mb-4 text-xl text-left mt-10 font-cardo text-gray-700">
                        Create Your Free Account
                        </h1>
                        <div class='flex flex-row space-x-4'>
                        <div className=''>
                            <label class="block text-sm text-left font-cardo">
                                Full Name
                            </label>
                            <input type="email"
                                class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                placeholder="Your Name"  name=''/>
                        </div>
                        <div className=''>
                            <label class="block text-sm text-left font-cardo">
                                Last Name
                            </label>
                            <input type="email"
                                class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                placeholder="Your Last Name"  name=''/>
                        </div>
                        </div>
                        <div>
                            <label class="block text-sm text-left font-cardo mt-4">
                                Email Address
                            </label>
                            <input type="email"
                                class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                placeholder="example@gmail.com"  name='email'/>
                        </div>
                        <div>
                            <label class="block mt-4 text-sm text-left font-cardo">
                                Password
                            </label>
                            <input
                                class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                placeholder="•••••••••••" type="password"  name='password'/>
                        </div>

                        <button
                            class="block w-full px-4 py-2 mt-4 text-sm leading-5 text-center transition-colors duration-150 border border-none rounded-lg  focus:outline-none focus:shadow-outline-blue bg-gradient-to-r from-[#00BF58] to-[#E3FF75]  text-white font-semibold"
                            href="#">
                            Create your account
                        </button>

                        <div class="flex items-center">
                        <div class="flex-1 border-t-2 my-8"></div>
                        <span class="px-4 bg-white font-jost">or</span>
                        <div class="flex-1 border-t-2 my-8"></div>
                        </div>

                        <button class=" w-full px-4 py-2 text-sm leading-5 text-center transition-colors duration-150 border border-gray-200 rounded-lg focus:outline-none focus:shadow-outline-blue bg-white text-black font-semibold flex items-center justify-center font-jost" href="#"><img src={google} alt="" class="mr-2" /> Sign In with Google</button>
                        <p className="text-xs text-left pt-3 font-inter">Already have and Account? <Link to='/login'><span className="text-yellow-400">Sign in</span></Link></p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Registration
