import { toast } from "react-toastify";
import { ADD_NEW_FREELANCER_REQUEST,
ADD_NEW_FREELANCER_SUCCESS,
GET_FREELANCER_SELF_PROFILE_REQUEST,
GET_FREELANCER_SELF_PROFILE_SUCCESS,
GET_VIEW_ALL_PROJECT_REQUEST,
GET_VIEW_ALL_PROJECT_SUCCESS,
SERVER_ERROR} from "./FreelancerConstant"



const initialState = {
    allFreelancer: [],
    freelancerselfprofile: null
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
        case GET_FREELANCER_SELF_PROFILE_REQUEST:
            return { loading: true};
        case GET_FREELANCER_SELF_PROFILE_SUCCESS: 
            return { freelancerselfprofile: action.payload }; 
        case GET_VIEW_ALL_PROJECT_REQUEST:
            return { loading: true};
        case GET_VIEW_ALL_PROJECT_SUCCESS: 
            return { viewallprojects: action.payload }; 
        default:
            return state;
    }
};


export default FreelancerReducer;