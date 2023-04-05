import {
    TOGGLE_ADD_ADMIN_TO_ROOM,
    TOGGLE_ADD_MEMBER_TO_ROOM,
    FETCH_ROOM_CONVERSATION,
    FETCH_ROOM_CONVERSATION_FAILURE,
    FETCH_ROOM_CONVERSATION_SUCCESS,
} from "./roomTypes";

const initialState =
{
    conversation: [],
    loading: false,
    errorMessage: '',
    selectedRoomIndex: -1,
    openAddChatRoomMemberDialogFlag: false,
    openAddChatRoomAdminDialogFlag: false
}

const roomReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case TOGGLE_ADD_MEMBER_TO_ROOM:
            return {
                ...state,
                openAddChatRoomMemberDialogFlag: !state.openAddChatRoomMemberDialogFlag
            }
        case TOGGLE_ADD_ADMIN_TO_ROOM:
            return {
                ...state,
                openAddChatRoomAdminDialogFlag: !state.openAddChatRoomAdminDialogFlag
            }
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
