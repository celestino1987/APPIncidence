import { types } from '../types/types';

/**Accion asincrona */

export const starLoginUserPasswoer = (name,password,id) => {
  return (dispatch) => {
    dispatch(login(name,password,id));
  };
};

export const login = (name, password,id) => {
  return {
    type: types.login,
    payload: {
      name,
      password,
      id,
    },
  };
};
