import { AddUserContact, AddUserSubscriptions } from "../services/User";
import { ADD_USER_CONTACT_REQUEST, ADD_USER_CONTACT_SUCCESS, ADD_USER_SUBSCRIPTION_REQUEST, ADD_USER_SUBSCRIPTION_SUCCESS, USER_SERVER_ERROR } from "./UserConstant";


export const AddUserContactAction = (data) => dispatch => {
    dispatch({
        type: ADD_USER_CONTACT_REQUEST,
        payload: []
      });
      AddUserContact(data).then(res => {
        console.log(res)
        if (res.status == 200) {
          dispatch({
            type: ADD_USER_CONTACT_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: USER_SERVER_ERROR,
            payload: res
          });
        }
      });
};


export const AddUserSubscriptionAction = (data) => dispatch => {
    dispatch({
        type: ADD_USER_SUBSCRIPTION_REQUEST,
        payload: []
      });
      AddUserSubscriptions(data).then(res => {
        console.log(res)
        if (res.status == 200) {
          dispatch({
            type: ADD_USER_SUBSCRIPTION_SUCCESS,
            payload: res.data
          });
        } else {
          dispatch({
            type: USER_SERVER_ERROR,
            payload: res
          });
        }
      });
};