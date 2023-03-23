import {CREATE_ROOM, DELETE_ROOM, FETCH_ROOMS_REQUEST_FAILURE, FETCH_ROOMS_REQUEST_SUCCESS, FETCH_ROOMS_REQUEST} from "./roomListTypes";

const initialState =
{
    rooms: [],
    loading: false,
    errorMessage: ''
}

const roomListReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case CREATE_ROOM:
            const createRoomArray = Array.from(state.rooms);
            createRoomArray.push(action.payload);
            return {
                ...state,
                rooms: createRoomArray

            }
        case DELETE_ROOM:
            const deleteRoomArray = Array.from(state.rooms);
            // TODO: find room in array and delete it.
            return {
                ...state,
                rooms: deleteRoomArray

            }
        case FETCH_ROOMS_REQUEST:
            return {
                ...state,
                rooms: [],
                loading: true,
                errorMessage: ''
            }
        case FETCH_ROOMS_REQUEST_SUCCESS:
            return {
                ...state,
                rooms: action.payload,
                loading: false,
                errorMessage: ''
            }
        case FETCH_ROOMS_REQUEST_FAILURE:
            return {
                ...state,
                rooms: [],
                loading: false,
                errorMessage: action.payload
            }
        default: return state;
    }
}

export default roomListReducer;
