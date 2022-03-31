import React, {useState,useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CalendarControllBox from '../../../../../components/dashboard/journal/schedular-calendar/calendar/CalendarControllBox.js';
import {selectMonth} from '../../../../../modules/journal.js';

const CalendarControllerContainer = () => {
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
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

    return (
            <CalendarControllBox 
                onChangeMonth={onChangeMonth}
                selectedMonth={selectedMonth}
                selectedJournal={selectedJournal}
                toggleEditModal={toggleEditModal}
                />
    )
}

export default CalendarControllerContainer;