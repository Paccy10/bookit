import {
  GET_ALL_ROOMS_SUCCESS,
  GET_ALL_ROOMS_FAIL,
  CLEAR_ERRRORS,
  GET_ROOM_DETAILS_SUCCESS,
  GET_ROOM_DETAILS_FAIL,
} from "../constants/room";

export const getRoomsReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case GET_ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        limit: action.payload.limit,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
      };

    case GET_ALL_ROOMS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};

export const getRoomReducer = (state = { room: {} }, action) => {
  switch (action.type) {
    case GET_ROOM_DETAILS_SUCCESS:
      return {
        room: action.payload.room,
      };

    case GET_ROOM_DETAILS_FAIL:
      return {
        error: action.payload,
      };

    case CLEAR_ERRRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
