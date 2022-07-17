import React from "react";
import ContentBox from '../../components/dashboard/common/ContentBox.js';
import DateControllBox from "../../components/dashboard/journal/daily-journal/DateControllBox.js";

const DailyJournalPage = () => {
    
  return (
      <ContentBox>
        <DateControllBox/>
      </ContentBox>
  );
};

export default DailyJournalPage;

