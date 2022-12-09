import axios from 'axios';
import Cookies from 'js-cookie';
import { get, post, put, del } from '../helpers/api';

const getAllJatahCuti = async () => {
  const response = await get(`jatahcuti`);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

const getJatahCutiById = async (id) => {
  const response = await get(`jatahcuti/${id}`);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

const insertJatahCuti = async (body) => {
  const response = await post(`jatahcuti`, body);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

const updateJatahCuti = async (id, body) => {
  const response = await put(`jatahcuti/${id}`, body);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

export { getAllJatahCuti, getJatahCutiById, insertJatahCuti, updateJatahCuti };
