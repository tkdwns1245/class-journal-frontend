import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import {commonColor} from '../../lib/styles/commonColor.js';
import palette from "../../lib/styles/palette";
import {useSelector, useDispatch} from 'react-redux';
import CommonBoardTemplate from '../../components/common/CommonBoardTemplate.js';
import {Navigate, useNavigate} from 'react-router-dom';
import {selectMonth} from '../../modules/journal.js';

const CommonBoardTemplateContainer = ({children}) => {
    const {selectedJournal,selectedMonth} = useSelector(({journal}) => ({
        selectedJournal: journal.selectedJournal,
        selectedMonth: journal.selectedMonth
    }));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if(!selectedJournal) {
            alert('먼저 학급일지를 선택해주세요.');
            navigate('/');
        }
        if(!selectedMonth){
            const defaultDate = new Date();
            dispatch(selectMonth({selectMonth:defaultDate.getMonth() + 1}));
        }
    },[selectedJournal,selectedMonth,navigate]);
  return ( 
        <CommonBoardTemplate>
            {children}
        </CommonBoardTemplate>
    );
};

export default CommonBoardTemplateContainer;
