import { types } from '../types/types';

const initialState = { posts: [] };

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };

    case types.ADD_POST_INC:
      return { ...state, posts: [action.payload, ...state.posts] };

    case types.GET_INC:
      return { ...state, posts: action.payload };

    case types.Del_INC:
      return {
        ...state,
        post: [...state.posts.filter((elem) => elem.id !== action.payload)],
      };
    default:
      return { ...state };
  }
};
