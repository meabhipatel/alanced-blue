import React,{useState} from 'react'
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
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetViewAllProjectsListAction } from '../../redux/Freelancer/FreelancerAction'
import ViewProjectPopup from './AllPopup/ViewProjectPopup'
import AddBidPopup from './AllPopup/AddBidPopup'


function ProjectList() {
  const viewallprojects = useSelector(state => state.freelancer.viewallprojects)
  const dispatch = useDispatch();
  const [range, setRange] = useState([1, 1000]);

  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };

  const handleInputChange = (index, newValue) => {
    const newRange = [...range];
    newRange[index] = newValue;
    setRange(newRange);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  React.useEffect(() => {
    dispatch(GetViewAllProjectsListAction())
  }, [])

  return (
    <>
      <Navbar />
      <div className="h-[43vh] bg-no-repeat -mt-[1.3rem] bg-contain" style={{ backgroundImage: `url(${profile_list})` }}>
        <div className='text-left pt-[3rem] ml-[13.5vw] text-2xl font-cardo'>
          <h1>Projects List</h1>
          <p className='font-inter text-sm text-[#797979] font-normal mt-2'>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
          <div className='lg:w-[44vw] bg-white p-3 lg:h-14 rounded-2xl lg:flex items-center mt-2 shadow-md'>
            <div className='flex flex-row'>
              <img className='w-5 h-5' src={search}></img>
              <input className='w-96 font-inter text-base ml-3' placeholder='What are you looking for?'></input>
            </div>
            <div className=''>
              <button className='rounded h-8 w-24 lg:ml-6 font-semibold text-base text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className=' container-sm px-36'>
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
          <div className=' basis-3/12 mt-6'>
            <div><h1 className='font-cardo text-xl text-left font-normal'>Category</h1></div>
            <div className='flex flex-row mt-4'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">UX Designer</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(1,945)</div>
    </div>
            <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Web Developers</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(2,945)</div>
    </div>
            <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Illustrators</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(945)</div>
    </div>
            <div className='flex flex-row mt-4'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Node.js</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(5,945)</div>
    </div>
            <div className='flex flex-row mt-4'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Project Managers</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(45)</div>
    </div>
            <div><h1 className='font-cardo text-xl text-left mt-5 font-normal'>+20 More</h1></div>
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Project Type</h1></div>
            <div className='flex flex-row mt-4'>
              <div className=' basis-8/12 text-left'>
                {/* <label class="relative inline-flex items-center mr-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  <span class="ml-3 text-base font-normal font-inter text-[#797979]">Fixed</span>
                </label> */}
                <label class="relative inline-flex items-center mr-5 cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-white border-2  border-green-300 rounded-full peer dark:bg-white-700 peer-focus:ring-0 peer-focus:ring-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gradient-to-r  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-[#00BF58] to-[#E3FF75]"></div>
              <span class="ml-3 text-base font-normal font-inter text-[#797979]">Fixed</span>
            </label>
              </div>
              <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(1,945)</div>
            </div>
            <div className='flex flex-row mt-3'>
              <div className=' basis-8/12 text-left'>
                <label class="relative inline-flex items-center mr-5 cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-white border-2  border-green-300 rounded-full peer dark:bg-white-700 peer-focus:ring-0 peer-focus:ring-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gradient-to-r  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-[#00BF58] to-[#E3FF75]"></div>
                  <span class="ml-3 text-base font-inter font-normal text-[#797979]">Hourly</span>
                </label>
              </div>
              <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(2,945)</div>
            </div>
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Price</h1></div>
            <div className="pt-4 w-[85%]">
              <Slider
                min={1}
                max={1000}
                step={1}
                range
                value={range}
                onChange={handleSliderChange}
                railStyle={{ background: 'lightgray' }}
                trackStyle={[
                  {
                    background: 'linear-gradient(45deg, #00BF58, #E3FF75)',
                    borderColor: '#65a30d',
                  },
                ]}
                handleStyle={[
                  {
                    backgroundColor: 'white',
                    borderColor: 'transparent', 
                    borderRadius: '50%', // Set border radius for circular shape
                    borderImage: 'linear-gradient(45deg, #00BF58, #E3FF75)',
                    borderImageSlice: 1,
                  },
                  {
                    backgroundColor: 'white',
                    borderColor: 'transparent',
                    borderRadius: '50%',
                    borderImage: 'linear-gradient(45deg, #00BF58, #E3FF75)',
                    borderImageSlice: 1,
                  },
                ]}
                />
              <div className='flex flex-row mt-4'>
                <div className='basis-5/12'><input
                type="text"
                value={range[0]}
                onChange={(e) => handleInputChange(0, e.target.value)}
                className='mt-3 bg-white text-center border rounded-md p-1 basis-6/12 font-inter text-base font-normal text-[#797979] w-24 focus:border-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-60
                focus:outline-none'
              /></div>
              <div className='basis-2/12 m-auto mt-4'><i class="bi bi-dash-lg text-[#475569]"></i></div>
                <div className='basis-5/12'><input
                type="text"
                value={range[1]}
                onChange={(e) => handleInputChange(1, e.target.value)}
                className='mt-3 bg-white text-center border rounded-md p-1 basis-6/12 font-inter text-base font-normal text-[#797979] w-24 focus:border-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-60
                focus:outline-none'
              /></div>
              </div>
            </div>
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Skills</h1></div>
            <label class="flex items-center font-inter relative cursor-pointer mt-4">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Adobe Photoshop</span>
            </label>
            <label class="flex items-center font-inter relative cursor-pointer mt-4">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Adobe XD</span>
            </label>
            <label class="flex items-center font-inter relative cursor-pointer mt-4">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Android Developer</span>
            </label>
            <label class="flex items-center font-inter relative cursor-pointer mt-4">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Artist</span>
            </label>
            <label class="flex items-center font-inter relative cursor-pointer mt-4">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Computer</span>
            </label>
              <div><h1 className='font-cardo text-xl text-left mt-5 font-normal'>+Show More</h1></div>
              <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Citys</h1></div>
             <div className='flex flex-row mt-4'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Boston</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(1,945)</div>
    </div>
    <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Florida</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(2,945)</div>
    </div>
    <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Log Angeles</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(945)</div>
    </div>
    <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Miami</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(5,945)</div>
    </div>
    <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">New York</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(45)</div>
    </div>
            <div><h1 className='font-cardo text-xl text-left mt-5 font-normal'>+Show More</h1></div>
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Languages</h1></div>
            <div className='flex flex-row mt-4'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">English</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(1,945)</div>
    </div>
    <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">French</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(2,945)</div>
    </div>
    <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Italian</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(945)</div>
    </div>
    <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Japanese</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(5,945)</div>
    </div>
    <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Spanish</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(45)</div>
    </div>
            <div><h1 className='font-cardo text-xl text-left mt-5 font-normal'>+Show More</h1></div>
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>English Level</h1></div>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-[#797979] text-base font-inter font-normal rounded-lg mt-4 focus:ring-green-500 focus:border-green-500 block w-[83%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <div className='mt-8'>
            <Link to=''><span class="px-16 py-[10px] lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold mr-14 text-base">Send Proposal</span></Link>
            </div>
          </div>
          <div className=' basis-9/12 mt-10'>
            {viewallprojects && <>{viewallprojects.map((project,index)=> {
              return(
                <div className='flex flex-row'>
              <div className='basis-1/12 mr-3'>
                <Avatar src={profilepic} alt="avatar" variant="rounded" />
              </div>
              <div className=' basis-9/12 text-left mb-7'>
                <h1 className='font-cardo text-lg'>{project.title}</h1>
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
                <p className='font-inter text-base font-normal text-[#797979] mt-3'>{project.description}</p>
                {/* <ViewProjectPopup isOpen={isDialogOpen} onClose={closeDialog}/> */}
                {JSON.parse(project.skills_required.replace(/'/g,'"')).map((skill,index)=>(
                  <div key={index} className='mt-3 bg-white shadow-lg text-center rounded-xl inline-block mr-3 p-1 w-24 border'>{skill}</div>
                ))}
                {/* <div className='mt-3 bg-white shadow-lg text-center rounded-xl inline-block mr-3 p-1 w-24 border'>Figma</div> */}
                {/* <div className='mt-3 bg-white shadow-lg text-center w-24 border rounded-xl inline-block p-1'>Sketch</div> */}
              </div>
              <div className='basis-2/12 pt-10'>
                <h1 className='font-cardo text-xl font-extrabold text-right'>${project.budget}</h1>
                <p className='font-inter text-[#797979] mt-1 text-sm text-right'>Hourly Rate</p>
                <div className=''>
                  <Link to='/freelancer/add-bid'><button className='rounded h-12 w-36  text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-3 text-sm font-bold ml-16'>Send Proposal</button></Link>
                </div>
                {/* <AddBidPopup isOpen={isDialogOpen} onClose={closeDialog}/> */}
              </div>
            </div>
              )
            })}</>}
            {/* <div className='flex flex-row mt-12'>
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
              <div className='basis-3/12 mt-10'>
                <h1 className='font-cardo text-xl font-extrabold text-right'>$100 - $150</h1>
                <p className='font-inter text-[#797979] mt-1 text-sm text-right'>Hourly Rate</p>
                <div className=''>
                  <Link to='/login'><button className='rounded h-12 w-28  text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-3 text-sm font-bold ml-16'>Send Proposal</button></Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <HomeSection4 />
      <Footer />
    </>
  )
}

export default ProjectList
