import React,{useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom';
import CommonTemplateContainer from '../../containers/common/CommonTemplateContainer.js';
import CommonBoardTemplateContainer from '../../containers/common/CommonBoardTemplateContainer.js';
import TimeLineBox from '../../components/main/TimeLineBox.js';
import JournalManageContainer from '../../containers/main/JournalManageContainer.js';
import MainBox from '../../components/main/MainBox.js';
import SideMenu from '../../components/dashboard/common/SideMenu.js';
import ContentBox from '../../components/dashboard/common/ContentBox.js';
import JournalCalendar from '../../components/dashboard/journal/JournalCalendar.js';
import { Route, Routes,Outlet } from "react-router-dom";
import styled from 'styled-components';
const Spacer = styled.div`
    height: 4rem;
`;
const DashBoardPage = () => {
  const {selectedJournal,selectedMonth,user} = useSelector(({journal,user}) => ({
    selectedJournal: journal.selectedJournal,
    selectedMonth: journal.selectedMonth,
    user:user.user
}));
const navigate = useNavigate();
useEffect(() => {
    if(!user) {
        alert('로그인 이후 접근할 수 있습니다.');
        navigate('/login');
    }
    if(!selectedJournal) {
        alert('먼저 학급일지를 선택해주세요.');
        navigate('/');
    }
},[selectedJournal,navigate]);
  return (
      <CommonTemplateContainer>
          <CommonBoardTemplateContainer>
              <SideMenu/>
              <ContentBox>
                <Outlet/>
              </ContentBox>
          </CommonBoardTemplateContainer>
          <Spacer/>
      </CommonTemplateContainer>
  );
};

export default DashBoardPage;

