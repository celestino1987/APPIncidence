import axios from 'axios';

const URL = 'http://localhost:8000';
const USERS = 'users';

export const addNewUser = (Name, password) => {
  return axios.post(`${URL}/${USERS} `, {
    Name,
    password,
   
  });
};

export const addIncidence = (incidence, operator, date,detail) => {
  return axios.post(`${URL}/${USERS} `, {
    incidence,
    operator,
    date,
    detail
  });
};

export const getAxios = {
  getIncidence: () => axios.get(`${URL}/${USERS} `),
};

export const deleteInc = (id) => {
  return axios.delete(`${URL}/${USERS}/${id}`);
};

export const getId = (id) => {
  return axios.get(`${URL}/${USERS}/${id}`);
};

