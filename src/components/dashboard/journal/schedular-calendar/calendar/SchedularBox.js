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
    isEditModalVisible,
    isDeleteModalVisible,
    toggleEditModal,
    toggleDeleteModal,
}) => {
    return(
        <SchedularBoxBlock>
            <SchedularCalendar
                editModalVisible={isEditModalVisible}
                deleteModalVisible={isDeleteModalVisible}
                onToggleEditModal={toggleEditModal}
                onToggleDeleteModal={toggleDeleteModal}
            />
        </SchedularBoxBlock>
    )
}

export default SchedularBox;