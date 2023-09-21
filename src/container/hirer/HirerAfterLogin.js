import React, { useState } from 'react'
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
import { GetViewAllProjectsListAction } from '../../redux/Freelancer/FreelancerAction'
import { GetViewAllFreelancersAction } from '../../redux/Hirer/HirerAction'
import { Avatar } from '@material-tailwind/react'
import profilepic from '../../components/images/profilepic.png'


const HirerAfterLogin = () => {
    const logindata = useSelector(state => state.login.login_data);  
    const googleUserName = localStorage.getItem('googleUserName')
    const loginMethod = localStorage.getItem('loginMethod')
    const viewallfreelancer = useSelector(state => state.hirer.viewallfreelancer)
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
   
  
    React.useEffect(() => {
      dispatch(GetViewAllFreelancersAction())
    }, [])
  
    let displayName;
  
    if (loginMethod === 'google') {
        displayName = googleUserName;
    } else if (loginMethod === 'traditional') {
        displayName = logindata?.first_Name +" " +logindata?.last_Name;
    }
  
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
  
    function getCurrentDateAndGreeting() {
      const current = new Date();
      const hours = current.getHours();
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
      let greeting;
      if (hours < 12) {
          greeting = 'Morning';
      } else if (hours < 17) {
          greeting = 'Afternoon';
      } else {
          greeting = 'Evening';
      }
  
   
      const dateOfMonth = current.getDate();
      function getOrdinalSuffix(date) {
          if (date > 3 && date < 21) return 'th'; 
          switch (date % 10) {
              case 1:  return 'st';
              case 2:  return 'nd';
              case 3:  return 'rd';
              default: return 'th';
          }
      }
  
      const formattedDate = `${months[current.getMonth()]} ${dateOfMonth}${getOrdinalSuffix(dateOfMonth)}`;
      return {
          day: days[current.getDay()],
          formattedDate,
          greeting
      };
  }
        
  const { day, formattedDate, greeting } = getCurrentDateAndGreeting();
  
 
    return (
      <>
      <Navbar/>
      <div className='mt-1 mx-[9%]'>
      <div className="relative">
      <img src={profilebg} alt="" className='w-full h-52' />
      <div className="absolute top-12 left-12 p-4 text-left">
          <h1 className='font-cardo text-[#031136] sm:text-xl text-lg font-normal'>{day}, {formattedDate}</h1>
          <h1 className='font-cardo text-[#031136] sm:text-3xl text-2xl font-semibold py-1'>Good {greeting}, {displayName}</h1>
      </div>
  </div>
  <div class="flex flex-col md:flex-row mb-5 mx-5">
  <div class="w-full md:w-[30%] pt-3 bg-[#FFFFFF] py-8 border-l border-b border-gray-200 border-opacity-30 text-left">
  <div className="flex items-center justify-between border-b border-gray-200 border-opacity-30 px-4 md:px-8 py-4">
      <h1 className="font-cardo text-xl text-[#031136] font-normal mr-1">Connects</h1>
      <div className="flex items-center space-x-2">
              <img src={downarrow} alt="" />
      </div>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 border-opacity-30 px-4 md:px-8 py-4">
      <h1 className="font-cardo text-xl text-[#031136] font-normal mr-1">Preferences</h1>
      <div className="flex items-center space-x-2">
              <img src={downarrow} alt="" />
      </div>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 border-opacity-30 px-4 md:px-8 py-4">
      <h1 className="font-cardo text-xl text-[#031136] font-normal mr-1">Proposals</h1>
      <div className="flex items-center space-x-2">
              <img src={downarrow} alt="" />
      </div>
      </div>
      <div className="flex items-center justify-between border-b border-gray-200 border-opacity-30 px-4 md:px-8 py-4">
      <h1 className="font-cardo text-xl text-[#031136] font-normal mr-1">Project catalog</h1>
      <div className="flex items-center space-x-2">
              <img src={downarrow} alt="" />
      </div>
      </div>
      <div className="px-4 md:px-8 py-5 m-4 rounded-lg shadow-md">
      <h1 className="font-cardo text-[18px] text-[#031136] font-normal pt-2">Upwork Academy  <i class="bi bi-box-arrow-up-right text-sm"></i></h1>
      <h1 className="font-cardo text-[18px] text-[#031136] font-normal pt-2">Get Paid  <i class="bi bi-box-arrow-up-right text-sm"></i></h1>
      <h1 className="font-cardo text-[18px] text-[#031136] font-normal pt-2">Community & Forums  <i class="bi bi-box-arrow-up-right text-sm"></i></h1>
      <h1 className="font-cardo text-[18px] text-[#031136] font-normal py-2">Help Center  <i class="bi bi-box-arrow-up-right text-sm"></i></h1>
      </div>
      <Link to='/freelancer/edit-profile#certificate'>
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
      {/* <Link to='/my-jobs'>
      <div className="grid grid-cols-[2fr,1fr] gap-2 rounded-lg p-4 mx-4 relative z-10 shadow-sm">
          <div>
          <h1 className='font-cardo text-lg text-[#031136] text-left'>My Jobs</h1>
             <p className='font-inter text-sm text-[#0A142F] opacity-50 py-2 text-left'>View your active contracts, timesheets, and available earnings.</p>
          </div>
          <div className="text-center">
          <i class="bi bi-arrow-right"></i>
              <img src={bag} alt="" className='mx-auto h-16 w-16 mt-2'/>
          </div>
      </div>
      </Link> */}
  </div>
  
  <div class="w-full md:w-[70%] pt-3 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-30 text-left">
      <div className='px-4 md:px-8 pt-4 border-b border-gray-200 border-opacity-30'>
      {/* <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Jobs You Might Like</h1> */}
      <div className="flex justify-between items-center">
      <div className="flex items-center">
      <h1  className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Freelancers that Matches your Job</h1>
      </div>
      <div className="flex items-center">
      <div className='flex items-center mr-1 space-x-1 border p-1 w-[200px] rounded-md'>
          <img src={search} alt="Search Icon" className="h-4 w-4 mr-1 ml-1" />
          <input className='w-28 lg:w-40 xl:w-[160px] h-7 text-sm lg:text-sm outline-none' placeholder='Search Freelancers' value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      </div>
  </div>
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
      <div className='px-4 md:px-8 py-4'>
        <p className='font-inter opacity-50 text-[#0A142F] text-[13px]'>Browse Freelancers that match your jobs</p>
      </div>
      {viewallfreelancer && viewallfreelancer.map((free, index) => {
                return(<>
      <div className='px-4 md:px-8 py-5 hover:bg-[#F6FAFD] border-t border-b border-gray-200 border-opacity-30 cursor-pointer'>
      <div className="flex items-start">
    <Avatar src={"https://aparnawiz91.pythonanywhere.com/"+free.images_logo} alt="" variant="rounded" className="mr-4" />
    <div>
        <p className="font-inter text-[#0A142F] text-[18px] font-semibold">{free.first_Name + " " + free.last_Name}</p>
        <p className='font-inter opacity-50 text-[#0A142F] text-[14px]'>{free.category}</p>
    </div>
    <div className="flex items-center space-x-2 ml-auto">
        <Link to=''>
            <span className="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Hire Now</span>
        </Link>
    </div>
</div>
      <p className='font-inter opacity-50 text-[#0A142F] text-[14px] py-4'>A passionate Web Developer with over 5 years of experience specializing in front-end and back-end development. Proficient in HTML, CSS, JavaScript, and Python. Experienced with full-stack development and popular frameworks like React and Django. I've successfully completed over 100 projects, ranging from simple landing pages to complex eCommerce platforms. Committed to providing high-quality code and solutions for every project.</p>
      {free.skills &&
     JSON.parse(free.skills.replace(/'/g, '"')).map((skill, index) => (
    <Link to={''} key={index}>
      <span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2'>
        {skill}
      </span>
    </Link>
  ))}

          <p className='font-inter text-[#0A142F] text-[14px] py-1 mr-1'>completed projects : <span className='opacity-50'>More than 50</span></p>
          <img src={verify} alt="" className='inline-block h-3 w-3 mr-1'/>
          <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>Account verified</p>
          <div className="text-[16px] text-[#FFC107] inline-block mx-3">★★★★★</div>
          <p className='font-inter text-[#0A142F] text-[14px] opacity-80 inline-block mr-1'>$0.00/Hr</p>
          <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block mr-3'>Fixed Rate</p>
          <img src={location} alt="" className='inline-block h-3 w-3 mr-1'/>
          <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>{free.Address}</p>
      </div>
      </>
      )
  })}
  </div>
  </div>
  </div>
      <HomeSection4/>
      <Footer/>
      </>
    )
  }

export default HirerAfterLogin