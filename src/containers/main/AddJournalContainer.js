import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, journalRegister,selectJournal, listJournals} from '../../modules/journal/register.js';
import { check } from '../../modules/user';
import AddJournalModal from '../../components/main/AddJournalModal';
import {Navigate, useNavigate} from 'react-router-dom';

const AddJournalContainer = ({isModalVisible, setIsModalVisible}) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const {form,journalError} = useSelector(({register}) => ({
        form: register['register'],
        journalError: register['journalError']
    }));
    const handleCancel = () => {
        setIsModalVisible(false);
      };
    const onChange = e => {
        if(e._isAMomentObject){
            dispatch(
                changeField({
                    form: 'register',
                    key: 'classYear',
                    value: e
                })
            );
        }else if (e.target.name === "classroomNum" || e.target.name === "gradeNum"){
            const {value, name} = e.target;
            dispatch(
                changeField({
                    form: 'register',
                    key: name,
                    value : parseInt(value)
                })
            );
        } else {
            const {value, name} = e.target;
            dispatch(
                changeField({
                    form: 'register',
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
        dispatch(journalRegister({schoolName,gradeNum,classroomNum,themeColor,classYear}));
        setIsModalVisible(false);
    };

    useEffect(() => {
        if(journalError) {
            if( journalError.response.status === 409) {
                setError('해당 년도에 같은 데이터가 존재합니다.');
                return;
            }
            setError('학급일지 생성 실패');
            return;
        }
        
    }, [journalError,dispatch]);
    return (
        <AddJournalModal
            form={form}
            visible={isModalVisible}
            onSubmit={onSubmit}
            onChange={onChange}
            onCancel={handleCancel}
            error={error}
        />
    )
}

export default AddJournalContainer;