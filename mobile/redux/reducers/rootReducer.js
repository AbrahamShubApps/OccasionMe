import { combineReducers } from 'redux';
import user from './user';
import isLoggedIn from './isLoggedIn';

const rootReducer = combineReducers({
  user,
  isLoggedIn,
});

export default rootReducer;
