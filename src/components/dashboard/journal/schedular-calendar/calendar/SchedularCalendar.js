import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {appointmentRegister} from '../../../../../modules/appointment';
import { connectProps } from '@devexpress/dx-react-core';
import {
  styled, darken, alpha, lighten,
} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
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
import ColorLens from '@mui/icons-material/ColorLens';
import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Button,TextField,Fab} from '@mui/material'
import AppointmentFormComponent from './AppointmentFormComponent';



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
  return (
    <StyledTableCell
      tabIndex={0}
      className={classNames({
        [classes.cell]: true,
        [classes.rainBack]: iconId === 0,
        [classes.sunBack]: iconId === 1,
        [classes.cloudBack]: iconId === 2,
        [classes.opacity]: otherMonth,
      })}
    >
      <StyledDivContent className={classes.content}>
        <WeatherIcon classes={classes} id={iconId} />
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

const FlexibleSpace = (({ ...restProps }) => (
  <StyledToolbarFlexibleSpace {...restProps} className={classes.flexibleSpace}>
    <div className={classes.flexContainer}>
      <ColorLens fontSize="large" htmlColor="#FF7043" />
      <Typography variant="h5" style={{ marginLeft: '10px' }}>Art School</Typography>
    </div>
  </StyledToolbarFlexibleSpace>
));



const SchedularCalendar = ({
  editModalVisible,
  deleteModalVisible,
  onToggleEditModal,
  onToggleDeleteModal,}
  ) => {
  const [isNewAppointment, setIsNewAppointment] = useState(false);
  const [editingAppointment,setEditingAppointment] = useState(undefined);
  const [previousAppointment,setPreviousAppointment] = useState(null);
  const [addedAppointment, setAddedAppointment] = useState(null);
  const {selectedJournal,selectedMonth} = useSelector(({journal}) => ({
      selectedJournal: journal.selectedJournal,
      selectedMonth: journal.selectedMonth
  }));
  const dispatch = useDispatch();
  let [data,setData] = useState([
    {
      id: 0,
      title: 'Watercolor Landscape',
      startDate: new Date(2018, 6, 23, 9, 30),
      endDate: new Date(2018, 6, 23, 11, 30),
      ownerId: 1,
    }, {
      id: 1,
      title: 'Monthly Planning',
      content:'test',
      startDate: new Date(2018, 5, 28, 9, 30),
      endDate: new Date(2018, 5, 28, 11, 30),
      ownerId: 1,
    }, {
      id: 2,
      title: 'Recruiting students',
      startDate: new Date(2018, 6, 9, 12, 0),
      endDate: new Date(2018, 6, 9, 13, 0),
      ownerId: 2,
    }, {
      id: 3,
      title: 'Oil Painting',
      startDate: new Date(2018, 6, 18, 14, 30),
      endDate: new Date(2018, 6, 18, 15, 30),
      ownerId: 2,
    }, {
      id: 4,
      title: 'Open Day',
      startDate: new Date(2018, 6, 20, 12, 0),
      endDate: new Date(2018, 6, 20, 13, 35),
      ownerId: 6,
    }, {
      id: 5,
      title: 'Watercolor Landscape',
      startDate: new Date(2018, 6, 6, 13, 0),
      endDate: new Date(2018, 6, 6, 14, 0),
      rRule: 'FREQ=WEEKLY;BYDAY=FR;UNTIL=20180816',
      exDate: '20180713T100000Z,20180727T100000Z',
      ownerId: 2,
    }, {
      id: 6,
      title: 'Meeting of Instructors',
      startDate: new Date(2018, 5, 28, 12, 0),
      endDate: new Date(2018, 5, 28, 12, 30),
      rRule: 'FREQ=WEEKLY;BYDAY=TH;UNTIL=20180727',
      exDate: '20180705T090000Z,20180719T090000Z',
      ownerId: 5,
    }, {
      id: 7,
      title: 'Oil Painting for Beginners',
      startDate: new Date(2018, 6, 3, 11, 0),
      endDate: new Date(2018, 6, 3, 12, 0),
      rRule: 'FREQ=WEEKLY;BYDAY=TU;UNTIL=20180801',
      exDate: '20180710T080000Z,20180724T080000Z',
      ownerId: 3,
    }, {
      id: 8,
      title: 'Watercolor Workshop',
      startDate: new Date(2018, 6, 9, 11, 0),
      endDate: new Date(2018, 6, 9, 12, 0),
      ownerId: 3,
    },
  ]);
  
  
  
  const onEditingAppointmentChange = (editingAppointment) =>{
    setEditingAppointment(editingAppointment);
  }
  const onAddedAppointmentChange = (addedAppointment) =>{
    setPreviousAppointment(editingAppointment);
    setAddedAppointment(addedAppointment);
    setEditingAppointment(undefined);
    setIsNewAppointment(true);
  }
  const commitDeletedAppointment = () =>{
    // this.setState((state) => {
    //   const { data, deletedAppointmentId } = state;
    //   const nextData = data.filter(appointment => appointment.id !== deletedAppointmentId);

    //   return { data: nextData, deletedAppointmentId: null };
    // });
    onToggleDeleteModal();
  }
  const onCommitChanges = ({ added, changed, deleted }) => {
    if (added) {
      const appointment = added;
      console.log(appointment);
      dispatch(appointmentRegister({appointment,selectedJournal}));
      // const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      // data = [...data, { id: startingAddedId, ...added }];
    }
    if (changed) {
      data = data.map(appointment => (
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
    }
    if (deleted !== undefined) {
      data = data.filter(appointment => appointment.id !== deleted);
    }
    setData(data);
  }


  const appointmentForm = connectProps(AppointmentFormComponent, () => {

    const currentAppointment = data
      .filter(appointment => editingAppointment && appointment.id === editingAppointment.id)[0]
      || addedAppointment;
    const cancelAppointment = () => {
      if (isNewAppointment) {
          setEditingAppointment(previousAppointment);
          setIsNewAppointment(false);
      };
    };
  
    return {
      visible: editModalVisible,
      appointmentData: currentAppointment,
      commitChanges: onCommitChanges,
      visibleChange: onToggleEditModal,
      onEditingAppointmentChange,
      cancelAppointment,
    };
  });

  const today = new Date();
  const currentDate = '2018-06-27';
  const startDayHour = today.getHours();
  appointmentForm.update();

    return (
        <Paper>
        <Scheduler
            data={data}
        >
            <EditingState
              addedAppointment={addedAppointment}
              onAddedAppointmentChange={onAddedAppointmentChange}
              onCommitChanges={onCommitChanges}
              editingAppointment={editingAppointment}
              onEditingAppointmentChange={onEditingAppointmentChange}
            />
            <ViewState
            defaultCurrentDate={currentDate}
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
              overlayComponent={appointmentForm}
              visible={editModalVisible}
              onVisibilityChange={onToggleEditModal}
            />
            <DragDropProvider />
        </Scheduler>

        <Dialog
          open={deleteModalVisible}
          // onClose={this.cancelDelete}
        >
          <DialogTitle>
            Delete Appointment
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this appointment?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() =>{onToggleDeleteModal()}} color="primary" variant="outlined">
              Cancel
            </Button>
            <Button onClick={() => {commitDeletedAppointment()}} color="secondary" variant="outlined">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        </Paper>
    );
}

export default SchedularCalendar;