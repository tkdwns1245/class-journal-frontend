import React,{useCallback} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import DateControllBox from '../../../../components/dashboard/journal/daily-journal/date-controll/DateControllBox';
import { selectMonth,selectDay } from '../../../../modules/journal';
const DateControllContainer = ({}) => {
    const {selectedJournal,selectedMonth, selectedDay} = useSelector(({journal}) => ({
        selectedJournal: journal.selectedJournal,
        selectedMonth: journal.selectedMonth,
        selectedDay: journal.selectedDay
    }));
    const dispatch = useDispatch();
    const onChangeMonth = useCallback( e => {
        const selectDate = new Date(e);
        dispatch(selectMonth({selectMonth:selectDate.getMonth() + 1}));
    },[dispatch]);

    const onChangeDay = useCallback( e => {
        const selectDate = new Date(e);
        dispatch(selectDay({selectDay:selectDate.getDate()}));
    },[dispatch]);
    return(
            <DateControllBox
                selectedJournal={selectedJournal}
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                onChangeMonth={onChangeMonth}
                onChangeDay={onChangeDay}
                >
            </DateControllBox>
    )
}

export default DateControllContainer;