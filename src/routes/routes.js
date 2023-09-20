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
import SavedJobs from '../container/freelancer/SavedJobs';
import MyProposals from '../container/freelancer/MyProposals'
import MyJobs from '../container/freelancer/MyJobs';
import Messages from "../container/messages/Messages"
import SearchJobs from '../container/freelancer/SearchJobs'
import MyProposalArchived from "../container/freelancer/MyProposalArchived";
import AllContracts from "../container/freelancer/AllContracts";
import MyReports from "../container/freelancer/MyReports";
import AddPortfolio from "../container/freelancer/portfolio/AddPortfolio";
import SelectTemplete from "../container/freelancer/portfolio/SelectTemplete";
import AddBidAmount from "../container/freelancer/AddBidAmount";
import SendProposal from "../container/freelancer/SendProposal";
import HirerAfterLogin from "../container/hirer/HirerAfterLogin";

  const AppRouter = (props) => {
    
   
    const loginType = useSelector((state) => state.login.type);
    const state = useSelector((state) => state)
    const navigate = useNavigate();
    
    React.useEffect(() => {
    if (loginType == 'HIRER') {
      navigate('/hirer/profile')
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
          <Route path="/freelancer/edit-profile" element={<FreelancerSelfProfile/>}/>
          <Route path="/freelancer/profile" element={<FreelancerAfterLogin/>}/>
          <Route path="/freelancer/view-project/detail" element={<ViewProjectNewTab/>}/>
          <Route path="/freelancer/view-referals" element={<MyProposalReferrals/>}/>
          <Route path="/saved-jobs" element={<SavedJobs/>}/>
          <Route path="/my-proposals" element={<MyProposals/>}/>
          <Route path="/my-jobs" element={<MyJobs/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/search-jobs" element={<SearchJobs/>}/>
          <Route path="/freelancer/view-archived" element={<MyProposalArchived/>}/>
          <Route path="/freelancer/all-contracts" element={<AllContracts/>}/>
          <Route path="/freelancer/my-reports" element={<MyReports/>}/>
          <Route path="/freelancer/add/portfolio" element={<AddPortfolio/>}/>
          <Route path="/freelancer/select/templete" element={<SelectTemplete/>}/>
          <Route path="/freelancer/add-bid" element={<AddBidAmount/>}/>
          <Route path="/freelancer/send-proposal" element={<SendProposal/>}/>
          <Route path="/hirer/profile" element={<HirerAfterLogin/>}/>
          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
  
        <ToastContainer />
      </>
    );
  };
  
  export default AppRouter;
  