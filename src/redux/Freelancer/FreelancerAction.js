import { Navigate } from 'react-router-dom'
import { AddFreelancer,GetFreelancerSelfProfile,GetViewAllProjectList,UpdateFreelancerProfile} from '../services/Freelancer'
import { ADD_NEW_FREELANCER_REQUEST,
ADD_NEW_FREELANCER_SUCCESS,
GET_FREELANCER_SELF_PROFILE_REQUEST,
GET_FREELANCER_SELF_PROFILE_SUCCESS,
GET_VIEW_ALL_PROJECT_REQUEST,
GET_VIEW_ALL_PROJECT_SUCCESS,
UPDATE_FREELANCER_REQUEST,
UPDATE_FREELANCER_SUCCESS,
SERVER_ERROR,
} from './FreelancerConstant'


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


export const UpdateFreelancerProfileAction = (data, token, navigate) => dispatch => {
  dispatch({
    type: UPDATE_FREELANCER_REQUEST,
    payload: []
  });

  UpdateFreelancerProfile(data, token).then(res => {
    if (res.status === 200) {
      dispatch({
        type: UPDATE_FREELANCER_SUCCESS,
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

// export const GetViewAllSavedJobsAction = (token) => dispatch => {
  
//   dispatch({
//     type: GET_VIEW_ALL_SAVEDJOBS_REQUEST,
//     payload: []
//   });

//   GetViewAllSavedJobs(token).then(res => {
//     console.log(res, "view jobs");
//     if (res.status === 200) {
//       dispatch({
//         type: GET_VIEW_ALL_SAVEDJOBS_SUCCESS,
//         payload: res.data
//       });
//     } else {
//       dispatch({
//         type: SERVER_ERROR,
//         payload: res
//       });
//     }
//   });
// };


// export const SaveUnsaveJobAction = (data,token,id) => dispatch => {
//   dispatch({
//       type: ADD_NEW_SAVEUNSAVEJOB_REQUEST,
//       payload: []
//     });
//     SaveUnsaveJob(data,token,id).then(res => {
//       console.log(res)
//       if (res.status == 200) {
//         dispatch({
//           type: ADD_NEW_SAVEUNSAVEJOB_SUCCESS,
//           payload: res.data
//         });
//       } else {
//         dispatch({
//           type: SERVER_ERROR,
//           payload: res
//         });
//       }
//     });
// };