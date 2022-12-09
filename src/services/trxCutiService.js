
import { get, post, put } from '../helpers/api';

const getAllTrxCuti = async () => {
  const response = await get(`trxcuti`);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};

const getTrxCutiById = async (id) => {
  const response = await get(`trxcuti/${id}`);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};
const getTrxCutiDetail = async (cutiId) => {
  const response = await get(`trxcuti/detail/${cutiId}`);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};

const getTrxCutiByUserId = async (userid) => {
  const response = await get(`trxcuti/user/${userid}`);
  //if response is not 401, then return response.data
  // console.log(response);

  return response;
};

const insertTrxCuti = async (body) => {
  const response = await post(`trxcuti`, body);
  //if response is not 401, then return response.data
 // console.log(response);

  return response;
};

const updateTrxCuti = async (id, body) => {
  const response = await put(`trxcuti/${id}`, body);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

const approveCuti = async (id, body) => {
  const response = await put(`trxcuti/approve/${id}`, body);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

const rejectCuti = async (id, body) => {
  const response = await put(`trxcuti/reject/${id}`, body);
  //if response is not 401, then return response.data
//  console.log(response);

  return response;
};

const cancelCuti = async (id, body) => {
  const response = await put(`trxcuti/cancel/${id}`, body);
  //if response is not 401, then return response.data
  //console.log(response);

  return response;
};

export {
  getAllTrxCuti,
  getTrxCutiById,
  insertTrxCuti,
  updateTrxCuti,
  getTrxCutiByUserId,
  getTrxCutiDetail,
  approveCuti,
  rejectCuti,
  cancelCuti
};
