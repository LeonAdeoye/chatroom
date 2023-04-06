import {
    DELETE_ROOM,
    CLOSE_ROOM,

    FETCH_ROOMS_REQUEST_FAILURE,
    FETCH_ROOMS_REQUEST_SUCCESS,
    FETCH_ROOMS_REQUEST,

    TOGGLE_CREATE_ROOM_DIALOG,
    ADD_ROOM_TO_FAVOURITES,

    CREATE_ROOM_REQUEST,
    CREATE_ROOM_REQUEST_FAILURE,
    CREATE_ROOM_REQUEST_SUCCESS,

    SELECT_ROOM_REQUEST_SUCCESS,
    SELECT_ROOM_REQUEST_FAILURE,
    SELECT_ROOM_REQUEST,

    FETCH_ROOM_CONVERSATION_REQUEST,
    FETCH_ROOM_CONVERSATION_REQUEST_SUCCESS,
    FETCH_ROOM_CONVERSATION_REQUEST_FAILURE,

    ADD_ADMIN_TO_ROOM_REQUEST,
    ADD_ADMIN_TO_ROOM_REQUEST_SUCCESS,
    ADD_ADMIN_TO_ROOM_REQUEST_FAILURE,

    ADD_MEMBER_TO_ROOM_REQUEST,
    ADD_MEMBER_TO_ROOM_REQUEST_SUCCESS,
    ADD_MEMBER_TO_ROOM_REQUEST_FAILURE
} from "./roomListTypes";

const initialState =
{
    rooms: [],
    loading: false,
    errorMessage: '',
    selectedRoom: null,
    openCreateRoomDialogFlag: false
}

const roomListReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case CREATE_ROOM_REQUEST:
            return {
                ...state,
                errorMessage: '',
                loading: true
            }
        case CREATE_ROOM_REQUEST_SUCCESS:
            const rooms = Array.from(state.rooms);
            rooms.push({ id: action.payload.id, name: action.payload.roomName});
            return {
                ...state,
                rooms: rooms,
                errorMessage: '',
                loading: false
            }
        case CREATE_ROOM_REQUEST_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                loading: false
            }
        case TOGGLE_CREATE_ROOM_DIALOG:
            return {
                ...state,
                openCreateRoomDialogFlag: !state.openCreateRoomDialogFlag
            }
        case DELETE_ROOM:
            const deleteRoomArray = Array.from(state.rooms);
            // TODO: find room in array and delete it.
            return {
                ...state,
                rooms: deleteRoomArray

            }
        case CLOSE_ROOM:
            // TODO: find room in array and close it.
            const updatedRooms = state.rooms.filter(object => {
                return object.id !== action.payload;
            })
            return {
                ...state,
                rooms: updatedRooms
            }
        case SELECT_ROOM_REQUEST_SUCCESS:
            return {
                ...state,
                selectedRoom: action.payload,
                errorMessage: '',
                loading: false
            }
        case SELECT_ROOM_REQUEST_FAILURE:
            return {
                ...state,
                selectedRoom: null,
                errorMessage: action.payload,
                loading: false
            }
        case SELECT_ROOM_REQUEST:
            return {
                ...state,
                selectedRoom: null,
                errorMessage: '',
                loading: true
            }
        case ADD_ROOM_TO_FAVOURITES:
            // TODO: find room in array and add it to favourites it.
            return {
                ...state
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
        case ADD_MEMBER_TO_ROOM_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: '',
                members: []
            }
        case ADD_MEMBER_TO_ROOM_REQUEST_SUCCESS:
            const memberRoom = state.selectedRoom;
            memberRoom.members = action.payload;
            return {
                ...state,
                loading: false,
                errorMessage: '',
                selectedRoom: memberRoom

            }
        case ADD_MEMBER_TO_ROOM_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case ADD_ADMIN_TO_ROOM_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: ''
            }
        case ADD_ADMIN_TO_ROOM_REQUEST_SUCCESS:
            const adminRoom = state.selectedRoom;
            adminRoom.members = action.payload;
            return {
                ...state,
                loading: false,
                errorMessage: '',
                selectedRoom: adminRoom
            }
        case ADD_ADMIN_TO_ROOM_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case FETCH_ROOM_CONVERSATION_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: ''
            }
        case FETCH_ROOM_CONVERSATION_REQUEST_SUCCESS:
            const conversationRoom = state.selectedRoom;
            conversationRoom.conversation = action.payload;
            return {
                ...state,
                loading: false,
                errorMessage: '',
                selectedRoom: conversationRoom
            }
        case FETCH_ROOM_CONVERSATION_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        default: return state;
    }
}

export default roomListReducer;
