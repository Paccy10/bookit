import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../constants/user";

export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    const { data } = await axios.post("/api/auth/register", data);
    dispatch({ type: REGISTER_USER_SUCCESS });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
