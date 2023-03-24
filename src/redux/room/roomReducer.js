import {
    FETCH_ROOM_CONVERSATION,
    FETCH_ROOM_CONVERSATION_FAILURE,
    FETCH_ROOM_CONVERSATION_SUCCESS,
} from "./roomTypes";

const initialState =
{
    conversation: [],
    loading: false,
    errorMessage: '',
    selectedRoomIndex: -1
}

const roomReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case FETCH_ROOM_CONVERSATION:
            return {
                ...state,
                conversation: [],
                loading: true,
                errorMessage: '',
                selectedRoomIndex: action.payload
            }
        case FETCH_ROOM_CONVERSATION_SUCCESS:
            return {
                ...state,
                conversation: action.payload,
                loading: false,
                errorMessage: ''
            }
        case FETCH_ROOM_CONVERSATION_FAILURE:
            return {
                ...state,
                conversation: [],
                loading: false,
                errorMessage: action.payload
            }
        default: return state;
    }
}

export default roomReducer;
