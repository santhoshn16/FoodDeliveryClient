import axios from "axios";
import authHeader from "./auth-header";

// const API_URL = "http://52.90.2.227:8080/api/";
const API_URL = "http://localhost:8080/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUser = (user) => {
  return axios.get(API_URL + "user/" + user, { headers: authHeader.setToken() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader.setToken() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader.setToken() });
};

const getRest = () => {
  return axios.get(API_URL+ "restaurants", { headers: authHeader.setToken() })
}

const getMenu = (id) => {
  return axios.get(API_URL+ "restaurants/"+ id, { headers: authHeader.setToken() })
}

const removeAddress = (id,user) => {
  return axios.get(API_URL+ "remove/"+ user + "/" +id , { headers: authHeader.setToken() })
}

const addAddress = (data) => {
  return axios.post(API_URL+ "address/addtouser" , data, { headers: authHeader.setToken() , body: data})
}

const updateProfile = (data) => {
  return axios.put(API_URL+ "update/profile", data, { headers: authHeader.setToken() , body: data } )
}

const deleteProfile = (data) => {
  return axios.post(API_URL+ "user/delete/" + data, { headers: {'Access-Control-Allow-Origin': '*'}})
}

const UserService = {
  getPublicContent,
  getUser,
  getModeratorBoard,
  getAdminBoard,
  getRest,
  getMenu,
  removeAddress,
  addAddress,
  updateProfile,
  deleteProfile
};

export default UserService;
