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
    height: 70px;
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

const BottomCalendarBoxBlock = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    align-items: center;
    background-color: ${commonColor.journalGreen};
    
`
const CalendarBox = () => {
    return(
        <CalendarBoxBlock>
            <TopButtonBoxBlock>
                <div className="left">
                    <Space>
                    <DashboardDatePicker picker="year" disabled/>
                    <DashboardDatePicker picker="month" />
                    </Space>
                </div>
                <div className="right">
                <DashboardButton>
                    <PlusOutlined />
                    <span className="btn-text">행사추가</span>
                </DashboardButton>
                </div>
            </TopButtonBoxBlock>
            <BottomCalendarBoxBlock>
                <SchedularCalendar/>
            </BottomCalendarBoxBlock>
        </CalendarBoxBlock>
    )
}

export default CalendarBox;