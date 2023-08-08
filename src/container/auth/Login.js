import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../redux/Auth/AuthAction";
import { useNavigate } from "react-router-dom";
// import Button from "../../components/comman/Button/Button";
// import { Button } from "@material-tailwind/react";
const Login = (props) => {

    const [authDetails, setAuthDetails] = React.useState()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [show, toogleShow] = useState(false)
    

    const User = useSelector(state => state.login.accessToken)
    const login = useSelector(state => state.login.Login)
   

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
    const Button = (props) => {
        return (
            <>
                <button onClick={props.onClick} className={`p-4 text-white font-semibold hover:bg-black bg-${props.background}`}>{props.text}</button>
            </>
        )
    }

    console.log("login ...",LoginButton)
    
    return (
        <>
            {/* <AuthLayout> */}
                <div class="flex flex-col md:w-1/3 ml-auto mr-auto p-12 space-x-8 space-y-4 shadow-xl relative z-0" >
                    <div className="ml-auto mr-auto">
                        <img className="w-32" src='/images/logo.png' />
                    </div>
                    <hr />
                    <label for="email"><b>Email</b></label>
                    <input id="uname" onChange={onChange} name='email' className="p-4 bg-gray-100 rounded" type="text" placeholder="Enter Email" required />
                    <label for="psw"><b>Password</b></label>
                    <input id="upass" onChange={onChange} name='password' className="p-4 bg-gray-100 rounded" type="password" placeholder="Enter Password" required />

                    {/* <label for="psw-repeat"><b>Repeat Password</b></label>
                <input onChange={(event) => { setcfpassword(event.target.value) }} className="p-4 bg-gray-100 rounded" type="password" placeholder="Repeat Password" name="psw-repeat" required /> */}
                    <label>
                        <input type="checkbox" name="remember" style={{ marginTop: '20px' }} /> Remember me
                    </label>

                    <div class="clearfix w-full">
                        <Button text="Login" background="red-500" onClick={LoginButton} />
                        {/* <button onClick={LoginButton} type="submit" className="p-4 hover:bg-black w-40 bg-red-500 text-white text-bold" >Login</button> */}
                    </div>
                </div>
                
            {/* </AuthLayout> */}
        </>
    )
}


export default Login;
