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
import { GetHirerSelfProfileAction } from '../../redux/Hirer/HirerAction'
import { GetViewAllFreelancersAction } from '../../redux/Hirer/HirerAction'
import axios from 'axios'
import { useEffect } from 'react'
import alancedlogo from '../images/Alanced-footer.png'
import { GetFreelancerSelfProfileAction } from '../../redux/Freelancer/FreelancerAction'
import { GetViewAllProjectsListAction } from '../../redux/Freelancer/FreelancerAction'
import { timeAgo } from '../../container/freelancer/TimeFunctions'

const Navbar = () => {
  
  const accessToken = localStorage.getItem('accessToken')
  const AccessToken = useSelector(state => state.login.accessToken);
  const loginType = useSelector(state => state.login.type)
  const logindata = useSelector(state => state.login.login_data)
  const googleUserName = localStorage.getItem('googleUserName')
  const loginMethod = localStorage.getItem('loginMethod')
  const dispatch = useDispatch();
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [Findworkdropdown, setFindworkDropdown] = useState(false)
  const [MyJobsdropdown, setMyJobsDropdown] = useState(false)
  const [Reportsdropdown, setReportsDropdown] = useState(false)
  const hirerImage = useSelector(state => state.hirerImage.hirerimageprofile)
  const freelanceImage = useSelector(state => state.freelancerImage.freelancerimageprofile)
  console.log("freelancer data on navbar", freelanceImage)
  var imagedata = useState(null)
  if(hirerImage != null){
  imagedata = hirerImage
  console.log("hirer image ========> ", hirerImage.images_logo)
  console.log("image data ========> ", imagedata.images_logo)
}
if(loginType == 'FREELANCER'){
  
  if(freelanceImage != null){
    imagedata = freelanceImage[0]
    console.log("freelancer data on navbar", freelanceImage[0].images_logo)
  }
}

  let displayName;

  if (loginMethod === 'google') {
      displayName = googleUserName;
  } else if (loginMethod === 'traditional') {
      displayName = logindata?.first_Name+" "+logindata?.last_Name;
  }
 
  
    // React.useEffect(() => {
    //   if (loginType == 'HIRER'){
    //     dispatch(GetViewAllFreelancersAction())
    //   dispatch(GetHirerSelfProfileAction(AccessToken))
      
    // }
    // if (loginType == 'FREELANCER'){
    //   dispatch(GetViewAllProjectsListAction())
    //   dispatch(GetFreelancerSelfProfileAction(AccessToken))
      
    // }
    // }, [AccessToken])
  

  const isLoggedIn = Boolean(accessToken || googleUserName)

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('googleUserName')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('loginMethod')

    dispatch(LogoutAction())
}

const [clientnotifications, setClientNotifications] = useState([]);
const [freenotifications, setFreeNotifications] = useState([]);
const [isNotificationsDropdownVisible, setIsNotificationsDropdownVisible] = useState(false);

const fetchClientNotifications = async () => {
  try {
      const response = await axios.get('https://aparnawiz91.pythonanywhere.com/freelance/view/client-notifications', {
          headers: {
              'Authorization': `Bearer ${AccessToken}`
          }
      });

      if (response.data.status === 200) {
          setClientNotifications(response.data.data);
      } else {
          console.log(response.data.message || 'Error fetching notification');
      }
  } catch (err) {
      console.log(err.message);
  }
};

useEffect(() => {
  fetchClientNotifications(); 
  const interval = setInterval(fetchClientNotifications, 60000); 
  return () => clearInterval(interval); 
}, []);

const markAsReadClient = async (notifId) => {
  try {
      const response = await axios.put(`https://aparnawiz91.pythonanywhere.com/freelance/read/client-notification/${notifId}`, {}, {
          headers: {
              'Authorization': `Bearer ${AccessToken}`
          }
      });

      if (response.data.status === 200) {
          fetchClientNotifications(); 
      } else {
          console.log(response.data.message || 'Error marking notification as read');
      }
  } catch (err) {
      console.log(err.message);
  }
};

const toggleNotificationDropdown = () => {
    setIsNotificationsDropdownVisible(!isNotificationsDropdownVisible);
};
const unreadclientCount = clientnotifications.filter(notif => !notif.is_read).length;

// function timeAgo(postedTimeStr) {
//   const postedTime = new Date(postedTimeStr);
//   const currentTime = new Date();

//   const deltaInMilliseconds = currentTime - postedTime;
//   const deltaInSeconds = Math.floor(deltaInMilliseconds / 1000);
//   const deltaInMinutes = Math.floor(deltaInSeconds / 60);
//   const deltaInHours = Math.floor(deltaInMinutes / 60);
//   const deltaInDays = Math.floor(deltaInHours / 24);

//   if (deltaInMinutes < 1) {
//       return "just now";
//   } else if (deltaInMinutes < 60) {
//       return `${deltaInMinutes}m`;
//   } else if (deltaInHours < 24) {
//       return `${deltaInHours}h`;
//   } else if (deltaInDays < 30) {
//       return `${deltaInDays}d`;
//   } else if (deltaInDays < 365) {
//       const months = Math.floor(deltaInDays / 30);
//       return `${months} month`;
//   } else {
//       const years = Math.floor(deltaInDays / 365);
//       return `${years} year`;
//   }
// }


const deleteClientNotification = async (notifId) => {
  try {
      const response = await axios.delete(`https://aparnawiz91.pythonanywhere.com/freelance/delete/client-notification/${notifId}`, {
          headers: {
              'Authorization': `Bearer ${AccessToken}`
          }
      });

      if (response.data.status === 200) {
          fetchClientNotifications(); 
      } else {
          console.log(response.data.message || 'Error deleting notification');
      }
  } catch (err) {
      console.log(err.message);
  }
};

const fetchFreeNotifications = async () => {
    try {
        const response = await axios.get('https://aparnawiz91.pythonanywhere.com/freelance/view/freelancer-notifications', {
            headers: {
                'Authorization': `Bearer ${AccessToken}`
            }
        });
  
        if (response.data.status === 200) {
            setFreeNotifications(response.data.data);
        } else {
            console.log(response.data.message || 'Error fetching notification');
        }
    } catch (err) {
        console.log(err.message);
    }
  };
  
  useEffect(() => {
    fetchFreeNotifications(); 
    const interval = setInterval(fetchFreeNotifications, 60000);
    return () => clearInterval(interval); 
  }, []);
  
  const markAsReadFree = async (notifId) => {
    try {
        const response = await axios.put(`https://aparnawiz91.pythonanywhere.com/freelance/read/freelancer-notification/${notifId}`, {}, {
            headers: {
                'Authorization': `Bearer ${AccessToken}`
            }
        });
  
        if (response.data.status === 200) {
            fetchFreeNotifications(); 
        } else {
            console.log(response.data.message || 'Error marking notification as read');
        }
    } catch (err) {
        console.log(err.message);
    }
  };
  
  const deleteFreeNotification = async (notifId) => {
    try {
        const response = await axios.delete(`https://aparnawiz91.pythonanywhere.com/freelance/delete/freelancer-notification/${notifId}`, {
            headers: {
                'Authorization': `Bearer ${AccessToken}`
            }
        });
  
        if (response.data.status === 200) {
            fetchFreeNotifications(); 
        } else {
            console.log(response.data.message || 'Error deleting notification');
        }
    } catch (err) {
        console.log(err.message);
    }
  };

  const unreadfreeCount = freenotifications.filter(notif => !notif.is_read).length;


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
  <Link to='/' onClick={() => window.scrollTo(0, 0)}>
  <div class="flex items-center flex-shrink-0 lg:ml-[129px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
  </div>
  </Link>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-0">
    <div class="text-sm lg:flex-grow lg:ml-[45px]">
      <Link to='/view-all/freelancer' onClick={() => window.scrollTo(0, 0)}><span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">
        Find Talent
      </span></Link>
      <Link to='/projects' onClick={() => window.scrollTo(0, 0)}><span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">Find Work</span></Link>
      <Link to='/why-alanced' onClick={() => window.scrollTo(0, 0)}>
      <span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]">
        Why Alanced
      </span>
      </Link>
      <Link to='/enterprises' onClick={() => window.scroll(0, 0)}>
      <span class="block mt-4 lg:inline-block lg:mt-0 font-inter text-[16px] text-[#031136]">
        Enterprise
      </span></Link>
    </div>
    <div className='lg:mr-[100px] mt-2'>
        <Link to='/login'><span class="inline-block text-sm px-4 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-2 font-semibold">Sign In</span></Link>
      <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
      <Link to='/sign-up'><button class="px-2 py-1 bg-[#E2F9EE]"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[6px]">Sign Up</p></button></Link>
</div>    
    </div>
  </div> 
  </>:<>
  {loginType=='FREELANCER' ? <Link to='/freelancer/profile' onClick={() => window.scrollTo(0, 0)}>
  <div class="flex items-center flex-shrink-0 lg:ml-[129px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
  </div>
  </Link>:<Link to='/hirer/profile' onClick={() => window.scrollTo(0, 0)}>
  <div class="flex items-center flex-shrink-0 lg:ml-[129px]">
    <img src={logo} alt=""  />
    <span class="font-semibold text-[23px] tracking-widest ml-2 font-poppins text-[#031136]">ALANCED</span>
  </div>
  </Link>}
  
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-0 my-2.5">
    <div class="text-sm lg:flex-grow lg:ml-[45px] lg:mr-12 mt-1.5">
      {loginType=='FREELANCER' ? <>
      <span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136] cursor-pointer" onMouseEnter={() => setFindworkDropdown(true)}>Find Work <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span>
      {Findworkdropdown && (
        <div className="absolute right-[47.5rem] mt-5 w-48 rounded-md shadow-lg bg-white dropdown-container">
            <div className="py-1">
            <Link to='/projects' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                          <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Find Work</span>
                      </Link>
                      <Link to='/saved-jobs' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Saved Jobs</span>
                      </Link>
                      <Link to='/my-proposals' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                          <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Proposals</span>
                      </Link>
                      <Link to='/freelancer/edit-profile' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2" >
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Profile</span>
                      </Link>
            </div>
        </div>
    )}
      </> : <Link to='/hirer/profile' onClick={() => window.scrollTo(0, 0)}>
      <span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136]" >Find Talent </span>
      </Link> }
      {loginType=='FREELANCER' ? <>
      <span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136] cursor-pointer" onMouseEnter={() => setMyJobsDropdown(true)} 
    >My Jobs <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span>
      {MyJobsdropdown && (
        <div className="absolute right-[39.5rem] mt-5 w-48 rounded-md shadow-lg bg-white dropdown-container">
            <div className="py-1">
            <Link to='/my-jobs' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                          <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">My Jobs</span>
                      </Link>
                      <Link to='/freelancer/all-contracts' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">All Contracts</span>
                      </Link>
            </div>
        </div>
    )} </> : <>
    <span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136] cursor-pointer" onMouseEnter={() => setMyJobsDropdown(true)} 
  > Jobs <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span>
    {MyJobsdropdown && (
      <div className="absolute right-[41rem] mt-5 w-48 rounded-md shadow-lg bg-white dropdown-container">
          <div className="py-1">
          <Link to='/add/Job-post' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Post A Job</span>
                    </Link>
          <Link to='/View-all/Job-post' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">All Jobs</span>
                    </Link>
          </div>
      </div>
  )} </> }
  {loginType=='FREELANCER' ? <>
      <span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136] cursor-pointer" onMouseEnter={() => setReportsDropdown(true)}> Reports <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span>  
      {Reportsdropdown && (
        <div className="absolute right-[31.5rem] mt-5 w-48 rounded-md shadow-lg bg-white dropdown-container">
            <div className="py-1">
            <Link to='/freelancer/my-reports' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                          <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">My Reports</span>
                      </Link>
                      <Link to='' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Connects History</span>
                      </Link>
             </div>
        </div>
    )}</>:<>
    <span class="block mt-4 lg:inline-block lg:mt-0 lg:mr-12 font-inter text-[16px] text-[#031136] cursor-pointer" onMouseEnter={() => setReportsDropdown(true)}> Reports <i class="bi bi-chevron-down text-[#031136] text-xs"></i></span>  
      {Reportsdropdown && (
        <div className="absolute right-[33rem] mt-5 w-48 rounded-md shadow-lg bg-white dropdown-container">
            <div className="py-1">
            <Link to='/freelancer/my-reports' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                          <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">My Reports</span>
                      </Link>
                      <Link to='' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2">
                        <span className="font-inter text-[16px] text-[#031136] hover:text-lime-600">Connects History</span>
                      </Link>
             </div>
        </div>
    )}
    </>}
      <Link to='/messages' onClick={() => window.scrollTo(0, 0)}><span class="block mt-4 lg:inline-block lg:mt-0 font-inter text-[16px] text-[#031136]">Messages</span></Link>
    </div>
    
<div className='lg:mr-[100px]'>
   <div className="flex items-center space-x-12">
      <div className='relative inline-block pt-1'>
      <i 
                    className="bi bi-bell text-2xl cursor-pointer" 
                    onClick={toggleNotificationDropdown}
                ></i>
                {loginType=='HIRER' && unreadclientCount > 0 && 
                    <span className="absolute top-1.5 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span>
                }
                {loginType=='FREELANCER' && unreadfreeCount > 0 && 
                    <span className="absolute top-1.5 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span>
                }

{loginType=='HIRER' && isNotificationsDropdownVisible && (
    <div className="drop absolute right-[-18px] mt-5 w-72 bg-white rounded-md shadow-lg text-left">
        {clientnotifications.length > 0 ? (
            <>
                {clientnotifications.slice(0, 3).map(notif => (
                    <div key={notif.id} className={`border-b cursor-pointer p-3 px-5 hover:bg-[#F6FAFD] ${!notif.is_read ? 'bg-[#f4f8fc]' : 'bg-white'} relative group`} onClick={() => markAsReadClient(notif.id)}>
                        <div className='flex items-center justify-between mt-1'>
                            <div className="flex items-center">
                                <img src={alancedlogo} alt="" className='h-[18px] w-[18px] mr-2'/>
                                <h4 className="font-bold text-md">{notif.title}</h4>
                            </div>
                            <p className='opacity-50 text-xs'>{timeAgo(notif.timestamp)}</p>
                        </div>
                        <p className='opacity-50 text-sm pt-1'>{notif.message}</p>
                        <i 
                            className="bi bi-x absolute top-1 right-1 text-[#031136] opacity-0 group-hover:opacity-100" 
                            onClick={(e) => {
                                e.stopPropagation();  
                                deleteClientNotification(notif.id);
                            }}
                        ></i>
                    </div>
                ))}
                {clientnotifications.length > 3 && (
                    <Link to='/notifications' className="block text-left text-md font-semibold p-3">Show More Notifications</Link>
                )}
            </>
        ) : (
            <div className='p-4'><h4 className="font-bold text-md">No New Notifications</h4></div>
        )}
    </div>
)}

{loginType=='FREELANCER' && isNotificationsDropdownVisible && (
    <div className="drop absolute right-[-18px] mt-5 w-72 bg-white rounded-md shadow-lg text-left">
        {freenotifications.length > 0 ? (
            <>
                {freenotifications.slice(0, 3).map(notif => (
                    <div key={notif.id} className={`border-b cursor-pointer p-3 px-5 hover:bg-[#F6FAFD] ${!notif.is_read ? 'bg-[#f4f8fc]' : 'bg-white'} relative group`} onClick={() => markAsReadFree(notif.id)}>
                        <div className='flex items-center justify-between mt-1'>
                            <div className="flex items-center">
                                <img src={alancedlogo} alt="" className='h-[18px] w-[18px] mr-2'/>
                                <h4 className="font-bold text-md">{notif.title}</h4>
                            </div>
                            <p className='opacity-50 text-xs'>{timeAgo(notif.timestamp)}</p>
                        </div>
                        <p className='opacity-50 text-sm pt-1'>{notif.message}</p>
                        <i 
                            className="bi bi-x absolute top-1 right-1 text-[#031136] opacity-0 group-hover:opacity-100" 
                            onClick={(e) => {
                                e.stopPropagation();  
                                deleteFreeNotification(notif.id);
                            }}
                        ></i>
                    </div>
                ))}
                {freenotifications.length > 3 && (
                    <Link to='/notifications' className="block text-left text-md font-semibold p-3">Show More Notifications</Link>
                )}
            </>
        ) : (
            <div className='p-4'><h4 className="font-bold text-md">No New Notifications</h4></div>
        )}
    </div>
)}
         {/* <i className="bi bi-bell text-2xl"></i>
         <span className="absolute top-1.5 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span> */}
      </div>
      <div className='relative inline-block'>
      {/* {logindata && logindata.images_logo !== "/media/images/blank.png" ? ( */}
        <img 
            src={"https://aparnawiz91.pythonanywhere.com/" + logindata.images_logo} 
            alt="Profile" 
            className="h-10 w-10 rounded-full cursor-pointer" 
            onClick={() => setDropdownVisible(!dropdownVisible)}
        />
    {/* ) : (
        <div 
            className="h-10 w-10 rounded-full cursor-pointer flex items-center justify-center bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white font-bold font-cardo text-xl p-1"
            onClick={() => setDropdownVisible(!dropdownVisible)}
        >
            {displayName && displayName[0].toUpperCase()}
        </div>
    )} */}
    {dropdownVisible && (
        <div className="drop absolute right-[-10px] mt-5 w-[14rem] rounded-md shadow-lg bg-white">
            <div className="py-1">
                      {/* {logindata && logindata.images_logo !== "/media/images/blank.png" ? ( */}
        <img 
            src={"https://aparnawiz91.pythonanywhere.com/" + logindata.images_logo} 
            alt="Profile" 
            className="h-20 w-20 rounded-full cursor-pointer mx-auto my-5 border border-gray-200 p-0.5" 
            onClick={() => setDropdownVisible(!dropdownVisible)}
        />
    {/* ) : (
        <div 
            className="h-20 w-20 rounded-full cursor-pointer flex items-center justify-center bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white font-bold font-cardo text-4xl p-1 mx-auto my-5"
            onClick={() => setDropdownVisible(!dropdownVisible)}
        >
            {displayName && displayName[0].toUpperCase()}
        </div>
    )} */}
                     <h1 className="font-cardo text-[19px] text-[#031136]  text-center px-2">{displayName}</h1>
                     <h1 className="font-cardo text-lg text-gray-500  text-center  mb-3">{loginType=='FREELANCER'? loginType.toLowerCase(): 'client'}</h1>
                     {loginType=='FREELANCER'? <Link to='/freelancer/edit-profile' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2 hover:bg-gray-100" >
                            <i class="bi bi-person-circle mr-3"></i>
                        <span className="font-cardo text-[16px] text-[#031136]">Profile</span>
                      </Link>:<Link to='/hirer/profile-edit' onClick={() => window.scrollTo(0, 0)} className="flex items-center px-4 py-2 hover:bg-gray-100" >
                            <i class="bi bi-person-circle mr-3"></i>
                        <span className="font-cardo text-[16px] text-[#031136]">Profile</span>
                      </Link>}
                      <Link to='/' className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => {
                          window.scrollTo(0, 0);
                          handleLogout();
                      }}
                      >
                          <i class="bi bi-box-arrow-right mr-3"></i>
                          <span className="font-cardo text-[16px] text-[#031136]">Logout</span>
                      </Link>
            </div>
        </div>
    )}
      </div>
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
