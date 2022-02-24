import { combineReducers } from "redux";
import auth,{authSaga} from "./auth";
import { all } from "redux-saga/effects";
import user, {userSaga} from "./user";
import loading from './loading';

export function* rootSaga() {
  yield all([authSaga(),userSaga()]);
}

const rootReducer = combineReducers({ 
  auth,
  loading,
  user, });
  
export default rootReducer;
