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
import FreelancerRegistration from '../container/freelancer/FreelancerRegistration'
import HirerRegistration from '../container/hirer/HirerRegistration'
import Choose from "../container/auth/Choose";
import ProjectList from "../container/freelancer/ProjectList";
import FreelancerSelfProfile from "../container/freelancer/FreelancerSelfProfile";
import FreelancerAfterLogin from "../container/freelancer/FreelancerAfterLogin";
import ViewProjectNewTab from "../container/freelancer/AllPopup/ViewProjectNewTab";
import MyProposalReferrals from "../container/freelancer/MyProposalReferrals";

  const AppRouter = (props) => {
    
   
    const loginType = useSelector((state) => state.login.type);
    const state = useSelector((state) => state)
    const navigate = useNavigate();
    
    React.useEffect(() => {
    if (loginType == 'HIRER') {
      navigate('/')
    }
    if (loginType == 'FREELANCER') {
      navigate('/freelancer/profile')
    }
  }, [loginType])

    return (
      <>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/freelancer/registration" element={<FreelancerRegistration />} />
          <Route path="/hirer/registration" element={<HirerRegistration/>}/>
          <Route path="/choose" element={<Choose />} />
          <Route path="/projects" element={<ProjectList/>}/>
          <Route path="/freelancer/editprofile" element={<FreelancerSelfProfile/>}/>
          <Route path="/freelancer/profile" element={<FreelancerAfterLogin/>}/>
          <Route path="/freelancer/view/project/detail" element={<ViewProjectNewTab/>}/>
          <Route path="/freelancer/view/referals" element={<MyProposalReferrals/>}/>
          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
  
        <ToastContainer />
      </>
    );
  };
  
  export default AppRouter;
  