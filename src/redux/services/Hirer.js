import API from "../../config/API";
import DataService from "../../config/Dataservice"
import { handleError, setHeadersWithAccessToken } from './Comman';


export const AddHirer = async (data) =>{
    // setHeadersWithAccessToken(token);
    return DataService.post(API.Hirers.Hirer.HirerRegistration, data)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return handleError(err);
    });
};


export const GetViewAllfreelancers = async () => {
    return await DataService.get(API.Hirers.Hirer.ViewAllFreelancers)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => {
        return handleError(err);
      });
  };

