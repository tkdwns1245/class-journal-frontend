import React,{useCallback,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import ClassActivityBox from '../../../../components/dashboard/journal/daily-journal/class-activity/ClassActivityBox';
import { initializeForm,changeField,selectPeriod } from '../../../../modules/journal';
const ClassActivityContainer = ({}) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState(undefined);
    const [selectedActivityType,setSelectedActivityType] = useState(undefined);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const {form} = useSelector(({journal}) => ({
        form: journal.register.activity,
    }));

    // const {selectedJournal,selectedMonth} = useSelector(({journal}) => ({
    //     selectedJournal: journal.selectedJournal,
    //     selectedMonth: journal.selectedMonth
    // }));

    const showModal = (period,activityType) => {
        dispatch(initializeForm({
            form: 'register',
            type: 'activity'
        }));
        setSelectedPeriod(period);
        setSelectedActivityType(activityType);
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedPeriod(undefined);
      };
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'register',
                type: 'activity',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        // const { title,content} = form;
        // if([title,content].includes('')) {
        //     setError('빈 칸을 모두 입력하세요.');
        //     return;
        // }else if(selectedMonth === ('' || null)){
        //     setError('학급일지 \'월\' 을 선택해주세요.');
        //     return;
        // }else if(selectedJournal === ('' || null)){
        //     setError('학급일지를 먼저 선택해주세요.');
        //     return;
        // }
        // dispatch(memoRegister({title,content,selectedMonth,selectedJournal}));
        setIsModalVisible(false);
    };
    return(
            <ClassActivityBox
                showModal={showModal}
                form={form}
                isModalVisible={isModalVisible}
                handleCancel={handleCancel}
                onChange={onChange}
                onSubmit={onSubmit}
                error={error}>
            </ClassActivityBox>
    )
}

export default ClassActivityContainer;