import React from "react";
import CommonTemplateContainer from '../../containers/common/CommonTemplateContainer.js';
import TimeLineBox from '../../components/main/TimeLineBox.js';
import JournalManageContainer from '../../containers/main/JournalManageContainer.js';
import MainBox from '../../components/main/MainBox.js';
import MainBanner from '../../components/main/MainBanner.js';
import {useSelector} from 'react-redux';
const MainPage = () => {
  const {user} = useSelector(({user}) => ({
    user: user.user
  }));

  return (
      <CommonTemplateContainer>
          <MainBox>
            { user !== null ? (
                    <>
                      <JournalManageContainer/>
                      <TimeLineBox/>
                    </>
                  ) : (
                    <MainBanner/>
                  )
            }
          </MainBox>
      </CommonTemplateContainer>
  );
};

export default MainPage;
