import React, { useState } from 'react'
import Navbar from'./Navbar'
import HomeSection4 from './HomeSection4'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import faq from '../images/faq.png'


const FAQ = () => {
 
  const [isOpen1, setIsOpen1] = useState(false);  
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
   <>
   <Navbar/>
   <div className='mt-2 mx-[9%]'>
   <div className="md:flex my-2 bg-[#FFFFFF] border border-gray-200 border-opacity-30 mt-12 mb-5">
    <div className="flex-1">
        <img src={faq} alt="" className='h-[100%]'/>
    </div>
    <div className="flex-1 py-4 px-3">
    <h1 className="font-cardo text-[26px] text-[#031136] text-center font-normal">Frequently Asked Question</h1>
    <div class="w-52 mt-1 relative mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-lg"></div>
      <div class="border-gray-600 border-b-2 rounded-lg"></div>
    </div>
    <div className='border border-gray-200 border-opacity-30 mt-8 mx-6 p-3'>
            <div className="flex justify-between items-center">
                <h1 className="font-inter text-md text-[#031136] text-left font-semibold"><i className="bi bi-question-circle-fill text-green-700 inline-block mr-1"></i> What is Alanced?</h1>
                <div 
                    className="pb-1 pl-0.4 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer flex-shrink-0"
                    onClick={() => setIsOpen1(!isOpen1)}
                >
                    <i className={isOpen1 ? "bi bi-chevron-up" : "bi bi-chevron-down"}></i>
                </div>
            </div>
            {isOpen1 && (
                <h1 className="font-inter text-sm text-[#031136] text-left font-normal opacity-40 py-3">
                    Alanced is a curated platform that connects skilled freelancers with clients in need of professional services. From writers and designers to coders and consultants, Alanced is your one-stop-shop for all freelancing needs.
                </h1>
            )}
        </div>
        <div className='border border-gray-200 border-opacity-30 mt-1 mx-6 p-3'>
            <div className="flex justify-between items-center">
                <h1 className="font-inter text-md text-[#031136] text-left font-semibold"><i className="bi bi-question-circle-fill text-green-700 inline-block mr-1"></i> How much does it cost to use Alanced?</h1>
                <div 
                    className="pb-1 pl-0.4 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer flex-shrink-0"
                    onClick={() => setIsOpen2(!isOpen2)}
                >
                    <i className={isOpen2 ? "bi bi-chevron-up" : "bi bi-chevron-down"}></i>
                </div>
            </div>
            {isOpen2 && (
                <h1 className="font-inter text-sm text-[#031136] text-left font-normal opacity-40 py-3">
                    For freelancers, there's a basic free plan available with a limited set of features. We also offer premium memberships with more benefits. Clients can post jobs for free but have optional premium features to boost their listings.
                </h1>
            )}
        </div>
        <div className='border border-gray-200 border-opacity-30 mt-1 mx-6 p-3'>
            <div className="flex justify-between items-center">
                <h1 className="font-inter text-md text-[#031136] text-left font-semibold"><i className="bi bi-question-circle-fill text-green-700 inline-block mr-1"></i> How do I get paid?</h1>
                <div 
                    className="pb-1 pl-0.4 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer flex-shrink-0"
                    onClick={() => setIsOpen3(!isOpen3)}
                >
                    <i className={isOpen3 ? "bi bi-chevron-up" : "bi bi-chevron-down"}></i>
                </div>
            </div>
            {isOpen3 && (
                <h1 className="font-inter text-sm text-[#031136] text-left font-normal opacity-40 py-3">
                    Payments are processed through Alanced's secure payment gateway. Once a job is completed and approved by the client, funds are released to the freelancer's Alanced account, which can then be withdrawn to their bank or through other payment methods available.
                </h1>
            )}
        </div>
        <div className='border border-gray-200 border-opacity-30 mt-1 mx-6 p-3'>
            <div className="flex justify-between items-center">
                <h1 className="font-inter text-md text-[#031136] text-left font-semibold"><i className="bi bi-question-circle-fill text-green-700 inline-block mr-1"></i> What kind of jobs can I find or post on Alanced?</h1>
                <div 
                    className="pb-1 pl-0.4 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer flex-shrink-0"
                    onClick={() => setIsOpen4(!isOpen4)}
                >
                    <i className={isOpen4 ? "bi bi-chevron-up" : "bi bi-chevron-down"}></i>
                </div>
            </div>
            {isOpen4 && (
                <h1 className="font-inter text-sm text-[#031136] text-left font-normal opacity-40 py-3">
                    We cover a wide range of categories, from writing, graphic design, web development, marketing, consulting, and many more. If you have a skill or a job requirement, it's likely you'll find a match here.
                </h1>
            )}
        </div>
        <div className='border border-gray-200 border-opacity-30 mt-1 mx-6 p-3'>
            <div className="flex justify-between items-center">
                <h1 className="font-inter text-md text-[#031136] text-left font-semibold"><i className="bi bi-question-circle-fill text-green-700 inline-block mr-1"></i> Is my personal information safe with Alanced?</h1>
                <div 
                    className="pb-1 pl-0.4 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer flex-shrink-0"
                    onClick={() => setIsOpen5(!isOpen5)}
                >
                    <i className={isOpen5 ? "bi bi-chevron-up" : "bi bi-chevron-down"}></i>
                </div>
            </div>
            {isOpen5 && (
                <h1 className="font-inter text-sm text-[#031136] text-left font-normal opacity-40 py-3">
                    Absolutely. We prioritize the security and confidentiality of our users. All personal information is encrypted and kept secure. We do not share or sell user information to third parties.
                </h1>
            )}
        </div>
    {/* <div className='border-b border-gray-200 border-opacity-30 py-5 px-8 flex justify-between items-center'>
    <i class="bi bi-question-circle-fill text-green-700 inline-block"></i>
    <h1 className="font-inter text-xl text-[#031136] text-left font-semibold">What is Alanced?</h1>
    <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer flex-shrink-0" >
    <i class="bi bi-chevron-down"></i>
    </div>
    <h1 className="font-inter text-md text-[#031136] text-left font-normal opacity-40 py-3">
    Alanced is a curated platform that connects skilled freelancers with clients in need of professional services. From writers and designers to coders and consultants, Alanced is your one-stop-shop for all freelancing needs.
    </h1>
</div> */}
    </div>
</div>

   </div>
   <HomeSection4/>
   <Footer/>
   </>
  )
}

export default FAQ