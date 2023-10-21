import { combineReducers } from "redux";
import Reducer from "./Auth/reducer";
import FreelancerReducer from "./Freelancer/FreelancerReducer";
import HirerReducer from "./Hirer/HirerReducer";
import HirerImageReducer from "./Hirer/HirerImageReducer";
import UserReducer from "./User/UserReducer";
// import AdminReducer from './admin/reducer';
const rootReducer = combineReducers({ login: Reducer, freelancer: FreelancerReducer, hirer: HirerReducer, hirerImage: HirerImageReducer , user: UserReducer });

export default rootReducer; 