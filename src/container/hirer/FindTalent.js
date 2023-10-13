import React, { useState, useEffect} from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import profilebg from '../../components/images/profilebg.png'
import search from '../../components/images/SearchOutlined.png'
import certifybadge from '../../components/images/certifybadge.png'
import ladder from '../../components/images/ladder.png'
import bag from '../../components/images/bag.png'
import downarrow from '../../components/images/downarrow.png'
import thumbdown from '../../components/images/thumbdown.png'
import heart from '../../components/images/heart.png'
import verify from '../../components/images/verify.png'
import location from '../../components/images/location.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link , useLocation } from 'react-router-dom'
import mybg from '../../components/images/profile_list.png'
import { GetViewAllFreelancersAction } from '../../redux/Hirer/HirerAction'
import { Avatar } from '@material-tailwind/react'
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Slider from 'rc-slider'

const FindTalent = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    console.log(category,"category")
    const viewallfreelancer = useSelector(state => state.hirer.viewallfreelancer)
    // console.log(";;;;;;;;;;;;;;;;;;;;;;;",viewallfreelancer.length)
    console.log(useSelector(state => state.login.accessToken))
    const dispatch = useDispatch();
   
  
    React.useEffect(() => {
      dispatch(GetViewAllFreelancersAction())
      // setviewallfreelancer(freelancers)
    }, [])

    // React.useEffect(() => {
    //     // This useEffect runs when category or viewallfreelancer changes.
    //     if (category) {
    //       const filteredData = viewallfreelancer.filter(freelancer => {
    //         return freelancer.category.toLowerCase() === category.toLowerCase();
    //       });
    //       setFilteredFreelancers(filteredData);
    //     } else {
    //       setFilteredFreelancers(viewallfreelancer);
    //     }
    //   }, [category, viewallfreelancer]);

    const [filteredFreelancers, setFilteredFreelancers] = useState([]);
    console.log(filteredFreelancers, "filter freelancer");
      
    const [range, setRange] = useState([1, 1000]);

    const handleSliderChange = (newRange) => {
      setRange(newRange);
    };
  
    const handleInputChange = (index, newValue) => {
      const newRange = [...range];
      newRange[index] = newValue;
      setRange(newRange);
    };
  
    const [showMoreSkills, setShowMoreSkills] = useState({});

    // Define the toggleShowMoreSkills function
    const toggleShowMoreSkills = (freelancerId) => {
        setShowMoreSkills((prevShowMoreSkills) => ({
            ...prevShowMoreSkills,
            [freelancerId]: {
                showAll: !prevShowMoreSkills[freelancerId]?.showAll,
            },
        }));
    };
    
    const [selected, setSelected] = useState('Best Matches');
    const underlineStyle = {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '2px',
      background: 'linear-gradient(90deg, #00BF58, #E3FF75)'
    };
  

//   const [active, setActive] = React.useState(1);
 
//   const next = () => {
//       if (active === Math.ceil(viewallfreelancer.length / 6)) return;
//       window.scrollTo(0, 0)
//       setActive(active + 1);
//   };

//   const prev = () => {
//       if (active === 1) return;
//       window.scrollTo(0, 0)
//       setActive(active - 1);
//   };

    const [currentPage, setCurrentPage] = useState(1);
    const [categorySearch, setCategorySearch] = useState('');

    useEffect(() => {
        setCurrentPage(1);
    }, [categorySearch]);

    const jobsPerPage = 6;
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    
    const filteredJobs = viewallfreelancer?.filter(project => 
        project.category.replace(/_/g, ' ').toLowerCase().includes(categorySearch.toLowerCase())
    ) || [];

    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil((filteredJobs.length || 0) / jobsPerPage);

    const next = () => {
        window.scrollTo(0, 0);
        if (currentPage === totalPages) return;
        setCurrentPage(currentPage + 1);
    };

    const prev = () => {
        window.scrollTo(0, 0);
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    };
  
 // 1. Chunk the Array
 const chunkArray = (array, size) => {
  let chunked = [];
  if(viewallfreelancer != null){
  for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
  }
}
  return chunked;
}

const chunkedFree = chunkArray(viewallfreelancer, 6);
    return (
      <>
      <Navbar/>
      <div className="h-[43vh] bg-no-repeat -mt-[1.3rem] bg-contain" style={{ backgroundImage: `url(${mybg})` }}>
        <div className='text-left pt-[3rem] ml-[13.5vw] text-2xl font-cardo'>
          <h1>Find & Hire Freelancers</h1>
          <p className='font-inter text-sm text-[#797979] font-normal mt-2'>More than 10K expert freelancers are waiting for you</p>
          <div className='lg:w-[44vw] bg-white p-3 lg:h-14 rounded-2xl lg:flex items-center mt-4 shadow-md'>
            <div className='flex flex-row'>
              <img className='w-5 h-5' src={search}></img>
              <input className='w-96 font-inter text-base ml-3' placeholder='Search by Category' value={categorySearch} onChange={(e) => setCategorySearch(e.target.value)}></input>
            </div>
            <div className=''>
              <button className='rounded h-8 w-24 lg:ml-6 font-semibold text-base text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-1 mx-[9%]'>
      <div class="flex flex-col md:flex-row mb-5 mx-5">
  <div class="w-full md:w-[30%] pt-3 bg-[#FFFFFF] py-8 border-l border-b border-gray-200 border-opacity-30 text-left">
  <div class='skills'>
  <div><h1 className='font-cardo text-xl text-left font-normal'>Skills</h1></div>
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
  </div>
  <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Price</h1></div>
  <div className="pt-4 w-[75%]">
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
              <div className='basis-2/12 m-auto mt-4 text-center'><i class="bi bi-dash-lg text-[#475569]"></i></div>
                <div className='basis-5/12'><input
                type="text"
                value={range[1]}
                onChange={(e) => handleInputChange(1, e.target.value)}
                className='mt-3 bg-white text-center border rounded-md p-1 basis-6/12 font-inter text-base font-normal text-[#797979] w-24 focus:border-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-60
                focus:outline-none'
              /></div>
              </div>
            </div>
    <div class='location'>
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
    </div>
    <div class='language'>
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
    </div>
    <div class='level'>
    <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Level</h1></div>
            <div className='flex flex-row mt-4'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Entry Level</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(45)</div>
    </div>
    <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Intermediate Level</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(25)</div>
    </div>
    <div className='flex flex-row mt-3'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input class="hidden" type="checkbox" />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">Expert Level</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(95)</div>
    </div>
    </div>
  </div>
  
  <div class="w-full md:w-[70%] pt-3 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-30 text-left">
      <div className='px-4 md:px-8 pt-4 border-b border-gray-200 border-opacity-30'>
      {/* <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Jobs You Might Like</h1> */}
      {/* <div className="flex justify-between items-center"> */}
      <div className="flex items-center">
      <h1  className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Freelancers that Matches your Job</h1>
      </div>
      <div class="w-40  mt-3 relative">
      <div class="absolute inset-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] rounded-lg"></div>
      <div class="border-gray-600 border-b-2 rounded-lg"></div>
    </div>
      {/* <div className="flex items-center">
      <div className='flex items-center mr-1 space-x-1 border p-1 w-[200px] rounded-md'>
          <img src={search} alt="Search Icon" className="h-4 w-4 mr-1 ml-1" />
          <input className='w-28 lg:w-40 xl:w-[160px] h-7 text-sm lg:text-sm outline-none' placeholder='Search Freelancers' value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      </div> */}
  {/* </div> */}
      
      </div>
      {/* <div className='px-4 md:px-8 py-4'>
        <p className='font-inter opacity-50 text-[#0A142F] text-[13px]'>Browse Freelancers that match your jobs</p>
      </div> */}
      {viewallfreelancer != null ? 
      <div className='grid grid-cols-2 w-[70%] md:w-full pl-3.5'>
      {currentJobs && currentJobs.map((free, index) => {
                return(<>
                
      <div className='px-4 w-[26vw] relative flex-shrink-0 md:px-8 py-5 hover:bg-[#F6FAFD] border-t border-b border-gray-200 border-opacity-30 cursor-pointer shadow-lg rounded-lg mt-4'>
        <div className="flex items-center">
            <Avatar src={"https://aparnawiz91.pythonanywhere.com/"+free.images_logo} alt="" variant="rounded" className="mr-4 h-24 w-24" />
            <div>
            <p className="font-inter text-[#0A142F] text-[18px] font-semibold">{free.first_Name + " " + free.last_Name}</p>
            <p className='font-inter opacity-50 text-[#0A142F] text-[14px]'>{free.category}</p>
        </div>
        {/* <div className="flex items-center space-x-2 ml-auto">
        <Link to=''>
            <span className="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Hire Now</span>
        </Link>
        </div> */}
        </div>
      <p className='font-inter opacity-50 text-[#0A142F] text-[14px] py-4'>A passionate Web Developer with over 5 years of experience specializing in front-end and back-end development. Proficient in HTML, CSS, JavaScript, and Python. Experienced with full-stack development and popular frameworks like React and Django. I've successfully completed over 100 projects, ranging from simple landing pages to complex eCommerce platforms. Committed to providing high-quality code and solutions for every project.</p>
  {free.skills &&
                    JSON.parse(free.skills.replace(/'/g, '"')).map((skill, skillIndex) => (
                        <Link to={''} key={skillIndex}>
                            <span
                                className={`border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2 ${
                                    skillIndex < 4 || (showMoreSkills[free.id] && showMoreSkills[free.id].showAll)
                                        ? ''
                                        : 'hidden'
                                }`}
                            >
                                {skill}
                            </span>
                        </Link>
                    ))}
                {free.skills &&
                    JSON.parse(free.skills.replace(/'/g, '"')).length > 4 && (
                        <button
                            onClick={() => toggleShowMoreSkills(free.id)}
                            className='font-inter text-green-600 text-[14px] cursor-pointer font-bold'
                        >
                            {showMoreSkills[free.id] && showMoreSkills[free.id].showAll ? ' Less' : ' More'}
                        </button>
                    )}
  
            <div className='mb-12'>
          <p className='font-inter text-[#0A142F] text-[14px] py-1 mr-1'>completed projects : <span className='opacity-50'>More than 50</span></p>
          <img src={verify} alt="" className='inline-block h-3 w-3 mr-1'/>
          <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>Account verified</p>
          <div className="text-[16px] text-[#FFC107] inline-block mx-3">★★★★★</div>
          <p className='font-inter text-[#0A142F] text-[14px] opacity-80 inline-block mr-1'>$0.00/Hr</p>
          <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block mr-3'>Fixed Rate</p>
          <img src={location} alt="" className='inline-block h-3 w-3 mr-1'/>
          <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>{free.Address}</p>
          </div>
          {/* <div className=" absolute bottom-2 right-6 items-center space-x-2 ml-auto">
        <Link to=''>
            <span className="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Hire Now</span>
        </Link>
        </div> */}
        <div className=' flex flex-row'>
            <div className=' basis-8/12 absolute bottom-4 items-center font-inter text-green-600 text-[14px] cursor-pointer font-bold hover:underline'><Link to='/view-freelancer/full-detail' state={{ free }} onClick={() => window.scroll(0, 0) }><p>View more detail</p></Link></div>
            <div className=' basis-4/12 absolute bottom-2 right-6 items-center space-x-2 ml-auto'><Link to='/login'>
            <span className="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Hire Now</span>
        </Link></div>
        </div>
      </div>
      
      </>
      )
      })}
  
  </div> : 
  <div className='grid grid-cols-2 w-[70%] md:w-full pl-3.5'>
    {[...Array(6)].map((_) => {
      return (
    <div className='px-4 w-[26vw] h-[467px] relative flex-shrink-0 md:px-8 py-5 hover:bg-[#F6FAFD] border-t border-b border-gray-200 border-opacity-30 cursor-pointer shadow-lg rounded-lg mt-4'>
      <Skeleton height={90} width={90} inline={true} style={{borderRadius:'10%', float: 'left'}}/>
      <Skeleton height={20} width={200} style={{marginLeft:10, marginTop:20}}/>
      <Skeleton height={20} width={200} style={{marginLeft:10, marginTop:10}}/>
      <Skeleton height={200} width={300} style={{marginTop:20}}/>
      <Skeleton height={50} width={200} style={{marginTop:10}}/>
      <Skeleton height={35} width={80} style={{marginTop:20, float: 'right'}}/>
      
    </div>);})}
  </div>
    }
  <div>
  {viewallfreelancer?.length > 5 && (
                    <div className="flex justify-end items-center gap-6 m-4">
                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={prev}
                            disabled={currentPage === 1}
                            style={{ backgroundImage: 'linear-gradient(45deg, #00BF58, #E3FF75)', border: 'none' }}
                        >
                            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-white" />
                        </IconButton>
                        
                        {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;
                            return (
                                <span
                                    key={pageNumber}
                                    className={`px-0 py-1 ${currentPage === pageNumber ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#00BF58] to-[#E3FF75] font-bold font-inter text-[14px] cursor-pointer' : 'text-[#0A142F] font-bold font-inter text-[14px] cursor-pointer'}`}
                                    onClick={() => setCurrentPage(pageNumber)}
                                >
                                    {pageNumber}
                                </span>
                            );
                        })}

                        <IconButton
                            size="sm"
                            variant="outlined"
                            onClick={next}
                            disabled={currentPage === totalPages}
                            style={{ backgroundImage: 'linear-gradient(45deg, #00BF58, #E3FF75)', border: 'none' }}
                        >
                            <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-white" />
                        </IconButton>
                    </div>
                )}
  </div>
  </div>
  </div>
      </div>
      <HomeSection4/>
      <Footer/>
      </>
    )
}

export default FindTalent
