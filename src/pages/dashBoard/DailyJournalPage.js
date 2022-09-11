import React from "react";
import styled from 'styled-components';
import Button from "../../components/common/Button.js";
import DateControllContainer from "../../containers/dashboard/daily-journal/date-controll/DateControllContainer.js";
import JournalTableBox from "../../components/dashboard/journal/daily-journal/journal-table/JournalTableBox.js";
import ClassActivityContainer from "../../containers/dashboard/daily-journal/class-activity/ClassActivityContainer.js";
import DailyTodoBox from "../../components/dashboard/journal/daily-journal/daily-todo/DailyTodoBox.js";
import { deepMerge } from 'grommet-icons';
const BottomContentBoxWrapper = styled.div`
    position: relative;
    display:flex;
    justify-content: start;
    margin-top:25px;
    width: 100%;
    height: auto;
`;
const TopContentBoxWrapper = styled.div`
  position: relative;
  display:flex;
  justify-content: row;
  width: 100%;
  height: auto;
`
const DailyJournalContentBoxWrapper = styled.div`
  width: 100%;
  height: auto;
`

const DailyJournalFooterBoxWrapper = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  justify-content:end;
  padding-top:20px;
`
const DailyJournalControllBoxWrapper = styled.div`
    position: relative;
    display:flex;
    justify-content: start;
    width: 100%;
    height: auto;
`;

const DailyJournalBoxWrapper = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    width: 100%;
    height: auto;
`;

const DailyJournalPage = () => {
    
  return (
      <DailyJournalBoxWrapper>
        <DailyJournalControllBoxWrapper>
          <DateControllContainer/>
        </DailyJournalControllBoxWrapper>
        <DailyJournalContentBoxWrapper>
          <TopContentBoxWrapper>
            <JournalTableBox>
            </JournalTableBox>
            <ClassActivityContainer>
            </ClassActivityContainer>
          </TopContentBoxWrapper>
          <BottomContentBoxWrapper>
            <DailyTodoBox>
            </DailyTodoBox>
          </BottomContentBoxWrapper>
        </DailyJournalContentBoxWrapper>
        <DailyJournalFooterBoxWrapper>
            <Button to='/dashBoard/journal-calendar'>
              뒤로가기
            </Button>
        </DailyJournalFooterBoxWrapper>
      </DailyJournalBoxWrapper>
  );
};

export default DailyJournalPage;