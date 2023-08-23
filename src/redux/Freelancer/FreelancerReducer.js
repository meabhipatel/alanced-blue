import { toast } from "react-toastify";
import { ADD_NEW_FREELANCER_REQUEST,
ADD_NEW_FREELANCER_SUCCESS,
SERVER_ERROR} from "./FreelancerConstant"



const initialState = {
    allFreelancer: [],
  };
  

const FreelancerReducer =(state = initialState, action) => {
    switch (action.type){
        case ADD_NEW_FREELANCER_REQUEST:
            return { loading: true };
        case ADD_NEW_FREELANCER_SUCCESS:
            toast.success("Freelancer Registration Sucessfull")
            return { loading: false, addfree:true }
        case SERVER_ERROR:
            toast.error(action.payload.message)
            return{loading: false, addfree:true}
        default:
            return state;
    }
};


export default FreelancerReducer;