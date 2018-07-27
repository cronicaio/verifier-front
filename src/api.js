import axios from 'axios';
import qs from 'qs';

let BASE_URL = `https://api.${window.location.hostname}`;

if (process.env.development) {
  BASE_URL = 'https://api.etihad-verifier.jb.vareger.com';
}

const get = (path, token) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return (
    axios({
      headers,
      method: 'get',
      url: `${BASE_URL}/${path}`,
    })
  );
}

const post = (path, body, token) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return (
    axios({
      headers,
      method: 'post',
      url: `${BASE_URL}/${path}`,
      data: body ? JSON.stringify(body) : undefined,
    })
  );
}

const postFormData = (path, body, token) => {
  return axios({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `${token ? `Bearer ${token}` : 'Basic dHJ1c3RlZGNsaWVudGlkOktBOW9uRXBhODFVcTlhb3E3QnpnOTFiZElkYVlkMQ=='}`,
    },
    method: 'post',
    url: `${BASE_URL}/${path}`,
    data: qs.stringify(body),
  })
};

const put = (path, body, token) => (
  axios({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'put',
    url: `${BASE_URL}/${path}`,
    data: body ? JSON.stringify(body) : undefined,
  })
);

const deleteReq = (path, token) => (
  axios({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'delete',
    url: `${BASE_URL}/${path}`,
  })
)

export const Api = {
  get,
  post,
  put,
  deleteReq,
  postFormData,
};
