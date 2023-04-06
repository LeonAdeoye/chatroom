import {
    TOGGLE_ADD_MEMBER_TO_ROOM,
    TOGGLE_ADD_ADMIN_TO_ROOM
} from "./roomTypes";

const toggleAddChatRoomAdminDialogFlagRequest = () =>
{
    return {
        type: TOGGLE_ADD_ADMIN_TO_ROOM
    }
}

const toggleAddChatRoomMemberDialogFlagRequest = () =>
{
    return {
        type: TOGGLE_ADD_MEMBER_TO_ROOM
    }
}

export const toggleAddChatRoomAdminDialogFlag = () =>
{
    return function(dispatch)
    {
        dispatch(toggleAddChatRoomAdminDialogFlagRequest())
    }
}

export const toggleAddChatRoomMemberDialogFlag = () =>
{
    return function(dispatch)
    {
        dispatch(toggleAddChatRoomMemberDialogFlagRequest())
    }
}

