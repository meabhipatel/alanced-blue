import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const EditLanguagePopup = ({ closeEditLanguage }) => {

    const [languages, setLanguages] = useState([
        { language: 'English', proficiency: 'Native or Bilingual' },
        { language: 'Hindi', proficiency: 'Native or Bilingual' },
    ]);


    const handleDelete = (indexToDelete) => {
        const newLanguages = languages.filter((_, index) => index !== indexToDelete);
        setLanguages(newLanguages);
    }
    

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto mt-10">
    <div className="fixed inset-0 bg-black opacity-50"></div>
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white rounded-lg w-[90%] md:w-[50%] p-6 px-8 relative z-20">
    <div className="flex justify-between items-center">
        <h1 className="font-cardo text-[26px] text-[#031136] font-normal">Edit Language</h1>
        <button onClick={closeEditLanguage} className="text-gray-500 hover:text-gray-700">
            <i class="bi bi-x-lg"></i>
        </button>
    </div>
    <div className='mt-10'>
    <div className="flex justify-between items-center mt-2 mb-6">
    <h1 className="flex-1 font-cardo text-[20px] text-[#031136] font-normal text-left mb-2">Language</h1>
    <h1 className="flex-1 font-cardo text-[20px] text-[#031136] font-normal text-left mb-2">Proficiency</h1>
    </div>

    {languages.map((langObj, index) => (
    <div key={index} className="flex justify-between items-center mt-2 mb-6">
        <div className="flex flex-col flex-1 mr-5">
            <select 
                value={langObj.language}
                disabled
                className="border py-2 px-2 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 flex-1 bg-white opacity-50"
                style={{appearance: 'none'}}
            >
                <option value={langObj.language}>{langObj.language}</option>
            </select>
        </div>

        <div className="flex flex-col flex-1 mr-5">
            <select 
                value={langObj.proficiency}
                onChange={(e) => {
                    let newLanguages = [...languages];
                    newLanguages[index].proficiency = e.target.value;
                    setLanguages(newLanguages);
                }}
                className="border py-2 px-2 rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600 flex-1 bg-white opacity-50"
            >
                <option value="Basic">Basic</option>
                <option value="Conversational">Conversational</option>
                <option value="Fluent">Fluent</option>
                <option value="Native or Bilingual">Native or Bilingual</option>
            </select>
        </div>

        <button 
            onClick={() => handleDelete(index)} 
            className="ml-3 bi bi-trash text-lime-500" 
        ></button>
    </div>
))}



            <div className="mt-8 flex justify-end">
            <Link to=''><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white mr-3 font-semibold" >Save</span></Link>
            <div class="p-0.5 inline-block rounded bg-gradient-to-b from-[#00BF58] to-[#E3FF75]" onClick={closeEditLanguage}>
                <Link to=''><button class="px-2 py-1 bg-white"><p class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent font-semibold text-sm py-[4px] px-[8px]">Cancel</p></button></Link>
            </div>     
            </div>
            </div>
</div>
    </div>
</div>
  )
}

export default EditLanguagePopup