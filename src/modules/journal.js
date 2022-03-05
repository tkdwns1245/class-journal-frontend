import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
import createRequestSaga,{createRequestActionTypes} from '../lib/createRequestSaga';
import { takeLatest} from 'redux-saga/effects';
import * as journalAPI from '../lib/api/journal';
const CHANGE_FIELD = 'journal/CHANGE_FIELD';
const SELECT_JOURNAL = 'journal/SELECT_JOURNAL';
const SELECT_MONTH = 'journal/SELECT_MONTH';
const INITIALIZE_FORM = 'journal/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('journal/REGISTER');
const [MEMO_REGISTER, MEMO_REGISTER_SUCCESS, MEMO_REGISTER_FAILURE] = createRequestActionTypes('journal/MEMO_REGISTER');
const [LIST_JOURNALS, LIST_JOURNALS_SUCCESS, LIST_JOURNALS_FAILURE] = createRequestActionTypes('journal/LIST_JOURNALS');
const [LIST_MEMOS, LIST_MEMOS_SUCCESS, LIST_MEMOS_FAILURE] = createRequestActionTypes('journal/LIST_MEMOS');

export const changeField = createAction(
    CHANGE_FIELD,
    ({form,type, key, value}) => ({
        form,
        type,
        key,
        value,
    }),
);
export const selectJournal = createAction(
    SELECT_JOURNAL,
    ({journalItem}) => ({
        journalItem
    }),
);

export const selectMonth = createAction(
    SELECT_MONTH,
    ({selectMonth}) => ({
        selectMonth
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, ({form,type}) => ({
    form,
    type
}));
export const register = createAction(REGISTER, ({schoolName,gradeNum,classroomNum,themeColor,createDate}) => ({
    schoolName,
    gradeNum,
    classroomNum,
    themeColor,
    createDate
}));
export const memoRegister = createAction(MEMO_REGISTER, ({title,content,selectedMonth,selectedJournal}) => ({
    title,
    content,
    selectedMonth,
    selectedJournal
}));
export const listJournals = createAction(LIST_JOURNALS, () => ({}));
export const listMemos = createAction(LIST_MEMOS, ({journal_id,selectedMonth}) => ({journal_id,selectedMonth}));

const registerSaga = createRequestSaga(REGISTER, journalAPI.register['journal']);
const memoRegisterSaga = createRequestSaga(MEMO_REGISTER, journalAPI.register['memo']);
const listJournalsSaga = createRequestSaga(LIST_JOURNALS, journalAPI.listJournals);
const listMemosSaga = createRequestSaga(LIST_MEMOS, journalAPI.listMemos);
export function* journalSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(MEMO_REGISTER, memoRegisterSaga);
    yield takeLatest(LIST_JOURNALS, listJournalsSaga);
    yield takeLatest(LIST_MEMOS, listMemosSaga);
}

const initialState = {
    register : {
        journal : {
            schoolName: '',
            gradeNum: '',
            classroomNum: '',
            createDate:'',
            themeColor:'',
        },
        memo : {
            title: '',
            content: '',
            createDate:'',
            memoMonth: '',
            journal: '',
        }
    },
    selectedJournal: null,
    selectedMonth: null,
    journals: null,
    journalError : null,
    memos: null,
    memoError : null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: {form,type, key, value}}) =>
    produce(state, draft => {
        draft[form][type][key] = value;
    }),
    [SELECT_JOURNAL]: (state, { payload: {journalItem}}) =>
    produce(state, draft => {
        draft['selectedJournal'] = journalItem;
    }),
    [SELECT_MONTH]: (state, { payload: {selectMonth}}) =>
    produce(state, draft => {
        draft['selectedMonth'] = selectMonth;
    }),
    [INITIALIZE_FORM] : (state, {payload: {form,type}}) => 
    produce(state, draft => {
        draft[form][type] = initialState[form][type];
        draft['journalError'] = null;
    }),
    [REGISTER_SUCCESS] : (state, { payload: journals}) => 
    produce(state, draft => {
        journals = journals.map(journalItem => {
            journalItem['studentImageFiles'] = new Array('','','','');
            return journalItem});
        draft['journals'] = journals;
        draft['journalError'] = null;
    }),
    [REGISTER_FAILURE] : (state, {payload: error}) => 
    produce(state, draft => {
        draft['journalError'] = error;
    }),
    [MEMO_REGISTER_SUCCESS] : (state, { payload: memos}) => 
    produce(state, draft => {
        draft['memos'] = memos;
        draft['memoError'] = null;
    }),
    [MEMO_REGISTER_FAILURE] : (state, {payload: error}) => 
    produce(state, draft => {
        draft['memoError'] = error;
    }),
    [LIST_JOURNALS_SUCCESS] : (state, { payload: journals}) => 
    produce(state, draft => {
        journals = journals.map(journalItem => {
            journalItem['studentImageFiles'] = new Array('','','','');
            return journalItem});
        draft['journals'] = journals;
        draft['journalError'] = null;
    }),
    [LIST_JOURNALS_FAILURE] : (state, {payload: error}) => 
    produce(state, draft => {
        draft['journalError'] = error;
    }),
    [LIST_MEMOS_SUCCESS] : (state, { payload: memos}) => 
    produce(state, draft => {
        draft['memos'] = memos;
        draft['memoError'] = null;
    }),
    [LIST_MEMOS_FAILURE] : (state, {payload: error}) => 
    produce(state, draft => {
        draft['memoError'] = error;
    }),
  },
  initialState
);

export default auth;
