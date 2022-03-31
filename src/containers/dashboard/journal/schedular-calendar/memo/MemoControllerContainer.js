import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MemoControllBox from '../../../../../components/dashboard/journal/schedular-calendar/memo/MemoControllBox.js';
import {changeField, initializeForm, memoRegister} from '../../../../../modules/journal.js';

const MemoControllerContainer = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    
    const {form} = useSelector(({journal}) => ({
        form: journal.register.memo,
        memos: journal.memos
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
    
    

    return (
            <MemoControllBox 
                form={form} 
                isModalVisible={isModalVisible} 
                showModal={showModal} 
                handleCancel={handleCancel}
                onChange={onChange}
                onSubmit={onSubmit}
                error={error}/>
    )
}

export default MemoControllerContainer;