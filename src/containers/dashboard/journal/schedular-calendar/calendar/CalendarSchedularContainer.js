import React, {useState,useEffect,useCallback} from 'react';
import { connectProps } from '@devexpress/dx-react-core';
import {useDispatch, useSelector} from 'react-redux';
import CalendarControllBox from '../../../../../components/dashboard/journal/schedular-calendar/calendar/CalendarControllBox.js';
import AppointmentFormComponent from '../../../../../components/dashboard/journal/schedular-calendar/calendar/AppointmentFormComponent.js';
import SchedularBox from '../../../../../components/dashboard/journal/schedular-calendar/calendar/SchedularBox.js';
import {selectMonth} from '../../../../../modules/journal.js';
import {appointmentRegister,appointmentUpdate,appointmentDelete,listAppointments} from '../../../../../modules/appointment';
import Swal from "sweetalert2";

const CalendarSchedularContainer = () => {
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isNewAppointment, setIsNewAppointment] = useState(false);
    const [editingAppointment,setEditingAppointment] = useState(null);
    const [previousAppointment,setPreviousAppointment] = useState(null);
    const [addedAppointment, setAddedAppointment] = useState(null);
    const dispatch = useDispatch();
    const {appointments} = useSelector(({appointment}) => ({
        appointments: appointment.appointments,
    }));

    const {selectedJournal,selectedMonth} = useSelector(({journal}) => ({
        selectedJournal: journal.selectedJournal,
        selectedMonth: journal.selectedMonth
    }));

    const onChangeMonth = useCallback( e => {
        const selectDate = new Date(e);
        dispatch(selectMonth({selectMonth:selectDate.getMonth() + 1}));
    },[dispatch]);


    const onToggleEditModal = () => {
        setIsEditModalVisible(!isEditModalVisible);
    };

    const onEditingAppointmentChange = (editingAppointment) =>{
        setEditingAppointment(editingAppointment);
    }
    const onAddedAppointmentChange = (addedAppointment) =>{
        setPreviousAppointment(editingAppointment);
        setAddedAppointment(addedAppointment);
        setEditingAppointment(undefined);
        setIsNewAppointment(true);
    }
    const onCommitChanges = ({ added, changed, deleted }) => {
        if (added) {
          const appointment = added;
          dispatch(appointmentRegister({appointment,selectedJournal,selectedMonth}));
        }
        if (changed) {
          const {id,title,content,startDate,endDate} = changed;
          dispatch(appointmentUpdate({id,title,content,startDate,endDate}));
        }
        if (deleted !== undefined) {
          const id = deleted;
          Swal.fire(
            { 
                text: "정말로 삭제 하시겠습니까?",
                icon: 'warning', showCancelButton: true,
                confirmButtonColor: '#1DA57A',
                cancelButtonColor: '#885A40',
                confirmButtonText: '승인',
                cancelButtonText: '취소' 
            }
            ).then((result) => 
            { 
                if (result.isConfirmed) {
                    dispatch(appointmentDelete({id}));
                }
            })
          
        //   data = data.filter(appointment => appointment.id !== deleted);
        }
        // setData(data);
    }

    useEffect(() => {
        dispatch(listAppointments({selectedJournal,selectedMonth}));
    }, [dispatch,selectedJournal,selectedMonth]);
    
    const appointmentFormContainer = connectProps(AppointmentFormComponent, () => {
        
        const appointmentData = appointments
          .filter(appointment => editingAppointment && appointment.id === editingAppointment.id)[0]
          || addedAppointment;
        const cancelAppointment = () => {
          if (isNewAppointment) {
              setEditingAppointment(previousAppointment);
              setIsNewAppointment(false);
          };
        };
      
        return (
            {
                visible:isEditModalVisible,
                commitChanges:onCommitChanges,
                visibleChange:onToggleEditModal,
                onEditingAppointmentChange,
                cancelAppointment,
                appointmentData
            }
        ) 
          
      });

    return (
            <>
                <CalendarControllBox 
                    onChangeMonth={onChangeMonth}
                    selectedMonth={selectedMonth}
                    selectedJournal={selectedJournal}
                    onToggleEditModal={onToggleEditModal}
                    onEditingAppointmentChange={onEditingAppointmentChange}
                    onAddedAppointmentChange={onAddedAppointmentChange}
                    />
                <SchedularBox 
                    appointments={appointments}
                    isEditModalVisible={isEditModalVisible}
                    onToggleEditModal={onToggleEditModal}
                    onEditingAppointmentChange={onEditingAppointmentChange}
                    onAddedAppointmentChange={onAddedAppointmentChange}
                    editingAppointment={editingAppointment}
                    addedAppointment={addedAppointment}
                    onCommitChanges={onCommitChanges}
                    appointmentFormContainer={appointmentFormContainer}
                />
            </>
    )
}

export default CalendarSchedularContainer;