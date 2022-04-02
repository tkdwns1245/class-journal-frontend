import React, {useState,useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CalendarControllBox from '../../../../../components/dashboard/journal/schedular-calendar/calendar/CalendarControllBox.js';
import SchedularBox from '../../../../../components/dashboard/journal/schedular-calendar/calendar/SchedularBox.js';
import {selectMonth} from '../../../../../modules/journal.js';

const CalendarSchedularContainer = () => {
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isNewAppointment, setIsNewAppointment] = useState(false);
    const [editingAppointment,setEditingAppointment] = useState(null);
    const [previousAppointment,setPreviousAppointment] = useState(null);
    const [addedAppointment, setAddedAppointment] = useState(null);
    const dispatch = useDispatch();

    const {selectedJournal,selectedMonth} = useSelector(({journal}) => ({
        selectedJournal: journal.selectedJournal,
        selectedMonth: journal.selectedMonth
    }));

    const onChangeMonth = useCallback( e => {
        const selectDate = new Date(e);
        dispatch(selectMonth({selectMonth:selectDate.getMonth() + 1}));
    },[dispatch]);


    const toggleEditModal = () => {
        setIsEditModalVisible(!isEditModalVisible);
    };
    const toggleDeleteModal = () => {
        setIsDeleteModalVisible(!isDeleteModalVisible);
    }
    const onEditingAppointmentChange = (editingAppointment) =>{
        setEditingAppointment(editingAppointment);
    }
    const onAddedAppointmentChange = (addedAppointment) =>{
        setPreviousAppointment(editingAppointment);
        setAddedAppointment(addedAppointment);
        setEditingAppointment(undefined);
        setIsNewAppointment(true);
    }
    const commitDeletedAppointment = () =>{
        // this.setState((state) => {
        //   const { data, deletedAppointmentId } = state;
        //   const nextData = data.filter(appointment => appointment.id !== deletedAppointmentId);

        //   return { data: nextData, deletedAppointmentId: null };
        // });
        toggleDeleteModal();
    }

    return (
            <>
                <CalendarControllBox 
                    onChangeMonth={onChangeMonth}
                    selectedMonth={selectedMonth}
                    selectedJournal={selectedJournal}
                    onToggleEditModal={toggleEditModal}
                    onEditingAppointmentChange={onEditingAppointmentChange}
                    onAddedAppointmentChange={onAddedAppointmentChange}
                    />
                <SchedularBox 
                    isDeleteModalVisible={isDeleteModalVisible}
                    isEditModalVisible={isEditModalVisible}
                    toggleEditModal={toggleEditModal}
                    toggleDeleteModal={toggleDeleteModal}
                />
            </>
    )
}

export default CalendarSchedularContainer;