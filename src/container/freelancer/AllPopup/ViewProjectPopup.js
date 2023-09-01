import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import frame from '../../../components/images/Frame.png'
import money from '../../../components/images/money.png'
import rating from '../../../components/images/superstart.png'
import { Link } from 'react-router-dom'

function ViewProjectPopup({ isOpen, onClose }) {
  if (!isOpen) {
    return null; // Don't render anything if the dialog is closed
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 mt-20">
        <div className="fixed inset-0 bg-black opacity-10"></div>
      {/* Dialog content goes here */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-3/4 h-[85%] z-20 overflow-y-scroll">
        <div className='flex flex-row'>
            <div className='basis-6/12'><i class="bi bi-chevron-left font-bold text-black text-lg" onClick={onClose}></i></div>
            <div className=' basis-6/12'>
                <div className=' text-right font-cardo font-normal text-base'>
                <i class="bi bi-box-arrow-up-right"></i> Open job in a new window
                </div>
            </div>
        </div>
        <div className=' container px-6'>
            <div className=' flex flex-row mt-10'>
                <div className=' basis-8/12'>
                    <h1 className='text-xl font-normal font-cardo'>Graphic Designer</h1>
                    <p className='mt-4 text-base font-normal font-cardo'>Graphic Design</p>
                    <div className='flex flex-row mt-2'>
                        <div className=' basis-6/12'><p className=' font-inter font-normal text-base text-[#797979]'>Posted in 11 hours</p></div>
                        <div className=' basis-6/12'>
                            <div className=' text-right font-inter text-base font-normal opacity-[50%]'><i class="bi bi-geo-alt"></i>  Worldwide</div>
                        </div>
                    </div>
                    <div className='mt-12 font-inter font-normal text-base text-[#797979]'>Job Description: Graphic Designer for Vogue Tourism in AjmerOnly for Ajmer (Rajasthan) OFFLINE</div>
                    <div className='font-inter font-normal text-base text-[#797979]'>Please Share Your Details On this Whatsapp No.+91 95094 98242 </div>
                    <div className='font-inter font-normal text-base text-[#797979] mt-5'>Are you a talented and imaginative Graphic Designer with a flair for creating visually stunning and engaging designs? Vogue Tourism, a premier name in the travel and hospitality sector, is seeking a skilled Graphic Designer to join our team. If you're passionate about translating travel experiences into captivating visuals, we want to hear from you.</div>
                    <div className='mt-5 font-inter font-normal text-base text-[#797979]'>Responsibilities:</div>
                    <div className='mt-5 font-inter font-normal text-base text-[#797979]'>Collaborate with the marketing team to understand design requirements and objectives for various projects, including flyers, posters, social media graphics, and more.Create compelling visual content that aligns with our brand identity and resonates with our target audience.Develop original design concepts, graphics, and layouts that tell the story of unique travel destinations and experiences.Ensure that all designs adhere to branding guidelines and maintain a consistent visual identity.Use your creative expertise to enhance the overall aesthetic and impact of our marketing materials.</div>
                    <div className=' flex flex-row mt-10'>
                        <div className=' basis-6/12'>
                            <div className=' flex flex-row'>
                                <div className=' basis-2/12'><img src={money} alt="" /></div>
                                <div className=' basis-10/12'>
                                    <h1 className=' font-cardo font-normal text-lg text-left'>$10.00</h1>
                                    <p className=' font-inter font-normal text-base text-left opacity-[50%]'>Fixed-price</p>
                                </div>
                            </div>
                        </div>
                        <div className=' basis-6/12'>
                        <div className=' flex flex-row'>
                                <div className=' basis-2/12'><img src={rating} alt="" /></div>
                                <div className=' basis-10/12'>
                                    <h1 className=' font-cardo font-normal text-lg text-left'>Expert</h1>
                                    <p className=' font-inter font-normal text-base text-left opacity-[50%]'>I am willing to pay higher rates for the most experienced freelancers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-16'><h1 className=' font-cardo font-normal text-lg text-left'>Contract-to-hire opportunity</h1></div>
                    <div className=' flex flex-row mt-3'>
                        <div className=' basis-8/12'>
                            <p className=' font-inter font-normal text-base opacity-[50%]'>This lets talent know that this job could become full time.</p>
                            <p className=' font-inter font-normal text-base opacity-[80%]'>Learn more</p>
                        </div>
                        <div className=' basis-4/12'><img src={frame} alt="" className='h-[80%]' /></div>
                    </div>
                    <div className=' mt-14'><h1 className=' font-inter font-normal text-base'>Project Type:<span className=' opacity-[50%]'> Complex project</span></h1></div>
                    <div className='mt-10 font-cardo text-lg font-normal text-[#031136]'>Skills and Expertise</div>
                    <div className=' mt-2 text-sm font-inter font-normal text-[#0A142F]'>Graphic Design Deliverables</div>
                    <div className=' flex flex-row space-x-6'>
                        <div className=' basis-4/12'>
                            <div className='mt-3 bg-white text-center border rounded-md p-1 font-inter text-base font-normal text-[#797979]  focus:border-none'>Social Media Imagery</div>
                        </div>
                        <div className=' basis-4/12'>
                            <div className='mt-3 bg-white text-center border rounded-md p-1 font-inter text-base font-normal text-[#797979]'>Infographic</div>
                        </div>
                        <div className=' basis-4/12'>
                            <div className='mt-3 bg-white text-center border rounded-md p-1 font-inter text-base font-normal text-[#797979] '>Ebook</div>
                        </div>
                    </div>
                    <div className=' mt-6 text-sm font-inter font-normal text-[#0A142F]'>Other</div>
                    <div className=' flex flex-row space-x-6'>
                        <div className=' basis-4/12'>
                            <div className='mt-3 bg-white text-center border rounded-md p-1 font-inter text-base font-normal text-[#797979]  focus:border-none'>Advertising Design</div>
                        </div>
                        <div className=' basis-4/12'>
                            <div className='mt-3 bg-white text-center border rounded-md p-1 font-inter text-base font-normal text-[#797979]'>Brand Identity Design</div>
                        </div>
                        <div className=' basis-4/12'>
                            <div className='mt-3 bg-white text-center border rounded-md p-1 font-inter text-base font-normal text-[#797979] '>Business Card Design</div>
                        </div>
                    </div>
                    <div className='mt-14 font-cardo text-lg font-normal text-[#031136]'>Activity on this job</div>
                    <div className=' mt-5'><h1 className=' font-inter font-normal text-base'>Proposals:<span className=' opacity-[50%]'> Native or Bilingual</span></h1></div>
                    <div className=' mt-2'><h1 className=' font-inter font-normal text-base'>Interviewing:<span className=' opacity-[50%]'> 0</span></h1></div>
                    <div className=' mt-2'><h1 className=' font-inter font-normal text-base'>Invites sent:<span className=' opacity-[50%]'> 0</span></h1></div>
                    <div className=' mt-2'><h1 className=' font-inter font-normal text-base'>Unanswered invites:<span className=' opacity-[50%]'> 0</span></h1></div>
                </div>
                <div className=' basis-4/12'>
                {/* <div className='mt-5 mx-auto'>
                <Link to=''><span class="px-12 py-[12px] lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-bold text-lg">Apply Now</span></Link>
                </div> */}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProjectPopup;