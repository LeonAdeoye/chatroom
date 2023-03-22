import {CREATE_CHAT_MESSAGE} from "./chatEntryTypes";

const initialState =
{
    chatMessage: ''
}

const chatEntryReducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case CREATE_CHAT_MESSAGE:
            return {
                ...state,
                chatMessage: 'Hello World!'
            }
        default: return state;
    }
}

export default chatEntryReducer;

