import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, register, listJournals} from '../../../modules/journal';
import { check } from '../../../modules/user';
import CalendarBox from '../../../components/dashboard/journal/CalendarBox.js';
import JournalCalendar from '../../../components/dashboard/journal/JournalCalendar.js';
import MemoBox from '../../../components/dashboard/journal/MemoBox.js';

const JournalCalendarContainer = () => {
    return (
        <JournalCalendar>
            <CalendarBox/>
            <MemoBox/>
        </JournalCalendar>
    )
}

export default JournalCalendarContainer;