import API from "../../config/API";
import DataService from "../../config/Dataservice"
import { handleError, setHeadersWithAccessToken } from './Comman';


export const AddFreelancer = async (data) =>{
    // setHeadersWithAccessToken(token);
    return DataService.post(API.Freelancers.Freelancer.Registration, data)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return handleError(err);
    });
};


