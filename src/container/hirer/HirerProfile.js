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
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from 'axios'

const HirerSelfProfile = () => {

  const accessToken = useSelector(state => state.login.accessToken);  
  const freelancerselfprofile = useSelector(state => state.freelancer.freelancerselfprofile)
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [freelancerproject, setfreelancerproject] = useState([]);
  const id = freelancerselfprofile && freelancerselfprofile[0].id ? freelancerselfprofile[0].id : '';


  const scrollToWorkHistory = () => {
    const element = document.getElementById('workHistory');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }


//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const targetElement = document.querySelector(hash);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, []);

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

useEffect(() => {
    if(id) { 
        axios.get(`https://aparnawiz91.pythonanywhere.com/freelance/View-all/Review/${id}`)
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
    }
}, [id]); 


useEffect(() => {
    if(id) { 
        axios.get(`https://aparnawiz91.pythonanywhere.com/freelance/View-all/Freelancer/Self-Project/${id}`)
            .then(response => {
                if (response.data.status === 200) {
                    setfreelancerproject(response.data.data);
                } else {
                    console.log(response.data.message || 'Error fetching project');
                }
            })
            .catch(err => {
                console.log(err.message);
            });
    }
}, [id]); 
  
  const [isAvailable, setIsAvailable] = useState(localStorage.getItem('userAvailability') || 'available');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('userAvailability', isAvailable);
  }, [isAvailable]);


  const [active, setActive] = React.useState(1);
 
  const next = () => {
      if (active === Math.ceil(freelancerproject.length / 6)) return;
      setActive(active + 1);
  };

  const prev = () => {
      if (active === 1) return;
      setActive(active - 1);
  };

  const chunkArray = (array, size) => {
      let chunked = [];
      for (let i = 0; i < array.length; i += size) {
          chunked.push(array.slice(i, i + size));
      }
      return chunked;
  }

  const chunkedProjects = chunkArray(freelancerproject, 6);

const [startIdx, setStartIdx] = useState(0);  

const showMoreHandler = () => {
    setStartIdx(prevIdx => prevIdx + 4);
}

const showLessHandler = () => {
    setStartIdx(0);
}

const visibleReviews = reviews.slice(startIdx, startIdx + 4);

  
  const [selectedButton, setSelectedButton] = useState('All Work');
  const [selectedButtons, setSelectedButtons] = useState('Github');
  const commonStyle = "inline-block text-sm py-[10px] mt-4 lg:mt-0 border rounded font-semibold";

  const [selected, setSelected] = useState('completed');
  const [selectedProject, setSelectedProject] = useState(null);

  function calculateJobSuccess(reviews) {
   
    if (!reviews || reviews.length === 0) {
        return 0;
    }

    const totalReviews = reviews.length;
    const positiveReviews = reviews.filter(review => review.rating >= 4).length;
    const neutralReviews = reviews.filter(review => review.rating === 3).length;

    const successPercentage = ((positiveReviews + 0.5 * neutralReviews) / totalReviews) * 100;

    return Math.round(successPercentage);
}


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditTitleOpen, setIsEditTitleOpen] = useState(false);
  
  const [isAvailableOffOpen, setIsAvailableOffOpen] = useState(false);
  const [isHrRateOpen, setIsHrRateOpen] = useState(false);
  const [isFreeProjectOpen, setIsFreeProjectOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null)

  const openFreeProject = (project) => {
    setSelectedProject(project);
    setIsFreeProjectOpen(true);
};


  const openAvailableOff = () => {
    setIsAvailableOffOpen(true);
  };

  const closeAvailableOff = () => {
    setIsAvailableOffOpen(false);
  };

  

  const openEditTitle = () => {
    setIsEditTitleOpen(true);
  };

  const closeEditTitle = () => {
    setIsEditTitleOpen(false);
  };

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
  
      const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };

      const handleImageClick =()=>{
        inputRef.current.click();
      }

      const handleImageSave = async () => {
    const formData = new FormData();
    formData.append("images_logo", selectedFile);

    if(freelancerselfprofile && freelancerselfprofile[0]){
        freelancerselfprofile[0].images_logo = URL.createObjectURL(selectedFile);
    }

    // dispatch(UpdateFreelancerProfileAction(formData, accessToken));
    setIsModalOpen(false);
    navigate('/freelancer/edit-profile');
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
                    <img  alt="Profile" className="rounded-full w-full h-full border border-gray-200" />
                    <div className="absolute top-1 left-2 p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer" onClick={handleEditClick}>
                        <img src={edit} alt="edit" />
                    </div>
                    <div class="absolute bottom-3 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
   </div>
   <div className='border-b border-gray-200 border-opacity-30 text-left flex flex-col py-4 px-4 md:px-8'>
        <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Verifications</h1>
    <p className='font-inter text-[#0A142F] text-[14px] py-1 inline-block mr-1'>ID : <span className='opacity-50 mr-1'>Verified</span><img src={verify} alt="" className='inline-block h-3 w-3 mb-0.5'/></p>
    <p className='font-inter text-[#0A142F] text-[14px] py-1 opacity-50'>{freelancerselfprofile && freelancerselfprofile[0] ? `${freelancerselfprofile[0].first_Name} ${freelancerselfprofile[0].last_Name}` : ''}</p>
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
                            <img className="absolute inset-0 w-full h-full object-cover"  alt="Profile" />
                            }
                            </div>
                            <div className="relative w-28 h-28 overflow-hidden">
                            {selectedFile ? 
                            <img className="absolute inset-0 w-full h-full object-cover" src={URL.createObjectURL(selectedFile)} alt="Profile" /> 
                            : 
                            <img className="absolute inset-0 w-full h-full object-cover"  alt="Profile" />
                            }
                            </div>
                            <div className="relative w-20 h-20 overflow-hidden">
                            {selectedFile ? 
                            <img className="absolute inset-0 w-full h-full object-cover" src={URL.createObjectURL(selectedFile)} alt="Profile" /> 
                            : 
                            <img className="absolute inset-0 w-full h-full object-cover"  alt="Profile" />
                            }
                            </div>
                            <div className="relative w-16 h-16 overflow-hidden">
                            {selectedFile ? 
                            <img className="absolute inset-0 w-full h-full object-cover" src={URL.createObjectURL(selectedFile)} alt="Profile" /> 
                            : 
                            <img className="absolute inset-0 w-full h-full object-cover"  alt="Profile" />
                            }
                            </div>
                    <input 
                    type='file' 
                    ref={inputRef} 
                    style={{display:"none"}}
                    onChange={handleFileChange}
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
                {/* <h1 className="font-cardo text-[24px] text-[#031136] font-normal mr-1">{freelancerselfprofile && freelancerselfprofile[0] ? `${freelancerselfprofile[0].first_Name} ${freelancerselfprofile[0].last_Name}` : ''}
            </h1> */}
                {/* <img className="h-4 w-4" src={verify} alt="Verification" /> */}
            </div>
            <div className="flex items-center my-1">
                {/* <img src={location} alt="Location" className="h-[13px] mr-1" /> */}
                {/* <p className="text-[#797979] text-[14px] font-inter">{freelancerselfprofile && freelancerselfprofile[0].Address ? freelancerselfprofile[0].Address : 'Your Location here'}</p> */}
            </div>

            <div className="flex space-x-1 mt-2">
            <button className={`flex items-center justify-center text-[#0A142F] font-inter opacity-50 text-[13px] py-2 px-4 focus:outline-none rounded-full ${isAvailable === 'available' ? 'ring-1 ring-gray-400' : ''}`}>
            <img src={availablenow} alt="" className='h-[16px] mr-2' />
                Available Now
            </button>

            <button className={`text-center text-[#0A142F] font-inter opacity-50 text-[13px] py-2 px-4 focus:outline-none rounded-full ${isAvailable === 'off' ? 'ring-1 ring-gray-400' : ''}`}>
                Off
            </button>

                <div class="p-1 w-6 h-6 bg-white rounded-full border border-gray-200 mt-1 cursor-pointer" onClick={openAvailableOff}>
                    <img src={edit} alt="edit" />
                </div>
                {/* {isAvailableOffOpen && <AvailableOffPopup isAvailable={isAvailable} setIsAvailable={setIsAvailable} closeAvailableOff={closeAvailableOff} />} */}
            </div>
            <div className="flex items-center mt-3">
                {/* <img src={jobsuccess} alt="" className="h-[22px] mr-2" /> */}
                {/* <i class="bi bi-patch-check text-green-600 mr-2"></i> */}
                {/* <p className="font-inter text-[#797979] text-[13px]">{calculateJobSuccess(reviews)}% Job Success</p> */}
            </div>
        </div>
        <div class="w-full md:w-1/4 px-auto pt-8">
            
        </div>
   </div>
   {/* <div className='border-b border-gray-200 border-opacity-30 py-4 px-8 text-left'>
   <h1 className="font-cardo text-[21px] text-[#031136] font-normal">View Profile</h1>
        <div className='my-3 flex flex-wrap'>
        {freelancerselfprofile && freelancerselfprofile[0] && freelancerselfprofile[0].skills ? 
    JSON.parse(freelancerselfprofile[0].skills.replace(/'/g, '"')).map((skill, index) => (
        <Link key={index} to='' className="flex-grow md:flex-none p-1">
                <span 
                    className={`${commonStyle} px-3 my-3 md:px-8 ${selectedButton === skill ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton(skill)}>
                    {skill}
                </span>
            </Link>
    )) 
: null}
            <Link to=''className="flex-grow md:flex-none p-1">
                <span className={`${commonStyle} px-3 md:px-8 ${selectedButton === 'All Work' ? "bg-gradient-to-r from-[#00BF58] to-[#E3FF75] text-white border-none" : "border border-gray-300 text-[#0A142F] opacity-50"} mr-3`}
                    onClick={() => setSelectedButton('All Work')}>
                    All Work
                </span>
            </Link>
        </div>
   </div> */}
   {/* <div className='border-b border-gray-200 border-opacity-30 py-4 px-4 md:px-8 text-left'> */}
   <div className="flex justify-between items-center">
    <div className="flex items-center">
        
    </div>
    
</div>
   
   <div className='border-b border-gray-200 border-opacity-30 text-left py-6 px-4 md:px-8' id='workHistory'>
   <div className="flex items-center justify-between">
    {/* <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1 pb-3">Work History ({reviews && reviews ? reviews.length : 0})</h1> */}
    </div>
    
   </div>
   <div className='border-b border-gray-200 border-opacity-30 text-left pt-3 px-4 md:px-8 py-8' id='freeselfpro'>
   <div className="flex items-center justify-between">
    {/* <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Portfolio ({freelancerproject && freelancerproject ? freelancerproject.length : 0})</h1> */}
    <div className="flex items-center space-x-2">
        <Link to='/freelancer/add/portfolio'><div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={plus} alt="More" />
        </div></Link>
    </div>
    </div>
    <div className="flex flex-wrap -mx-2">  
    {chunkedProjects[active - 1] && chunkedProjects[active - 1].map((pro, index) => (
        <div className='w-1/3 px-2 cursor-pointer' key={index} onClick={() => openFreeProject(pro)}>  
            <div className='w-full h-[165px] mt-4 border border-gray-100 overflow-hidden'>
                <img 
                    // src={"https://aparnawiz91.pythonanywhere.com/"+pro.images_logo} 
                    alt="" 
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',  
                        width: '100%', 
                        height: '100%' 
                    }}
                />
            </div>
            {/* <p className='font-inter text-green-600 text-[13px] pt-2 overflow-hidden whitespace-nowrap overflow-ellipsis hover:text-green-700 underline font-semibold'>{pro.project_title}</p> */}
        </div>
    ))}
    {/* {isFreeProjectOpen && <FreelancerProjectsPopup project={selectedProject} closeFreeProject={closeFreeProject} />} */}
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

export default HirerSelfProfile