import axios from "axios";
import {
    FETCH_ROOM_CONVERSATION,
    FETCH_ROOM_CONVERSATION_FAILURE,
    FETCH_ROOM_CONVERSATION_SUCCESS,
    ADD_MEMBER_TO_ROOM,
    ADD_ADMIN_TO_ROOM
} from "./roomTypes";

export const toggleAddChatRoomAdminDialogFlagRequest = () =>
{
    return {
        type: ADD_ADMIN_TO_ROOM
    }
}

export const toggleAddChatRoomMemberDialogFlagRequest = () =>
{
    return {
        type: ADD_MEMBER_TO_ROOM
    }
}

export const fetchConversationRequest = (selectedRoomIndex) =>
{
    return {
        type: FETCH_ROOM_CONVERSATION,
        payload: selectedRoomIndex
    }
}

export const fetchConversationRequestSuccess = (conversation) =>
{
    return {
        type: FETCH_ROOM_CONVERSATION_SUCCESS,
        payload: conversation
    }
}

export const fetchConversationRequestFailure = (error) =>
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
        dispatch(toggleAddChatRoomAdminDialogFlagRequest)
    }
}

export const toggleAddChatRoomMemberDialogFlag = () =>
{
    return function(dispatch)
    {
        dispatch(toggleAddChatRoomMemberDialogFlagRequest)
    }
}
