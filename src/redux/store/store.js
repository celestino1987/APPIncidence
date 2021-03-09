import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { authReducer } from '../reuducers/authReducer';
import thunk from 'redux-thunk';
import { uiReducer } from '../reuducers/uiReducer';
import { postReducer } from '../reuducers/postReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  post: postReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
