import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../redux/Auth/AuthAction";
import { Link, useNavigate } from "react-router-dom";
import loginimg from '../../components/images/login.png';
import google from '../../components/images/google.png';


const Login = (props) => {

    const [authDetails, setAuthDetails] = React.useState()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [show, toogleShow] = useState(false)
  
  
    const login = useSelector(state => state.login.Login)
  
   
    const Loader = () =>{
        if(login ==false || login == true){
            toogleShow(false)
        }
        return(
            <>
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white mx-auto"></div>
            </>
        )
    }

    const onChange = (e) => {
        setAuthDetails({ ...authDetails, [e.target.name]: e.target.value })
    }

   

    const LoginButton = async() => {
        const uname = document.getElementById("uname").value
        const upass = document.getElementById("upass").value
        // const login = await login
        if(uname.trim().length && upass.trim().length != 0)
        {
        toogleShow(true)
        }
        else{
            toogleShow(false)
        }
        dispatch(LoginAction(authDetails, navigate))
    }
    
     
    return (
        <>
      <div className="flex items-center min-h-screen bg-gray-50">
    <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg">
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[45%]">
                <img className="w-full h-[580px] md:h-auto object-cover" src={loginimg} alt="img" />
            </div>
            <div className="w-full flex items-center justify-center px-4 sm:px-14 md:w-[55%] mt-8 md:mt-0">
                <div className="w-full">
                <div class="flex items-center justify-between -mt-[20px]">
                            <p className="inline-block ml-[170px] text-xs">Don't have an account?</p>
                            <Link to='/choose'><span class="inline-block text-sm px-4 py-[10px] bg-gradient-to-r from-[#00BF58] to-[#E3FF75] border rounded border-none text-white font-semibold">Sign Up</span></Link>
                        </div>
                          
                            <h1 class="mb-4 text-xl text-left mt-10 font-cardo text-gray-700">
                            Welcome Sign In to <br />
                            Learn Encourage Share , Continue.
                            </h1>
                            <div>
                                <label class="block text-sm text-left font-cardo">
                                    Email Address
                                </label>
                                <input type="email"
                                    class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                    placeholder="example@gmail.com" id="uname" onChange={onChange} name='email'/>
                            </div>
                            <div>
                                <label class="block mt-4 text-sm text-left font-cardo">
                                    Password
                                </label>
                                <input
                                    class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                    placeholder="•••••••••••" type="password" id="upass" onChange={onChange} name='password'/>
                            </div>
                            <div class="mb-6 mt-4 text-left flex justify-between items-center">
                                <label class="flex items-center font-inter">
                                    <input class="mr-2 leading-tight accent-lime-600" type="checkbox"/>
                                    <span class="text-xs">
                                        Remember me
                                    </span>
                                </label>
                                <Link to=''><span class="text-xs font-inter text-yellow-400">
                                    Reset Password
                                </span></Link>
                            </div>
                            <button
                                class="block w-full px-4 py-2 mt-4 text-sm leading-5 text-center transition-colors duration-150 border border-none rounded-lg  focus:outline-none focus:shadow-outline-blue bg-gradient-to-r from-[#00BF58] to-[#E3FF75]  text-white font-semibold"
                                href="#"
                                onClick={LoginButton}
                            >
                                {show ? <div><Loader/></div> : "Sign In"}
                            </button>

                            <div class="flex items-center">
                            <div class="flex-1 border-t-2 my-8"></div>
                            <span class="px-4 bg-white font-jost">or</span>
                            <div class="flex-1 border-t-2 my-8"></div>
                            </div>

                            <button class=" w-full px-4 py-2 text-sm leading-5 text-center transition-colors duration-150 border border-gray-200 rounded-lg focus:outline-none focus:shadow-outline-blue bg-white text-black font-semibold flex items-center justify-center font-jost" href="#"><img src={google} alt="" class="mr-2" /> Sign In with Google</button>
                            <p className="text-xs pt-2 font-inter">Don't have an account? <Link to='/choose'><span className="text-yellow-400">Create an account</span></Link> It takes less than a minute.</p>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    )
}


export default Login;
