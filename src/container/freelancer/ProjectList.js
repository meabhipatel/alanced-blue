import React,{useState, useEffect} from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import profile_list from '../../components/images/profile_list.png'
import search from '../../components/images/SearchOutlined.png'
import { Avatar } from '@material-tailwind/react'
import profilepic from '../../components/images/profilepic.png'
import clint1 from '../../components/images/client2.png'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetViewAllProjectsListAction } from '../../redux/Freelancer/FreelancerAction'
import ViewProjectPopup from './AllPopup/ViewProjectPopup'
import AddBidPopup from './AllPopup/AddBidPopup'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from 'axios'
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


function ProjectList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  console.log(category,"category")
  const viewallprojects = useSelector(state => state.freelancer.viewallprojects)
  const accessToken = useSelector(state => state.login.accessToken);
  // const [categoryFilter, setCategoryFilter] = useState([]);
  // const [locationFilter, setLocationFilter] = useState([]);
  // const [skillFilter, setSkillFilter] = useState('');
  // const [rateFilter, setRateFilter] = useState([]);
  // const [expFilter, setExpFilter] = useState([]);

  const [categoryFilter, setCategoryFilter] = useState([]);
  const [skillFilter, setSkillFilter] = useState([]);
  const [expFilter, setExpFilter] = useState([]);
  const [rateFilter, setRateFilter] = useState([]);
  // const projectData = { viewallprojects }
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetViewAllProjectsListAction())
  }, [])

  React.useEffect(() => {
    if (category) {
      const filteredData = viewallprojects.filter(project => {
          return project.category.toLowerCase() === category.toLowerCase();
        });
      setFilteredProjects(filteredData);
    } else {
      setFilteredProjects(viewallprojects);
    }
  }, [category, viewallprojects]);


  const [filteredProjects, setFilteredProjects] = useState([]);
  console.log(filteredProjects, "filter freelancer");

  const [range, setRange] = useState([1, 10000]);

    const handleSliderChange = (newRange) => {
        setRange(newRange);
    };
    
    const handleInputChange = (index, newValue) => {
        const updatedRange = [...range];
        updatedRange[index] = Number(newValue);  
        setRange(updatedRange);
    };

  // const [range, setRange] = useState([1, 1000]);

  // const handleSliderChange = (newRange) => {
  //   setRange(newRange);
  // };

  // const handleInputChange = (index, newValue) => {
  //   const newRange = [...range];
  //   newRange[index] = newValue;
  //   setRange(newRange);
  // };

  function timeAgo(postedTimeStr) {
    const postedTime = new Date(postedTimeStr);
    const currentTime = new Date();
  
    const deltaInMilliseconds = currentTime - postedTime;
    const deltaInSeconds = Math.floor(deltaInMilliseconds / 1000);
    const deltaInMinutes = Math.floor(deltaInSeconds / 60);
    const deltaInHours = Math.floor(deltaInMinutes / 60);
    const deltaInDays = Math.floor(deltaInHours / 24);
  
    if (deltaInMinutes < 1) {
        return "just now";
    } else if (deltaInMinutes < 60) {
        return `${deltaInMinutes} minute ago`;
    } else if (deltaInHours < 24) {
        return `${deltaInHours} hour ago`;
    } else if (deltaInDays < 30) {
        return `${deltaInDays} day ago`;
    } else if (deltaInDays < 365) {
        const months = Math.floor(deltaInDays / 30);
        return `${months} month ago`;
    } else {
        const years = Math.floor(deltaInDays / 365);
        return `${years} year ago`;
    }
  }

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const [expandedProjects, setExpandedProjects] = useState([]);

  const handleToggleDescription = (index) => {
      const updatedState = [...expandedProjects];
      updatedState[index] = !updatedState[index];
      setExpandedProjects(updatedState);
  };
  const handleClick = (event, index) => {
    event.stopPropagation();

    handleToggleDescription(index);

    // Rest of your handleClick code, if any...
};

  const [AllProposals, setAllProposals] = useState('')

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch doc API
        const response1 = await axios.get('https://aparnawiz91.pythonanywhere.com/freelance/view/freelancer-self/bid',{
          headers: {
            "Authorization":`Bearer ${accessToken}`
          }
        });
        setAllProposals(response1.data.data);
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); 
  }, []);
  console.log("/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/",AllProposals)

  const handleCategoryFilterChange = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      setCategoryFilter((prevFilters) => [...prevFilters, category]);
    } else {
      setCategoryFilter((prevFilters) => prevFilters.filter((filter) => filter !== category));
    }
  };

  useEffect(() => {
    // Construct the query string
    const queryParameters = [];

    if (categoryFilter.length > 0) {
      queryParameters.push(`category=${categoryFilter.join('&category=')}`);
    }

    if (skillFilter.length > 0) {
      queryParameters.push(`skills=${skillFilter.join('&skills=')}`);
    }

    if (expFilter.length > 0) {
      queryParameters.push(`experience_level=${expFilter.join('&experience_level=')}`);
    }

    if (rateFilter.length > 0) {
      queryParameters.push(`rate=${rateFilter.join('&rate=')}`);
    }

    // Combine the query parameters
    const queryString = queryParameters.join('&');

    // Make the API request with the query string
    axios
      .get(`http://127.0.0.1:8000/freelance/filter/?${queryString}`)
      .then((response) => {
        // Handle the response and update the filtered data
        setFilteredProjects(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error fetching filtered data:', error);
      });
  }, [categoryFilter, skillFilter, expFilter, rateFilter]);

  // const [FilterData, setFilterData] = useState('')

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch doc API
  //       const response1 = await axios.get('http://127.0.0.1:8000//freelance/filter/');
  //       setFilterData(response1.data.data);
  
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchData(); 
  // }, []);
  // console.log("/=/=/=/=/Filter API",FilterData)

 


  const [currentPage, setCurrentPage] = useState(1);
    const [categorySearch, setCategorySearch] = useState('');

    useEffect(() => {
        setCurrentPage(1);
    }, [categorySearch]);

    const jobsPerPage = 7;
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    
    const isDefaultRange = range[0] === 1 && range[1] === 10000;
   
    const filteredJobs = viewallprojects?.filter(project => {
    
      const withinPriceRange = isDefaultRange || (project.fixed_budget >= range[0] && project.fixed_budget <= range[1]);

      return (
        project.category.toLowerCase().includes(categorySearch.toLowerCase()) &&
    
        (categoryFilter.length === 0 || categoryFilter.includes(project.category)) &&
        
        (expFilter.length === 0 || expFilter.includes(project.experience_level)) &&
        
        // (locationFilter.length === 0 || locationFilter.includes(project.project_owner_location)) &&
        
        (skillFilter.length === 0 || 
          JSON.parse(project.skills_required.replace(/'/g,'"')).some(skill => skillFilter.includes(skill))) &&
        
        (rateFilter.length === 0 || rateFilter.includes(project.rate)) &&
        withinPriceRange
      );
    }) || [];
    

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


    const categoryCounts = {};

    viewallprojects?.forEach(project => {
        if (categoryCounts[project.category]) {
            categoryCounts[project.category]++;
        } else {
            categoryCounts[project.category] = 1;
        }
    });
    
    const expCounts = {};
    
    viewallprojects?.forEach(project => {
        if (expCounts[project.experience_level]) {
            expCounts[project.experience_level]++;
        } else {
            expCounts[project.experience_level] = 1;
        }
    });
    
    const skillCounts = {};
    
    viewallprojects?.forEach(project => {
        const skills = JSON.parse(project.skills_required.replace(/'/g, '"'));
        skills.forEach(skill => {
            if (skillCounts[skill]) {
                skillCounts[skill]++;
            } else {
                skillCounts[skill] = 1;
            }
        });
    });
    
    
    const ProjecttypeCounts = {};
    
    viewallprojects?.forEach(project => {
        if (ProjecttypeCounts[project.rate]) {
          ProjecttypeCounts[project.rate]++;
        } else {
          ProjecttypeCounts[project.rate] = 1;
        }
    });
    
    const locationCounts = {};
    
    viewallprojects?.forEach(project => {
        if (locationCounts[project.project_owner_location]) {
          locationCounts[project.project_owner_location]++;
        } else {
          locationCounts[project.project_owner_location] = 1;
        }
    });

    const [showAllCategory, setShowAllCategory] = useState(false);

const displayedCategories = showAllCategory ? Object.entries(categoryCounts) : Object.entries(categoryCounts).slice(0, 5);

const [showAllSkill, setShowAllSkill] = useState(false);

const displayedSkills = showAllSkill ? Object.entries(skillCounts) : Object.entries(skillCounts).slice(0, 5);

const [showAllLocation, setShowAllLocation] = useState(false);

const displayedLocation = showAllLocation ? Object.entries(locationCounts) : Object.entries(locationCounts).slice(0, 5);


  return (
    <>
      <Navbar />
      <div className="h-[43vh] bg-no-repeat -mt-[1.3rem] bg-contain" style={{ backgroundImage: `url(${profile_list})` }}>
        <div className='text-left pt-[3rem] ml-[13.5vw] text-2xl font-cardo'>
          <h1>Projects List</h1>
          <p className='font-inter text-sm text-[#797979] font-normal mt-2'>All the Lorem Ipsum generators on the Internet tend to repeat.</p>
          <div className='lg:w-[44vw] bg-white p-3 lg:h-14 rounded-2xl lg:flex items-center mt-4 shadow-md'>
            <div className='flex flex-row'>
              <img className='w-5 h-5' src={search}></img>
              <input className='w-96 font-inter text-base ml-3 outline-none' placeholder='Search Job by Category' value={categorySearch} onChange={(e) => setCategorySearch(e.target.value)}></input>
            </div>
            <div className=''>
              <button className='rounded h-8 w-24 lg:ml-6 font-semibold text-base text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className=' container-sm px-36'>
        {/* <div className='flex flex-row'>
          <div className=' basis-6/12 text-left'>5,512 services available</div>
          <div className=' basis-6/12'>
            <div className=' flex flex-row justify-end'>
              <div className='mr-5 font-normal font-inter'>Sort by:</div>
              <div className='font-normal font-inter'>Best selling</div>
            </div>
          </div>
        </div> */}
        <div className='flex flex-row'>
          <div className=' basis-3/12 mt-6'>
            <div><h1 className='font-cardo text-xl text-left font-normal'>Category</h1></div>
            {displayedCategories.map(([category, count]) => (
            <div key={category} className='flex flex-row mt-4'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input 
          className="hidden" 
          type="checkbox"
          value={category}
          onChange={handleCategoryFilterChange}
        />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">{category}</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>({count})</div>
    </div>
    ))}
    {Object.entries(categoryCounts).length > 5 && (
      <div>
        <h1 
          className='font-cardo text-xl text-left mt-5 font-normal cursor-pointer'
          onClick={() => setShowAllCategory(!showAllCategory)}
        >
          {showAllCategory ? "Show Less" : "Show More"}
        </h1>
      </div>
    )}
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Experience Level</h1></div>
            {Object.entries(expCounts).map(([exp, count]) => (
            <div className='flex flex-row mt-4'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input 
          className="hidden" 
          type="checkbox"
          value={exp}
        />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">{exp.replace(/_/g, ' ')}</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>({count})</div>
    </div>
    ))}
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Project Type</h1></div>
            {Object.entries(ProjecttypeCounts).map(([protype, count]) => (
            <div className='flex flex-row mt-4'>
              <div className=' basis-8/12 text-left'>
                <label class="relative inline-flex items-center mr-5 cursor-pointer">
              <input 
          class="sr-only peer" 
          type="checkbox"
          value={protype}
        />
              <div class="w-11 h-6 bg-white border-2  border-green-300 rounded-full peer dark:bg-white-700 peer-focus:ring-0 peer-focus:ring-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gradient-to-r  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-[#00BF58] to-[#E3FF75]"></div>
              <span class="ml-3 text-base font-normal font-inter text-[#797979]">{protype}</span>
            </label>
              </div>
              <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>({count})</div>
            </div>))}
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Project Rate</h1></div>
            <div className="pt-4 w-[85%]">
              <Slider
                min={1}
                max={10000}
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
              <div className='basis-2/12 m-auto mt-4'><i class="bi bi-dash-lg text-[#475569]"></i></div>
                <div className='basis-5/12'><input
                type="text"
                value={range[1]}
                onChange={(e) => handleInputChange(1, e.target.value)}
                className='mt-3 bg-white text-center border rounded-md p-1 basis-6/12 font-inter text-base font-normal text-[#797979] w-24 focus:border-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-60
                focus:outline-none'
              /></div>
              </div>
            </div>
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Skills</h1></div>
            {displayedSkills.map(([skill, count]) => (
        <div key={skill} className='flex flex-row mt-4'>
            <div className='basis-8/12'>
                <label className="flex items-center font-inter relative cursor-pointer">
                    <input 
          className="hidden" 
          type="checkbox"
          value={skill}
        />
                    <div className="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                        <span className="checkmark hidden"><i className="bi bi-check-lg pr-2 pt-2"></i></span>
                    </div>
                    <span className="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                    <span className="font-normal text-[#797979]">{skill}</span>
                </label>
            </div>
            <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>
                ({count})
            </div>
        </div>
    ))}
    {Object.entries(skillCounts).length > 5 && (
      <div>
        <h1 
          className='font-cardo text-xl text-left mt-5 font-normal cursor-pointer'
          onClick={() => setShowAllSkill(!showAllSkill)}
        >
          {showAllSkill ? "Show Less" : "Show More"}
        </h1>
      </div>
    )}
           
              <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Citys</h1></div>
              {displayedLocation.map(([location, count]) => (
             <div className='flex flex-row mt-4'>
        <div className='basis-8/12'>
            <label class="flex items-center font-inter relative cursor-pointer">
                <input 
          className="hidden" 
          type="checkbox"
          value={location}
        />
                <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                  
                    <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                </div>
                     <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                <span class="font-normal text-[#797979]">{location? location:'NA'}</span>
            </label>
        </div>
        <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>({count})</div>
    </div>
    ))}
             {Object.entries(locationCounts).length > 5 && (
      <div>
        <h1 
          className='font-cardo text-xl text-left mt-5 font-normal cursor-pointer'
          onClick={() => setShowAllLocation(!showAllLocation)}
        >
          {showAllLocation ? "Show Less" : "Show More"}
        </h1>
      </div>
    )}
          </div>
          { viewallprojects != null ? 
          <div className=' basis-9/12 mt-10'>
            {currentJobs && <>{currentJobs.map((project,index)=> {
              const words = project.description.split(' ');
              const displayWords = expandedProjects[index] || words.length <= 30 ? words : words.slice(0, 30);
              // const isAlreadyApplied = Array.isArray(AllProposals) && AllProposals.some(all => project.id === all.project_id);
              return(
                <div className='flex flex-row'>
              <div className='basis-1/12 mr-3'>
                {/* <Avatar src={profilepic} alt="avatar" variant="rounded" /> */}
              </div>
              <div className=' basis-9/12 text-left mb-7'>
                <h1 className='font-cardo text-lg'>{project.title}</h1>
                {AllProposals && AllProposals.map((all, proposal) => {
                    return(
                        <>
                        {project.id == all.project_id ? <span className='text-green-600 flex justify-center items-center w-fit'><TaskOutlinedIcon className='mr-1 text-green-600'/>Already Applied</span> : ''}
                        </>
                    )
                })}
                <div className='flex flex-row mt-3'>
                  <div className=' basis-4/12 border-2 border-r-[#797979] mr-2 border-t-0 border-b-0 border-l-0'>
                    <div className='flex flex-row'>
                      <div className=' basis-2/12'><i class="bi bi-geo-alt"></i></div>
                      <div className=' basis-10/12 font-inter text-[#797979]'>{ project.project_owner_location ? project.project_owner_location : "NA"}</div>
                    </div>
                  </div>
                  <div className=' basis-4/12 border-2 border-r-[#797979] mr-2 border-t-0 border-b-0 border-l-0'>
                    <div className='flex flex-row'>
                      <div className=' basis-2/12'><i class="fa fa-calendar" aria-hidden="true"></i></div>
                      <div className=' basis-10/12 font-inter text-[#797979]'>{timeAgo(project.project_creation_date)}</div>
                    </div>
                  </div>
                  <div className=' basis-4/12'>
                    <div className='flex flex-row'>
                      <div className=' basis-2/12'><i class="bi bi-file-text"></i></div>
                      <div className=' basis-10/12 font-inter text-[#797979]'>1 Received</div>
                    </div>
                  </div>
                </div>
                {/* <p className='font-inter text-base font-normal text-[#797979] mt-3'>{project.description}</p> */}
                <p className='font-inter text-opacity-50 text-[#0A142F] text-[14px] py-3'>
                Job Description: {displayWords.join(' ')} 
                {words.length > 30 && (
                    <span 
                        className="font-cardo text-[#031136] text-[18px] font-semibold cursor-pointer pl-2" 
                        onClick={(event) => handleClick(event, index)}
                    >
                        {expandedProjects[index] ? 'Less' : 'More'}
                    </span>
                )}
            </p>
                {JSON.parse(project.skills_required.replace(/'/g,'"')).map((skill,index)=>(
                  // <div key={index} className='mt-3 bg-white shadow-lg text-center rounded-xl inline-block mr-3 py-1 px-2  border'>{skill}</div>
                  <span key={index} className='border px-4 py-1 border-gray-300 opacity-60 rounded font-inter text-[#0A142F] text-[13px] inline-block mr-2 my-2'>
                  {skill}
                    </span>
                ))}
              </div>
              <div className='basis-2/12 pt-10'>
                <h1 className='font-cardo text-xl font-extrabold text-right'>${project.rate == 'Hourly' ? project.min_hourly_rate+"/hr" +" - "+ "$"+project.max_hourly_rate+"/hr" : project.fixed_budget }</h1>
                <p className='font-inter text-[#797979] mt-1 text-sm text-right'>{project.rate} Rate</p>
                <div className=''>
                  {/* {accessToken ? (
                    <Link to='/view-more/project-detail' state={{ project }} onClick={() => window.scrollTo(0, 0)}><button className='rounded h-12 w-36  text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-3 text-sm font-bold ml-16'>View Detail</button></Link>
                  ): (
                  <Link to='/login' onClick={() => window.scrollTo(0, 0)}><button className='rounded h-12 w-36  text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-3 text-sm font-bold ml-16'>Send Proposal</button></Link>
                )} */}
                 <Link to='/view-more/project-detail' state={{ project }} onClick={() => window.scrollTo(0, 0)}><button className='rounded h-12 w-36  text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-3 text-sm font-bold ml-16'>View Detail</button></Link>
                {/* {accessToken ? (
                isAlreadyApplied ? (
                  <button className='rounded h-12 w-36 text-gray-400 bg-slate-200 cursor-not-allowed mt-3 text-sm font-bold ml-16' disabled>
                    Already Applied
                  </button>
                ) : (
                  <Link to='/freelancer/send-proposal' state={{ project }} onClick={() => window.scrollTo(0, 0)}>
                    <button className='rounded h-12 w-36 text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-3 text-sm font-bold ml-16'>
                      Send Proposal
                    </button>
                  </Link>
                )
              ) : (
                <Link to='/login' onClick={() => window.scrollTo(0, 0)}>
                  <button className='rounded h-12 w-36 text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75] mt-3 text-sm font-bold ml-16'>
                    Send Proposal
                  </button>
                </Link>
              )} */}
                </div>
              </div>
            </div>
              )
            })}</>}
          </div> : <div className=' basis-9/12 mt-10'>
            <Skeleton height={50} width={50} inline={true} style={{ float: 'left'}}/>
            <Skeleton height={110} width={700} style={{ float: 'left', marginLeft: 20}}/>
            <Skeleton height={40} width={100} style={{ marginTop: 40}}/><br/>
            <Skeleton height={40} width={100} inline={true} style={{marginTop:5, marginLeft:70, float:'left'}}/>
            <Skeleton height={40} width={100} inline={true} count={2} style={{ marginTop:5, marginLeft:5, float:'left'}}/>

            <Skeleton height={50} width={50} inline={true} style={{ float: 'left', marginTop:80, marginLeft:-382 }}/>
            <Skeleton height={110} width={700} style={{ float: 'left', marginLeft: 70, marginTop:35}}/>
            <Skeleton height={40} width={100} style={{ marginTop: 125 }}/><br/>
            <Skeleton height={40} width={100} inline={true} style={{marginTop:5, marginLeft:70, float:'left'}}/>
            <Skeleton height={40} width={100} inline={true} count={2} style={{ marginTop:5, marginLeft:5, float:'left'}}/>
            
            <Skeleton height={50} width={50} inline={true} style={{ float: 'left', marginTop:80, marginLeft:-382 }}/>
            <Skeleton height={110} width={700} style={{ float: 'left', marginLeft: 70, marginTop:35}}/>
            <Skeleton height={40} width={100} style={{ marginTop: 125 }}/><br/>
            <Skeleton height={40} width={100} inline={true} style={{marginTop:5, marginLeft:70, float:'left'}}/>
            <Skeleton height={40} width={100} inline={true} count={2} style={{ marginTop:5, marginLeft:5, float:'left'}}/>
          </div>
          }
        </div>
        {viewallprojects?.length > 5 && (
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
      <HomeSection4 />
      <Footer />
    </>
  )
}

export default ProjectList
