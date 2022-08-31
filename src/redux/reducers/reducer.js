import { REGISTER, LOGIN } from "../actionTypes/actionTypes";

export default (action, state = []) => {
  switch (action?.type) {
    case REGISTER:
      return action?.payload;
    case LOGIN:
      return action?.payload;
    default:
      return state;
  }
};
