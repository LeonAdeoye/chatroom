import {createStore} from "redux";
import chatEntryReducer from "./chatEntryReducer";

const store = createStore(chatEntryReducer)

export default store;
