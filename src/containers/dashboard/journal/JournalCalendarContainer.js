import React, {useEffect,useState,useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CalendarBox from '../../../components/dashboard/journal/CalendarBox.js';
import JournalCalendar from '../../../components/dashboard/journal/JournalCalendar.js';
import MemoBox from '../../../components/dashboard/journal/MemoBox.js';
import {changeField, initializeForm, memoRegister,selectMonth,listMemos} from '../../../modules/journal.js';

const JournalCalendarContainer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isNewAppointment, setIsNewAppointment] = useState(false);
    const [editingAppointment,setEditingAppointment] = useState(null);
    const [previousAppointment,setPreviousAppointment] = useState(null);
    const [addedAppointment, setAddedAppointment] = useState(null);
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

    const toggleEditModal = () => {
        setIsEditModalVisible(!isEditModalVisible);
    };
    const toggleDeleteModal = () => {
        setIsDeleteModalVisible(!isDeleteModalVisible);
    }
    const onEditingAppointmentChange = (editingAppointment) =>{
        setEditingAppointment(editingAppointment);
    }
    const onAddedAppointmentChange = (addedAppointment) =>{
        setPreviousAppointment(editingAppointment);
        setAddedAppointment(addedAppointment);
        setEditingAppointment(undefined);
        setIsNewAppointment(true);
    }
    const commitDeletedAppointment = () =>{
        // this.setState((state) => {
        //   const { data, deletedAppointmentId } = state;
        //   const nextData = data.filter(appointment => appointment.id !== deletedAppointmentId);

        //   return { data: nextData, deletedAppointmentId: null };
        // });
        toggleDeleteModal();
    }

    useEffect(() => {
        dispatch(listMemos({journal_id:selectedJournal._id,selectedMonth}));
    }, [dispatch]);
    
    

    return (
        <JournalCalendar>
            <CalendarBox 
                onChangeMonth={onChangeMonth}
                selectedMonth={selectedMonth}
                selectedJournal={selectedJournal}
                isEditModalVisible={isEditModalVisible}
                isDeleteModalVisible={isDeleteModalVisible}
                toggleEditModal={toggleEditModal}
                toggleDeleteModal={toggleDeleteModal}
                />
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