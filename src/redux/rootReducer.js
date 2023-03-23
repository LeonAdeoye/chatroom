import {combineReducers} from "redux";
import roomListReducer from "./roomList/roomListReducer";
import chatEntryReducer from "./chatEntry/chatEntryReducer";

const rootReducer = combineReducers({
    roomList: roomListReducer,
    chatEntry: chatEntryReducer
})

export default rootReducer;

