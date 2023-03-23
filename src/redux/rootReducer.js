import {combineReducers} from "redux";
import roomListReducer from "./roomList/roomListReducer";
import chatEntryReducer from "./chatEntry/chatEntryReducer";
import roomReducer from "./room/roomReducer";

const rootReducer = combineReducers({
    roomList: roomListReducer,
    chatEntry: chatEntryReducer,
    room: roomReducer
});

export default rootReducer;

