import React from "react";
import CommonTemplate from '../../components/common/CommonTemplate.js';
import TimeLineBox from '../../components/main/TimeLineBox.js';
import JournalManageContainer from '../../containers/main/JournalManageContainer.js';
import MainBox from '../../components/main/MainBox.js';

const MainPage = () => {
  return (
      <CommonTemplate>
          <MainBox>
            <JournalManageContainer/>
            <TimeLineBox/>
          </MainBox>
      </CommonTemplate>
  );
};

export default MainPage;
