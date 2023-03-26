import {SELECT_CHAT_MESSAGE} from "./chatMessageTypes";

const initialState =
    {
        selectedChatMessageIndex: -1
    }

const chatMessageReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case SELECT_CHAT_MESSAGE:
            return {
                ...state,
                selectedChatMessageIndex: action.payload
            }
        default: return state;
    }
}

export default chatMessageReducer;
