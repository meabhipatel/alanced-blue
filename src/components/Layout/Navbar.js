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
 

  const isLoggedIn = Boolean(accessToken || googleUserName)

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('googleUserName')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('loginMethod')

    dispatch(LogoutAction())
}


  return (
<div className='sticky z-50 top-0 bg-cover bg-top' style={{ backgroundImage: `url(${navback})`}}>
      <nav class="flex items-center justify-between flex-wrap p-6">
  <Link to='/'>
  <div class="flex items-center flex-shrink-0 lg:ml-[129px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
  </div>
  </Link>
  {!isLoggedIn ? 
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
  </div> :
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-0">
    <div class="text-sm lg:flex-grow lg:ml-[45px]">
      <Link to='/projects'><span href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">Find Work <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span></Link>
      <Link to=''><span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">My Jobs <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span></Link>
      <Link to=''><span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]"> Reports</span></Link>  
      <Link to=''><span href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 font-inter text-[16px] text-[#031136]">Messages</span></Link>
    </div>
<div className="flex flex-wrap items-center space-x-4">
<section className='flex items-center p-2 bg-white rounded-lg shadow-md'>
    <div className='flex items-center mr-1 space-x-1'>
        <img src={search} alt="Search Icon" className="h-3 w-3" />
        <input className='w-28 lg:w-40 xl:w-56 h-7 text-xs lg:text-sm rounded' placeholder='Search' />
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
    {logindata.images_logo !== "/media/images/blank.png" ? (
        <img 
            src={"https://aparnawiz91.pythonanywhere.com/" + logindata.images_logo} 
            alt="" 
            className="h-8 w-8 rounded-full cursor-pointer" 
            onClick={() => setDropdownVisible(!dropdownVisible)}
        />
    ) : (
        <div 
            className="h-8 w-8 rounded-full cursor-pointer flex items-center justify-center bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white font-bold font-cardo text-xl p-1"
            onClick={() => setDropdownVisible(!dropdownVisible)}
        >
            {logindata.first_Name && logindata.first_Name[0].toUpperCase()}
        </div>
    )}
    {dropdownVisible && (
        <div className="absolute right-0 mt-5 w-48 rounded-md shadow-lg bg-white">
            <div className="py-1">
            <Link to='/freelancer/profile' className="flex items-center px-4 py-2 hover:bg-gray-100">
                          <i class="bi bi-person mr-3 opacity-50"></i>
                          <span className="font-inter text-[16px] text-[#031136] opacity-50">My Profile</span>
                      </Link>
                      <Link to='/freelancer/editprofile' className="flex items-center px-4 py-2 hover:bg-gray-100">
                          <i class="bi bi-pencil mr-3 opacity-50"></i>
                          <span className="font-inter text-[16px] text-[#031136] opacity-50">Edit Profile</span>
                      </Link>
                      <Link to='/' className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>
                          <i class="bi bi-box-arrow-right mr-3 opacity-50"></i>
                          <span className="font-inter text-[16px] text-[#031136] opacity-50">Logout</span>
                      </Link>
            </div>
        </div>
    )}
</div>
</div>


  </div>
}

</nav>
    </div>
  )
}

export default Navbar
