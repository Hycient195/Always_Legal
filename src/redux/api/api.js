import axios from "axios";

const API = axios.create({
  baseURL: "https://lawyerca.herokuapp.com",
});

API.interceptors.request.use((req) => {
  if (global.localStorage?.getItem("profile")) {
    // eslint-disable-next-line
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage?.getItem('profile')).token}`;
  }
  return req;
});

export const login = (userDetails) => API.post("/v1/user/auth/login", userDetails);
export const register = (userDetails) => API.post("/v1/user/auth/register", userDetails);
