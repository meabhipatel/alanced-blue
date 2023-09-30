import { Navigate } from 'react-router-dom'
import { AddHirer, GetViewAllBids, GetViewAllfreelancers, GetViewHirerSelfProjects, UpdateProject } from '../../redux/services/Hirer'
import { SERVER_ERROR } from '../Freelancer/FreelancerConstant'
import { ADD_NEW_HIRER_REQUEST,
 ADD_NEW_HIRER_SUCCESS,
 GET_VIEW_ALL_BIDS_REQUEST,
 GET_VIEW_ALL_BIDS_SUCCESS,
 GET_VIEW_ALL_FREELANCER_REQUEST,
 GET_VIEW_ALL_FREELANCER_SUCCESS,
 GET_VIEW_HIRER_SELF_PROJECT_REQUEST,
 GET_VIEW_HIRER_SELF_PROJECT_SUCCESS,
 UPDATE_PROJECT_REQUEST,
 UPDATE_PROJECT_SUCCESS
} from './HirerConstant'


export const AddNewHirerAction = (data) => dispatch => {
    dispatch({
        type: ADD_NEW_HIRER_REQUEST,
        payload: []
      });
      AddHirer(data).then(res => {
        console.log(res)
        if (res.status == 200) {
          dispatch({
            type: ADD_NEW_HIRER_SUCCESS,
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

export const GetViewAllFreelancersAction = () => dispatch => {
  
  dispatch({
    type: GET_VIEW_ALL_FREELANCER_REQUEST,
    payload: []
  });

  GetViewAllfreelancers().then(res => {
    if (res.status === 200) {
      dispatch({
        type: GET_VIEW_ALL_FREELANCER_SUCCESS,
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


export const GetViewHirerSelfProjectssAction = (token) => dispatch => {
  
  dispatch({
    type: GET_VIEW_HIRER_SELF_PROJECT_REQUEST,
    payload: []
  });

  GetViewHirerSelfProjects(token).then(res => {
    if (res.status === 200) {
      dispatch({
        type: GET_VIEW_HIRER_SELF_PROJECT_SUCCESS,
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


export const GetViewAllBidsAction = (id) => dispatch => {
  
  dispatch({
    type: GET_VIEW_ALL_BIDS_REQUEST,
    payload: []
  });

  GetViewAllBids(id).then(res => {
    if (res.status === 200) {
      dispatch({
        type: GET_VIEW_ALL_BIDS_SUCCESS,
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


export const UpdateProjectAction = (data, token, navigate,id) => dispatch => {
  dispatch({
    type: UPDATE_PROJECT_REQUEST,
    payload: []
  });

  UpdateProject(data, token,id).then(res => {
    if (res.status === 200) {
      dispatch({
        type: UPDATE_PROJECT_SUCCESS,
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
