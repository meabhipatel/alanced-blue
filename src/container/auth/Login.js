import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../redux/Auth/AuthAction";
import { Link, useNavigate } from "react-router-dom";
import loginimg from '../../components/images/loginimg.png';
import google from '../../components/images/google.png';
import logo from '../../components/images/Alanced.png'
import { toast } from "react-toastify";


const Login = (props) => {

    const [authDetails, setAuthDetails] = React.useState()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [show, toogleShow] = useState(false)
    const [inputType, setInputType] = useState('password');
    const [rememberMe, setRememberMe] = useState(false);
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

    
    const togglePasswordVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
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
        else if (!(uname.trim().length && upass.trim().length)){
            toast.error("Email and password Both fields are required");
            return;
        }
        else{
            toogleShow(false)
        }
        toogleShow(true);
        dispatch(LoginAction(authDetails, navigate,rememberMe))
    }
    
    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const expiry = new Date(localStorage.getItem('tokenExpiry'));
    
        if (token && new Date() < expiry) {
        } else {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('tokenExpiry');
        }
    }, []);
    
     
    return (
        <>
      <div className="flex items-center min-h-screen bg-gray-50">
    <div className="flex-1 h-full max-w-4xl mx-auto bg-white">
        <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-[45%]">
    <img className="w-full h-[580px] md:h-auto object-cover" src={loginimg} alt="img" />
    <Link to='/'>
        <div className="absolute rounded-tr rounded-br rounded-tl-none rounded-bl-none top-[29px] left-[18%] sm:left-1/4 md:left-[73.2px] transform -translate-x-1/2 flex items-center space-x-2 lg:bg-white bg-[#E2F9EE] p-3">
            <img src={logo} alt="Logo" className="h-5 w-5 md:h-6 md:w-6" /> 
            <span className="font-semibold text-[15px] tracking-widest ml-2 font-poppins text-[#031136] md:text-[16px]">ALANCED</span>
        </div> 
    </Link>
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
                                    Email Address <span class="text-red-500">*</span>
                                </label>
                                <input type="email"
                                    class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                    placeholder="example@gmail.com" id="uname" onChange={onChange} name='email' required/>
                            </div>
                            <div>
                            <label class="block mt-4 text-sm text-left font-cardo">
                                Password <span class="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={inputType}
                                    class="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-600"
                                    placeholder="•••••••••••"
                                    name='password'
                                    id="upass"
                                    onChange={onChange}
                                    required
                                />
                                <button 
                                    onClick={togglePasswordVisibility}
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2"
                                >
                                    <i className={`fa ${inputType === 'password' ? 'fa-eye-slash' : 'fa-eye'} text-lime-600`}></i>
                                </button>
                            </div>
                        </div>
                            <div class="mb-6 mt-4 text-left flex justify-between items-center">
                                <label class="flex items-center font-inter">
                                    <input class="mr-2 leading-tight accent-lime-600" type="checkbox" 
                                     onChange={(e) => setRememberMe(e.target.checked)}
                                     />
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
