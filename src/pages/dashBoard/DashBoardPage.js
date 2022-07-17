import React from "react";
import CommonTemplateContainer from '../../containers/common/CommonTemplateContainer.js';
import CommonBoardTemplateContainer from '../../containers/common/CommonBoardTemplateContainer.js';
import SideMenu from '../../components/dashboard/common/SideMenu.js';
import ContentBox from '../../components/dashboard/common/ContentBox.js';
import {Outlet } from "react-router-dom";
import styled from 'styled-components';
const Spacer = styled.div`
    height: 4rem;
`;
const DashBoardPage = () => {
    
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

