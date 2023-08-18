import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import registerimg from '../../components/images/register.png'
import google from '../../components/images/google.png'
import box from '../../components/images/box.png'
import registerimg2 from '../../components/images/register2.png'
import { useDispatch, useSelector } from 'react-redux';
import { AddNewHirerAction } from '../../redux/Hirer/HirerAction'
import logo from '../../components/images/Alanced.png'


const Registration = () => {

    const [addHirer, setAddHirer] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addhirer = useSelector(state => state.hirer.addhirer);
    const [show, toogleShow] = useState(false);
    const Loader = () =>{
        if(addhirer ==false || addhirer == true){
            toogleShow(false)
            navigate('/')
        }
        return(
            <>
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white mx-auto"></div>
            </>
        )
    }

    const AddHirer = () => {
        const formData = new URLSearchParams();
        formData.append("first_Name",addHirer.first_Name);
        formData.append("last_Name",addHirer.last_Name);
        formData.append("email",addHirer.email);
        formData.append("password",addHirer.password);
        formData.append("password2",addHirer.password);

        dispatch(AddNewHirerAction(formData));
        toogleShow(true)
    }

    const onChange = e =>{
        setAddHirer({
            ...addHirer,[e.target.name]: e.target.value
        });
    }

  return (
    <>
    <div class="flex items-center min-h-screen bg-gray-50">
    <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div class="flex flex-col md:flex-row">
            <div class="relative h-[535px] md:h-auto md:w-[45%]">
                <img class="w-full h-full object-cover md:h-[580px]" src={registerimg2} alt="img"/>
                <Link to='/'>
        <div className="absolute rounded-tr rounded-br rounded-tl-none rounded-bl-none top-[19px] left-[18%] sm:left-1/4 md:left-[73.2px] transform -translate-x-1/2 flex items-center space-x-2 lg:bg-white bg-[#E2F9EE] p-3">
            <img src={logo} alt="Logo" className="h-5 w-5 md:h-6 md:w-6" /> 
            <span className="font-semibold text-[15px] tracking-widest ml-2 font-poppins text-[#031136] md:text-[16px]">ALANCED</span>
        </div> 
    </Link>
            </div>
            <div class="flex items-center justify-center p-8 sm:px-14 md:w-[57%]">
                <div class="w-full">
                <div class="flex items-center justify-between -mt-[20px]">
                        <p className="inline-block ml-[170px] text-xs">Already have an account?</p>
                        <Link to='/login'><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Sign in</span></Link>
                    </div>
                      
                        <h1 class="mb-4 text-xl text-left mt-10 font-cardo text-gray-700">
                        Create Your Free Account
                        </h1>
                        <div class='flex flex-row space-x-4'>
                        <div className=''>
                            <label class="block text-sm text-left font-cardo">
                                First Name
                            </label>
                            <input type="text"
                                class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                placeholder="First Name"  name='first_Name' onChange={onChange}/>
                        </div>
                        <div className=''>
                            <label class="block text-sm text-left font-cardo">
                                Last Name
                            </label>
                            <input type="text"
                                class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                placeholder="Your Last Name"  name='last_Name' onChange={onChange}/>
                        </div>
                        </div>
                        <div>
                            <label class="block text-sm text-left font-cardo mt-4">
                                Email Address
                            </label>
                            <input type="email"
                                class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                placeholder="example@gmail.com"  name='email' onChange={onChange}/>
                        </div>
                        <div>
                            <label class="block mt-4 text-sm text-left font-cardo">
                                Password
                            </label>
                            <input
                                class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                placeholder="•••••••••••" type="password"  name='password' onChange={onChange}/>
                        </div>

                        <button
                            class="block w-full px-4 py-2 mt-4 text-sm leading-5 text-center transition-colors duration-150 border border-none rounded-lg  focus:outline-none focus:shadow-outline-blue bg-gradient-to-r from-[#00BF58] to-[#E3FF75]  text-white font-semibold"
                            href="#" onClick={AddHirer}>
                            {show ? <div><Loader/></div> : "Create your account"}
                        </button>

                        <div class="flex items-center">
                        <div class="flex-1 border-t-2 my-8"></div>
                        <span class="px-4 bg-white font-jost">or</span>
                        <div class="flex-1 border-t-2 my-8"></div>
                        </div>

                        <button class=" w-full px-4 py-2 text-sm leading-5 text-center transition-colors duration-150 border border-gray-200 rounded-lg focus:outline-none focus:shadow-outline-blue bg-white text-black font-semibold flex items-center justify-center font-jost" href="#"><img src={google} alt="" class="mr-2" /> Sign In with Google</button>
                        <p className="text-xs text-left pt-3 font-inter">Already have and Account? <Link to='/login'><span className="text-yellow-400">Sign in</span></Link></p>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
)
}

export default Registration
