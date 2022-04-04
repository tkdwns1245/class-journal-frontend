import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
import createRequestSaga,{createRequestActionTypes} from '../lib/createRequestSaga';
import { takeLatest} from 'redux-saga/effects';
import * as appointmentAPI from '../lib/api/appointment';
const CHANGE_FIELD = 'appointment/CHANGE_FIELD';
const INITIALIZE_FORM = 'journal/INITIALIZE_FORM';

const [APPOINTMENT_REGISTER, APPOINTMENT_REGISTER_SUCCESS, APPOINTMENT_REGISTER_FAILURE] = createRequestActionTypes('appointment/APPOINTMENT_REGISTER');
const [APPOINTMENT_UPDATE, APPOINTMENT_UPDATE_SUCCESS, APPOINTMENT_UPDATE_FAILURE] = createRequestActionTypes('appointment/APPOINTMENT_UPDATE');
const [APPOINTMENT_DELETE, APPOINTMENT_DELETE_SUCCESS, APPOINTMENT_DELETE_FAILURE] = createRequestActionTypes('appointment/APPOINTMENT_DELETE');
const [LIST_APPOINTMENTS, LIST_APPOINTMENTS_SUCCESS, LIST_APPOINTMENTS_FAILURE] = createRequestActionTypes('appointment/LIST_APPOINTMENTS');

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value,
    }),
);


export const appointmentRegister = createAction(APPOINTMENT_REGISTER, ({appointment,selectedJournal}) => ({
    appointment,
    selectedJournal
}));

export const appointmentUpdate = createAction(APPOINTMENT_UPDATE, ({id,title,content,startDate,endDate}) => ({
    id,
    title,
    content,
    startDate,
    endDate
}));

export const appointmentDelete = createAction(APPOINTMENT_DELETE, ({id}) => ({
    id
}));
export const listAppointments = createAction(LIST_APPOINTMENTS, ({selectedJournal,selectedMonth}) => ({selectedJournal,selectedMonth}));

const appointmentRegisterSaga = createRequestSaga(APPOINTMENT_REGISTER, appointmentAPI.register);
const appointmentUpdateSaga = createRequestSaga(APPOINTMENT_UPDATE, appointmentAPI.update);
const appointmentDeleteSaga = createRequestSaga(APPOINTMENT_DELETE, appointmentAPI.remove);
const listAppointmentsSaga = createRequestSaga(LIST_APPOINTMENTS, appointmentAPI.listAppointments);

export function* appointmentSaga() {
    yield takeLatest(APPOINTMENT_REGISTER, appointmentRegisterSaga);
    yield takeLatest(APPOINTMENT_UPDATE, appointmentUpdateSaga);
    yield takeLatest(APPOINTMENT_DELETE, appointmentDeleteSaga);
    yield takeLatest(LIST_APPOINTMENTS, listAppointmentsSaga);
}

const initialState = {
    appointments: [],
    appointmentError : null,
};

const appointment = handleActions(
  {

    [APPOINTMENT_REGISTER_SUCCESS] : (state, { payload: appointments}) => 
    produce(state, draft => {
        draft['appointments'] = appointments;
        draft['appointmentError'] = null;
    }),
    [APPOINTMENT_REGISTER_FAILURE] : (state, {payload: error}) => 
    produce(state, draft => {
        draft['appointmentError'] = error;
    }),
    [APPOINTMENT_UPDATE_SUCCESS] : (state, { payload: appointment}) => 
    produce(state, draft => {
        const findedAppointment = draft['appointments'].find(appointmentItem => appointmentItem._id === appointment._id);
        findedAppointment.title = appointment.title;
        findedAppointment.content = appointment.content;
        findedAppointment.startDate = appointment.startDate;
        findedAppointment.endDate = appointment.endDate;
    }),
    [APPOINTMENT_UPDATE_FAILURE] : (state, {payload: error}) => 
    produce(state, draft => {
        draft['appointmentError'] = error;
    }),
    [APPOINTMENT_DELETE_SUCCESS] : (state, { payload: {id}}) => 
    produce(state, draft => {
        const index = draft['appointments'].findIndex(appointmentItem => appointmentItem._id === id)
        if (index !== -1) draft['appointments'].splice(index, 1)
        draft['appointmentError'] = null;
    }),
    [APPOINTMENT_DELETE_FAILURE] : (state, {payload: error}) => 
    produce(state, draft => {
        draft['appointmentError'] = error;
    }),
    [LIST_APPOINTMENTS_SUCCESS] : (state, { payload: appointments}) => 
    produce(state, draft => {
        draft['appointments'] = appointments.map((appointment,status) => {
            appointment.id = appointment._id;
            appointment.startDate = new Date(appointment.startDate);
            appointment.endDate = new Date(appointment.endDate);
            return appointment;
        })
        draft['appointmentError'] = null;
    }),
    [LIST_APPOINTMENTS_FAILURE] : (state, {payload: error}) => 
    produce(state, draft => {
        draft['appointmentError'] = error;
    })
  },
  initialState
);

export default appointment;
