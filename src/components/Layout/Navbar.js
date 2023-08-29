import React from 'react'
import logo from '../images/Alanced.png'
import { Link } from 'react-router-dom'
import navback from '../images/Nav_Background.png'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutAction } from '../../redux/Auth/AuthAction'

const Navbar = () => {
  
  const accessToken = localStorage.getItem('accessToken');
  const loginType = useSelector(state => state.login.type)
  const logindata = useSelector(state => state.login.login_data);
  const googleUserName = localStorage.getItem('googleUserName');
  const loginMethod = localStorage.getItem('loginMethod');
  const dispatch = useDispatch();
 
  let displayName;

  if (loginMethod === 'google') {
      displayName = googleUserName;
  } else if (loginMethod === 'traditional') {
      displayName = logindata?.first_Name;
  }


  const isLoggedIn = Boolean(accessToken || googleUserName);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('googleUserName');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('loginMethod');

    dispatch(LogoutAction());
};


  return (
    <div className='sticky z-50 top-0 bg-cover bg-top' style={{ backgroundImage: `url(${navback})`}}>
      <nav class="flex items-center justify-between flex-wrap p-6">
  <Link to='/'>
  <div class="flex items-center flex-shrink-0 lg:ml-[129px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
  </div>
  </Link>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-0">
    <div class="text-sm lg:flex-grow lg:ml-[45px]">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">
        Find Talent
      </a>
      <a class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">
        <Link to='/projects'>Find Work</Link>
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">
        Why Alanced
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 font-inter text-[16px] text-[#031136]">
        Enterprise
      </a>
    </div>
    <div className='lg:mr-[100px] mt-2'>
      {!isLoggedIn ? (
        <>
        <Link to='/login'><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-2 font-semibold">Sign In</span></Link>
      <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
      <Link to='/choose'><button class="px-2 py-1 bg-[#E2F9EE]"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[6px]">Sign Up</p></button></Link>
</div>
        </>
      ):(<>
      <span className='pr-3 font-cardo text-xl'>Welcome, 
  {loginType === 'FREELANCER'? (
    <Link to="/freelancer/profile" className="font-bold">{" "+displayName}</Link>
  ) : (
      <Link to="/projects" className="font-bold">{" "+displayName}</Link>
    ) 
  }
</span>
        {/* <span className='pr-3 font-cardo text-xl'>Welcome, <span className="font-bold">{displayName}</span></span> */}
        {/* <Link to='/login'><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-2 font-semibold" onClick={() => {
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('googleUserName');
          localStorage.removeItem('accessToken');
          localStorage.removeItem('loginMethod');
          }}>Logout</span></Link> */}
          <Link to='/'>
        <span 
            class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-2 font-semibold" 
            onClick={handleLogout}
        >
            Logout
        </span>
    </Link>
      </>)}
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
