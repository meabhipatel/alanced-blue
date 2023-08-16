import { Navigate } from 'react-router-dom'
import { AddFreelancer} from '../services/Freelancer'
import { ADD_NEW_FREELANCER_REQUEST,
ADD_NEW_FREELANCER_SUCCESS,
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