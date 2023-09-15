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
import ViewProjectPopup from './AllPopup/ViewProjectPopup'
import { GetViewAllProjectsListAction } from '../../redux/Freelancer/FreelancerAction'


const FreelancerAfterLogin = () => {

  const logindata = useSelector(state => state.login.login_data);  
  const googleUserName = localStorage.getItem('googleUserName')
  const loginMethod = localStorage.getItem('loginMethod')
  const viewallprojects = useSelector(state => state.freelancer.viewallprojects)
  const dispatch = useDispatch();
 

  React.useEffect(() => {
    dispatch(GetViewAllProjectsListAction())
  }, [])

  let displayName;

  if (loginMethod === 'google') {
      displayName = googleUserName;
  } else if (loginMethod === 'traditional') {
      displayName = logindata?.first_Name +" " +logindata?.last_Name;
  }

  const filteredProjects = viewallprojects ? viewallprojects.filter(project => project.category === logindata?.category) : [];

  const projectsToDisplay = filteredProjects.length > 0 ? filteredProjects : viewallprojects;

//   const filteredProjects = viewallprojects ? viewallprojects.filter(project => project.category === logindata.category) : [];

  const [expandedProjects, setExpandedProjects] = useState([]);

const handleToggleDescription = (index) => {
    const updatedState = [...expandedProjects];
    updatedState[index] = !updatedState[index];
    setExpandedProjects(updatedState);
};

//   const handleClick = (event) => {
//     event.stopPropagation();
// };
const handleClick = (event, index) => {
    event.stopPropagation();

    handleToggleDescription(index);

    // Rest of your handleClick code, if any...
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

const [isDialogOpen, setIsDialogOpen] = useState(false);
const [selectedProject, setSelectedProject] = useState(null);

  const openDialog = (projectData) => {
    const { id, title, category, description, budget, skills_required } = projectData;
    setSelectedProject(projectData);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

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
{/* <section className='flex justify-center my-2'>
    <div className='sm:w-[78vw] w-[95vw] bg-white p-1 sm:h-16 rounded-md flex justify-between items-center shadow-md relative z-10'>
        <div className='flex flex-row items-center p-4'>
            <img src={search} className="h-4 w-4" alt=""/>
            <input className='w-52 sm:w-[800px] ml-2 h-8 text-sm outline-none' placeholder='What are you looking for?' />
        </div>
        <button className='rounded h-8 w-20 sm:w-24 mr-3 font-semibold text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>Search</button>
    </div>
</section> */}

{/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 mt-5">
    <div className="grid grid-cols-2 gap-2 bg-[#E2F9EE] rounded-lg p-4 shadow-sm">
        <div>
           <h1 className='font-cardo text-[16px] text-[#031136] text-left'>Import A Certification</h1>
           <p className='font-inter text-[12px] text-[#0A142F] opacity-50 py-2 text-left'>Showing a credential may increase your chances of earning by 4 times.</p>
        </div>
        <div className="text-center">
            <i class="bi bi-arrow-right"></i>
            <img src={certifybadge} alt="" className='mx-auto h-14 w-14 mt-2'/>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-2 bg-[#E2F9EE] rounded-lg p-4 shadow-sm">
        <div>
        <h1 className='font-cardo text-[16px] text-[#031136] text-left'>Get Tips To Find Work</h1>
           <p className='font-inter text-[12px] text-[#0A142F] opacity-50 py-2 text-left'>Learn how to optimize search, use Connects, and more to land your first job.</p>
        </div>
        <div className="text-center">
            <i class="bi bi-arrow-right"></i>
            <img src={ladder} alt="" className='mx-auto h-14 w-14 mt-2'/>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-2 rounded-lg p-4 relative z-10 shadow-sm">
        <div>
        <h1 className='font-cardo text-[16px] text-[#031136] text-left'>My Jobs</h1>
           <p className='font-inter text-[12px] text-[#0A142F] opacity-50 py-2 text-left'>View your active contracts, timesheets, and available earnings.</p>
        </div>
        <div className="text-center">
            <i class="bi bi-arrow-right"></i>
            <img src={bag} alt="" className='mx-auto h-14 w-14 mt-2'/>
        </div>
    </div>
</div> */}
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
        <h1 className='font-cardo text-lg text-[#031136] text-left'>Import A Certification</h1>
        <p className='font-inter text-sm text-[#0A142F] opacity-50 py-2 text-left'>Showing a credential may increase your chances of earning by 4 times.</p>
    </div>
    <div className="text-center">
       <i class="bi bi-arrow-right"></i>
        <img src={certifybadge} alt="" className='mx-auto h-16 w-16 mt-2'/>
    </div>
</div></Link>
    <div className="grid grid-cols-[2fr,1fr] gap-2 bg-[#E2F9EE] rounded-lg p-4 mx-4 my-3 shadow-sm">
        <div>
        <h1 className='font-cardo text-lg text-[#031136] text-left'>Get Tips To Find Work</h1>
           <p className='font-inter text-sm text-[#0A142F] opacity-50 py-2 text-left'>Learn to optimize search, use Connects, and land your first job.</p>
        </div>
        <div className="text-center">
            <i class="bi bi-arrow-right"></i>
            <img src={ladder} alt="" className='mx-auto h-16 w-16 mt-2'/>
        </div>
    </div>
    <Link to='/my-jobs'>
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
    </Link>
</div>

<div class="w-full md:w-[70%] pt-3 bg-[#FFFFFF] py-8 border border-gray-200 border-opacity-30 text-left">
    <div className='px-4 md:px-8 pt-4 border-b border-gray-200 border-opacity-30'>
    {/* <h1 className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Jobs You Might Like</h1> */}
    <div className="flex justify-between items-center">
    <div className="flex items-center">
    <h1  className="font-cardo text-[21px] text-[#031136] font-normal mr-1">Jobs You Might Like</h1>
    </div>
    <div className="flex items-center">
    <div className='flex items-center mr-1 space-x-1 border p-1 w-[200px] rounded-md'>
        <img src={search} alt="Search Icon" className="h-4 w-4 mr-1 ml-1" />
        <input className='w-28 lg:w-40 xl:w-[160px] h-7 text-sm lg:text-sm outline-none' placeholder='Search Jobs' />
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
        onClick={() => setSelected('Saved Jobs')}
    >
        Saved Jobs
        {selected === 'Saved Jobs' && <span style={underlineStyle}></span>}
    </p>
    </div>
    <div className='px-4 md:px-8 py-4'>
      <p className='font-inter opacity-50 text-[#0A142F] text-[13px]'>Browse jobs that match your experience to a client's hiring preferences. Ordered by most relevant.</p>
    </div>
    {projectsToDisplay && projectsToDisplay.map((project, index) => {
    {/* {filteredProjects && filteredProjects.map((project, index) => { */}
    {/* {viewallprojects && <>{viewallprojects.map((project,index)=> { */}
        const words = project.description.split(' ');
        const displayWords = expandedProjects[index] || words.length <= 50 ? words : words.slice(0, 50);
              return(<>
    <div className='px-4 md:px-8 py-5 hover:bg-[#F6FAFD] border-t border-b border-gray-200 border-opacity-30 cursor-pointer' onClick={() => openDialog({id: project.id,title: project.title,category: project.category,description: project.description,budget: project.budget,skills_required: project.skills_required,})}>
    <div className="flex items-center justify-between">
    <p className="font-inter text-[#0A142F] text-[18px] font-semibold">{project.title}</p>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200" onClick={handleClick}>
            <img src={thumbdown} alt="" />
        </div>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200" onClick={handleClick}>
            <img src={heart} alt="" />
        </div>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[13px] py-3'>Fixed-price - Expert - Est. Budget: ${project.budget} - Posted 12 hrs ago</p>
    <p className='font-inter text-opacity-50 text-[#0A142F] text-[14px] py-3'>
                Job Description: {displayWords.join(' ')} 
                {words.length > 50 && (
                    <span 
                        className="font-cardo text-[#031136] text-[18px] font-semibold cursor-pointer pl-2" 
                        onClick={(event) => handleClick(event, index)}
                    >
                        {expandedProjects[index] ? 'Less' : 'More'}
                    </span>
                )}
            </p>
    {/* <p className='font-inter text-opacity-50 text-[#0A142F] text-[14px] py-3'>Job Description: {project.description} <span className="font-cardo text-[#031136] text-[18px] font-semibold cursor-pointer" onClick={handleClick}>More</span></p> */}
    {JSON.parse(project.skills_required.replace(/'/g,'"')).map((skill,index)=>(
    <Link to=''>
            <span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2'>
           {skill}
            </span>
        </Link>
         ))}
        <p className='font-inter text-[#0A142F] text-[14px] py-1 mr-1'>Proposals : <span className='opacity-50'>Less than 5</span></p>
        <img src={verify} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>Payment verified</p>
        <div className="text-[16px] text-[#FFC107] inline-block mx-3">★★★★★</div>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-80 inline-block mr-1'>$0</p>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block mr-3'>Spent</p>
        <img src={location} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>India</p>
    </div>
    {/* <ViewProjectPopup isOpen={isDialogOpen} onClose={closeDialog} projectData={{pro_id:project.id, pro_tit:project.title, pro_cat:project.category, pro_desc:project.description, pro_budget:project.budget ,pro_skills:project.skills_required}}/> */}
    <ViewProjectPopup isOpen={isDialogOpen} onClose={closeDialog} projectData={selectedProject}/>
    </>
    )
})}
    {/* <div className='px-4 md:px-8 py-5 border-t border-b border-gray-200 border-opacity-30'>
    <div className="flex items-center justify-between">
    <p className="font-inter text-[#0A142F] text-[18px] font-semibold">UI Designer - Landing Page</p>
    <div className="flex items-center space-x-2">
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={thumbdown} alt="" />
        </div>
        <div className="p-1 w-6 h-6 bg-white rounded-full border border-gray-200">
            <img src={heart} alt="" />
        </div>
    </div>
    </div>
    <p className='font-inter opacity-50 text-[#0A142F] text-[13px] py-3'>Fixed-price - Expert - Est. Budget: $10 - Posted in 12 hours</p>
    <p className='font-inter text-opacity-50 text-[#0A142F] text-[14px] py-3'>Job Description: Graphic Designer for Vogue Tourism in Ajmer Only for Ajmer ( Rajasthan ) OFFLINE Please Share Your Details On this Whatsapp No.+91 95094 98242  Are you a talented and imaginative Graphic Designer with a flair for creating visually stunning and engaging designs? Vogue Tourism, a premier name in the travel and hospitality sector, is <span className="font-cardo text-[#031136] text-[18px] font-semibold cursor-pointer">More</span></p>
    <Link to=''>
            <span className='border px-4 py-1 border-gray-300 opacity-50 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2'>
            Social Media Imagery
            </span>
        </Link>
        <p className='font-inter text-[#0A142F] text-[14px] py-1 mr-1'>Proposals : <span className='opacity-50'>Less than 5</span></p>
        <img src={verify} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>Payment verified</p>
        <div className="text-[16px] text-[#FFC107] inline-block mx-3">★★★★★</div>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-80 inline-block mr-1'>$0</p>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block mr-3'>Spent</p>
        <img src={location} alt="" className='inline-block h-3 w-3 mr-1'/>
        <p className='font-inter text-[#0A142F] text-[14px] opacity-50 inline-block'>India</p>
    </div> */}
</div>
</div>
</div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default FreelancerAfterLogin