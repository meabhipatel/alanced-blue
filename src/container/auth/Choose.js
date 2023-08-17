import React, { useState } from 'react'
import choose from '../../components/images/choose.png'
import { Link } from 'react-router-dom'
import client from '../../components/images/client.png';
import freelancer from '../../components/images/freelancer.png';

const Choose = () => {
  
  const [selectedOption, setSelectedOption] = useState('client');
  console.log(selectedOption)

  return (
    <div className="h-screen flex items-center justify-center" style={{ 
        backgroundImage: `url(${choose})`,
        backgroundSize: '850px 550px',  
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}>
   <div class="bg-white shadow-lg p-14 pt-8 w-[550px] h-[320px] max-w-2xl flex flex-col items-center border border-lime-300">
    <h3 className='text-center font-cardo mb-8 text-xl'>Join As A Client or Freelancer</h3>

    <div class="flex space-x-4 w-full mb-8">
    <div 
        class={`flex-1 p-6 border ${selectedOption === 'client' ? 'border-lime-300' : ''} hover:border-lime-300 hover:shadow-md transition duration-300 cursor-pointer h-[120px]`}
        onClick={() => setSelectedOption('client')}
    >
        <img src={client} alt="" className='h-[50px] -mt-3'/>
        <h5 className='text-left font-cardo text-[16px] py-1'>I’m a client, hiring <br />for a project</h5>
    </div>

    <div 
        class={`flex-1 p-6 border ${selectedOption === 'freelancer' ? 'border-lime-300' : ''} hover:border-lime-300 hover:shadow-md transition duration-300 cursor-pointer h-[120px]`}
        onClick={() => setSelectedOption('freelancer')}
    >
        <img src={freelancer} alt="" className='h-[50px] -mt-3'/>
        <h5 className='text-left font-cardo text-[16px] py-1'>I’m a freelancer, looking <br />for work</h5>
    </div>
</div>


   {selectedOption === 'freelancer' ?  <Link to='/freelancer/registration'><button 
        class="block w-[320px] px-4 py-2 -mt-2 text-sm leading-5 text-center transition-colors duration-150 border border-none rounded-lg  focus:outline-none focus:shadow-outline-blue bg-gradient-to-r from-[#00BF58] to-[#E3FF75]  text-white font-semibold">
       {selectedOption === 'client' ? 'Join as a Client' :'Join as a Freelancer'}
    </button></Link> :  <Link to='/hirer/registration'><button 
        class="block w-[320px] px-4 py-2 -mt-2 text-sm leading-5 text-center transition-colors duration-150 border border-none rounded-lg  focus:outline-none focus:shadow-outline-blue bg-gradient-to-r from-[#00BF58] to-[#E3FF75]  text-white font-semibold">
       {selectedOption === 'client' ? 'Join as a Client' :'Join as a Freelancer'}
    </button></Link> }
</div>


</div>
  )
}

export default Choose