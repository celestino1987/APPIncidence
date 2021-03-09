import { types } from '../types/types';

export const authReducer = (state = {}, action,) => {
  switch (action.type) {
    case types.login:
      return {
 
        name: action.payload.name,
        pass: action.payload.password

      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
