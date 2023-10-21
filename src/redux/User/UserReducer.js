import { toast } from "react-toastify";
import { ADD_USER_CONTACT_REQUEST, ADD_USER_CONTACT_SUCCESS, ADD_USER_SUBSCRIPTION_REQUEST, ADD_USER_SUBSCRIPTION_SUCCESS, USER_SERVER_ERROR } from "./UserConstant";


const initialState = {
    alluser: [],
  };


const UserReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_USER_CONTACT_REQUEST:
            return { loading: true };
        case ADD_USER_CONTACT_SUCCESS:
            toast.success("Your Data has been Submitted")
            return { loading: false, adduser:true }
        case ADD_USER_SUBSCRIPTION_REQUEST:
            return { loading: true };
        case ADD_USER_SUBSCRIPTION_SUCCESS:
            toast.success("Thankyou For Subscribe !!")
            return { loading: false, addsub:true }
        case USER_SERVER_ERROR:
            if(action.payload.message==="Applicant_Email user contact us with this Applicant Email already exists."){
                toast.error("User With This Email Already Exists");
                return { loading: false, adduser:true };
            }
            else if(action.payload.message==="Applicant_Email Enter a valid email address."){
                toast.error("Enter a valid email address.");
                return { loading: false, adduser:true};
            }
            else if(action.payload.message==="email subscription with this email already exists."){
                toast.error("User With This Email Already Exists");
                return { loading: false, adduser:true};
            }
            else{
                toast.error(action.payload.message);
                return { loading: false, adduser:true,addsub:true };
            }
        default:
            return state;    
}
};
export default UserReducer  
