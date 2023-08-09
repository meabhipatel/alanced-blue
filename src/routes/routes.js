import {
    // BrowserRouter,
    Route,
    Routes,
    // useNavigate,
    Navigate,
    useNavigate
  } from "react-router-dom";
  import React from 'react'
  // import Home from "../container/Home";
  import Login from "../container/auth/Login";
  // import About from "../container/About";
  // import Header from "../components/Header";
  // import Products from "../container/Products";
  import { useSelector } from "react-redux";
  import { ToastContainer } from "react-toastify";
  import Header from "../components/Layout/Header";
import Registration from "../container/auth/Registration";
  
  

  const AppRouter = (props) => {
    
   
    const loginType = useSelector((state) => state.login.type);
    const state = useSelector((state) => state)
    const navigate = useNavigate();
    
    React.useEffect(() => {
    if (loginType == 'HIRER' || loginType == 'FREELANCER') {
      navigate('/')
    }
  }, [loginType])

    return (
      <>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
  
        <ToastContainer />
      </>
    );
  };
  
  export default AppRouter;
  