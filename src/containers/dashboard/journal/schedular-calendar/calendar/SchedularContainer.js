import React, {useState} from 'react';
import SchedularBox from '../../../../../components/dashboard/journal/schedular-calendar/calendar/SchedularBox.js';

const SchedularContainer = () => {
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isNewAppointment, setIsNewAppointment] = useState(false);
    const [editingAppointment,setEditingAppointment] = useState(null);
    const [previousAppointment,setPreviousAppointment] = useState(null);
    const [addedAppointment, setAddedAppointment] = useState(null);

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
            <SchedularBox 
                isDeleteModalVisible={isDeleteModalVisible}
                isEditModalVisible={isEditModalVisible}
                toggleEditModal={toggleEditModal}
                toggleDeleteModal={toggleDeleteModal}
                />
    )
}

export default SchedularContainer;