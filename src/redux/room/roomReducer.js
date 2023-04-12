import {
    TOGGLE_ADD_ADMIN_TO_ROOM,
    TOGGLE_ADD_MEMBER_TO_ROOM
} from "./roomTypes";

const initialState =
{
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
        default: return state;
    }
}

export default roomReducer;
