import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
import createRequestSaga,{createRequestActionTypes} from '../lib/createRequestSaga';
import { takeLatest} from 'redux-saga/effects';
import * as journalAPI from '../lib/api/journal';
const CHANGE_FIELD = 'journal/CHANGE_FIELD';
const INITIALIZE_FORM = 'journal/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('journal/REGISTER');

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value,
    }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form=> form);
export const register = createAction(REGISTER, ({schoolName,gradeNum,classroomNum,themeColor,createDate}) => ({
    schoolName,
    gradeNum,
    classroomNum,
    themeColor,
    createDate
}));

const registerSaga = createRequestSaga(REGISTER, journalAPI.register);
export function* journalSaga() {
    yield takeLatest(REGISTER, registerSaga);
}

const initialState = {
    register : {
        schoolName: '',
        gradeNum: '',
        classroomNum: '',
        createDate:'',
        themeColor:'',
    },
    journals: null,
    journalError : null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: {form, key, value}}) =>
    produce(state, draft => {
        draft[form][key] = value;
    }),
    [INITIALIZE_FORM] : (state, {payload: form}) => 
    produce(state, draft => {
        draft[form] = initialState[form];
        draft['journalError'] = null;
    }),
    [REGISTER_SUCCESS] : (state, { payload: journals}) => 
    produce(state, draft => {
        draft['journals'] = journals;
        draft['journalError'] = null;
    }),
    [REGISTER_FAILURE] : (state, {payload: error}) => 
    produce(state, draft => {
        draft['journalError'] = error;
    }),
  },
  initialState
);

export default auth;
