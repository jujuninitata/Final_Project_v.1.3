import axios from 'axios';
import Cookies from 'js-cookie';
const BASE_URL= process.env.REACT_APP_BASE_URL
// import { BASE_URL, USERNAME, PASSWORD } from './app';
// const token = getCookie("accessToken");
const token = Cookies.get('token');
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Bearer ' + token,
};

//const BASE_URL = 'http://localhost:8000/api/v1/';

async function callAPI(method, path) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + token,
  };

  const response = await axios({
    url: BASE_URL + path,
    method,
    // data: body,
    headers,
  }).catch((err) => err.response);

  if (response.status === 401) {
    Cookies.remove('accessToken');
    window.location.href = '/login';
  } else {
    return response.data;
  }
}

const post = async (path, body) => {
  const response = await axios.post(BASE_URL + path, body, {
    headers,
    // auth,
  });
  console.log(response);
  if (response.status === 401) {
    Cookies.remove('accessToken');
    window.location.href = '/login';
  } else {
    return response.data;
  }
};

const get = async (path) => {
  const response = await axios.get(BASE_URL + path, {
    headers,
    // auth,
  });
  if (response.status === 401) {
    Cookies.remove('accessToken');
    window.location.href = '/login';
  } else {
    return response.data;
  }
};

const put = async (path, body) => {
  const response = await axios.put(BASE_URL + path, body, {
    headers,
    // auth,
  });
  if (response.status === 401) {
    Cookies.remove('accessToken');
    window.location.href = '/login';
  } else {
    return response.data;
  }
};

const del = async (path) => {
  const response = await axios.delete(BASE_URL + path, {
    headers,
    // auth,
  });
  if (response.status === 401) {
    Cookies.remove('accessToken');
    window.location.href = '/login';
  } else {
    return response.data;
  }
};

export { callAPI, post, get, put, del };

export default callAPI;
