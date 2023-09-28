import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import { Link, useLocation } from 'react-router-dom'
import search from '../../components/images/SearchOutlined.png'
import searchbtn from '../../components/images/searchbtn.png'
import { useState } from 'react'
import profilepic from '../../components/images/profilepic.png'
import { useDispatch, useSelector } from 'react-redux'
import { GetViewAllBidsAction } from '../../redux/Hirer/HirerAction'
import experience from '../../components/images/experience.png'
import ViewProposalPopup from './HirerAllPopup/ViewProposalPopup'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ViewAllProposals = () => {

    const error = useSelector(state => state.hirer.error);

   const viewallbids = useSelector(state => state.hirer.viewallbids)
   const dispatch = useDispatch();
//    const id = viewhirerselfproject && viewhirerselfproject[0].id ? viewhirerselfproject[0].id : '';

   React.useEffect(() => {
    dispatch(GetViewAllBidsAction(id))
  }, [])

  const location = useLocation();
  const project = location.state && location.state.project;
  const isOpen = location.state && location.state.isOpen;

  const id = project.id

  const [isViewProposalOpen, setIsViewProposalOpen] = useState(false);
  const [selectedbid, setSelectedbid] = useState(null);

  const openViewProposal = (bid) => {
    setSelectedbid(bid);
    setIsViewProposalOpen(true);
  };

  const closeViewProposal = () => {
    setSelectedbid(null);
    setIsViewProposalOpen(false);
  };
    
    const [selected, setSelected] = useState('All Proposals');
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

  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
    <h1 className="font-cardo text-[26px] text-[#031136] text-left font-normal p-3">{project.title}</h1>
    <div className='my-2 bg-[#FFFFFF] border border-gray-200 border-opacity-30 text-left'>
    <div className='p-4 px-6'>
    <p 
        className={`font-inter opacity-50 text-[#0A142F] text-[13px] py-2 inline-block pr-10 relative cursor-pointer`} 
        onClick={() => setSelected('All Proposals')}
    >
        All Proposals
        {selected === 'All Proposals' && <span style={underlineStyle}></span>}
    </p>

    <p 
        className={`font-inter opacity-50 text-[#0A142F] text-[13px] py-2 inline-block pr-10 relative cursor-pointer`} 
        onClick={() => setSelected('Shortlisted')}
    >
        Shortlisted
        {selected === 'Shortlisted' && <span style={underlineStyle}></span>}
    </p>
    <p 
        className={`font-inter opacity-50 text-[#0A142F] text-[13px] py-2 inline-block relative cursor-pointer`} 
        onClick={() => setSelected('Messaged')}
    >
        Messaged
        {selected === 'Messaged' && <span style={underlineStyle}></span>}
    </p>
    </div>
    {isOpen ? (
                    <>
                            {
                                !(error && error.includes("No bids found for this project")) && (
                                    <div className="flex justify-between items-center">
                                        <section className='flex items-center p-2 bg-white rounded-lg m-5 border w-[49%]'>
        <div className='flex items-center mr-1 space-x-1'>
            <img src={search} alt="Search Icon" className="h-3 w-3" />
            <input className='w-28 lg:w-40 xl:w-[30rem] h-7 text-xs lg:text-sm outline-none' placeholder='Search' />
        </div>
        <button className='rounded h-7 w-7 p-2 text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>
            <img src={searchbtn} alt="Search Icon" />
        </button>
    </section>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-[#797979] text-sm font-inter font-normal rounded-lg focus:ring-green-500 focus:border-green-500 block w-[22%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 mr-12">
        <option selected>Best Match</option>
        <option value="">Newest Applicants</option>
        <option value="">Oldest Applicants</option>
        <option value="">Highest Hourly Rate</option>
        <option value="">Lowest Hourly Rate</option>
    </select>
                    </div>
                )
            }
            {
                error && error.includes("No bids found for this project") ? (
                    <div className='my-8'> 
                        <img src={experience} alt="" className='mx-auto mt-2' />
                        <div className='px-4 md:px-8 py-5 text-center text-2xl opacity-50'>
                            No proposals found for this project
                        </div>
                    </div>
                ) : (
                    <>{viewallbids != null ? 
                        <div>
                        {viewallbids && viewallbids.map((bid, index) => {
                            return(<>
                              <div className='px-4 md:px-8 py-2 border-b border-gray-200 hover:bg-[#F6FAFD] border-opacity-30' onClick={() => openViewProposal(bid)}>
                              <div class="flex">
                            <div class="flex-[10%] p-4">
                            <div className="relative w-24 h-24 mx-auto">
                                              <img src={"https://aparnawiz91.pythonanywhere.com/"+bid.freelancer_profilepic} alt="Profile" className="rounded-full w-full h-full border border-gray-200" />
                                              <div class="absolute bottom-2 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                          </div>
                            </div>
                            <div class="flex-[90%] p-4">
                            <div class="flex items-center justify-between">
                            <p className="font-cardo text-[#0A142F] text-2xl font-medium">{bid.freelancer_Name}</p>
                              
                              <div class="flex items-center space-x-4">
                                      <span class="inline-block text-sm px-10 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Message</span>
                          
                                  <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
                                          <button class="px-10 py-1 bg-white">
                                              <p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Hire</p>
                                          </button>
                                  </div>
                              </div>
                          </div>
                          <h1 className="font-cardo opacity-50 text-lg text-[#031136]">{bid.freelancer_category}</h1>
                           <div style={{ display: 'flex' }}>
                            <h1 className="font-cardo text-lg text-[#031136] font-semibold py-3 flex-1">${bid.bid_amount} <span className='opacity-50 font-medium'>/hr</span></h1>
                            <h1 className="font-cardo text-lg text-[#031136] font-semibold py-3 flex-1">$0 <span className='opacity-50 font-medium'>earned</span></h1>
                            <h1 className="font-cardo text-lg text-[#031136] py-3 flex-1">{bid.freelancer_address}</h1>
                            <h1 className="font-cardo text-lg text-[#031136] py-3 flex-1"></h1>
                        </div>
                            <p className='font-inter text-[#0A142F] text-[14px]'>Cover Letter - <span className='opacity-50'>{bid.description}</span></p> 
                            <div className="text-left mt-5">
                            {/* {JSON.parse(bid.Freelancer_skills.replace(/'/g,'"')).map((skill,index)=>(
                <div className="mr-3 focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-28 text-green-800 px-3 py-[3px] text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]">
                <p className=" text-center">{skill}</p>
            </div>
            ))} */}
            {bid.Freelancer_skills && 
  (() => {
    try {
      const skillsArray = JSON.parse(bid.Freelancer_skills.replace(/'/g, '"'));
      return skillsArray.map((skill, index) => (
        <div
          key={index}
          className="mr-3 focus:outline-none bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full w-28 text-green-800 px-3 py-[3px] text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]"
        >
          <p className="text-center">{skill}</p>
        </div>
      ));
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  })()
}

                                      </div>
                            </div>
                          </div>
                              </div>
                              {isViewProposalOpen && <ViewProposalPopup closeViewProposal={closeViewProposal} state={{project}} bid={selectedbid}/>}
                              </>
                                )
                        })}</div> : 
                        <div>
                        <Skeleton height={100} width={100} style={{borderRadius: '50%', marginLeft: 30, float:'left', marginTop: 30}}/>
                        <Skeleton height={20} width={100} style={{marginLeft: 20, marginTop: 30}}/>
                        <Skeleton height={20} width={150} style={{marginLeft: 20}}/>
                        <Skeleton height={40} width={150} style={{float: 'right', marginTop: -40, marginLeft: 10, marginRight: 50}}/>
                        <Skeleton height={40} width={150} style={{float: 'right', marginTop: -64, marginRight: 210}}/>
                        <Skeleton height={100} width={1000} style={{marginLeft: 150}}/>
                        <Skeleton height={30} width={100} inline="true" style={{marginLeft: 150, marginTop: 10, borderRadius: '25px'}}/>
                        <Skeleton height={30} width={100} inline="true" count={4} style={{marginLeft: 20, marginTop: 10, borderRadius: '25px'}}/>
                        </div>}
                    </>
                )
            }
    </>
                ) : (
                    <div className='my-8'> 
                        <img src={experience} alt="" className='mx-auto mt-2' />
                        <div className='px-4 md:px-8 py-5 text-center text-2xl opacity-50'>
                            This job is closed and is no longer accepting proposals.
                        </div>
                    </div>
                )}
    {/* {
  !(error && error.includes("No bids found for this project")) && (
    <div className="flex justify-between items-center">
    {/* Search Section *
    <section className='flex items-center p-2 bg-white rounded-lg m-5 border w-[49%]'>
        <div className='flex items-center mr-1 space-x-1'>
            <img src={search} alt="Search Icon" className="h-3 w-3" />
            <input className='w-28 lg:w-40 xl:w-[30rem] h-7 text-xs lg:text-sm outline-none' placeholder='Search' />
        </div>
        <button className='rounded h-7 w-7 p-2 text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-[#00BF58] to-[#E3FF75]'>
            <img src={searchbtn} alt="Search Icon" />
        </button>
    </section>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-[#797979] text-sm font-inter font-normal rounded-lg focus:ring-green-500 focus:border-green-500 block w-[22%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 mr-12">
        <option selected>Best Match</option>
        <option value="">Newest Applicants</option>
        <option value="">Oldest Applicants</option>
        <option value="">Highest Hourly Rate</option>
        <option value="">Lowest Hourly Rate</option>
    </select>
</div>)
}
{
  error && error.includes("No bids found for this project") ? (
  <div className='my-8'> 
  <img src={experience} alt="" className='mx-auto mt-2'/>
    <div className='px-4 md:px-8 py-5 text-center text-2xl opacity-50'>
      No proposals found for this project
    </div>
    </div>
  ):
  (
    <>
{viewallbids && viewallbids.map((bid, index) => {
                return(<>
    <div className='px-4 md:px-8 py-2 border-b border-gray-200 hover:bg-[#F6FAFD] border-opacity-30'>
    <div class="flex">
  <div class="flex-[10%] p-4">
  <div className="relative w-24 h-24 mx-auto">
                    <img src={profilepic} alt="Profile" className="rounded-full w-full h-full border border-gray-200" />
                    <div class="absolute bottom-2 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
  </div>
  <div class="flex-[90%] p-4">
  <div class="flex items-center justify-between">
  <p className="font-cardo text-[#0A142F] text-2xl font-medium">{bid.freelancer_first_Name}</p>
    
    <div class="flex items-center space-x-4">
            <span class="inline-block text-sm px-10 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Message</span>

        <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
                <button class="px-10 py-1 bg-white">
                    <p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Hire</p>
                </button>
        </div>
    </div>
</div>
<h1 className="font-cardo opacity-50 text-lg text-[#031136]">Python Developer</h1>
  <h1 className="font-cardo text-lg text-[#031136] font-semibold py-3 inline-block pr-28">${bid.bid_amount} <span className='opacity-50 font-medium'>/hr</span></h1>
  <h1 className="font-cardo text-lg text-[#031136] font-semibold py-3 inline-block pr-28">$0 <span className='opacity-50 font-medium'>earned</span></h1>
  <h1 className="font-cardo text-lg text-[#031136] py-3 inline-block">Indore, India</h1>
  <p className='font-inter text-[#0A142F] text-[14px]'>Cover Letter - <span className='opacity-50'>{bid.description}</span></p> 
  <div className="text-left mt-5">
                <div className="mr-3 focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-28 text-green-800 px-3 py-[3px] text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]">
                <p className=" text-center">html</p>
            </div>
            <div className="focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-24 text-green-800 px-3 py-[3px] font-semibold text-sm dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]">
                <p className="text-center">React</p>
            </div>
            </div>
  </div>
</div>
    </div>
    </>
      )
  })}
    </>
  )} */}

    {/* <div className='px-4 md:px-8 py-2 border-b border-gray-200 hover:bg-[#F6FAFD] border-opacity-30'>
    <div class="flex">
  <div class="flex-[10%] p-4">
  <div className="relative w-24 h-24 mx-auto">
                    <img src={profilepic} alt="Profile" className="rounded-full w-full h-full border border-gray-200" />
                    <div class="absolute bottom-2 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
  </div>
  <div class="flex-[90%] p-4">
  <div class="flex items-center justify-between">
  <p className="font-cardo text-[#0A142F] text-2xl font-medium">Rohit Sharma</p>
    
    <div class="flex items-center space-x-4">
        <Link to=''>
            <span class="inline-block text-sm px-10 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Message</span>
        </Link>

        <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]">
            <Link to=''>
                <button class="px-10 py-1 bg-white">
                    <p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Hire</p>
                </button>
            </Link>
        </div>
    </div>
</div>
<h1 className="font-cardo opacity-50 text-lg text-[#031136]">UI/UX Designer</h1>
  <h1 className="font-cardo text-lg text-[#031136] font-semibold py-3 inline-block pr-28">$20.00 <span className='opacity-50 font-medium'>/hr</span></h1>
  <h1 className="font-cardo text-lg text-[#031136] font-semibold py-3 inline-block pr-28">$32 <span className='opacity-50 font-medium'>earned</span></h1>
  <h1 className="font-cardo text-lg text-[#031136] py-3 inline-block">Indore, India</h1>
  <p className='font-inter text-[#0A142F] text-[14px]'>Cover Letter - <span className='opacity-50'>I've been a graphic designer for more than 6+ years, assisting organizations and people to successfully market themselves. I have worked as a freelancer for both profit and nonprofit organizations. All facets of design, from letterhead, newsletters, and invitations to huge graphics and website banners, as well as website maintenance, are under my area of expertise....</span></p> 
  <div className="text-left mt-5">
                <div className="mr-3 focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-28 text-green-800 px-3 py-[3px] text-sm font-semibold dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]">
                <p className=" text-center">html</p>
            </div>
            <div className="focus:outline-none  bg-[#b4d3c3] hover:bg-[#c1e2d1] inline-block rounded-full  w-24 text-green-800 px-3 py-[3px] font-semibold text-sm dark:bg-[#b4d3c3] dark:hover:bg-[#dffdee] bg-opacity-[60%]">
                <p className="text-center">React</p>
            </div>
            </div>
  </div>
</div>
    </div> */}
    </div>
    </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default ViewAllProposals