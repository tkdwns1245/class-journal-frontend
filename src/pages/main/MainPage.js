import React from "react";
import CommonTemplateContainer from '../../containers/common/CommonTemplateContainer.js';
import TimeLineBox from '../../components/main/TimeLineBox.js';
import JournalManageContainer from '../../containers/main/JournalManageContainer.js';
import MainBox from '../../components/main/MainBox.js';

const MainPage = () => {
  return (
      <CommonTemplateContainer>
          <MainBox>
            <JournalManageContainer/>
            <TimeLineBox/>
          </MainBox>
      </CommonTemplateContainer>
  );
};

export default MainPage;
