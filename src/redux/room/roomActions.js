import axios from "axios";
import {FETCH_ROOM_CONVERSATION, FETCH_ROOM_CONVERSATION_FAILURE, FETCH_ROOM_CONVERSATION_SUCCESS} from "./roomTypes";


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
                console.log('conversation: ', response.data);
                const conversation = response.data.map(conversation => conversation.title);
                dispatch(fetchConversationRequestSuccess(conversation));
            })
            .catch(err =>
            {
                console.log('error return from fetch conversation: ', err);
                dispatch(fetchConversationRequestFailure(err.message));
            });
    }
}
