import { types } from '../types/types';

/**Accion asincrona */

export const starLoginUserPasswoer = (name) => {
  return (dispatch) => {
    dispatch(login(name));
  };
};

export const login = (name) => {
  return {
    type: types.login,
    payload: {
      name
    },
  };
};
