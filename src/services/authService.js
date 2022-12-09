import axios from "axios";
import Cookies from "js-cookie";
import { get, post } from "../helpers/api";

const login = async (body) => {
  const response = await post(`auth/login`, body);
  //if response is not 401, then return response.data
  //console.log(response);
  if (response) {
    Cookies.set("token", response.token);
  }

  return response;
};

const loginWithGoogle = async (body) => {
  const response = await post(`auth/login/google`, body);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

const register = async (body) => {
  const response = await post(`auth/register`, body);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

const logout = async () => {
  Cookies.remove("token");
  window.location.href = "/login";
};

export { login, logout, register, loginWithGoogle };
