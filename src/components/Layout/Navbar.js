import React, { useState } from 'react'
import logo from '../images/Alanced.png'
import { Link } from 'react-router-dom'
import navback from '../images/Nav_Background.png'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutAction } from '../../redux/Auth/AuthAction'
import search from '../images/SearchOutlined.png'
import searchbtn from '../images/searchbtn.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
import profilepic from '../../components/images/profilepic.png'

const Navbar = () => {
  
  const accessToken = localStorage.getItem('accessToken')
  const loginType = useSelector(state => state.login.type)
  const logindata = useSelector(state => state.login.login_data)
  const googleUserName = localStorage.getItem('googleUserName')
  const loginMethod = localStorage.getItem('loginMethod')
  const dispatch = useDispatch();
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [Findworkdropdown, setFindworkDropdown] = useState(false)
  const [MyJobsdropdown, setMyJobsDropdown] = useState(false)
  const [Reportsdropdown, setReportsDropdown] = useState(false)
 

  let displayName;

  if (loginMethod === 'google') {
      displayName = googleUserName;
  } else if (loginMethod === 'traditional') {
      displayName = logindata?.first_Name+" "+logindata?.last_Name;
  }
 

  const isLoggedIn = Boolean(accessToken || googleUserName)

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('googleUserName')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('loginMethod')

    dispatch(LogoutAction())
}


  return (
<div className='sticky z-50 top-0 bg-cover bg-top' style={{ backgroundImage: `url(${navback})`}} onMouseLeave={(e)=>{setFindworkDropdown(); setMyJobsDropdown(); setReportsDropdown()}}>
      <nav class="flex items-center justify-between flex-wrap p-6">
  {/* <Link to='/'>
  <div class="flex items-center flex-shrink-0 lg:ml-[129px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
  </div>
  </Link> */}
  {!isLoggedIn ? 
  <>
  <Link to='/'>
  <div class="flex items-center flex-shrink-0 lg:ml-[129px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
  </div>
  </Link>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-0">
    <div class="text-sm lg:flex-grow lg:ml-[45px]">
      <Link to=''><span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">
        Find Talent
      </span></Link>
      <Link to='/projects'><span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">Find Work</span></Link>
      <Link to=''><span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">
        Why Alanced
      </span></Link>
      <Link to=''><span class="block mt-4 lg:inline-block lg:mt-0 font-inter text-[16px] text-[#031136]">
        Enterprise
      </span></Link>
    </div>
    <div className='lg:mr-[100px] mt-2'>
        <Link to='/login'><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-2 font-semibold">Sign In</span></Link>
      <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
      <Link to='/choose'><button class="px-2 py-1 bg-[#E2F9EE]"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[6px]">Sign Up</p></button></Link>
</div>    
    </div>
  </div> 
  </>:<>
  {loginType=='FREELANCER' ? <Link to='/freelancer/profile'>
  <div class="flex items-center flex-shrink-0 lg:ml-[129px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
  </div>
  </Link>:<Link to='/hirer/profile'>
  <div class="flex items-center flex-shrink-0 lg:ml-[129px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
  </div>
  </Link>}
  
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-0">
    <div class="text-sm lg:flex-grow lg:ml-[45px]">
      {loginType=='FREELANCER' ? <>
      <Link to=''><span href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]" onMouseEnter={() => setFindworkDropdown(true)}>Find Work <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span></Link>
      {Findworkdropdown && (
        <div className="absolute right-[54rem] mt-5 w-48 rounded-md shadow-lg bg-white dropdown-container">
            <div className="py-1">
            <Link to='/projects' className="flex items-center px-4 py-2">
                          <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Find Work</span>
                      </Link>
                      <Link to='/saved-jobs' className="flex items-center px-4 py-2">
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Saved Jobs</span>
                      </Link>
                      <Link to='/my-proposals' className="flex items-center px-4 py-2">
                          <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Proposals</span>
                      </Link>
                      <Link to='/freelancer/edit-profile' className="flex items-center px-4 py-2" >
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Profile</span>
                      </Link>
            </div>
        </div>
    )}
      </> : <span href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]" >Find Talent </span> }
      {loginType=='FREELANCER' ? <>
      <Link to=''><span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]" onMouseEnter={() => setMyJobsDropdown(true)} 
    >My Jobs <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span></Link>
      {MyJobsdropdown && (
        <div className="absolute right-[46rem] mt-5 w-48 rounded-md shadow-lg bg-white dropdown-container">
            <div className="py-1">
            <Link to='/my-jobs' className="flex items-center px-4 py-2">
                          <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">My Jobs</span>
                      </Link>
                      <Link to='/freelancer/all-contracts' className="flex items-center px-4 py-2">
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">All Contracts</span>
                      </Link>
            </div>
        </div>
    )} </> : <>
    <Link to=''><span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]" onMouseEnter={() => setMyJobsDropdown(true)} 
  > Jobs <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span></Link>
    {MyJobsdropdown && (
      <div className="absolute right-[47rem] mt-5 w-48 rounded-md shadow-lg bg-white dropdown-container">
          <div className="py-1">
          <Link to='/View-all/Job-post' className="flex items-center px-4 py-2">
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">All Jobs</span>
                    </Link>
          </div>
      </div>
  )} </> }
      <Link to=''><span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]" onMouseEnter={() => setReportsDropdown(true)}> Reports <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span></Link>  
      {Reportsdropdown && (
        <div className="absolute right-[39rem] mt-5 w-48 rounded-md shadow-lg bg-white dropdown-container">
            <div className="py-1">
            <Link to='/freelancer/my-reports' className="flex items-center px-4 py-2">
                          <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">My Reports</span>
                      </Link>
                      <Link to='' className="flex items-center px-4 py-2">
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Connects History</span>
                      </Link>
                      {/* <Link to='' className="flex items-center px-4 py-2">
                          <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Transaction History</span>
                      </Link> */}
             </div>
        </div>
    )}
      <Link to='/messages'><span href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 font-inter text-[16px] text-[#031136]">Messages</span></Link>
    </div>
<div className="flex flex-wrap items-center space-x-4">
<section className='flex items-center p-2 bg-white rounded-lg shadow-md'>
    <div className='flex items-center mr-1 space-x-1'>
        <img src={search} alt="Search Icon" className="h-3 w-3" />
        <input className='w-28 lg:w-40 xl:w-56 h-7 text-xs lg:text-sm outline-none' placeholder='Search' />
    </div>
    <div className="hidden lg:block border-l h-5 mx-5 border-gray-400"></div>
    <div className='mr-1'>
        <select id="countries" className="bg-gray-50 text-[#797979] text-xs font-inter font-normal rounded h-7 cursor-pointer">
            <option defaultValue>Talent</option>
            <option>Project</option>
            <option>Jobs</option>
        </select>
    </div>
    <button className='rounded h-7 w-7 p-2 text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>
        <img src={searchbtn} alt="Search Icon" />
    </button>
</section>
<div className="relative ml-4">
    <i className="bi bi-bell text-xl"></i>
    <span className="absolute top-0.5 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span>
</div>
<div className="relative ml-4">
   {logindata && logindata.images_logo !== "/media/images/blank.png" ? (
        <img 
            src={"https://aparnawiz91.pythonanywhere.com/" + logindata.images_logo} 
            alt="Profile" 
            className="h-8 w-8 rounded-full cursor-pointer" 
            onClick={() => setDropdownVisible(!dropdownVisible)}
        />
    ) : (
        <div 
            className="h-8 w-8 rounded-full cursor-pointer flex items-center justify-center bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white font-bold font-cardo text-xl p-1"
            onClick={() => setDropdownVisible(!dropdownVisible)}
        >
            {displayName && displayName[0].toUpperCase()}
        </div>
    )}
    {dropdownVisible && (
        <div className="drop absolute right-[-10px] mt-5 w-[13rem] rounded-md shadow-lg bg-white">
            <div className="py-1">
                      {/* <Link to='/freelancer/edit-profile' className="flex items-center px-4 py-2 hover:bg-gray-100">
                          <i class="bi bi-pencil mr-3 opacity-50"></i>
                          <span className="font-inter text-[16px] text-[#031136] opacity-50">Edit Profile</span>
                      </Link> */}
                      {logindata && logindata.images_logo !== "/media/images/blank.png" ? (
        <img 
            src={"https://aparnawiz91.pythonanywhere.com/" + logindata.images_logo} 
            alt="Profile" 
            className="h-20 w-20 rounded-full cursor-pointer mx-auto my-5" 
            onClick={() => setDropdownVisible(!dropdownVisible)}
        />
    ) : (
        <div 
            className="h-20 w-20 rounded-full cursor-pointer flex items-center justify-center bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white font-bold font-cardo text-4xl p-1 mx-auto my-5"
            onClick={() => setDropdownVisible(!dropdownVisible)}
        >
            {displayName && displayName[0].toUpperCase()}
        </div>
    )}
                     <h1 className="font-cardo text-2xl text-[#031136] font-normal text-center">{displayName}</h1>
                     <h1 className="font-cardo text-lg text-[#031136] font-normal text-center opacity-50 mb-3">{loginType=='FREELANCER'? loginType.toLowerCase(): 'client'}</h1>
                      <Link to='/' className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>
                          <i class="bi bi-box-arrow-right mr-3"></i>
                          <span className="font-inter text-[16px] text-[#031136]">Logout</span>
                      </Link>
            </div>
        </div>
    )}
</div>
</div>


  </div>
  </>
}

</nav>
    </div>
  )
}

export default Navbar
