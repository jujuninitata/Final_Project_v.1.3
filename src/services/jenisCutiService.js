
import { get } from '../helpers/api';

const getAllJenisCuti = async () => {
  const response = await get(`jenisCuti`);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

const getJenisCutibyUserId =async (userid) => {
  const response = await get(`jeniscuti/${userid}`);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

export { getAllJenisCuti,getJenisCutibyUserId };
