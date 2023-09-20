import { toast } from "react-toastify";
import { SERVER_ERROR } from '../Freelancer/FreelancerConstant'
import { ADD_NEW_HIRER_REQUEST,
ADD_NEW_HIRER_SUCCESS,GET_VIEW_ALL_FREELANCER_REQUEST,GET_VIEW_ALL_FREELANCER_SUCCESS } from './HirerConstant'



const initialState = {
    allHirer: [],
  };
  

const HirerReducer =(state = initialState, action) => {
    switch (action.type){
        case ADD_NEW_HIRER_REQUEST:
            return { loading: true };
        case ADD_NEW_HIRER_SUCCESS:
            toast.success("Hirer Registration Sucessfull")
            return { loading: false, addhirer:true}
        case GET_VIEW_ALL_FREELANCER_REQUEST:
            return { loading: true};
        case GET_VIEW_ALL_FREELANCER_SUCCESS: 
            return { viewallfreelancer: action.payload }; 
        case SERVER_ERROR:
            // toast.error(action.payload.message)
            return{loading: false, addhirer:true}
        default:
            return state;
    }
};


export default HirerReducer;