import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { UpdateFreelancerProfileAction } from '../../../redux/Freelancer/FreelancerAction';

const EditSkillPopup = ({ closeEditSkill }) => {

  const freelancerselfprofile = useSelector(state => state.freelancer.freelancerselfprofile);
  const accessToken = useSelector(state => state.login.accessToken);  
  const dispatch = useDispatch();
  
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (freelancerselfprofile && freelancerselfprofile[0] && freelancerselfprofile[0].skills) {
      setSkills(JSON.parse(freelancerselfprofile[0].skills.replace(/'/g, '"')));
    }
  }, [freelancerselfprofile]);

  const addSkill = (newSkill) => {
    if (skills.length >= 15) {
      setError('You can add a maximum of 15 skills.');
      return;
    }

    setSkills([...skills, newSkill]);
    setError('');
  };

  const removeSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
    setError('');
  };

  const handleSave = () => {
    dispatch(UpdateFreelancerProfileAction({ skills: JSON.stringify(skills) }, accessToken));
    closeEditSkill();
  };

    // const [skills, setSkills] = useState([]);
    // const [currentSkill, setCurrentSkill] = useState('');
    // const [error, setError] = useState('');
  
    // const handleKeyDown = (event) => {
    //   if (skills.length >= 15) {
    //     setError('You can add maximum 15 skills.');
    //     return;
    //   }
  
    //   if (event.key === 'Enter' && currentSkill.trim()) {
    //     setSkills([...skills, currentSkill.trim()]);
    //     setCurrentSkill('');
    //     setError('');  
    //   }
    // };
  
    // const removeSkill = (index) => {
    //   const newSkills = [...skills];
    //   newSkills.splice(index, 1);
    //   setSkills(newSkills);
    //   setError('');  
    // };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
    <div className="fixed inset-0 bg-black opacity-50"></div>
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 px-8 relative z-20">
        <div className="flex justify-between items-center">
          <h1 className="font-cardo text-[26px] text-[#031136] font-normal">Edit Skills</h1>
          <button onClick={closeEditSkill} className="text-gray-500 hover:text-gray-700">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="mt-10">
          <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Skills</h1>
          <div className="border rounded-md p-2 flex items-center flex-wrap my-3">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border-none text-white  font-semibold rounded px-2 py-1.5 mr-3 my-2 flex items-center">
                <span>{skill}</span>
                <button onClick={() => removeSkill(index)} className="ml-2 mt-1 pb-0.5 text-sm bg-white text-green-500 rounded-full w-4 h-4 flex justify-center items-center">
                  &times;
                </button>
              </div>
            ))}
            <input 
              type="text" 
              value={currentSkill} 
              onChange={(e) => setCurrentSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && currentSkill.trim()) {
                  addSkill(currentSkill.trim());
                  setCurrentSkill('');
                }
              }}
              placeholder="Enter Skills here"
              className="outline-none w-full"
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="mt-8 flex justify-end">
          <Link to="" onClick={handleSave}><span className="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold" >Save</span></Link>
          <div className="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]" onClick={closeEditSkill}>
            <Link to=''><button className="px-2 py-1 bg-white"><p className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
          </div>     
        </div>
      </div>
    </div>
  </div>
//     <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
//     <div className="fixed inset-0 bg-black opacity-50"></div>
//     <div className="flex items-center justify-center min-h-screen">
//     <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 px-8 relative z-20">
//     <div className="flex justify-between items-center">
//         <h1 className="font-cardo text-[26px] text-[#031136] font-normal">Edit Skills</h1>
//         <button onClick={closeEditSkill} className="text-gray-500 hover:text-gray-700">
//             <i class="bi bi-x-lg"></i>
//         </button>
//     </div>
//     <div className='mt-10'>
//             <h1 className="font-cardo text-[20px] text-[#031136] font-normal text-left">Skills</h1>
//             <div>
//       <div className="border rounded-md p-2 flex items-center flex-wrap my-3">
//         {skills.map((skill, index) => (
//           <div key={index} className="bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border-none text-white  font-semibold rounded px-2 py-1.5 mr-3 my-2 flex items-center">
//             <span>{skill}</span>
//             <button 
//               onClick={() => removeSkill(index)}
//               className="ml-2 mt-1 pb-0.5 text-sm bg-white text-green-500 rounded-full w-4 h-4 flex justify-center items-center"
//             >
//               &times;
//             </button>
//           </div>
//         ))}
//         <input 
//           type="text" 
//           value={currentSkill} 
//           onChange={(e) => setCurrentSkill(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder="Enter Skills here"
//           className="outline-none w-full"
//         />
//       </div>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//             <div className="mt-8 flex justify-end">
//             <Link to=''><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold" >Save</span></Link>
//             <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]" onClick={closeEditSkill}>
//                 <Link to=''><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
//             </div>     
//             </div>
//             </div>
// </div>
//     </div>
// </div>
  )
}

export default EditSkillPopup