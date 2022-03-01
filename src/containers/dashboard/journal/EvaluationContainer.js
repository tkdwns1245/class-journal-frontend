import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, register, listJournals} from '../../../modules/journal';
import { check } from '../../../modules/user';
import CalendarBox from '../../../components/dashboard/journal/CalendarBox.js';
import Evaluation from '../../../components/dashboard/evaluation/Evaluation.js';
import MemoBox from '../../../components/dashboard/journal/MemoBox.js';

const EvaluationContainer = () => {
    return (
        <Evaluation>
        </Evaluation>
    )
}

export default EvaluationContainer;