import { combineReducers } from "redux";
import Reducer from "./Auth/reducer";
import FreelancerReducer from "./Freelancer/FreelancerReducer";
// import AdminReducer from './admin/reducer';
const rootReducer = combineReducers({ login: Reducer, freelancer: FreelancerReducer });

export default rootReducer;