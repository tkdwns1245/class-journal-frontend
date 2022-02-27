import { combineReducers } from "redux";
import auth,{authSaga} from "./auth";
import journal,{journalSaga} from "./journal";
import { all } from "redux-saga/effects";
import user, {userSaga} from "./user";
import loading from './loading';

export function* rootSaga() {
  yield all([authSaga(),userSaga(),journalSaga()]);
}

const rootReducer = combineReducers({ 
  auth,
  loading,
  user,
  journal, });
  
export default rootReducer;
