import {CREATE_CHAT_MESSAGE} from "./chatEntryTypes";

export const createChatMessage = (newChatMessage) =>
{
    return {
        type: CREATE_CHAT_MESSAGE,
        payload: newChatMessage
    }
}
