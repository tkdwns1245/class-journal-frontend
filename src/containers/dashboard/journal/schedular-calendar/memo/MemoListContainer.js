import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MemoListBox from '../../../../../components/dashboard/journal/schedular-calendar/memo/MemoListBox.js';
import {listMemos} from '../../../../../modules/journal.js';

const MemoListContainer = () => {
    const dispatch = useDispatch();
    
    const {memos,listMemosLoading,memoRegisterLoading} = useSelector(({journal,loading}) => ({
        memos: journal.memos,
        listMemosLoading: loading['journal/LIST_MEMOS'],
        memoRegisterLoading: loading['journal/MEMO_REGISTER']
    }));

    const {selectedJournal,selectedMonth} = useSelector(({journal}) => ({
        selectedJournal: journal.selectedJournal,
        selectedMonth: journal.selectedMonth
    }));

    useEffect(() => {
        dispatch(listMemos({journal_id:selectedJournal._id,selectedMonth}));
    }, [dispatch,selectedMonth,selectedJournal]);
    

    return (
            <MemoListBox
                memos={memos}
                listMemosLoading={listMemosLoading}
                memoRegisterLoading={memoRegisterLoading}  
            />
    )
}

export default MemoListContainer;