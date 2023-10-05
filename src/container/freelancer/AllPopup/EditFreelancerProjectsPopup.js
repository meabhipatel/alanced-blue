import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import edit from '../../../components/images/edit.png'
import { useSelector } from 'react-redux';
import axios from 'axios';

const EditFreelancerProjectsPopup = ({closeEditFreeProject,project}) => {

    
    const id = project.id
    const accessToken = useSelector(state => state.login.accessToken);
    const [title, setTitle] = useState(project.project_title || '');
    const [category, setCategory] = useState(project.category || '');
    const [projectLink, setProjectLink] = useState(project.project_link || '');
    const [description, setDescription] = useState(project.project_description || '');
    const [skills, setSkills] = useState([]);
    const [currentSkill, setCurrentSkill] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        if (project.skills_used) {
          setSkills(JSON.parse(project.skills_used.replace(/'/g, '"')));
        }
      }, [project]);
  
    const addSkill = () => {
      if (currentSkill.trim() && skills.length < 15) {
        setSkills(prevSkills => [...prevSkills, currentSkill.trim()]);
        setCurrentSkill('');
        setError('');
      } else if (skills.length >= 15) {
        setError('You can add a maximum of 15 skills.');
      }
    };
  
    const removeSkill = (index) => {
      setSkills(prevSkills => prevSkills.filter((_, idx) => idx !== index));
      setError('');
    };
    
    const [uploadedImage, setUploadedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    };

    const handleEditIconClick = () => {
        fileInputRef.current.click();
    };

    const handleSave = async () => {
        try {
            const updatedData = {
                images_logo: uploadedImage, 
                project_title: title,
                category,
                project_link: projectLink,
                skills_used: JSON.stringify(skills),  
                project_description: description,
            };

            const response = await axios.put(`https://aparnawiz91.pythonanywhere.com/freelance/update/Freelancer/Self-project/${id}`, updatedData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if (response.data.status === 200) {
                closeEditFreeProject();
            } else {
                console.log(response.data.message || 'Error updating the project');
            }
        } catch (err) {
            console.log(err.message);
        }
    };

  return (
    <>
    <div className="fixed z-10 inset-0 overflow-y-auto mt-24">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="flex items-center justify-center min-h-screen">
                    <div className="bg-white rounded-lg w-[90%] md:w-[55%] p-6 px-8 relative z-20">
                    <div className="flex justify-between items-center">
                        <h1 className="font-cardo text-[26px] text-[#031136] font-normal text-wrap">Edit Portfolio</h1>
                        <button onClick={closeEditFreeProject} className="text-gray-500 hover:text-gray-700">
                            <i class="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className='mt-8'>
                    {/* <img src={"https://aparnawiz91.pythonanywhere.com/"+project.images_logo} alt="" className='w-full h-[250px] mb-2'/> */}
                    {/* <div className="relative">
                    <img src={"https://aparnawiz91.pythonanywhere.com/"+project.images_logo} alt="" className='w-full h-[250px] mb-4'/>
                    <div className="absolute top-2 right-2 p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer">
                        <img src={edit} alt="edit" />
                    </div>
                </div> */}
<div className="relative">
                <img src={uploadedImage || "https://aparnawiz91.pythonanywhere.com/" + project.images_logo} alt="" className='w-full h-[250px] mb-4' />
                <div className="absolute top-2 right-2 p-1 w-6 h-6 bg-white rounded-full border border-gray-200 cursor-pointer" onClick={handleEditIconClick}>
                    <img src={edit} alt="edit" />
                </div>
            </div>
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageUpload} />
                    <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Title</h1>
                    <input type="text" value={title}
                onChange={(e) => setTitle(e.target.value)} className='border mb-3 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 opacity-50' placeholder=''/>
                    <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Category</h1>
                    <select value={category}
                onChange={(e) => setCategory(e.target.value)}
                    className='border mb-3 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 bg-white opacity-50'>
                        <option>
                           {category}
                        </option>
                </select>
                <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Project Link</h1>
                    <input type="text" value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)} className='border mb-3 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 opacity-50' placeholder=''/>
                    <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Skills</h1>
                    <div className="border rounded-md p-2 flex items-center flex-wrap mb-3">
    {Array.isArray(skills) && skills.map((skill, index) => (
        <div key={index} className="bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border-none text-white font-semibold rounded px-2 py-1.5 mr-3 my-2 flex items-center">
            <span>{skill}</span>
            <button onClick={() => removeSkill(index)} className="ml-2 mt-1 pb-0.5 text-sm bg-white text-green-500 rounded-full w-4 h-4 flex justify-center items-center">
                &times;
            </button>
        </div>
    ))}
    <div className="flex items-center relative w-full">
        <input 
            type="text" 
            value={currentSkill} 
            onChange={(e) => setCurrentSkill(e.target.value)}
            placeholder="Enter Skills here"
            className="outline-none w-full"
        />
        <span id="hiddenText" style={{visibility: 'hidden', whiteSpace: 'pre', position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)'}}>{currentSkill}</span>
        <button 
            onClick={addSkill} 
            style={{position: 'absolute', left: `${document.getElementById("hiddenText")?.offsetWidth || 0}px`, top: '47%', transform: 'translateY(-50%)'}}
            className={`ml-4 mt-1 pb-0.5 text-sm bg-lime-500 text-white rounded-full w-4 h-4 flex justify-center items-center ${currentSkill.trim() ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        >
            +
        </button>
    </div>
</div>
{error && <p className="text-red-500 mt-2">{error}</p>}
                <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Description</h1>
                    <textarea name="" id="" cols="30" rows="5" className='border mb-6 py-1.5 px-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 opacity-50' value={description}
                onChange={(e) => setDescription(e.target.value)}></textarea>
                            <div className="mt-4 flex justify-end">
                            <Link to='' onClick={handleSave}><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold" >Save</span></Link>
                            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]" onClick={closeEditFreeProject}>
                                <Link to=''><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
                            </div>     
                            </div>
                            </div>
                </div>
                    </div>
                </div>
    </>
  )
}

export default EditFreelancerProjectsPopup;