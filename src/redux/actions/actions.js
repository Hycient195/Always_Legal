import * as api from "../api/api";

import { REGISTER, LOGIN } from "../actionTypes/actionTypes";

export const register = (userDetails) => async (dispatch) => {
  try {
    const result = await api.register(userDetails);
    console.log(result);
    dispatch({ type: REGISTER, payload: result });
    localStorage.setItem("profile", JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
};

export const login = (userDetails) => async (dispatch) => {
  try {
    const result = await api.login(userDetails);
    console.log(result);
    dispatch({ type: LOGIN, payload: result });
    localStorage.setItem("profile", JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
};
