import { combineReducers } from "redux";

import { getRoomReducer, getRoomsReducer } from "./room";
import { authReducer } from "./user";

export const reducers = combineReducers({
  allRooms: getRoomsReducer,
  roomDetails: getRoomReducer,
  auth: authReducer,
});
