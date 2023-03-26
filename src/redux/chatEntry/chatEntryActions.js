import {CREATE_CHAT_MESSAGE} from "./chatEntryTypes";
import axios from "axios";

export const createChatMessageRequest = (newChatMessage) =>
{
    return {
        type: CREATE_CHAT_MESSAGE,
        payload: newChatMessage
    }
}

export const createChatMessage = (newChatMessage) =>
{
    return function(dispatch)
    {
        dispatch(createChatMessageRequest(newChatMessage));
        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(response =>
        {
        })
        .catch(err =>
        {
        });
    }
}
