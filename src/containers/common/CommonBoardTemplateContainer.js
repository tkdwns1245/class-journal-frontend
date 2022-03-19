import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import {commonColor} from '../../lib/styles/commonColor.js';
import palette from "../../lib/styles/palette";
import {useSelector, useDispatch} from 'react-redux';
import CommonBoardTemplate from '../../components/common/CommonBoardTemplate.js';
import {Navigate, useNavigate} from 'react-router-dom';
import {selectMonth} from '../../modules/journal.js';

const CommonBoardTemplateContainer = ({children}) => {
    const {selectedMonth} = useSelector(({journal}) => ({
        selectedMonth: journal.selectedMonth,
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        if(!selectedMonth){
            const defaultDate = new Date();
            dispatch(selectMonth({selectMonth:defaultDate.getMonth() + 1}));
        }
    },[selectedMonth]);
  return ( 
        <CommonBoardTemplate>
            {children}
        </CommonBoardTemplate>
    );
};

export default CommonBoardTemplateContainer;
