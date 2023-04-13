import {
    FETCH_USERS, FETCH_USERS_FAILURE,
    FETCH_USERS_SUCCESS, TOGGLE_USER_LOGIN_DIALOG,
    USER_LOGGED_IN, ADD_USER_REQUEST_SUCCESS,
    ADD_USER_REQUEST_FAILURE, ADD_USER_REQUEST
} from "./userTypes";

const initialState =
{
    users: [],
    loading: false,
    errorMessage: '',
    loggedInUserId: '',
    openLoginDialogFlag: true
}

const userReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case USER_LOGGED_IN:
            return {
                ...state,
                loggedInUserId: action.payload
            }
        case TOGGLE_USER_LOGIN_DIALOG:
            return {
                ...state,
                openLoginDialogFlag: !state.openLoginDialogFlag
            }
        case FETCH_USERS:
            return {
                ...state,
                users: [],
                loading: true,
                errorMessage: ''
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                errorMessage: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                users: [],
                loading: false,
                errorMessage: action.payload
            }
        case ADD_USER_REQUEST_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
                errorMessage: ''
            }
        case ADD_USER_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case ADD_USER_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: ''
            }
        default: return state;
    }
}

export default userReducer;
