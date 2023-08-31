import { Navigate } from 'react-router-dom'
import { AddFreelancer,GetFreelancerSelfProfile,GetFreelancerReviews,GetViewAllProjectList} from '../services/Freelancer'
import { ADD_NEW_FREELANCER_REQUEST,
ADD_NEW_FREELANCER_SUCCESS,
GET_FREELANCER_SELF_PROFILE_REQUEST,
GET_FREELANCER_SELF_PROFILE_SUCCESS,
GET_VIEW_ALL_PROJECT_REQUEST,
GET_VIEW_ALL_PROJECT_SUCCESS,
SERVER_ERROR} from './FreelancerConstant'


export const AddNewFreelancerAction = (data) => dispatch => {
    dispatch({
        type: ADD_NEW_FREELANCER_REQUEST,
        payload: []
      });
      AddFreelancer(data).then(res => {
        console.log(res)
        if (res.status == 200) {
          dispatch({
            type: ADD_NEW_FREELANCER_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: SERVER_ERROR,
            payload: res
          });
        }
      });
};


export const GetFreelancerSelfProfileAction = (token) => dispatch => {
  
  dispatch({
    type: GET_FREELANCER_SELF_PROFILE_REQUEST,
    payload: []
  });

  GetFreelancerSelfProfile(token).then(res => {
    console.log(res, "Data");
    if (res.status === 200) {
      dispatch({
        type: GET_FREELANCER_SELF_PROFILE_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: SERVER_ERROR,
        payload: res
      });
    }
  });
};


export const GetViewAllProjectsListAction = () => dispatch => {
  
  dispatch({
    type: GET_VIEW_ALL_PROJECT_REQUEST,
    payload: []
  });

  GetViewAllProjectList().then(res => {
    console.log(res, "view projects");
    if (res.status === 200) {
      dispatch({
        type: GET_VIEW_ALL_PROJECT_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: SERVER_ERROR,
        payload: res
      });
    }
  });
};

