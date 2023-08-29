import API from "../../config/API";
import DataService from "../../config/Dataservice"
import { handleError, setHeadersWithAccessToken } from './Comman';


export const AddFreelancer = async (data) =>{
    // setHeadersWithAccessToken(token);
    return DataService.post(API.Freelancers.Freelancer.FreelancerRegistration, data)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return handleError(err);
    });
};


export const GetFreelancerSelfProfile = async (token) => {    
    setHeadersWithAccessToken(token);
    return await DataService.get(API.Freelancers.Freelancer.FreelancerSelfProfileView)
      .then((res) => {
        console.log("Freelancer Self Profile",res);
        return res.data;
      })
      .catch((err) => {
        return handleError(err);
      });
  };


  
