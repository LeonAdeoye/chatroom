import {combineReducers} from "redux";
import roomListReducer from "./roomList/roomListReducer";
import chatEntryReducer from "./chatEntry/chatEntryReducer";
import roomReducer from "./room/roomReducer";
import chatMessageReducer from "./chatMessage/chatMessageReducer";

const rootReducer = combineReducers({
    roomList: roomListReducer,
    chatEntry: chatEntryReducer,
    room: roomReducer,
    chatMessage: chatMessageReducer
});

export default rootReducer;

