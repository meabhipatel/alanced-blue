import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AddFreeHireRequest = ({closeFreeHiring,free}) => {
    const handleClickInsidePopup = (event) => {
        event.stopPropagation();
        event.preventDefault();
      };

    const accessToken = useSelector(state => state.login.accessToken);
    const [ProjectId, setProjectId] = useState("");
    const [Title, setTitle] = useState("");
    const [HiringBudget, setHiringBudget] = useState("");
    const [HiringBudgetType, setHiringBudgetType] = useState("");
    const [msg, setMsg] = useState("");
    const id = free.id
    console.log(id,'chkfreelancerrriddddd')
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const [viewhirerProject, setViewhirerProject] = useState([]);
    
      useEffect(() => {
        axios
          .get(`http://51.21.1.122:8000/freelance/view-all/hirer-self/Project`,{
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
          .then((response) => {
            setViewhirerProject(response.data.data); 
          })
          .catch((error) => {
            console.error('Error fetching filtered data:', error);
          });
      }, []);
      
      
    

    const handleSave = async () => {

        if (!Title || !HiringBudget || !HiringBudgetType || !msg) {
            toast.error("All fields are required");
            return;
        }

        try {
            const response = await axios.post(`http://51.21.1.122:8000/freelance/hire/${id}`, {
                project:ProjectId,
                project_title: Title,
                hiring_budget:HiringBudget,
                message:msg,
                hiring_budget_type:HiringBudgetType
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if (response.data.status === 200) {
                toast.success("Hiring Request Sent Successfully")
                closeFreeHiring();
            } else {
                console.log(response.data.message);
                toast.error(response.data.message);
            }
        } catch (err) {
            console.log(err.response.data.message);
            toast.error(err.response.data.message);
        }
    };  

  return (
    <>
     <div className="fixed z-10 inset-0 overflow-y-auto mt-24" onClick={handleClickInsidePopup}>
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 px-8 relative z-20">
                    <div className="flex justify-between items-center">
                        <h1 className="font-cardo text-[26px] text-[#031136] font-normal">Add Data</h1>
                        <button onClick={closeFreeHiring} className="text-gray-500 hover:text-gray-700">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className='mt-8'>
                            <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Project Title <span class="text-red-500">*</span></h1>
                            <select
        className="w-full border my-2 py-1.5 px-2 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 bg-white"
        name="" value={Title} onChange={(e) => {
          setTitle(e.target.value);
          // Find the selected project in the viewhirerProject array and set its id
          const selectedProject = viewhirerProject.find(project => project.title === e.target.value);
          if (selectedProject) {
            setProjectId(selectedProject.id);
            console.log(selectedProject.id,'chkproidddsec')
          }
        }}
      >
        <option disabled selected value="">Choose Project Title</option>
        {viewhirerProject.map((project) => (
          <option key={project.id} value={project.title}>
            {project.title}
          </option>
        ))}
      </select>
                           
                            <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Hiring Budget <span class="text-red-500">*</span></h1>
                            <input type="number" value={HiringBudget} onChange={e => setHiringBudget(e.target.value)} className='border my-2 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder='' required/>
                            <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Budget Type <span class="text-red-500">*</span></h1>
                            <select
                            className="w-full border my-2 py-1.5 px-2 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 bg-white"
                            name="hiring_budget_type" value={HiringBudgetType} onChange={e => setHiringBudgetType(e.target.value)} required>
                            <option disabled selected value="">Choose Budget Type</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Fixed">Fixed</option>
                            </select>
                            <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left pt-5">Message <span class="text-red-500">*</span></h1>
                          <textarea name="" id="" cols="30" rows="5" className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' value={msg} onChange={e => setMsg(e.target.value)} required></textarea> 
                            <div className="mt-8 flex justify-end">
                            <button onClick={handleSave}><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold" >Hire</span></button>
                            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]" onClick={closeFreeHiring}>
                                <button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button>
                            </div>     
                            </div>
                            </div>
                </div>
                    </div>
                </div>
    </>
  )
}

export default AddFreeHireRequest