import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  GET_ALL_ROOMS_SUCCESS,
  GET_ALL_ROOMS_FAIL,
  CLEAR_ERRORS,
  GET_ROOM_DETAILS_SUCCESS,
  GET_ROOM_DETAILS_FAIL,
} from "../constants/room";

export const getAllRooms =
  (req, currentPage = 1, location = "", guests, category) =>
  async (dispatch) => {
    try {
      const { origin } = absoluteUrl(req);
      let url = `${origin}/api/rooms?page=${currentPage}&location=${location}`;

      if (guests) url = url.concat(`&guestCapacity=${guests}`);
      if (category) url = url.concat(`&category=${category}`);

      const { data } = await axios.get(url);

      dispatch({ type: GET_ALL_ROOMS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ALL_ROOMS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getOneRoom = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms/${id}`);

    dispatch({ type: GET_ROOM_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ROOM_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
