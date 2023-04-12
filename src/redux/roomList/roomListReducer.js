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
    ADD_MEMBER_TO_ROOM_REQUEST_FAILURE,

    CREATE_CHAT_MESSAGE_REQUEST,
    CREATE_CHAT_MESSAGE_REQUEST_FAILURE,
    CREATE_CHAT_MESSAGE_REQUEST_SUCCESS
} from "./roomListTypes";

const initialState =
{
    rooms: [],
    conversation: [],
    administrators: [],
    members: [],
    activities: [],
    roomName: '',
    loading: false,
    errorMessage: '',
    selectedRoom: null,
    openCreateRoomDialogFlag: false
}

const roomListReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case CREATE_CHAT_MESSAGE_REQUEST:
            return {
                ...state,
                errorMessage: '',
                loading: true,
                conversation: []
            }
        case CREATE_CHAT_MESSAGE_REQUEST_SUCCESS:
            return {
                ...state,
                errorMessage: '',
                loading: false,
                conversation: action.payload
            }
        case CREATE_CHAT_MESSAGE_REQUEST_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                loading: false,
                conversation: []
            }
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
                loading: false,
                members: action.payload.members,
                administrators: action.payload.administrators,
                roomName: action.payload.roomName,
                conversation: action.payload.conversation,
                activities: action.payload.activities
            }
        case SELECT_ROOM_REQUEST_FAILURE:
            return {
                ...state,
                selectedRoom: null,
                errorMessage: action.payload,
                loading: false,
                conversation: [],
                administrators: [],
                activities: [],
                members: [],
                roomName: ''
            }
        case SELECT_ROOM_REQUEST:
            return {
                ...state,
                selectedRoom: null,
                errorMessage: '',
                loading: true,
                conversation: [],
                administrators: [],
                members: [],
                activities: [],
                roomName: ''
            }
        case ADD_ROOM_TO_FAVOURITES:
            // TODO: find room in array and add to favourites it.
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
            return {
                ...state,
                loading: false,
                errorMessage: '',
                members: action.payload
            }
        case ADD_MEMBER_TO_ROOM_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                members: []
            }
        case ADD_ADMIN_TO_ROOM_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: '',
                administrators: []
            }
        case ADD_ADMIN_TO_ROOM_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessage: '',
                administrators: action.payload
            }
        case ADD_ADMIN_TO_ROOM_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                administrators: []
            }
        case FETCH_ROOM_CONVERSATION_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: '',
                conversation: []
            }
        case FETCH_ROOM_CONVERSATION_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessage: '',
                conversation: action.payload
            }
        case FETCH_ROOM_CONVERSATION_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                conversation: []
            }
        default: return state;
    }
}

export default roomListReducer;
