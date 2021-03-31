import axios from 'axios';

const URL = 'http://localhost:8000';
const USERS = 'users';
const INCI = "incidence"

export const addNewUser = (Name, password) => {
  return axios.post(`${URL}/${USERS} `, {
    Name,
    password,
   
  });
};


export const getAxios = {
  getIncidence: () => axios.get(`${URL}/${USERS} `),
};

export const deleteInc = (id) => {
  return axios.delete(`${URL}/${INCI}/${id}`);
};


export const getId = (id) => {
  return axios.get(`${URL}/${INCI}/${id}`);
};

export const addIncidence = (incidence, operator, date,detail) => {
  return axios.post(`${URL}/${INCI} `, {
    incidence,
    operator,
    date,
    detail
  });
};


export const incidenceGet = () => {
  return axios.get(`${URL}/${INCI}`);
};


