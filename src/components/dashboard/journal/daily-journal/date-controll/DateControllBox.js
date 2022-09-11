import React from 'react';
import styled from 'styled-components';
import { Space } from 'antd';
import DashboardButton from '../../../common/input/DashboardButton.js';
import DashboardDatePicker from '../../../common/input/DashboardDatePicker.js';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/ko';


const DateControllBoxBlock = styled.div`
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

const DateControllBox = ({
    // onChangeMonth,
    selectedJournal,
    selectedMonth,
    selectedDay,
    onChangeMonth,
    onChangeDay
}) => {
    function disabledDate(current) {
        let customYear = selectedJournal.classYear.split('-')[0];
        return current && (current < moment(customYear, 'YYYY') || current >= moment(parseInt(customYear)+1, 'YYYY'));
    }

    const selectYear = moment(selectedJournal.classYear,"YYYY");
    const selectMonth = moment(selectedJournal.classYear.split('-')[0]+"-"+selectedMonth,"YYYY-MM");
    const selectDay = moment(selectedJournal.classYear.split('-')[0]+"-"+selectedMonth+"-"+selectedDay,"YYYY-MM-DD");
    
    return(
            <DateControllBoxBlock>
                <div className="inputWrapper">
                    <Space>
                    <DashboardDatePicker picker="year" format="YYYY년" disabled value={selectYear}/>
                    <DashboardDatePicker picker="month" format="M월" onChange={onChangeMonth} disabledDate={disabledDate} value={selectMonth}/>
                    <DashboardDatePicker picker="day" format="D일" onChange={onChangeDay} disabledDate={disabledDate} value={selectDay}/>
                    </Space>
                </div>
            </DateControllBoxBlock>
    )
}

export default DateControllBox;