import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import profile_list from '../../components/images/profile_list.png'
import search from '../../components/images/SearchOutlined.png'
import { Avatar } from '@material-tailwind/react'
import profilepic from '../../components/images/profilepic.png'
import clint1 from '../../components/images/client2.png'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';




const ProjectList = () => {
  return (
    <>
    <Navbar/>
    <div className="h-[43vh] bg-no-repeat -mt-[1.3rem] bg-contain" style={{ backgroundImage: `url(${profile_list})` }}>
    <div className='text-left pt-[3rem] ml-[13.5vw] text-2xl font-cardo'>
          <h1>Projects List</h1>
          <p className='font-inter text-sm text-[#797979] font-normal mt-2'>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
          <div className='lg:w-[44vw] bg-white p-3 lg:h-20 rounded-2xl lg:flex items-center shadow-lg mt-2'>
          <div className='flex flex-row'>
              <img src={search}></img>
              <input className='w-96 font-inter text-base ml-3' placeholder='What are you looking for?'></input>
            </div>
            <div className=''>
                <button className='rounded h-12 w-28 lg:ml-6 font-bold text-lg text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>Search</button>
              </div>
          </div>
        </div>
    </div>
    <div className=' container-sm px-40'>
      <div className='flex flex-row'>
        <div className=' basis-6/12 text-left'>5,512 services available</div>
        <div className=' basis-6/12'>
          <div className=' flex flex-row justify-end'>
            <div className='mr-5 font-normal font-inter'>Sort by:</div>
            <div className='font-normal font-inter'>Best selling</div>
            </div>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className=' basis-4/12 mt-16'>
        <div><h1 className='font-cardo text-xl text-left font-normal'>Category</h1></div>
          <div className='flex flex-row mt-4'>
          <div className=' basis-8/12'>
          <label class="flex items-center font-inter">
              <input class="mr-3 " type="checkbox" /><span class="font-normal text-[#797979]">UX Designer</span>
            </label>
          </div>
          <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(1,945)</div>
          </div>
          <div className='flex flex-row mt-3'>
          <div className=' basis-8/12'>
          <label class="flex items-center font-inter">
              <input class="mr-3" type="checkbox" /><span class="font-normal text-[#797979]">Web Developers</span>
            </label>
          </div>
          <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(2,945)</div>
          </div>
          <div className='flex flex-row mt-3'>
          <div className=' basis-8/12'>
          <label class="flex items-center font-inter">
              <input class="mr-3" type="checkbox" /><span class="font-normal text-[#797979]">Illustrators</span>
            </label>
          </div>
          <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(945)</div>
          </div>
          <div className='flex flex-row mt-3'>
          <div className=' basis-8/12'>
          <label class="flex items-center font-inter">
              <input class="mr-3" type="checkbox" /><span class="font-normal text-[#797979]">Node.js</span>
            </label>
          </div>
          <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(5,945)</div>
          </div>
          <div className='flex flex-row mt-3'>
          <div className=' basis-8/12'>
          <label class="flex items-center font-inter">
              <input class="mr-3" type="checkbox" /><span class="font-normal text-[#797979]">Project Managers</span>
            </label>
          </div>
          <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(45)</div>
          </div>
          <div><h1 className='font-cardo text-xl text-left mt-4 font-normal'>+20 More</h1></div>
          <div><h1 className='font-cardo text-xl text-left font-normal mt-8'>Project Type</h1></div>
          <div className='flex flex-row mt-4'>
          <div className=' basis-8/12 text-left'>
          <label class="relative inline-flex items-center mr-5 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer"/>
          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span class="ml-3 text-base font-normal font-inter text-[#797979]">Fixed</span>
        </label>
          </div>
          <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(1,945)</div>
          </div>
          <div className='flex flex-row mt-3'>
          <div className=' basis-8/12 text-left'>
          <label class="relative inline-flex items-center mr-5 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer"/>
          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span class="ml-3 text-base font-inter font-normal text-[#797979]">Hourly</span>
        </label>
          </div>
          <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(2,945)</div>
          </div>
          <div><h1 className='font-cardo text-xl text-left font-normal mt-8'>Price</h1></div>
        </div>
        <div className=' basis-8/12 mt-20'>
          <div className='flex flex-row'>
            <div className='basis-2/12'>
            <Avatar src={profilepic} alt="avatar" variant="rounded" />
            </div>
            <div className=' basis-7/12 text-left'>
            <h1 className='font-cardo text-lg'>Food Delivery Mobile App</h1>
            <div className='flex flex-row mt-3'>
              <div className=' basis-4/12 border-2 border-r-[#797979] mr-2 border-t-0 border-b-0 border-l-0'>
                <div className='flex flex-row'>
                  <div className=' basis-2/12'><i class="bi bi-geo-alt"></i></div>
                  <div className=' basis-10/12 font-inter text-[#797979]'>London, UK</div>
                </div>
              </div>
              <div className=' basis-4/12 border-2 border-r-[#797979] mr-2 border-t-0 border-b-0 border-l-0'>
              <div className='flex flex-row'>
                  <div className=' basis-2/12'><i class="fa fa-calendar" aria-hidden="true"></i></div>
                  <div className=' basis-10/12 font-inter text-[#797979]'>2 hours ago</div>
                </div>
              </div>
              <div className=' basis-4/12'>
              <div className='flex flex-row'>
                  <div className=' basis-2/12'><i class="bi bi-file-text"></i></div>
                  <div className=' basis-10/12 font-inter text-[#797979]'>1 Received</div>
                </div>
              </div>
            </div>
            <p className='font-inter text-[#797979] mt-3'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
            <div className='mt-3 bg-white shadow-lg text-center rounded-xl inline-block mr-3 p-1 w-24 border'>Figma</div>
            <div className='mt-3 bg-white shadow-lg text-center w-24 border rounded-xl inline-block p-1'>Sketch</div>
            </div>
            <div className='basis-3/12'>
              <h1 className='font-cardo text-xl font-extrabold text-right'>$100 - $150</h1>
              <p className='font-inter text-[#797979] mt-1 text-sm text-right'>Hourly Rate</p>
              <div className=''>
              <button className='rounded h-12 w-28  text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-3 text-sm font-bold ml-16'>Send Proposal</button>
              </div>
            </div>
          </div>
          <div className='flex flex-row mt-12'>
            <div className='basis-2/12'>
            <Avatar src={clint1} alt="avatar" variant="rounded" />
            </div>
            <div className=' basis-7/12 text-left'>
            <h1 className='font-cardo text-lg'>Food Delivery Mobile App</h1>
            <div className='flex flex-row mt-3'>
              <div className=' basis-4/12 border-2 border-r-[#797979] mr-2 border-t-0 border-b-0 border-l-0'>
                <div className='flex flex-row'>
                  <div className=' basis-2/12'><i class="bi bi-geo-alt"></i></div>
                  <div className=' basis-10/12 font-inter text-[#797979]'>London, UK</div>
                </div>
              </div>
              <div className=' basis-4/12 border-2 border-r-[#797979] mr-2 border-t-0 border-b-0 border-l-0'>
              <div className='flex flex-row'>
                  <div className=' basis-2/12'><i class="fa fa-calendar" aria-hidden="true"></i></div>
                  <div className=' basis-10/12 font-inter text-[#797979]'>2 hours ago</div>
                </div>
              </div>
              <div className=' basis-4/12'>
              <div className='flex flex-row'>
                  <div className=' basis-2/12'><i class="bi bi-file-text"></i></div>
                  <div className=' basis-10/12 font-inter text-[#797979]'>1 Received</div>
                </div>
              </div>
            </div>
            <p className='font-inter text-[#797979] mt-3'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
            <div className='mt-3 bg-white shadow-lg text-center rounded-xl inline-block mr-3 p-1 w-24 border'>Figma</div>
            <div className='mt-3 bg-white shadow-lg text-center w-24 border rounded-xl inline-block p-1'>Sketch</div>
            </div>
            <div className='basis-3/12'>
              <h1 className='font-cardo text-xl font-extrabold text-right'>$100 - $150</h1>
              <p className='font-inter text-[#797979] mt-1 text-sm text-right'>Hourly Rate</p>
              <div className=''>
              <button className='rounded h-12 w-28  text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-3 text-sm font-bold ml-16'>Send Proposal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default ProjectList
