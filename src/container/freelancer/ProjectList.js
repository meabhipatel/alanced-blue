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
import CategoryList from './AllSelectionData/CategoryList'
import ExperienceLevel from './AllSelectionData/ExperienceLevel'
import ProjectRate from './AllSelectionData/ProjectRate'
import CityList from './AllSelectionData/CityList'
import SkillsList from './AllSelectionData/SkillsList'


function ProjectList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  console.log(category,"category")
  // const viewallprojects = useSelector(state => state.freelancer.viewallprojects)
  const accessToken = useSelector(state => state.login.accessToken);

  const [categoryFilter, setCategoryFilter] = useState([]);
  const [skillFilter, setSkillFilter] = useState([]);
  const [expFilter, setExpFilter] = useState([]);
  const [rateFilter, setRateFilter] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [cityFilter, setCityFilter] = useState([]);
  const [priceRange, setPriceRange] = useState([1, 100]);
  // const projectData = { viewallprojects }
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // React.useEffect(() => {
  //   dispatch(GetViewAllProjectsListAction())
  // }, [])

  // const [viewProject, setViewproject] = useState([]);
  // console.log(viewProject,"project, project")

   const handleCategoryFilterChange = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      setCategoryFilter((prevFilters) => [...prevFilters, category]);
    } else {
      setCategoryFilter((prevFilters) => prevFilters.filter((filter) => filter !== category));
    }
    setCurrentPage(1);
  };

  const handleSkillFilterChange = (e) => {
   const skills = e.target.value;
   if (e.target.checked){
    setSkillFilter((prevFilters) => [...prevFilters, skills]);
   } else {
    setSkillFilter((prevFilters) => prevFilters.filter((filter) => filter !== skills));
   }
   setCurrentPage(1);
  };

  const handleExpFilterChange = (e) => {
    const exp = e.target.value;
    if (e.target.checked){
      setExpFilter((prevFilters) => [...prevFilters, exp]);
    } else {
      setExpFilter((prevFilters) => prevFilters.filter((filter) => filter !== exp));
    }
    setCurrentPage(1);
  };

  const handleRateFilterChange = (e) => {
    const protype = e.target.value;
    if (e.target.checked){
      setRateFilter((prevFilters) => [...prevFilters, protype]);
    } else {
      setRateFilter((prevFilters) => prevFilters.filter((filter) => filter !== protype));
    }
    setCurrentPage(1);
  };

  const handleCityFilterChange = (e) => {
    const city = e.target.value;
    if (e.target.checked) {
        setCityFilter((prevFilters) => [...prevFilters, city]);
    } else {
        setCityFilter((prevFilters) => prevFilters.filter((filter) => filter !== city));
    }
    setCurrentPage(1);
};

  const handleSliderChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleInputChange = (index, newValue) => {
    const updatedPriceRange = [...priceRange];
    updatedPriceRange[index] = Number(newValue);
    setPriceRange(updatedPriceRange);
  };

  const [viewProject, setViewProject] = useState([]);
  console.log(viewProject,"project, project")

  useEffect(() => {
    const queryParameters = [];

    if (categoryFilter.length > 0) {
      queryParameters.push(`category=${categoryFilter.join('&category=')}`);
    }

    if (skillFilter.length > 0) {
      queryParameters.push(`skills_required=${skillFilter.join('&skills_required=')}`);
    }

    if (expFilter.length > 0) {
      queryParameters.push(`experience_level=${expFilter.join('&experience_level=')}`);
    }

    if (rateFilter.length > 0) {
      queryParameters.push(`rate=${rateFilter.join('&rate=')}`);
    }

    if (cityFilter.length > 0) {
      queryParameters.push(`project_owner_location=${cityFilter.join('&project_owner_location=')}`);
    }

    if (searchQuery) {
      queryParameters.push(`search_query=${searchQuery}`);
    }
    
    // if (priceRange[0] !== 1 || priceRange[1] !== 10000) {
    //   queryParameters.push(`min_hourly_rate=${priceRange[0]}`);
    //   queryParameters.push(`max_hourly_rate=${priceRange[1]}`);
    // }

    queryParameters.push(`page=${currentPage}`);

    const queryString = queryParameters.join('&');

    axios
      .get(`https://alanced.pythonanywhere.com/freelance/view-all/Project/?${queryString}`)
      .then((response) => {
        setViewProject(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 8));
      })
      .catch((error) => {
        console.error('Error fetching filtered data:', error);
      });
  }, [categoryFilter, skillFilter, expFilter, rateFilter, searchQuery, cityFilter, priceRange, currentPage]);

  const [cate] = useState(CategoryList);
  const [expe] = useState(ExperienceLevel);
  const [type] = useState(ProjectRate)
  const [city] = useState(CityList)
  const [req_skill ] = useState(SkillsList)


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

  const [AllProposals, setAllProposals] = useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch doc API
        const response1 = await axios.get('https://alanced.pythonanywhere.com/freelance/view/freelancer-all-self/bid',{
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

//(=//=//=//=//=//=//=//=//=)filter API integrtion(//=//=//=//=//=//=//=//=//=)

  const [filteredApiData, setFilteredApiData] = useState([]);
  


  // const [currentPage, setCurrentPage] = useState(1);
    // const [categorySearch, setCategorySearch] = useState('');

    const prev = () => {
      window.scrollTo(0, 0);
      setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const next = () => {
      window.scrollTo(0, 0);
      setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };


      const [showAll, setShowAll] = useState(false);
      const initialCategoryCount = 5; // Initial number of categories to show
    
      const [visibleCategories, setVisibleCategories] = useState(cate.slice(0, initialCategoryCount));
    
      const handleShowMore = () => {
        setVisibleCategories(cate); // Show all categories
        setShowAll(true);
      };
    
      const handleShowLess = () => {
        setVisibleCategories(cate.slice(0, initialCategoryCount)); // Show the initial count
        setShowAll(false);
      };
    

      const [showAllSkills, setShowAllSkills] = useState(false);
      const initialSkillCount = 5; // Initial number of skills to show

      const [visibleSkills, setVisibleSkills] = useState(req_skill.slice(0, initialSkillCount));

      const handleShowMoreSkills = () => {
        setVisibleSkills(req_skill); // Show all skills
        setShowAllSkills(true);
      };

      const handleShowLessSkills = () => {
        setVisibleSkills(req_skill.slice(0, initialSkillCount)); // Show the initial count
        setShowAllSkills(false);
      };


      const [showAllCity, setShowAllCity] = useState(false);
      const initialCityCount = 5; // Initial number of cities to show

      const [visibleCities, setVisibleCities] = useState(city.slice(0, initialCityCount));

      const handleShowMoreCity = () => {
        setVisibleCities(city); // Show all cities
        setShowAllCity(true);
      };

      const handleShowLessCity = () => {
        setVisibleCities(city.slice(0, initialCityCount)); // Show the initial count
        setShowAllCity(false);
      };

      function highlightText(text, query) {
        if (!query) {
          return text;
        }
      
        const regex = new RegExp(`(${query})`, 'gi');
        return text.split(regex).map((part, index) => {
          if (index % 2 === 1) {
            return <span key={index} style={{ backgroundColor: '#a3e635' }}>{part}</span>;
          } else {
            return <span key={index}>{part}</span>;
          }
        });
      }

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
              <input className='w-96 font-inter text-base ml-3 outline-none' placeholder='Search Job by Category' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
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
    {visibleCategories.map((category, index) =>(
      <div key={category} className='flex flex-row mt-4'>
      <div className='basis-10/12'>
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
      {/* <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>(1,945)</div> */}
  </div>
    ))}
    {showAll ? (
        <div>
          <h1 className='font-cardo text-xl text-left mt-5 font-normal cursor-pointer' onClick={handleShowLess}>
            Show Less
          </h1>
        </div>
      ) : (
        <div>
          <h1 className='font-cardo text-xl text-left mt-5 font-normal cursor-pointer' onClick={handleShowMore}>
            +{cate.length - initialCategoryCount} More
          </h1>
        </div>
      )}
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Experience Level</h1></div>
            {expe.map((exp,index) => (
              <div key={exp} className='flex flex-row mt-4'>
              <div className='basis-8/12'>
                  <label class="flex items-center font-inter relative cursor-pointer">
                      <input 
                className="hidden" 
                type="checkbox"
                value={exp}
                onChange={handleExpFilterChange}
              />
                      <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                        
                          <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                      </div>
                           <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                      <span class="font-normal text-[#797979]">{exp.replace(/_/g, ' ')}</span>
                  </label>
              </div>
              {/* <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>({count})</div> */}
          </div>
            ))}
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Project Type</h1></div>
            {type.map((protype, index) => (
              <div className='flex flex-row mt-4'>
              <div className=' basis-8/12 text-left'>
                <label class="relative inline-flex items-center mr-5 cursor-pointer">
              <input 
          class="sr-only peer" 
          type="checkbox"
          value={protype}
          onChange={handleRateFilterChange}
        />
              <div class="w-11 h-6 bg-white border-2  border-green-300 rounded-full peer dark:bg-white-700 peer-focus:ring-0 peer-focus:ring-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-gradient-to-r  after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r from-[#00BF58] to-[#E3FF75]"></div>
              <span class="ml-3 text-base font-normal font-inter text-[#797979]">{protype}</span>
            </label>
              </div>
              {/* <div className=' basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>({count})</div> */}
            </div>
            ))}
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Project Rate</h1></div>
            {/* <div className="pt-4 w-[85%]">
              <Slider
                min={1}
                max={100}
                step={1}
                range
                value={priceRange} // Use priceRange
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
                value={priceRange[0]}
                onChange={(e) => handleInputChange(0, e.target.value)}
                className='mt-3 bg-white text-center border rounded-md p-1 basis-6/12 font-inter text-base font-normal text-[#797979] w-24 focus:border-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-60
                focus:outline-none'
              /></div>
              <div className='basis-2/12 m-auto mt-4'><i class="bi bi-dash-lg text-[#475569]"></i></div>
                <div className='basis-5/12'><input
                type="text"
                value={priceRange[1]}
                onChange={(e) => handleInputChange(1, e.target.value)}
                className='mt-3 bg-white text-center border rounded-md p-1 basis-6/12 font-inter text-base font-normal text-[#797979] w-24 focus:border-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-60
                focus:outline-none'
              /></div>
              </div>
            </div> */}
            <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Skills</h1></div>
              {visibleSkills.map((skills,index) => (
                  <div key={skills} className='flex flex-row mt-4'>
                  <div className='basis-8/12'>
                      <label className="flex items-center font-inter relative cursor-pointer">
                          <input 
                className="hidden" 
                type="checkbox"
                value={skills}
                onChange={handleSkillFilterChange}
              />
                          <div className="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                              <span className="checkmark hidden"><i className="bi bi-check-lg pr-2 pt-2"></i></span>
                          </div>
                          <span className="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                          <span className="font-normal text-[#797979]">{skills}</span>
                      </label>
                  </div>
                  {/* <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>
                      ({count})
                  </div> */}
              </div>
              ))}
             {showAllSkills ? (
                <div>
                  <h1 className='font-cardo text-xl text-left mt-5 font-normal cursor-pointer' onClick={handleShowLessSkills}>
                    Show Less
                  </h1>
                </div>
              ) : (
                <div>
                  <h1 className='font-cardo text-xl text-left mt-5 font-normal cursor-pointer' onClick={handleShowMoreSkills}>
                    +{req_skill.length - initialSkillCount} More
                  </h1>
                </div>
              )}
              <div><h1 className='font-cardo text-xl text-left font-normal mt-10'>Citys</h1></div>
            {visibleCities.map((location,index) => (
              <div className='flex flex-row mt-4'>
              <div className='basis-8/12'>
                  <label class="flex items-center font-inter relative cursor-pointer">
                      <input 
                className="hidden" 
                type="checkbox"
                value={location}
                onChange={handleCityFilterChange}
              />
                      <div class="checkbox-border-gradient bg-transparent mr-3 w-5 h-5 rounded flex items-center justify-center">
                        
                          <span class="checkmark hidden"><i class="bi bi-check-lg pr-2 pt-2"></i></span>
                      </div>
                           <span class="normal-checkbox mr-3 border border-gray-300 w-5 h-5 inline-block rounded"></span>
                      <span class="font-normal text-[#797979]">{location}</span>
                  </label>
              </div>
              {/* <div className='basis-4/12 font-inter text-base font-normal text-[#797979] text-left'>({count})</div> */}
          </div>
            ))}
             {showAllCity ? (
              <div>
                <h1 className='font-cardo text-xl text-left mt-5 font-normal cursor-pointer' onClick={handleShowLessCity}>
                  Show Less
                </h1>
              </div>
            ) : (
              <div>
                <h1 className='font-cardo text-xl text-left mt-5 font-normal cursor-pointer' onClick={handleShowMoreCity}>
                  +{city.length - initialCityCount} More
                </h1>
              </div>
            )}
          </div>
          { viewProject != null ? 
          <div className=' basis-9/12 mt-10'>
            {viewProject && <>{viewProject.map((project,index)=> {
              const words = project.description.split(' ');
              const displayWords = expandedProjects[index] || words.length <= 30 ? words : words.slice(0, 30);
              // const isAlreadyApplied = Array.isArray(AllProposals) && AllProposals.some(all => project.id === all.project_id);
              return(
                <div className='flex flex-row'>
              <div className='basis-1/12 mr-3'>
                {/* <Avatar src={profilepic} alt="avatar" variant="rounded" /> */}
              </div>
              <div className=' basis-9/12 text-left mb-7'>
                <h1 className='font-cardo text-lg'>{highlightText(project.title, searchQuery)}</h1>
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
                      <div className=' basis-10/12 font-inter text-[#797979]'>{highlightText(project.project_owner_location ? project.project_owner_location : "NA", searchQuery)}</div>
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
                Job Description: {highlightText(displayWords.join(' '), searchQuery)}
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
                  {highlightText(skill, searchQuery)}
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
        {totalPages > 1 && (
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
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        setCurrentPage(pageNumber);
                                    }}
                                    
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
        {/* {viewallprojects?.length > 5 && (
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
                )} */}
      </div>
      <HomeSection4 />
      <Footer />
    </>
  )
}

export default ProjectList
