import axios from "axios";

const API = axios.create({
  baseURL: "https://lawyerca.herokuapp.com"
})

export const login = (userDetails) => API.post("/v1/user/auth/login", userDetails);
export const register = (userDetails) => API.post("/v1/user/auth/register", userDetails);