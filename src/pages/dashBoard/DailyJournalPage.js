import React from "react";
import DateControllBox from "../../components/dashboard/journal/daily-journal/date-controll/DateControllBox.js";
import DailyJournalBoxWrapper from "../../components/dashboard/journal/daily-journal/DailyJournalBoxWrapper.js";
import DailyJournalMiddleBoxWrapper from "../../components/dashboard/journal/daily-journal/DailyJournalMiddleBoxWrapper.js";
import DailyJournalBottomBoxWarpper from "../../components/dashboard/journal/daily-journal/DailyJournalBottomBoxWarpper.js";
import DailyJournalControllBoxWrapper from "../../components/dashboard/journal/daily-journal/DailyJournalControllBoxWrapper.js";
import JournalTableBox from "../../components/dashboard/journal/daily-journal/journal-table/JournalTableBox.js";
import ClassActivityBox from "../../components/dashboard/journal/daily-journal/class-activity/ClassActivityBox.js";
import DailyTodoBox from "../../components/dashboard/journal/daily-journal/daily-todo/DailyTodoBox.js";

const DailyJournalPage = () => {
    
  return (
      <DailyJournalBoxWrapper>
        <DailyJournalControllBoxWrapper>
          <DateControllBox/>
        </DailyJournalControllBoxWrapper>
        <DailyJournalMiddleBoxWrapper>
          <JournalTableBox>
          </JournalTableBox>
          <ClassActivityBox>
          </ClassActivityBox>
        </DailyJournalMiddleBoxWrapper>
        <DailyJournalBottomBoxWarpper>
          <DailyTodoBox>
          </DailyTodoBox>
        </DailyJournalBottomBoxWarpper>
      </DailyJournalBoxWrapper>
  );
};

export default DailyJournalPage;

