import React, { useEffect } from 'react'
import Navbar from '../../components/Layout/Navbar'
import HomeSection4 from '../../components/Layout/HomeSection4'
import Footer from '../../components/Layout/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddProjectAction } from '../../redux/Hirer/HirerAction'

const AddJobPost = () => {

    const [addProject, setAddProject] = useState('');
    

    const accessToken = useSelector(state => state.login.accessToken);
    const addproject = useSelector(state => state.hirer.addproject);
    const dispatch = useDispatch();

    const [skills, setSkills] = useState([]);

    const AddProjects = () => {
    const formData = new URLSearchParams();
        formData.append("title",addProject.title);
        formData.append("description",addProject.description);
        formData.append("deadline",addProject.deadline);
        formData.append("skills_required",addProject.skills_required);
        formData.append("category",addProject.category);
        formData.append("budget",addProject.budget);


    const x = {
        "title": addProject.title,
        "description":addProject.description,
        "deadline":addProject.deadline,
        "skills_required":addProject.skills_required,
        "category":addProject.category,
        "budget":addProject.budget
    }    
        

        dispatch(AddProjectAction(x,accessToken));
    };

    // const onChange = e =>{
    //     setAddProject({
    //         ...addProject,[e.target.name]: e.target.value
    //     });
    // }

    const [selectedOption, setSelectedOption] = useState('hourly');

    // const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "Python"]);
    const [currentSkill, setCurrentSkill] = useState('');
    const [error, setError] = useState('');
  
    // const addSkill = () => {
    //   if (currentSkill.trim() && skills.length < 15) {
    //     setSkills(prevSkills => [...prevSkills, currentSkill.trim()]);
    //     setCurrentSkill('');
    //     setError('');
    //   } else if (skills.length >= 15) {
    //     setError('You can add a maximum of 15 skills.');
    //   }
    // };
  
    // const removeSkill = (index) => {
    //   setSkills(prevSkills => prevSkills.filter((_, idx) => idx !== index));
    //   setError('');
    // };

    const [isValid, setIsValid] = useState(false);


    const [step, setStep] = useState(1);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const stepsLabels = [
        'Job Title',
        'Job Description',
        'Skills',
        'Budget',
        'Deadline'
    ];

    // const onChange = e => {
    //     setAddProject(prevProject => ({
    //         ...prevProject,
    //         [e.target.name]: e.target.value
    //     }));
    // };

    const onChange = e => {
        let value = e.target.value;
    
        // Convert the date format if the input is the 'deadline' input
        if(e.target.name === 'deadline') {
            value = formatToDDMMYYYY(value);
        }
    
        setAddProject(prevProject => ({
            ...prevProject,
            [e.target.name]: value
        }));
    };
    
    
    const addSkill = () => {
        if (currentSkill.trim() && skills.length < 15) {
            setSkills(prevSkills => [...prevSkills, currentSkill.trim()]);
    
            setAddProject(prevProject => ({
                ...prevProject,
                skills_required: prevProject.skills_required 
                    ? [...prevProject.skills_required, currentSkill.trim()]
                    : [currentSkill.trim()]
            }));
    
            setCurrentSkill('');
            setError('');
        } else if (skills.length >= 15) {
            setError('You can add a maximum of 15 skills.');
        }
    };
    
    const removeSkill = (index) => {
        const newSkills = skills.filter((_, idx) => idx !== index);
    
        setSkills(newSkills);
        setAddProject(prevProject => ({
            ...prevProject,
            skills_required: newSkills
        }));
        setError('');
    };


    useEffect(() => {
        switch (step) {
            case 1:
                if (addProject.title && addProject.category) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
                break;
            case 2:
                if (addProject.description) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
                break;
            case 3:
                if (addProject.skills_required && addProject.skills_required.length > 0) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
                break;
            case 4:
                if (addProject.budget) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
                break;
            case 5:
                if (addProject.deadline) {
                    setIsValid(true);
                } else {
                    setIsValid(false);
                }
                break;
            default:
                setIsValid(false);
                break;
        }
    }, [step, addProject]);
    
    const formatToYYYYMMDD = (dateStr) => {
        if(!dateStr) return '';
        const [day, month, year] = dateStr.split("-");
        return `${year}-${month}-${day}`;
    }
    
    const formatToDDMMYYYY = (dateStr) => {
        if(!dateStr) return '';
        const [year, month, day] = dateStr.split("-");
        return `${day}-${month}-${year}`;
    }
    
    
  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
    <h1 className="font-cardo text-[26px] text-[#031136] text-left font-normal p-3">Add Job Post</h1>
    <div className='my-2 bg-[#FFFFFF] border border-gray-100 text-left'>
    <div className="p-8">
                <h2 className="text-xl mb-4 font-cardo">{`${step}/5`}</h2>
                <div className='py-1'>
                {step === 1 && (
    <div className="flex justify-between items-center">
        <div className="flex-1 mr-4 my-5">
            <h1 className="text-4xl text-green-600 font-cardo font-semibold">Your Job Post Title</h1>
            <p className="text-lg opacity-50 font-cardo font-medium py-4">Make it Shine, Attract the Right Candidates, <br />Land the Best Talent</p>
        </div>
        <div className="flex-1">
        <label className="block text-xl mt-3 font-cardo" htmlFor="jobCategory">Job Title</label>
    <input 
        type="text" 
        onChange={onChange}
        name="title"
        value={addProject.title || ''}
        className='border my-2 py-2 px-3 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' 
        placeholder="Add Job title" 
    />
    <label className="block text-xl mt-3 font-cardo" htmlFor="jobCategory">Job Category</label>
    <input 
        type="text" 
        name="category"
        onChange={onChange}
        value={addProject.category || ''}
        className='border my-2 py-2 px-3 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' 
    />
    {/* <select 
        value={addProject.category}
        onChange={onChange}
        className="border mt-2 py-2 px-3 bg-white rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
    >
        <option>Web_development</option>
        {/* <option value="development">Development</option>
        <option value="marketing">Marketing</option> *
    </select> */}
</div>
    </div>
)}

                {step === 2 && (
                    <div className="flex justify-between items-center">
                    <div className="flex-1 mr-4 my-5">
                        <h1 className="text-4xl text-green-600 font-cardo font-semibold">Your Job Description</h1>
                        <p className="text-lg opacity-50 font-cardo font-medium py-4">Post Your Job Description To Find Top Talent</p>
                    </div>
                    <div className="flex-1">
                    <label className="block text-xl mt-3 font-cardo" htmlFor="jobCategory">Job Description</label>
                    <textarea name="description" id="" cols="30" rows="5" className='border py-2 px-3 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder='Write Your Job Description Here' onChange={onChange} value={addProject.description || ''}></textarea> 
            </div>
                </div>
                )}
                {step === 3 && (
                    <div className="flex justify-between items-center">
                    <div className="flex-1 mr-4 my-5">
                        <h1 className="text-4xl text-green-600 font-cardo font-semibold">Your Job Skills</h1>
                        <p className="text-lg opacity-50 font-cardo font-medium py-4">What are the main skills required for your work?</p>
                    </div>
                    <div className="flex-1">
                    <div className="border rounded-md p-2 flex items-center flex-wrap my-3">
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
            name="skills_required"
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
            </div>
                </div>
                )}
                {step === 4 && (
                <div className="flex justify-between items-center">
    <div className="flex-1 mr-4 my-5">
        <h1 className="text-4xl text-green-600 font-cardo font-semibold">Tell us about your budget</h1>
        <p className="text-lg opacity-50 font-cardo font-medium py-4">This will help us match you to talent within your range.</p>
    </div>
    <div className="flex-1">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full mb-4">
            <div 
                className={`flex sm:block items-center w-full sm:flex-1 p-4 border ${selectedOption === 'hourly' ? 'border-lime-300' : ''} hover:border-lime-300 hover:shadow-md transition duration-300 cursor-pointer h-[120px] sm:h-auto`}
                onClick={() => setSelectedOption('hourly')}
            >
                <i className="bi bi-alarm text-3xl sm:-mt-3 mr-4 sm:mr-0 text-green-600"></i>
                <h5 className='text-left font-cardo text-2xl lg:pt-3'>Hourly Rate</h5>
            </div>
            <div 
                className={`flex sm:block items-center w-full sm:flex-1 p-4 border ${selectedOption === 'fixed' ? 'border-lime-300' : ''} hover:border-lime-300 hover:shadow-md transition duration-300 cursor-pointer h-[120px] sm:h-auto`}
                onClick={() => setSelectedOption('fixed')}
            >
                <i className="bi bi-tag-fill sm:-mt-3 mr-4 sm:mr-0 text-3xl text-green-600"></i>
                <h5 className='text-left font-cardo text-2xl lg:pt-3'>Fixed Budget</h5>
            </div>
        </div>
        
        <div className="min-h-[160px]"> 
            {selectedOption === 'hourly' && (
                <div>
                    <div className="flex space-x-16">
                        <div className="flex flex-col">
                            <label className="block text-xl mt-3 font-cardo" htmlFor="fromInput">From</label>
                            <div className="flex items-center">
                                <input id="fromInput" type="text" placeholder="" className="flex-1 w-36 mr-1 p-2 border my-1 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600" />
                                <span>/hr</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-xl mt-3 font-cardo" htmlFor="toInput">To</label>
                            <div className="flex items-center">
                                <input id="toInput" type="text" placeholder="" className="flex-1 w-36 mr-1 p-2 border my-2 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600" />
                                <span>/hr</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg opacity-50 font-cardo font-medium py-2">Set your Hourly Rate</p>
                </div>
            )}

            {selectedOption === 'fixed' && (
                <div>
                    <label className="block text-xl mt-3 font-cardo" htmlFor="maxBudgetInput">Maximum Budget</label> 
                    <input id="maxBudgetInput" type="text" className='border my-2 p-2 rounded-md w-52 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' placeholder='' onChange={onChange} name="budget" value={addProject.budget || ''}/>
                    <p className="text-lg opacity-50 font-cardo font-medium py-2">Set your Project Budget</p>
                </div>
            )}
        </div>
    </div>
</div>

                )}
                {step === 5 && (
                    <div className="flex justify-between items-center">
                    <div className="flex-1 mr-4 my-5">
                        <h1 className="text-4xl text-green-600 font-cardo font-semibold">Your Deadline</h1>
                        <p className="text-lg opacity-50 font-cardo font-medium py-4">Post Your Job Deadline</p>
                    </div>
                    <div className="flex-1">
                    <label className="block text-xl mt-3 font-cardo" htmlFor="jobCategory">Deadline</label>
                    <input id="" name="deadline" type="date" className='border my-2 p-2 rounded-md w-full focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600' onChange={onChange} value={formatToYYYYMMDD(addProject.deadline || '')}/>
            </div>
                </div>
                )}
         </div>     
                
<div className="flex justify-between mt-8">
    {step > 1 ? (
        <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75] mr-2">
            <Link to='' onClick={() => {
                window.scrollTo(0, 0);
                prevStep();
            }}>
                <button class="px-6 py-1 bg-white">
                    <p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Back</p>
                </button>
            </Link>
        </div>
    ) : (
        <div class="p-0.5 inline-block rounded mr-2" style={{ visibility: "hidden" }}>
            <button class="px-6 py-1 bg-white">
                <p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Back</p>
            </button>
        </div>
    )}

    {step < 5 ? (
    <Link to='' onClick={(e) => {
        if (!isValid) {
            e.preventDefault();
            return;
        }
        window.scrollTo(0, 0);
        nextStep();
    }}>
        <span class={`text-sm px-6 py-[10px] ${isValid ? 'bg-gradient-to-r from-[#00BF58] to-[#E3FF75]' : 'bg-gray-400 cursor-not-allowed'} border rounded border-none text-white font-semibold`} >Next: {stepsLabels[step]}</span>
    </Link>
) : (
    <Link to={isValid ? '/View-all/Job-post' : '#'} onClick={(e) => {
        if (!isValid) {
            e.preventDefault();
            return;
        }
        AddProjects();
        window.scrollTo(0, 0);
    }}>
        <span class={`text-sm px-6 py-[10px] ${isValid ? 'bg-gradient-to-r from-[#00BF58] to-[#E3FF75]' : 'bg-gray-400 cursor-not-allowed'} border rounded border-none text-white font-semibold`}>Post A Job</span>
    </Link>
    
    )}
</div>

            </div>
            </div>
            </div>
    <HomeSection4/>
    <Footer/>
    </>
  )
}

export default AddJobPost