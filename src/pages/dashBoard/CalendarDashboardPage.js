import MemoBox from '../../components/dashboard/journal/schedular-calendar/memo/MemoBox';
import CalendarBox from '../../components/dashboard/journal/schedular-calendar/calendar/CalendarBox';
import SchedularCalendarBox from '../../components/dashboard/journal/schedular-calendar/SchedularCalendarBox';
import MemoControllerContainer from '../../containers/dashboard/journal/schedular-calendar/memo/MemoControllerContainer';
import MemoListContainer from '../../containers/dashboard/journal/schedular-calendar/memo/MemoListContainer';
import CalendarSchedularContainer from '../../containers/dashboard/journal/schedular-calendar/calendar/CalendarSchedularContainer';
import ContentBox from '../../components/dashboard/common/ContentBox.js';
const CalendarDashboardPage = () => {
    
  return (
      <ContentBox>
        <CalendarBox>
            <CalendarSchedularContainer/>
        </CalendarBox>
        <MemoBox>
            <MemoControllerContainer/>
            <MemoListContainer/>
        </MemoBox>
      </ContentBox>
  );
};

export default CalendarDashboardPage;

