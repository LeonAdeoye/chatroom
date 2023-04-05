import axios from "axios";
import {
    FETCH_ROOM_CONVERSATION,
    FETCH_ROOM_CONVERSATION_FAILURE,
    FETCH_ROOM_CONVERSATION_SUCCESS,
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

const fetchConversationRequest = (selectedRoomIndex) =>
{
    return {
        type: FETCH_ROOM_CONVERSATION,
        payload: selectedRoomIndex
    }
}

const fetchConversationRequestSuccess = (conversation) =>
{
    return {
        type: FETCH_ROOM_CONVERSATION_SUCCESS,
        payload: conversation
    }
}

const fetchConversationRequestFailure = (error) =>
{
    return {
        type: FETCH_ROOM_CONVERSATION_FAILURE,
        payload: error
    }
}

export const fetchConversation = (selectedRoomIndex) =>
{
    return function(dispatch)
    {
        dispatch(fetchConversationRequest(selectedRoomIndex));
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>
            {
                dispatch(fetchConversationRequestSuccess(response.data));
            })
            .catch(err =>
            {
                dispatch(fetchConversationRequestFailure(err.message));
            });
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
