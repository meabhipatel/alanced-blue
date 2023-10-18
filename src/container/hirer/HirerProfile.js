import React, { useState,useRef, useEffect, useCallback } from 'react'
import Navbar from '../../components/Layout/Navbar'
import freelancercover from '../../components/images/freelancercover.png'
import edit from '../../components/images/edit.png'
// import profilepic from '../../components/images/profilepic.png'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import { Link, useNavigate } from 'react-router-dom'
import verify from '../../components/images/verify.png'
import location from '../../components/images/location.png'
import availablenow from '../../components/images/availablenow.png'
// import jobsuccess from '../../components/images/jobsuccess.png'
// import pin from '../../components/images/pin.png'
// import threedot from '../../components/images/threedot.png'
// import share from '../../components/images/share.png'
// import updownarrow from '../../components/images/updownarrow.png'
import plus from '../../components/images/plus.png'
// import cupbook from '../../components/images/cupbook.png'
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import HirerAccountPopup from '../hirer/HirerAllPopup/AccountPopup'
import HirerCompanyPopup from '../hirer/HirerAllPopup/CompanyPopup'
import HirerContactPopup from './HirerAllPopup/ContactPopup'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { GetHirerSelfProfileAction } from '../../redux/Hirer/HirerAction'

import axios from 'axios'

const HirerSelfProfile = () => {

  const accessToken = useSelector(state => state.login.accessToken);
  console.log("hirer self profile access token", accessToken)  
  const hirerselfprofile = useSelector(state => state.hirer.hirerselfprofile)
  var hirerData = useState(null)
  if(hirerselfprofile != null){
    hirerData = hirerselfprofile
  console.log("hirer profile data : ",hirerData)
}
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [freelancerproject, setfreelancerproject] = useState([]);
//   const id = freelancerselfprofile && freelancerselfprofile[0].id ? freelancerselfprofile[0].id : '';



  React.useEffect(() => {
    dispatch(GetHirerSelfProfileAction(accessToken))
  }, [])

  function handleMouseEnter() {
    setIsHovered(true);
}

function handleMouseLeave() {
    setIsHovered(false);
}

function combinedClick() {
    handlePinClick();
    handleMouseLeave();
}

// useEffect(() => {
//     if(id) { 
//         axios.get(`https://aparnawiz91.pythonanywhere.com/freelance/View-all/Review/${id}`)
//             .then(response => {
//                 if (response.data.status === 200) {
//                     setReviews(response.data.data);
//                 } else {
//                     console.log(response.data.message || 'Error fetching reviews');
//                 }
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
//     }
// }, [id]); 


// useEffect(() => {
//     if(id) { 
//         axios.get(`https://aparnawiz91.pythonanywhere.com/freelance/View-all/Freelancer/Self-Project/${id}`)
//             .then(response => {
//                 if (response.data.status === 200) {
//                     setfreelancerproject(response.data.data);
//                 } else {
//                     console.log(response.data.message || 'Error fetching project');
//                 }
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
//     }
// }, [id]); 
  
  const [isAvailable, setIsAvailable] = useState(localStorage.getItem('userAvailability') || 'available');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('userAvailability', isAvailable);
  }, [isAvailable]);


//   const [active, setActive] = React.useState(1);
 
//   const next = () => {
//       if (active === Math.ceil(freelancerproject.length / 6)) return;
//       setActive(active + 1);
//   };

//   const prev = () => {
//       if (active === 1) return;
//       setActive(active - 1);
//   };

//   const chunkArray = (array, size) => {
//       let chunked = [];
//       for (let i = 0; i < array.length; i += size) {
//           chunked.push(array.slice(i, i + size));
//       }
//       return chunked;
//   }

//   const chunkedProjects = chunkArray(freelancerproject, 6);

// const [startIdx, setStartIdx] = useState(0);  

// const showMoreHandler = () => {
//     setStartIdx(prevIdx => prevIdx + 4);
// }

// const showLessHandler = () => {
//     setStartIdx(0);
// }

// const visibleReviews = reviews.slice(startIdx, startIdx + 4);

  
//   const [selectedButton, setSelectedButton] = useState('All Work');
//   const [selectedButtons, setSelectedButtons] = useState('Github');
//   const commonStyle = "inline-block text-sm py-[10px] mt-4 lg:mt-0 border rounded font-semibold";

//   const [selected, setSelected] = useState('completed');
//   const [selectedProject, setSelectedProject] = useState(null);

//   function calculateJobSuccess(reviews) {
   
//     if (!reviews || reviews.length === 0) {
//         return 0;
//     }

//     const totalReviews = reviews.length;
//     const positiveReviews = reviews.filter(review => review.rating >= 4).length;
//     const neutralReviews = reviews.filter(review => review.rating === 3).length;

//     const successPercentage = ((positiveReviews + 0.5 * neutralReviews) / totalReviews) * 100;

//     return Math.round(successPercentage);
// }


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccount, setIsAccountOpen] = useState(false);
  const [isDetails, setIsDetailsOpen] = useState(false);
  const [isContacts, setIsContactsOpen] = useState(false);
  
  const [isAvailableOffOpen, setIsAvailableOffOpen] = useState(false);
//   const [isHrRateOpen, setIsHrRateOpen] = useState(false);
//   const [isFreeProjectOpen, setIsFreeProjectOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null)

//   const openFreeProject = (project) => {
//     setSelectedProject(project);
//     setIsFreeProjectOpen(true);
// };


  const openAvailableOff = () => {
    setIsAvailableOffOpen(true);
  };

  const closeAvailableOff = () => {
    setIsAvailableOffOpen(false);
  };


    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleEditAccount = () => {
        setIsAccountOpen(true)
    }

    const handleAccountClose = () => {
        setIsAccountOpen(false);
    }

    const handleEditDetails = () => {
        setIsDetailsOpen(true)
    }

    const handleDetailsClose = () => {
        setIsDetailsOpen(false);
    }

    const handleEditContacts = () => {
        setIsContactsOpen(true)
    }

    const handleContactsClose = () => {
        setIsContactsOpen(false);
    }
  
      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };

      const handleImageClick =()=>{
        inputRef.current.click();
      }
      
      const [hirerUpdate, sethirerUpdate] = React.useState(hirerData)

      const onChange = e => {
        sethirerUpdate({
          ...hirerUpdate,
          [e.target.name]: e.target.value
        });
      };
console.log("______________",hirerUpdate)
const [first_Name, setfirst_Name] = useState("")
console.log("++++++++++++++",first_Name)
      const handleImageSave = async () => {
    const formData = new FormData();
    formData.append("images_logo", selectedFile);
    // formData.append("first_Name", hirerUpdate.first_Name);
    // formData.append("last_Name", hirerUpdate.last_Name);
    // formData.append("email", hirerUpdate.email);
    
    // const d = {
    //     ...(selectedFile !== undefined && { "image_and_logo": selectedFile }),
    //     "first_Name": hirerUpdate.first_Name,
    //     "last_Name": hirerUpdate.last_Name,
    //     "email": hirerUpdate.email,
            
    // }

    // if(hirerData && hirerData){
    //     hirerData.images_logo = URL.createObjectURL(selectedFile);
    // }

    // dispatch(UpdateFreelancerProfileAction(formData, accessToken));
    axios.put('https://aparnawiz91.pythonanywhere.com/account/hirer/profile/update',formData,{
        headers: {
            "Authorization":`Bearer ${accessToken}`
          },first_Name: first_Name
    })
    .then(response => {
        if (response.data.status === 200) {
            setReviews(response.data.data);
        } else {
            console.log(response.data.message || 'Error fetching reviews');
        }
    })
    .catch(err => {
        console.log(err.message);
    });
    setIsModalOpen(false);
    navigate('/hirer/profile-edit');
}

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

    React.useEffect(() => {
        // dispatch(GetFreelancerSelfProfileAction(accessToken))
      }, [])


      const [showCopyMessage, setShowCopyMessage] = useState(false);
      const profileLink = "http://localhost:3000/freelancer/edit-profile"; 
  
      const handlePinClick = useCallback(() => {
        navigator.clipboard.writeText(profileLink)
            .then(() => {
                console.log("Setting showCopyMessage to true"); 
                setShowCopyMessage(true);
                setTimeout(() => setShowCopyMessage(false), 2000);
            })
            .catch(err => {
                console.error("Could not copy text: ", err);
            });
    }, [profileLink]);
    
  
     
  return (
   <>
   <Navbar/>
   <div className='mt-4 mx-[9%]'>
   <img src={freelancercover} alt="" className=''/>
   <div class="flex flex-col md:flex-row">
   <div className="md:w-[30%] bg-white border border-gray-200 border-opacity-30">
   <div className='border-b border-gray-200 border-opacity-30 py-8 p-4 mb-4 md:mb-0 relative'>
   <div className="relative w-28 h-28 mx-auto">
                    <img  alt="Profile" src={hirerData && hirerData ? "https://aparnawiz91.pythonanywhere.com/"+hirerData.images_logo : ''} className="rounded-full w-full h-full border border-gray-200" />
                    <div className="absolute top-1 left-2 p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer" onClick={handleEditClick}>
                        <img src={edit} alt="edit" />
                    </div>
                    <div class="absolute bottom-3 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
   </div>
   <div className='border-b border-gray-200 border-opacity-30 text-left flex flex-col justify-center items-center py-4 px-4 md:px-8'>
        <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Verifications</h1>
    <p className='font-inter text-[#0A142F] text-[14px] py-1 inline-block mr-1'>ID : <span className='opacity-50 mr-1'>Verified</span><img src={verify} alt="" className='inline-block h-3 w-3 mb-0.5'/></p>
    {/* <p className='font-inter text-[#0A142F] text-[14px] py-1 opacity-50'>{freelancerselfprofile && freelancerselfprofile[0] ? `${freelancerselfprofile[0].first_Name} ${freelancerselfprofile[0].last_Name}` : ''}</p> */}
   </div>
   </div>
   {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 relative z-20">
                            <div className="text-right">
                                <button onClick={handleModalClose} className="text-gray-500 hover:text-gray-700">
                                <i class="bi bi-x-lg"></i>
                                </button>
                            </div>
                            <div className='mx-8'>
                            <h1 className="font-cardo text-[21px] text-[#031136] font-normal text-left">Edit Photo</h1>
                            <p className="font-cardo text-[17px] text-[#031136] font-normal pt-2 text-left">Show Clients The Best Version Of Yourself!</p>
                            <div className="flex justify-between items-center mt-4 mb-2">
                            <div className="relative w-[200px] h-[200px] overflow-hidden">
                            {selectedFile ? 
                            <img className="absolute inset-0 w-full h-full object-cover" src={URL.createObjectURL(selectedFile)} alt="Profile" /> 
                            : 
                            <img className="absolute inset-0 w-full h-full object-cover" src={hirerData && hirerData ? "https://aparnawiz91.pythonanywhere.com/"+hirerData.images_logo : ''} alt="Profile" />
                            }
                            </div>
                            <div className="relative w-28 h-28 overflow-hidden">
                            {selectedFile ? 
                            <img className="absolute inset-0 w-full h-full object-cover" src={URL.createObjectURL(selectedFile)} alt="Profile" /> 
                            : 
                            <img className="absolute inset-0 w-full h-full object-cover" src={hirerData && hirerData ? "https://aparnawiz91.pythonanywhere.com/"+hirerData.images_logo : ''} alt="Profile" />
                            }
                            </div>
                            <div className="relative w-20 h-20 overflow-hidden">
                            {selectedFile ? 
                            <img className="absolute inset-0 w-full h-full object-cover" src={URL.createObjectURL(selectedFile)} alt="Profile" /> 
                            : 
                            <img className="absolute inset-0 w-full h-full object-cover" src={hirerData && hirerData ? "https://aparnawiz91.pythonanywhere.com/"+hirerData.images_logo : ''} alt="Profile" />
                            }
                            </div>
                            <div className="relative w-16 h-16 overflow-hidden">
                            {selectedFile ? 
                            <img className="absolute inset-0 w-full h-full object-cover" src={URL.createObjectURL(selectedFile)} alt="Profile" /> 
                            : 
                            <img className="absolute inset-0 w-full h-full object-cover" src={hirerData && hirerData ? "https://aparnawiz91.pythonanywhere.com/"+hirerData.images_logo : ''} alt="Profile" />
                            }
                            </div>
                    <input 
                    type='file' 
                    ref={inputRef} 
                    // name='images_logo'
                    style={{display:"none"}}
                    onChange={handleFileChange}
                    accept="image/*"
                />
                        </div>
                        <p className="font-cardo text-[17px] text-[#031136] font-normal pt-2 text-left">Must Be An Actual Photo Of You.</p>
                        <p className='text-[#0A142F] font-inter opacity-50 text-[14px] text-left'>Logos, clip-art, group photos, and digitally-altered images are not allowed.</p>
                            <div className="mt-8 flex justify-end">
                            <Link to=''><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold" onClick={handleImageClick} onChange={handleFileChange}>Change Image</span></Link>
                            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]" onClick={handleImageSave}>
                                <Link to=''><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Save Photo</p></button></Link>
                            </div>     
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
   <div class="md:w-[70%] border border-gray-200 border-opacity-30">
   <div className='border-b border-gray-200 border-opacity-30 flex flex-col md:flex-row py-3.5'>
   <div class="w-full md:w-3/4 pt-3 text-left pl-8">
            <div className="flex items-center">
                
            </div>
            <div className="flex items-center my-1">
                
            </div>

            <div className="flex space-x-1 mt-2">
            <button className={`flex items-center justify-center text-[#0A142F] font-inter opacity-50 text-[13px] py-2 px-4 focus:outline-none rounded-full ${isAvailable === 'available' ? 'ring-1 ring-gray-400' : ''}`}>
            <img src={availablenow} alt="" className='h-[16px] mr-2' />
                Available Now
            </button>

            <button className={`text-center text-[#0A142F] font-inter opacity-50 text-[13px] py-2 px-4 focus:outline-none rounded-full ${isAvailable === 'off' ? 'ring-1 ring-gray-400' : ''}`}>
                Off
            </button>

                
            </div>
            <div className="flex items-center mt-3">
                
            </div>
        </div>
        
   </div>
   
   <div className="flex justify-between items-center">
    <div className="flex items-center">
        
    </div>
    
</div>
   
   <div className='border-b flex border-gray-200 border-opacity-30 text-left py-6 px-4 md:px-8' id='workHistory'>
    <div className='flex flex-col w-fit'>
    <span className='text-xl text-[#00BF58] font-bold'>Account</span>
    <div className='flex flex-col mt-5 ml-4'>
    <span className='text-2xl font-semibold'>{hirerData.first_Name + ' ' + hirerData.last_Name}</span>
    <span className='text-md text-gray-500 mt-4'>Client</span>
    <span className='text-lg font-semibold'>{hirerData.first_Name + ' ' + hirerData.last_Name}</span>
    <span className='text-md text-gray-500 mt-4'>Email</span>
    <span className='font-semibold'>{hirerData.email}</span>
    </div>
    </div>
    
    <div class="p-1 w-10 h-10 flex justify-center items-center float-right ml-auto bg-white rounded-full border border-gray-200 mt-1 cursor-pointer" onClick={handleEditAccount}>
                    <img src={edit} alt="edit" />
                </div>
    
   </div>
   {/* {isAccount && (
                <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 relative z-20">
                            <div className="text-right">
                                <button onClick={handleAccountClose} className="text-gray-500 hover:text-gray-700">
                                <i class="bi bi-x-lg"></i>
                                </button>
                            </div>
                            <div className='mx-8'>
                            <h1 className="font-cardo text-[21px] text-[#031136] font-normal text-left">Edit Account</h1>
                            <div className="flex flex-col items-center mt-4 mb-2">
                    <div className='flex gap-5 w-full'>
                    <div className='flex flex-col w-full'>
                    <span className='text-left'>First Name</span>
                    <input type="text" name='first_Name' defaultValue={hirerData.first_Name} onChange={e => {setfirst_Name(e.target.value)}} className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder=''/>
                    </div>
                    <div className='flex flex-col w-full'>
                    <span className='text-left'>Last Name</span>
                    <input type="text" name='last_Name' defaultValue={hirerData.last_Name} onChange={onChange} className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder=''/>
                    </div>
                    </div>
                    <div className='flex flex-col w-full'>
                    <span className='text-left'>Email</span>
                    <input type="text" name='email' defaultValue={hirerData.email} onChange={onChange} className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder=''/>
                    </div>
                    <div className="flex justify-start items-center space-x-4 gap-6 mt-3 mr-auto"> 
            <label className="flex items-center">
                <input type="radio" name="option" value="available" className="mr-2 cursor-pointer"/>
                Available Now
            </label>
            <label className="flex items-center">
                <input type="radio" name="option" value="off" className="mr-2 cursor-pointer"/>
                Off
            </label>
            </div>
                        </div>
                        
                            <div className="mt-8 flex justify-end" onClick={handleImageSave}>
                            <Link to='/hirer/profile-edit'><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold">Save</span></Link>
                            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
                                <Link to=''><button class="px-2 py-1 bg-white rounded-sm" onClick={handleAccountClose}><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
                            </div>     
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
            {isAccount && <HirerAccountPopup isAvailable={isAvailable} setIsAvailable={setIsAvailable} handleAccountClose={handleAccountClose}/>}
   <div className='border-b flex border-gray-200 border-opacity-30 text-left py-6 px-4 md:px-8' id='workHistory'>
    <div className='flex flex-col'>
    <span className='text-xl text-[#00BF58] font-bold'>Company Details</span>
    <div className='flex flex-col mt-5 ml-4'>
    <span className='text-lg font-semibold'>{hirerData.first_Name + ' ' + hirerData.last_Name}</span>
    <span className='text-md text-gray-500 mt-4'>Website</span>
    <span className='font-semibold'>{hirerData.social_media}</span>
    <span className='text-md text-gray-500 mt-4'>Establish</span>
    <span className='font-semibold'>{hirerData.Company_Establish}</span>
    </div>
    </div>
    <div class="p-1 w-10 h-10 flex justify-center items-center float-right ml-auto bg-white rounded-full border border-gray-200 mt-1 cursor-pointer" onClick={handleEditDetails}>
                    <img src={edit} alt="edit" />
                </div>
   <div className="flex items-center justify-between">
    
    </div>
    
   
   </div>
   {/* {isDetails && (
                <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 relative z-20">
                            <div className="text-right">
                                <button onClick={handleDetailsClose} className="text-gray-500 hover:text-gray-700">
                                <i class="bi bi-x-lg"></i>
                                </button>
                            </div>
                            <div className='mx-8'>
                            <h1 className="font-cardo text-[21px] text-[#031136] font-normal text-left">Edit Company Details</h1>
                            <div className="flex flex-col items-center mt-4 mb-2">
                    <div className='flex gap-5 w-full'>
                    <div className='flex flex-col w-full'>
                    <span className='text-left'>Company Name</span>
                    <input type="text" defaultValue={hirerData.Company_Name} className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder=''/>
                    </div>
                    <div className='flex flex-col w-full'>
                    <span className='text-left'>Establish</span>
                    <input type="date" defaultValue={hirerData.Company_Establish} className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder=''/>
                    </div>
                    </div>
                    <div className='flex flex-col w-full'>
                    <span className='text-left'>Website</span>
                    <input type="text" defaultValue={hirerData.social_media} className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder=''/>
                    </div>
                    
                        </div>
                        
                            <div className="mt-8 flex justify-end">
                            <Link to=''><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold">Save</span></Link>
                            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
                                <Link to=''><button class="px-2 py-1 bg-white rounded-sm" onClick={handleDetailsClose}><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
                            </div>     
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
            { isDetails && <HirerCompanyPopup handleDetailsClose={handleDetailsClose}/>}
   <div className='border-b flex border-gray-200 border-opacity-30 text-left py-6 px-4 md:px-8' id='workHistory'>
    <div className='flex flex-col'>
    <span className='text-xl text-[#00BF58] font-bold'>Company Contacts</span>
    <div className='flex flex-col mt-5 ml-4'>
    <span className='text-md text-gray-500'>Owner</span>
    <span className='text-lg font-semibold'>{hirerData.first_Name + ' ' + hirerData.last_Name}</span>
    <span className='text-md text-gray-500 mt-4'>phone</span>
    <span className='text-lg font-semibold'>{hirerData.contact}</span>
    <span className='text-md text-gray-500 mt-4'>Address</span>
    <span className='text-lg font-semibold'>{hirerData.Address}</span>
    </div>
    </div>
    <div class="p-1 w-10 h-10 flex justify-center items-center float-right ml-auto bg-white rounded-full border border-gray-200 mt-1 cursor-pointer" onClick={handleEditContacts}>
                    <img src={edit} alt="edit" />
                </div>
   </div>
   {/* {isContacts && (
                <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 relative z-20">
                            <div className="text-right">
                                <button onClick={handleContactsClose} className="text-gray-500 hover:text-gray-700">
                                <i class="bi bi-x-lg"></i>
                                </button>
                            </div>
                            <div className='mx-8'>
                            <h1 className="font-cardo text-[21px] text-[#031136] font-normal text-left">Edit Company Contacts</h1>
                            <div className="flex flex-col items-center mt-4 mb-2">
                    <div className='flex gap-5 w-full'>
                    <div className='flex flex-col w-full'>
                    <span className='text-left'>Owner</span>
                    <input type="text" defaultValue={'sachin'} disabled='true' className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder=''/>
                    </div>
                    <div className='flex flex-col w-full'>
                    <span className='text-left'>Phone</span>
                    <input type="tel" defaultValue={hirerData.contact} className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder=''/>
                    </div>
                    </div>
                    <div className='flex flex-col w-full'>
                    <span className='text-left'>Address</span>
                    <input type="text" defaultValue={hirerData.Address} className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder=''/>
                    </div>
            
                        </div>
                        
                            <div className="mt-8 flex justify-end">
                            <Link to=''><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold">Save</span></Link>
                            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
                                <Link to=''><button class="px-2 py-1 bg-white rounded-sm" onClick={handleContactsClose}><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
                            </div>     
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
            
            {isContacts && <HirerContactPopup handleContactsClose={handleContactsClose}/>}
   </div>
   </div>
    
    </div>
   <HomeSection4/>
   <Footer/>
   </>
  )
}

export default HirerSelfProfile