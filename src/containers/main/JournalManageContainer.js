import React, {useEffect,useState,useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, register,selectJournal, listJournals} from '../../modules/journal';
import { check } from '../../modules/user';
import JournalManageBox from '../../components/main/JournalManageBox';
import {Navigate,useNavigate} from 'react-router-dom';

const JournalManageContainer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {form, journals, journalError,listJournalsLoading,registerLoading} = useSelector(({journal,loading}) => ({
        form: journal.register.journal,
        journals: journal.journals,
        journalError: journal.journalError,
        listJournalsLoading: loading['journal/LIST_JOURNALS'],
        registerLoading: loading['journal/REGISTER']
    }));
    const showModal = () => {
        dispatch(initializeForm({
            form: 'register',
            type: 'journal'
        }));
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
      };
    const onChange = e => {
        if(e._isAMomentObject){
            dispatch(
                changeField({
                    form: 'register',
                    type: 'journal',
                    key: 'classYear',
                    value: e
                })
            );
        }else if (e.target.name === "classroomNum" || e.target.name === "gradeNum"){
            const {value, name} = e.target;
            dispatch(
                changeField({
                    form: 'register',
                    type: 'journal',
                    key: name,
                    value : parseInt(value)
                })
            );
        } else {
            const {value, name} = e.target;
            dispatch(
                changeField({
                    form: 'register',
                    type: 'journal',
                    key: name,
                    value
                })
            );
        }
    };

    const onSubmit = e => {
        e.preventDefault();
        const { schoolName,gradeNum,classroomNum,classYear,themeColor} = form;
        if([schoolName,gradeNum,classroomNum,classYear,themeColor].includes('')) {
            setError('빈 칸을 모두 입력하세요.');
            return;
        }
        dispatch(register({schoolName,gradeNum,classroomNum,themeColor,classYear}));
        setIsModalVisible(false);
    };
    
    const onSelectJournal = useCallback(({journalItem}) =>{
        navigate('/dashBoard/journal-calendar');
        try{
            localStorage.setItem('journalItem',journalItem);
        } catch(e) {
            console.log('localStorage is not working');
        }
        dispatch(selectJournal({journalItem}));
    },[dispatch,navigate]);

    useEffect(() => {
        if(journalError) {
            if( journalError.response.status === 409) {
                setError('해당 년도에 같은 데이터가 존재합니다.');
                return;
            }
            setError('학급일지 생성 실패');
            return;
        }
        
    }, [journals, journalError,dispatch]);
    useEffect(() => {
        dispatch(listJournals());
    }, [dispatch]);
    return (
        <JournalManageBox
            form={form}
            visible={isModalVisible}
            onChange={onChange}
            onCancel={handleCancel}
            listJournalsLoading={listJournalsLoading}
            registerLoading={registerLoading}
            journals={journals}
            onSelectJournal={onSelectJournal}
            showModal={showModal}
            error={error}
            onSubmit={onSubmit}
        />
    )
}

export default React.memo(JournalManageContainer);