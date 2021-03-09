import getAxios, { addIncidence, addNewUser, deleteInc, getIncidence } from '../../services/usersService';
import { types } from '../types/types';

export const addPost = (post) => ({
  type: types.ADD_POST,
  payload: post,
});

  /**Post  del registro */
export const postAxios = (name, pass) => {
  return async (dispatch) => {
    await addNewUser(name, pass).then((res) => {
      dispatch({
        type: types.ADD_POST,
        payload: res.data,
      });
    });
  };
};



/**Delete de la Incidencia */
export const incDelete = (id) => {
  return async (dispatch) => {
    await deleteInc(id).then((res)=>{
      dispatch({
        type : types.Del_INC,
        payload: res.id
      })
    })  
  }
}

//**Post de la  Incidencia */

export const postIncidence = (incidence, operator, date,detail) => {
  return async (dispatch) => {
    await addIncidence(incidence, operator, date,detail).then((res) => {
      dispatch({
        type: types.ADD_POST_INC,
        payload: res.data,
      });
    });
  };
};

//export const getIncidenceAll = ()=>{
//  return (dispatch) =>{
//     getAxios.getIncidence().then((res) =>{
//      dispatch({
//        type:  types.GET_INC,
//        payload : res.data
//      })
//     
//    })
//  }
//}
