import axios from "axios";
import jwt from 'jsonwebtoken';

const API_URL = "http://localhost:8080/api/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .get(API_URL + `login?username=${username}&password=${password}`)
    .then((response) => {
      localStorage.setItem("accesstoken", JSON.stringify(response.data.accesstoken));
      localStorage.setItem("refreshtoken", JSON.stringify(response.data.refreshtoken));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      //TIMER...
      return response.data;
    }).catch(() => {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      localStorage.removeItem("user");
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("accesstoken");
  localStorage.removeItem("refreshtoken");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
