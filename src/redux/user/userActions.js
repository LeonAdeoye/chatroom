import axios from "axios";
import {
    FETCH_USERS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS,
    USER_LOGGED_IN,
    TOGGLE_USER_LOGIN_DIALOG,
    ADD_USER_REQUEST,
    ADD_USER_REQUEST_SUCCESS,
    ADD_USER_REQUEST_FAILURE
} from "./userTypes";

const addUserRequest = () =>
{
    return {
        type: ADD_USER_REQUEST
    }
}

const addUserRequestSuccess = (user) =>
{
    return {
        type: ADD_USER_REQUEST_SUCCESS,
        payload: user
    }
}

const addUserRequestFailure = (error) =>
{
    return {
        type: ADD_USER_REQUEST_FAILURE,
        payload: error
    }
}

const fetchUserRequest = () =>
{
    return {
        type: FETCH_USERS
    }
}

const fetchUserRequestSuccess = (users) =>
{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserRequestFailure = (error) =>
{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const loginUserRequest = (loggedInUserId) =>
{
    return {
        type: USER_LOGGED_IN,
        payload: loggedInUserId
    }
}

const toggleOpenLoginDialogFlagRequest = () =>
{
    return {
        type: TOGGLE_USER_LOGIN_DIALOG
    }
}

export const toggleOpenLoginDialogFlag = () =>
{
    return function(dispatch)
    {
        dispatch(toggleOpenLoginDialogFlagRequest())
    }
}

export const fetchUsers = () =>
{
    return function(dispatch)
    {
        dispatch(fetchUserRequest());
        axios.get('http://localhost:8080/users')
            .then(response =>
            {
                dispatch(fetchUserRequestSuccess(response.data));
            })
            .catch(err =>
            {
                dispatch(fetchUserRequestFailure(err.message));
            });
    }
}

export const loginUser = (userId) =>
{
    return function(dispatch)
    {
        dispatch(loginUserRequest(userId));
    }
}

export const addUser = (fullName) =>
{
    return function(dispatch)
    {
        dispatch(addUserRequest(fullName));
        axios.post('http://localhost:8080/addUser?fullName='+fullName)
            .then(response =>
            {
                dispatch(addUserRequestSuccess(response.data));
            })
            .catch(err =>
            {
                dispatch(addUserRequestFailure(err.message));
            });
    }
}

