import React, { useState} from 'react'
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
import { Link } from 'react-router-dom'
import mybg from '../../components/images/profile_list.png'
import { GetViewAllFreelancersAction } from '../../redux/Hirer/HirerAction'
import { Avatar } from '@material-tailwind/react'
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FindTalent = () => {
    const viewallfreelancer = useSelector(state => state.hirer.viewallfreelancer)
    // console.log(";;;;;;;;;;;;;;;;;;;;;;;",viewallfreelancer.length)
    const [searchTerm, setSearchTerm] = useState('');
    console.log(useSelector(state => state.login.accessToken))
    const dispatch = useDispatch();
   
  
    React.useEffect(() => {
      dispatch(GetViewAllFreelancersAction())
      // setviewallfreelancer(freelancers)
    }, [])
  
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
  

  const [active, setActive] = React.useState(1);
 
  const next = () => {
      if (active === Math.ceil(viewallfreelancer.length / 6)) return;
      window.scrollTo(0, 0)
      setActive(active + 1);
  };

  const prev = () => {
      if (active === 1) return;
      window.scrollTo(0, 0)
      setActive(active - 1);
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
              <input className='w-96 font-inter text-base ml-3' placeholder='What are you looking for?'></input>
            </div>
            <div className=''>
              <button className='rounded h-8 w-24 lg:ml-6 font-semibold text-base text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-[9%]'>
      {/* <div className="relative">
      <img src={mybg} alt="" className='w-full h-52' />
      <div className="absolute top-12 left-12 p-4 text-left">
          <h1 className='font-cardo text-[#031136] sm:text-xl text-lg font-normal'>Monday, October 2nd</h1>
          <h1 className='font-cardo text-[#031136] sm:text-3xl text-2xl font-semibold py-1'>check</h1>
      </div>
  </div> */}
  <div class="flex flex-col md:flex-row mb-5 mx-5">
  <div class="w-full md:w-[30%] pt-3 bg-[#FFFFFF] py-8 border-l border-b border-gray-200 border-opacity-30 text-left">
  <div className="flex items-center justify-between border-b border-gray-200 border-opacity-30 px-4 md:px-8 py-4">
      <h1 className="font-cardo text-xl text-[#031136] font-normal mr-1">Discover</h1>
      <div className="flex items-center space-x-2">
              <img src={downarrow} alt="" />
      </div>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 border-opacity-30 px-4 md:px-8 py-4">
      <h1 className="font-cardo text-xl text-[#031136] font-normal mr-1">Your hires</h1>
      <div className="flex items-center space-x-2">
              <img src={downarrow} alt="" />
      </div>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 border-opacity-30 px-4 md:px-8 py-4">
      <h1 className="font-cardo text-xl text-[#031136] font-normal mr-1">Company hires</h1>
      <div className="flex items-center space-x-2">
              <img src={downarrow} alt="" />
      </div>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 border-opacity-30 px-4 md:px-8 py-4">
      <h1 className="font-cardo text-xl text-[#031136] font-normal mr-1">Recently viewed</h1>
      <div className="flex items-center space-x-2">
              <img src={downarrow} alt="" />
      </div>
      </div>
      <div className="px-4 md:px-8 py-5 m-4 rounded-lg shadow-md">
      <h1 className="font-cardo text-[18px] text-[#031136] font-normal pt-2">Upwork Academy  <i class="bi bi-box-arrow-up-right text-sm"></i></h1>
      <h1 className="font-cardo text-[18px] text-[#031136] font-normal pt-2">Get Freelancer  <i class="bi bi-box-arrow-up-right text-sm"></i></h1>
      <h1 className="font-cardo text-[18px] text-[#031136] font-normal pt-2">Community & Forums  <i class="bi bi-box-arrow-up-right text-sm"></i></h1>
      <h1 className="font-cardo text-[18px] text-[#031136] font-normal py-2">Help Center  <i class="bi bi-box-arrow-up-right text-sm"></i></h1>
      </div>
      <Link to=''>
      <div className="grid grid-cols-[2fr,1fr] gap-2 bg-[#E2F9EE] rounded-lg p-4 mx-4 shadow-sm">
      <div>
          <h1 className='font-cardo text-lg text-[#031136] text-left'>Post A Job</h1>
          <p className='font-inter text-sm text-[#0A142F] opacity-50 py-2 text-left'>Post Unlimited No. of Jobs & Hire Top Talents For Your Work.</p>
      </div>
      <div className="text-center">
         <i class="bi bi-arrow-right"></i>
          <img src={certifybadge} alt="" className='mx-auto h-16 w-16 mt-2'/>
      </div>
  </div></Link>
      <div className="grid grid-cols-[2fr,1fr] gap-2 bg-[#E2F9EE] rounded-lg p-4 mx-4 my-3 shadow-sm">
          <div>
          <h1 className='font-cardo text-lg text-[#031136] text-left'>Get Tips To Find Talent</h1>
             <p className='font-inter text-sm text-[#0A142F] opacity-50 py-2 text-left'>Learn to optimize search, use Connects, and Hire Freelancers.</p>
          </div>
          <div className="text-center">
              <i class="bi bi-arrow-right"></i>
              <img src={ladder} alt="" className='mx-auto h-16 w-16 mt-2'/>
          </div>
      </div>
  </div>
  
  <div class="w-full md:w-[70%] pt-3 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-30 text-left">
      <div className='px-4 md:px-8 pt-4 border-b border-gray-200 border-opacity-30'>
      {/* <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Jobs You Might Like</h1> */}
      {/* <div className="flex justify-between items-center">
      <div className="flex items-center">
      <h1  className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Freelancers that Matches your Job</h1>
      </div>
  </div> */}
  <div className=' flex flex-row'>
    <div className=' basis-6/12'>
    <h1  className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Freelancers that Matches your Job</h1>
    </div>
    <div className=' basis-6/12'>
    <p 
          className={`font-inter opacity-50 text-[#0A142F] text-[13px] py-2 inline-block pr-10 relative cursor-pointer`} 
          onClick={() => setSelected('Best Matches')}
      >
          Best Matches
          {selected === 'Best Matches' && <span style={underlineStyle}></span>}
      </p>
  
      <p 
          className={`font-inter opacity-50 text-[#0A142F] text-[13px] py-2 inline-block pr-10 relative cursor-pointer`} 
          onClick={() => setSelected('Most Recent')}
      >
          Most Recent
          {selected === 'Most Recent' && <span style={underlineStyle}></span>}
      </p>
      <p 
          className={`font-inter opacity-50 text-[#0A142F] text-[13px] py-2 inline-block relative cursor-pointer`} 
          onClick={() => setSelected('Saved')}
      >
          Saved 
          {selected === 'Saved' && <span style={underlineStyle}></span>}
      </p>
    </div>
  </div>
      </div>
      <div className='px-4 md:px-8 py-1'>
        <p className='font-inter opacity-50 text-[#0A142F] text-[13px]'>Browse Freelancers that match your jobs</p>
      </div>
      {viewallfreelancer != null ? 
      <div className='grid grid-cols-2 w-[70%] md:w-full pl-3.5'>
      {chunkedFree[active - 1] && chunkedFree[active - 1].map((free, index) => {
                return(<>
                
      <div className='px-4 w-[26vw] relative flex-shrink-0 md:px-8 py-5 hover:bg-[#F6FAFD] border-t border-b border-gray-200 border-opacity-30 cursor-pointer shadow-lg rounded-lg mt-4'>
        <div className="flex items-center">
            <Avatar src={"https://aparnawiz91.pythonanywhere.com/"+free.images_logo} alt="" variant="rounded" className="mr-4 h-24 w-24" />
            <div>
            <p className="font-inter text-[#0A142F] text-[18px] font-semibold">{free.first_Name + " " + free.last_Name}</p>
            <p className='font-inter opacity-50 text-[#0A142F] text-[14px]'>{free.category}</p>
        </div>
        </div>
      <p className='font-inter opacity-50 text-[#0A142F] text-[14px] py-4'>A passionate Web Developer with over 5 years of experience specializing in front-end and back-end development. Proficient in HTML, CSS, JavaScript, and Python. Experienced with full-stack development and popular frameworks like React and Django. I've successfully completed over 100 projects, ranging from simple landing pages to complex eCommerce platforms. Committed to providing high-quality code and solutions for every project.</p>
      {/* {free.skills &&
     JSON.parse(free.skills.replace(/'/g, '"')).map((skill, index) => (
    <Link to={''} key={index}>
      <span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2'>
        {skill}
      </span>
    </Link>
  ))} */}
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
          <div className=" absolute bottom-2 right-6 items-center space-x-2 ml-auto">
        <Link to='/login'>
            <span className="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Hire Now</span>
        </Link>
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
  <div className="flex justify-end items-center gap-6 mt-7
   mr-5">
  <IconButton
    size="sm"
    variant="outlined"
    onClick={prev}
    disabled={active === 1}
    style={{ backgroundImage: 'linear-gradient(45deg, #00BF58, #E3FF75)', border: 'none' }}
  >
    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-white" />
  </IconButton>

  
  {[...Array(5)].map((_, index) => {
    const pageNumber = index + 1;
    return (
      <span
        key={pageNumber}
        className={`px-0 py-1 ${active === pageNumber ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#00BF58] to-[#E3FF75] font-bold font-inter text-[14px] cursor-pointer' : 'text-[#0A142F] font-bold font-inter text-[14px] cursor-pointer'}`}
        onClick={() => setActive(pageNumber)}
      >
        {pageNumber}
      </span>
    );
  })}

  <IconButton
    size="sm"
    variant="outlined"
    onClick={next}
    disabled={active === 5}
    style={{ backgroundImage: 'linear-gradient(45deg, #00BF58, #E3FF75)', border: 'none' }}
  >
    <ArrowRightIcon strokeWidth={2} className="h-4 w-4 text-white" />
  </IconButton>
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

export default FindTalent
