import React, {useEffect,useState,useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CalendarBox from '../../../components/dashboard/journal/CalendarBox.js';
import JournalCalendar from '../../../components/dashboard/journal/JournalCalendar.js';
import MemoBox from '../../../components/dashboard/journal/MemoBox.js';
import {changeField, initializeForm, memoRegister,selectMonth,listMemos} from '../../../modules/journal.js';

const JournalCalendarContainer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const {form,memos,listMemosLoading,memoRegisterLoading} = useSelector(({journal,loading}) => ({
        form: journal.register.memo,
        memos: journal.memos,
        listMemosLoading: loading['journal/LIST_MEMOS'],
        memoRegisterLoading: loading['journal/MEMO_REGISTER']
    }));

    const {selectedJournal,selectedMonth} = useSelector(({journal}) => ({
        selectedJournal: journal.selectedJournal,
        selectedMonth: journal.selectedMonth
    }));

    const showModal = () => {
        dispatch(initializeForm({
            form: 'register',
            type: 'memo'
        }));
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
      };
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'register',
                type: 'memo',
                key: name,
                value
            })
        );
    };
    const onChangeMonth = useCallback( e => {
        const selectDate = new Date(e);
        dispatch(selectMonth({selectMonth:selectDate.getMonth() + 1}));
    },[dispatch]);

    const onSubmit = e => {
        e.preventDefault();
        const { title,content} = form;
        if([title,content].includes('')) {
            setError('빈 칸을 모두 입력하세요.');
            return;
        }else if(selectedMonth === ('' || null)){
            setError('학급일지 \'월\' 을 선택해주세요.');
            return;
        }else if(selectedJournal === ('' || null)){
            setError('학급일지를 먼저 선택해주세요.');
            return;
        }
        dispatch(memoRegister({title,content,selectedMonth,selectedJournal}));
        setIsModalVisible(false);
    };
    useEffect(() => {
        dispatch(listMemos({journal_id:selectedJournal._id,selectedMonth}));
    }, [dispatch]);

    return (
        <JournalCalendar>
            <CalendarBox onChangeMonth={onChangeMonth} selectedMonth={selectedMonth} selectedJournal={selectedJournal}/>
            <MemoBox 
                form={form} 
                isModalVisible={isModalVisible} 
                showModal={showModal} 
                handleCancel={handleCancel}
                onChange={onChange}
                onSubmit={onSubmit}
                memos={memos}
                listMemosLoading={listMemosLoading}
                memoRegisterLoading={memoRegisterLoading}
                error={error}/>
        </JournalCalendar>
    )
}

export default JournalCalendarContainer;