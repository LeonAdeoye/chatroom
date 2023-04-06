import {
    FETCH_ROOM_MEMBERS,
    FETCH_ROOM_MEMBERS_FAILURE,
    FETCH_ROOM_MEMBERS_SUCCESS,
} from "./memberTypes";

const initialState =
{
    members: [],
    loading: false,
    errorMessage: ''
}

const memberReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case FETCH_ROOM_MEMBERS:
            return {
                ...state,
                members: [],
                loading: true,
                errorMessage: '',
                selectedRoomIndex: action.payload
            }
        case FETCH_ROOM_MEMBERS_SUCCESS:
            return {
                ...state,
                members: action.payload,
                loading: false,
                errorMessage: ''
            }
        case FETCH_ROOM_MEMBERS_FAILURE:
            return {
                ...state,
                members: [],
                loading: false,
                errorMessage: action.payload
            }
        default: return state;
    }
}

export default memberReducer;
