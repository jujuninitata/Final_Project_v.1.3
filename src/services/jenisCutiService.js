import axios from 'axios';
import Cookies from 'js-cookie';
import { get, post } from '../helpers/api';

const getAllJenisCuti = async () => {
  const response = await get(`jenisCuti`);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};

export { getAllJenisCuti };
