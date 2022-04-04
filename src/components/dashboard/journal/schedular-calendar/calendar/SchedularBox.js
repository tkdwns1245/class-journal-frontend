import React from 'react';
import styled from 'styled-components';
import {commonColor} from '../../../../../lib/styles/commonColor.js';
import SchedularCalendar from './SchedularCalendar.js';
import 'moment/locale/ko';

const SchedularBoxBlock = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    align-items: center;
    background-color: ${commonColor.journalGreen};
    
`
const SchedularBox = ({
    appointments,
    isEditModalVisible,
    onToggleEditModal,
    onEditingAppointmentChange,
    onAddedAppointmentChange,
    editingAppointment,
    addedAppointment,
    onCommitChanges,
    appointmentFormContainer,
}) => {
    return(
        <SchedularBoxBlock>
            <SchedularCalendar
                appointments={appointments}
                editModalVisible={isEditModalVisible}
                onToggleEditModal={onToggleEditModal}
                onEditingAppointmentChange={onEditingAppointmentChange}
                onAddedAppointmentChange={onAddedAppointmentChange}
                editingAppointment={editingAppointment}
                addedAppointment={addedAppointment}
                onCommitChanges={onCommitChanges}
                appointmentFormContainer={appointmentFormContainer}
            />
        </SchedularBoxBlock>
    )
}

export default SchedularBox;