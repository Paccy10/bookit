import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../constants/user";

export const authReducer = (state = { loading: true, user: null }, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };

    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
