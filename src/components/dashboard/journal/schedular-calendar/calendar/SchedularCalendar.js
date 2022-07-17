import React,{useEffect,useCallback, useState} from 'react';
import { connectProps } from '@devexpress/dx-react-core';
import {
  styled, darken, alpha, lighten,
} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import classNames from 'clsx';
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  DragDropProvider,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';
import WbSunny from '@mui/icons-material/WbSunny';
import FilterDrama from '@mui/icons-material/FilterDrama';
import Opacity from '@mui/icons-material/Opacity';
import AppointmentFormComponent from './AppointmentFormComponent';
import {Navigate,useNavigate} from 'react-router-dom';
import {selectDate} from '../../../../../modules/journal.js';
import {useDispatch, useSelector} from 'react-redux';

const PREFIX = 'Demo';
const owners = [
    {
      text: 'Andrew Glover',
      id: 1,
      color: '#7E57C2',
    }, {
      text: 'Arnie Schwartz',
      id: 2,
      color: '#FF7043',
    }, {
      text: 'John Heart',
      id: 3,
      color: '#E91E63',
    }
  ];
const classes = {
  cell: `${PREFIX}-cell`,
  content: `${PREFIX}-content`,
  text: `${PREFIX}-text`,
  sun: `${PREFIX}-sun`,
  cloud: `${PREFIX}-cloud`,
  rain: `${PREFIX}-rain`,
  sunBack: `${PREFIX}-sunBack`,
  cloudBack: `${PREFIX}-cloudBack`,
  rainBack: `${PREFIX}-rainBack`,
  opacity: `${PREFIX}-opacity`,
  appointment: `${PREFIX}-appointment`,
  apptContent: `${PREFIX}-apptContent`,
  flexibleSpace: `${PREFIX}-flexibleSpace`,
  flexContainer: `${PREFIX}-flexContainer`,
  tooltipContent: `${PREFIX}-tooltipContent`,
  tooltipText: `${PREFIX}-tooltipText`,
  title: `${PREFIX}-title`,
  icon: `${PREFIX}-icon`,
  circle: `${PREFIX}-circle`,
  textCenter: `${PREFIX}-textCenter`,
  dateAndTitle: `${PREFIX}-dateAndTitle`,
  titleContainer: `${PREFIX}-titleContainer`,
  container: `${PREFIX}-container`,
};

const getBorder = theme => (`1px solid ${
  theme.palette.mode === 'light'
    ? lighten(alpha(theme.palette.divider, 1), 0.88)
    : darken(alpha(theme.palette.divider, 1), 0.68)
}`);

const DayScaleCell = props => (
  <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
);

const StyledOpacity = styled(Opacity)(() => ({
  [`&.${classes.rain}`]: {
    color: '#4FC3F7',
  },
}));
const StyledWbSunny = styled(WbSunny)(() => ({
  [`&.${classes.sun}`]: {
    color: '#FFEE58',
  },
}));
const StyledFilterDrama = styled(FilterDrama)(() => ({
  [`&.${classes.cloud}`]: {
    color: '#90A4AE',
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${classes.cell}`]: {
    color: '#78909C!important',
    position: 'relative',
    userSelect: 'none',
    verticalAlign: 'top',
    padding: 0,
    height: 100,
    borderLeft: getBorder(theme),
    '&:first-of-type': {
      borderLeft: 'none',
    },
    '&:last-child': {
      paddingRight: 0,
    },
    'tr:last-child &': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: 'white',
    },
    '&:focus': {
      backgroundColor: alpha(theme.palette.primary.main, 0.15),
      outline: 0,
    },
  },
  [`&.${classes.sunBack}`]: {
    backgroundColor: '#FFFDE7',
  },
  [`&.${classes.cloudBack}`]: {
    backgroundColor: '#ECEFF1',
  },
  [`&.${classes.rainBack}`]: {
    backgroundColor: '#E1F5FE',
  },
  [`&.${classes.opacity}`]: {
    opacity: '0.5',
  },
}));
const StyledDivText = styled('div')(() => ({
  [`&.${classes.text}`]: {
    padding: '0.5em',
    textAlign: 'center',
  },
}));
const StyledDivContent = styled('div')(() => ({
  [`&.${classes.content}`]: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
  },
}));

const StyledAppointmentsAppointment = styled(Appointments.Appointment)(() => ({
  [`&.${classes.appointment}`]: {
    borderRadius: '10px',
    '&:hover': {
      opacity: 0.6,
    },
  },
}));

const StyledToolbarFlexibleSpace = styled(Toolbar.FlexibleSpace)(() => ({
  [`&.${classes.flexibleSpace}`]: {
    flex: 'none',
  },
  [`& .${classes.flexContainer}`]: {
    display: 'flex',
    alignItems: 'center',
  },
}));
const StyledAppointmentsAppointmentContent = styled(Appointments.AppointmentContent)(() => ({
  [`&.${classes.apptContent}`]: {
    '&>div>div': {
      whiteSpace: 'normal !important',
      lineHeight: 1.2,
    },
  },
}));

const resources = [{
  fieldName: 'ownerId',
  title: 'important',
  instances: owners,
}];

const WeatherIcon = ({ id }) => {
  switch (id) {
    case 0:
      return <StyledOpacity className={classes.rain} fontSize="large" />;
    case 1:
      return <StyledWbSunny className={classes.sun} fontSize="large" />;
    case 2:
      return <StyledFilterDrama className={classes.cloud} fontSize="large" />;
    default:
      return null;
  }
};

const CellBase = React.memo(({
  startDate,
  formatDate,
  otherMonth,
}) => {
  const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
  const isFirstMonthDay = startDate.getDate() === 1;
  const formatOptions = isFirstMonthDay
    ? { day: 'numeric', month: 'long' }
    : { day: 'numeric' };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSelectDate = useCallback((selectedDate) =>{
      const formatDate = `${selectedDate.getMonth() + 1}/${selectedDate.getDate()}`;
      navigate('/dashBoard/daily-journal');
      try{
          localStorage.setItem('selectedDate',formatDate);
      } catch(e) {
          console.log('localStorage is not working');
      }
      dispatch(selectDate({selectDate : formatDate}));
  },[dispatch,navigate]);
  return (
    <StyledTableCell
      tabIndex={0}
      className={classNames({
        [classes.cell]: true,
        // [classes.rainBack]: iconId === 0,
        [classes.sunBack]: true,
        // [classes.cloudBack]: iconId === 2,
        [classes.opacity]: otherMonth,
      })}
      onClick={() =>onSelectDate(startDate)}
    >
      <StyledDivContent className={classes.content}>
        {/* <WeatherIcon classes={classes} id={iconId} /> */}
      </StyledDivContent>
      <StyledDivText className={classes.text}>
        {formatDate(startDate, formatOptions)}
      </StyledDivText>
      
    </StyledTableCell>
  );
});

const TimeTableCell = (CellBase);

const Appointment = (({ ...restProps }) => (
  <StyledAppointmentsAppointment
    {...restProps}
    className={classes.appointment}
  />
));

const AppointmentContent = (({ ...restProps }) => (
  <StyledAppointmentsAppointmentContent {...restProps} className={classes.apptContent} />
));

// const FlexibleSpace = (({ ...restProps }) => (
//   <StyledToolbarFlexibleSpace {...restProps} className={classes.flexibleSpace}>
//     <div className={classes.flexContainer}>
//       <ColorLens fontSize="large" htmlColor="#FF7043" />
//       <Typography variant="h5" style={{ marginLeft: '10px' }}>Art School</Typography>
//     </div>
//   </StyledToolbarFlexibleSpace>
// ));

const SchedularCalendar = ({
  appointments,
  editModalVisible,
  onToggleEditModal,
  onEditingAppointmentChange,
  onAddedAppointmentChange,
  editingAppointment,
  addedAppointment,
  onCommitChanges,
  appointmentFormContainer,
}
  ) => {

  
  const {selectedJournal,selectedMonth} = useSelector(({journal}) => ({
    selectedJournal: journal.selectedJournal,
    selectedMonth: journal.selectedMonth
  }));

  const getCurrentDate = useCallback(()=>{
    const journal_classYear = selectedJournal.classYear.split('-')[0];
    let currentDate = new Date(`${journal_classYear}-${parseInt(selectedMonth)}-2`);
    return currentDate;
  },[selectedJournal,selectedMonth]);
  
    return (
        <Paper>
        <Scheduler
            data={appointments}
        >
            <EditingState
              addedAppointment={addedAppointment}
              onAddedAppointmentChange={onAddedAppointmentChange}
              onCommitChanges={onCommitChanges}
              editingAppointment={editingAppointment}
              onEditingAppointmentChange={onEditingAppointmentChange}
            />
            <ViewState
            currentDate={getCurrentDate()}
            />

            <MonthView
            timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
            />
            <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
            />
            <Resources
              data={resources}
            />
            <EditRecurrenceMenu />
            <AppointmentTooltip
              showCloseButton
              showDeleteButton
              showOpenButton
            />
            <AppointmentForm 
              overlayComponent={appointmentFormContainer}
              visible={editModalVisible}
              onVisibilityChange={onToggleEditModal}
            />
            <DragDropProvider />
        </Scheduler>

        </Paper>
    );
}

export default SchedularCalendar;