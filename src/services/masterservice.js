import axios from "axios";
import Cookies from "js-cookie";
import { get, post } from "../helpers/api";

const getAllAgama = async () => {
  const response = await get(`master/agama`);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};
const getAllUnit = async () => {
  const response = await get(`master/unit`);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};
const getAllJabatan = async () => {
  const response = await get(`master/jabatan`);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};

const getAllRole = async () => {
  const response = await get(`master/role`);
  //if response is not 401, then return response.data
  console.log(response);

  return response;
};

const getAllProvinsi = async () => {
  const response = await get(`master/provinsi`);
  //if response is not 401, then return response.data
  console.log(response);
  return response;
};
const getAllKota = async () => {
  const response = await get(`master/kota`);
  //if response is not 401, then return response.data
  console.log(response);
  return response;
};
const getAllKecamatan = async () => {
  const response = await get(`master/kecamatan`);
  //if response is not 401, then return response.data
  console.log(response);
  return response;
};

const getAllKelurahan = async () => {
  const response = await get(`master/kelurahan`);
  //if response is not 401, then return response.data
  console.log(response);
  return response;
};
export {
  getAllAgama,
  getAllUnit,
  getAllJabatan,
  getAllRole,
  getAllProvinsi,
  getAllKota,
  getAllKecamatan,
  getAllKelurahan,
};
