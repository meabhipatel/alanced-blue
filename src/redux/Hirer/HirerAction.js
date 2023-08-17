import { Navigate } from 'react-router-dom'
import { AddHirer } from '../../redux/services/Hirer'
import { SERVER_ERROR } from '../Freelancer/FreelancerConstant'
import { ADD_NEW_HIRER_REQUEST,
 ADD_NEW_HIRER_SUCCESS
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