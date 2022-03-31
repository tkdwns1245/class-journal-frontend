import MemoBox from '../../components/dashboard/journal/schedular-calendar/memo/MemoBox';
import CalendarBox from '../../components/dashboard/journal/schedular-calendar/calendar/CalendarBox';
import SchedularCalendarBox from '../../components/dashboard/journal/schedular-calendar/SchedularCalendarBox';
import MemoControllerContainer from '../../containers/dashboard/journal/schedular-calendar/memo/MemoControllerContainer';
import MemoListContainer from '../../containers/dashboard/journal/schedular-calendar/memo/MemoListContainer';
import CalendarControllerContainer from '../../containers/dashboard/journal/schedular-calendar/calendar/CalendarControllerContainer';
import SchedularContainer from '../../containers/dashboard/journal/schedular-calendar/calendar/SchedularContainer';
const CalendarDashboardPage = () => {
    
  return (
      <SchedularCalendarBox>
        <CalendarBox>
            <CalendarControllerContainer/>
            <SchedularContainer/>
        </CalendarBox>
        <MemoBox>
            <MemoControllerContainer/>
            <MemoListContainer/>
        </MemoBox>
      </SchedularCalendarBox>
  );
};

export default CalendarDashboardPage;

