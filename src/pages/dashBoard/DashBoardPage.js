import React from "react";
import CommonTemplateContainer from '../../containers/common/CommonTemplateContainer.js';
import TimeLineBox from '../../components/main/TimeLineBox.js';
import JournalManageContainer from '../../containers/main/JournalManageContainer.js';
import MainBox from '../../components/main/MainBox.js';
import CommonBoardTemplate from '../../components/common/CommonBoardTemplate.js';
import SideMenu from '../../components/dashboard/common/SideMenu.js';
import ContentBox from '../../components/dashboard/common/ContentBox.js';
import JournalCalendar from '../../components/dashboard/journal/JournalCalendar.js';
import { Route, Routes,Outlet } from "react-router-dom";
import styled from 'styled-components';
const Spacer = styled.div`
    height: 4rem;
`;
const DashBoardPage = () => {
  return (
      <CommonTemplateContainer>
          <CommonBoardTemplate>
              <SideMenu/>
              <ContentBox>
                <Outlet/>
              </ContentBox>
          </CommonBoardTemplate>
          <Spacer/>
      </CommonTemplateContainer>
  );
};

export default DashBoardPage;

