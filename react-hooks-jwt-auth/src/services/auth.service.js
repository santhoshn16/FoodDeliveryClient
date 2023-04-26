import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://54.175.99.206:8080/api/";

const register = (name, username, password, phone_number) => {
  return axios.post(API_URL + "user/save", {
    name,
    username,
    password,
    phone_number
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

const refreshToken = () => {
  axios
  .get(API_URL + 'refreshtoken', { headers: authHeader.refreshToken() })
  .then((response) => {
    // console.log(JSON.stringify(response.data));
    console.log("jj");
    localStorage.setItem("accesstoken", JSON.stringify(response.data.accesstoken));
    localStorage.setItem("refreshtoken", JSON.stringify(response.data.refreshtoken));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    console.log("Refresh Token Called");
  }).catch(() => {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("refreshtoken");
    localStorage.removeItem("user");
  });
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  refreshToken
};

export default AuthService;
