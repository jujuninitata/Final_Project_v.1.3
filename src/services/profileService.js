import axios from "axios";
import Cookies from "js-cookie";
import { get, post } from "../helpers/api";

const getAllProfile = async () => {
  const response = await get(`profile`);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};

const insertProfile = (body) => {
  const response = post(`profile`, body);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};

const getProfilebByUserId = async (userid) => {
  const response = await get(`profile/user/${userid}`);
  console.log(response);
  return response;
};

export { getAllProfile, insertProfile, getProfilebByUserId };
