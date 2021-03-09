
import { types } from '../types/types';

/**Accion asincrona */

export const starLoginUserPasswoer = ( name, password) => {
  return (dispatch) => {

    dispatch(login( name, password));
  };
};

export const login = ( name, password) => {
  return {
    type: types.login,
    payload: {
      
      name,
      password,
    },
  };
};
