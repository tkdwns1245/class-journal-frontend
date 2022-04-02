import React from 'react';
import styled from 'styled-components';
import { Space } from 'antd';
import DashboardButton from '../../../common/input/DashboardButton.js';
import DashboardDatePicker from '../../../common/input/DashboardDatePicker.js';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/ko';


const CalendarControllBoxBlock = styled.div`
    width: 100%;
    height: 70px;
    display:flex;
    padding:1rem;
    align-items: center;
    justify-content: space-between;
    .buttonWrapper{
        .btn-text{
            margin-left:10px;
        }
    }
`

const CalendarControllBox = ({
    onChangeMonth,
    selectedJournal,
    selectedMonth,
    onToggleEditModal,
    onEditingAppointmentChange,
    onAddedAppointmentChange
}) => {
    const today = new Date();
    const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const startDayHour = today.getHours();

    return(
            <CalendarControllBoxBlock>
                <div className="inputWrapper">
                    <Space>
                    <DashboardDatePicker picker="year" format="YYYY년" disabled value={moment(selectedJournal.createDate,"YYYY")}/>
                    <DashboardDatePicker picker="month" format="M월" onChange={onChangeMonth} value={moment(selectedMonth,"M")}/>
                    </Space>
                </div>
                <div className="buttonWrapper">
                    <DashboardButton onClick={() => {
                        onToggleEditModal();
                        onEditingAppointmentChange(undefined);
                        onAddedAppointmentChange({
                        startDate: new Date(currentDate).setHours(startDayHour),
                        endDate: new Date(currentDate).setHours(startDayHour + 1),
                        });
                    }}>
                        <PlusOutlined />
                        <span className="btn-text">행사추가</span>
                    </DashboardButton>
                </div>
            </CalendarControllBoxBlock>
    )
}

export default CalendarControllBox;