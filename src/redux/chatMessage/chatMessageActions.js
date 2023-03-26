import {SELECT_CHAT_MESSAGE} from "./chatMessageTypes";

export const selectChatMessageRequest = (selectedChatMessageIndex) =>
{
    return {
        type: SELECT_CHAT_MESSAGE,
        payload: selectedChatMessageIndex
    }
}

export const selectChatMessage = (selectedChatMessageIndex) =>
{
    return function(dispatch)
    {
        dispatch(selectChatMessageRequest(selectedChatMessageIndex));
    }
}
