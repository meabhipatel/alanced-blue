import React, { useEffect, useState } from 'react'
import Navbar from'./Navbar'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddUserContactAction } from '../../redux/User/UserAction'
import { toast } from 'react-toastify'


const ContactUs = () => {

  const initialUserState = {
    Applicant_Name: '',
    Applicant_Email: '',
    Applicant_Contact: '',
    Message: ''
};

    const [addUser, setAddUser] = useState(initialUserState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const adduser = useSelector(state => state.user.adduser);
    const [show, toogleShow] = useState(false);

    useEffect(() => {
      if (adduser) {
          setAddUser(initialUserState);
      }
  }, [adduser]);

    const Loader = () =>{
      if(adduser ==false || adduser == true){
          toogleShow(false)
          navigate('/contact-us')
      }
      return(
          <>
          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white mx-auto"></div>
          </>
      )
  }


  const validateContact = (contact) => {
    if (isNaN(contact)) {
        return false;
    }
    if (contact.length !== 10) {
        return false;
    }
    return true;
}


  const AddUserContact = () => {

    if (!addUser.Applicant_Name || !addUser.Applicant_Email || !addUser.Applicant_Contact || !addUser.Message) {
      toast.error("All fields are required");
      return;
  }

    if (!validateContact(addUser.Applicant_Contact)) {
      toast.error("Enter a valid Contact Number with 10 digits");
      return;
    }

    if (!addUser.Applicant_Email) {
      toast.error("Email is Required");
      return;
  }

    const formData = new URLSearchParams();
    formData.append("Applicant_Email",addUser.Applicant_Email);
    formData.append("Applicant_Name",addUser.Applicant_Name);
    formData.append("Applicant_Contact",addUser.Applicant_Contact);
    formData.append("Message",addUser.Message);
    

    dispatch(AddUserContactAction(formData));
    toogleShow(true)
}

const onChange = e =>{
    setAddUser({
        ...addUser,[e.target.name]: e.target.value
    });
}

  return (
    <>
    <Navbar/>
    <div className='mt-2 mx-[9%]'>
   <h1 className="font-cardo text-[26px] text-[#031136] text-left font-normal p-3">Contact Us</h1>
    
    <div class="w-28 mt-1 relative">
      <div class="absolute inset-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] rounded-lg"></div>
      <div class="border-gray-600 border-b-2 rounded-lg"></div>
    </div>
    <div class="md:flex my-4">
  <div class="flex-1 py-4">
  <input type="text" className='border my-2 py-1.5 px-2 rounded-md w-full focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600' placeholder='Your Name' name='Applicant_Name' onChange={onChange} value={addUser.Applicant_Name}/>
  <input type="text" className='border my-2 py-1.5 px-2 rounded-md w-full focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600' placeholder='Email' name='Applicant_Email' onChange={onChange} value={addUser.Applicant_Email}/>
  <input type="text" className='border my-2 py-1.5 px-2 rounded-md w-full focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600' placeholder='Phone' name='Applicant_Contact' onChange={onChange} value={addUser.Applicant_Contact}/>
  <textarea id="" cols="30" rows="4" className='border mt-2 mb-6 py-1.5 px-2 rounded-md w-full focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600' placeholder='Your Message' name='Message' onChange={onChange} value={addUser.Message}></textarea>
  <Link to='/contact-us' onClick={AddUserContact}><span class="w-full inline-block px-8 py-[10px] mt-4 lg:mt-0 bg-gradient-to-r from-[#0909E9] to-[#00D4FF] border rounded border-none text-white mr-4 font-semibold text-center text-md">{show ? <div><Loader/></div> : "Submit"}</span></Link>
  </div>
  <div class="flex-1 px-8">
  <h2 className="font-inter text-lg  text-[#031136] text-left font-semibold pt-5">Reach Out Directly:</h2>

  <h3 className="font-inter text-md  text-[#031136] text-left font-semibold pt-1"><i class="bi bi-envelope-at text-blue-600 mr-1"></i> Email: <span className='font-normal opacity-40'>contact@alanced.com</span></h3>
  
  </div>
</div>

    </div>
  
    <Footer/>
    </>
  )
}

export default ContactUs