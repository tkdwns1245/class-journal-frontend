import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {commonColor} from '../../../lib/styles/commonColor.js';
import { DatePicker, Space } from 'antd';
import DashboardButton from '../common/input/DashboardButton.js';
import DashboardDatePicker from '../common/input/DashboardDatePicker.js';
import { PlusOutlined } from '@ant-design/icons';
import SchedularCalendar from './SchedularCalendar.js';

const CalendarBoxBlock = styled.div`
    position: relative;
    width: 75%;
    height: 100%;
    display:flex;
    flex-direction: column;
`;

const TopButtonBoxBlock = styled.div`
    width: 100%;
    height: 15%;
    display:flex;
    padding:1rem;
    align-items: center;
    justify-content: space-between;
    .right{
        .btn-text{
            margin-left:10px;
        }
    }
`

const bottomCalendarBoxBlock = styled.div`
    width: 100%;
    height: 85%;
    display:flex;
    align-items: center;
    background-color: ${commonColor.journalGreen};
    
`
const CalendarBox = () => {
    return(
        <CalendarBoxBlock>
            <TopButtonBoxBlock>
                <div class="left">
                    <Space>
                    <DashboardDatePicker picker="year" disabled/>
                    <DashboardDatePicker picker="month" />
                    </Space>
                </div>
                <div class="right">
                <DashboardButton>
                    <PlusOutlined />
                    <span class="btn-text">행사추가</span>
                </DashboardButton>
                </div>
            </TopButtonBoxBlock>
            <bottomCalendarBoxBlock>
                <SchedularCalendar/>
            </bottomCalendarBoxBlock>
        </CalendarBoxBlock>
    )
}

export default CalendarBox;