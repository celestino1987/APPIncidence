import { postAxios } from '../accion/petition';
import { types } from '../types/types';

const initialState = {posts:[]};

export const  postReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.ADD_POST:
        return {...state,
          posts: [ action.payload, ...state.posts]};

         case types.ADD_POST_INC:
          return {...state,
            posts: [ action.payload, ...state.posts]};
            
      case types.GET_INC:
        return { ...state, posts:action.payload };
   //  case UPDATE_POST:
   //    return {...state,
   //      posts: [...state.posts.map((post) => post.id === action.payload.id ?
   //             action.payload:post)]}
     case types.Del_INC:
       return {...state,
         post: [...state.posts.filter(elem=>elem.id!==action.payload)]}
      default:
        return { ...state };}
  }


