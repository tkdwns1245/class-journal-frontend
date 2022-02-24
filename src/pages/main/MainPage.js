import React from "react";
import CommonTemplate from '../../components/common/CommonTemplate.js';
import TimeLineBox from '../../components/main/TimeLineBox.js';
import JournalManageBox from '../../components/main/JournalManageBox.js';
import MainBox from '../../components/main/MainBox.js';

const MainPage = () => {
  return (
      <CommonTemplate>
          <MainBox>
            <JournalManageBox/>
            <TimeLineBox/>
          </MainBox>
      </CommonTemplate>
  );
};

export default MainPage;
