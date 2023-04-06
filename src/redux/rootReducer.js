import {combineReducers} from "redux";
import roomListReducer from "./roomList/roomListReducer";
import chatEntryReducer from "./chatEntry/chatEntryReducer";
import roomReducer from "./room/roomReducer";
import chatMessageReducer from "./chatMessage/chatMessageReducer";
import userReducer from "./user/userReducer";
import memberReducer from "./member/memberReducer";

const rootReducer = combineReducers({
    roomList: roomListReducer,
    chatEntry: chatEntryReducer,
    room: roomReducer,
    chatMessage: chatMessageReducer,
    user: userReducer,
    member: memberReducer
});

export default rootReducer;

