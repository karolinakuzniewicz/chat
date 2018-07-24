import { combineReducers } from "redux";

import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

const chat = combineReducers({
  messagesReducer,
  usersReducer,
});

export default chat;
