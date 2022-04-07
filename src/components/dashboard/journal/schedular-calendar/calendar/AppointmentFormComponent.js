import React,{useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';
import 'moment/locale/ko';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import { Button} from 'antd';
import {
  Scheduler,
  Toolbar,
  MonthView,
  WeekView,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import { connectProps } from '@devexpress/dx-react-core';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterMoment from '@mui/lab/AdapterMoment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import LocationOn from '@mui/icons-material/LocationOn';
import Notes from '@mui/icons-material/Notes';
import Close from '@mui/icons-material/Close';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Create from '@mui/icons-material/Create';

const ErrorMessage = styled('div')(() => ({
color: 'red',
textAlign: 'center',
fontSize: '0.875rem',
marginTop: '1rem',
width:'70%'
}));

const PREFIX = 'Demo';
// #FOLD_BLOCK
const classes = {
  content: `${PREFIX}-content`,
  header: `${PREFIX}-header`,
  closeButton: `${PREFIX}-closeButton`,
  buttonGroup: `${PREFIX}-buttonGroup`,
  button: `${PREFIX}-button`,
  picker: `${PREFIX}-picker`,
  wrapper: `${PREFIX}-wrapper`,
  icon: `${PREFIX}-icon`,
  textField: `${PREFIX}-textField`,
  addButton: `${PREFIX}-addButton`,
};

// #FOLD_BLOCK
const StyledDiv = styled('div')(({ theme }) => ({
  [`& .${classes.icon}`]: {
    margin: theme.spacing(2, 0),
    marginRight: theme.spacing(2),
  },
  [`& .${classes.header}`]: {
    overflow: 'hidden',
    paddingTop: theme.spacing(0.5),
  },
  [`& .${classes.textField}`]: {
    width: '100%',
  },
  [`& .${classes.textField} .Mui-focused .MuiOutlinedInput-notchedOutline`]: {
    borderColor:'#1DA57A',
  },
  [`& .${classes.textField} .Mui-focused`]: {
    color:'#1DA57A'
  },
  [`& .${classes.content}`]: {
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  [`& .${classes.closeButton}`]: {
    float: 'right',
  },
  [`& .${classes.picker}`]: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
    width: '50%',
  },
  [`& .${classes.picker} .Mui-focused .MuiOutlinedInput-notchedOutline`]: {
    borderColor:'#1DA57A'
  },
  [`& .${classes.picker} .Mui-focused`]: {
    color:'#1DA57A'
  },
  [`& .${classes.wrapper}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0),
  },
  [`& .${classes.buttonGroup}`]: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 2),
  },
  [`& .${classes.button}`]: {
    marginLeft: theme.spacing(2),
  },
}));
const AppointmentFormComponent = ({
        visible,
        error,
        visibleChange,
        commitChanges,
        target,
        onHide,
        cancelAppointment,
        appointmentData
      }
) => {
    const [appointmentChanges, setAppointmentChanges] = useState(null);
    const {selectedJournal} = useSelector(({journal}) => ({
      selectedJournal: journal.selectedJournal,
    }));
    
    const getAppointmentData = () => {
      return appointmentData;
    };
    const getAppointmentChanges = () => {
      return appointmentChanges;
    };
  
    const changeAppointment = ({ field, changes }) => {
      const nextChanges = {
        ...getAppointmentChanges(),
        [field]: changes,
      };
      setAppointmentChanges(nextChanges);
    }
  
    const commitAppointment = (type) => {
      const appointment = {
        ...getAppointmentData(),
        ...getAppointmentChanges(),
      };
      if (type === 'deleted') {
        commitChanges({ [type]: appointment.id });
        if(error){
          return;
        }
      } else if (type === 'changed') {
        commitChanges({ [type]: appointment });
        if(error){
          return;
        }
      } else {
        commitChanges({ [type]: appointment });
        if(error){
          return;
        }
      }
      setAppointmentChanges({});
    }
  
    const displayAppointmentData = {
      ...appointmentData,
      ...appointmentChanges,
    };
    const isNewAppointment = useCallback(() =>(appointmentData && appointmentData.id === undefined),
    [appointmentData]);
    const applyChanges = isNewAppointment()
      ? () => commitAppointment('added')
      : () => commitAppointment('changed');
    const textEditorProps = field => ({
      variant: 'outlined',
      onChange: ({ target: change }) => changeAppointment({
        field: [field], changes: change.value,
      }),
      value: displayAppointmentData[field] || '',
      label: field[0].toUpperCase() + field.slice(1),
      className: classes.textField,
    });
    function disabledDate(current) {
      let customYear = selectedJournal.classYear.split('-')[0];
      return current && (current < moment(customYear, 'YYYY') || current >= moment(parseInt(customYear)+1, 'YYYY'));
  }
    const pickerEditorProps = field => ({
      // keyboard: true,
      value: displayAppointmentData[field],
      onChange: date => changeAppointment({
        field: [field], changes: date ? date.toDate() : new Date(displayAppointmentData[field]),
      }),
      ampm: false,
      inputFormat: 'YYYY-MM-DD',
      onError: () => null,
      shouldDisableDate:disabledDate
    });
    const startDatePickerProps = pickerEditorProps('startDate');
    const endDatePickerProps = pickerEditorProps('endDate');
    const cancelChanges = () => {
      setAppointmentChanges({});
      visibleChange();
      cancelAppointment();
    };

    
    return (
      <AppointmentForm.Overlay
        visible={visible}
        target={target}
        fullSize
        onHide={onHide}
      >
        <StyledDiv>
          <div className={classes.header}>
            <IconButton className={classes.closeButton} onClick={cancelChanges} size="large">
              <Close color="action" />
            </IconButton>
          </div>
          <div className={classes.content}>
            <div className={classes.wrapper}>
              <Create className={classes.icon} color="action" />
              <TextField
                {...textEditorProps('title')}
              />
            </div>
            <div className={classes.wrapper}>
              <CalendarToday className={classes.icon} color="action" />
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  label="Start Date"
                  renderInput={
                    props => <TextField className={classes.picker} {...props} />
                  }
                  {...startDatePickerProps}
                />
                <DatePicker
                  label="End Date"
                  renderInput={
                    props => <TextField className={classes.picker} {...props} />
                  }
                  {...endDatePickerProps}
                />
              </LocalizationProvider>
            </div>
            <div className={classes.wrapper}>
              <Notes className={classes.icon} color="action" />
              <TextField
                {...textEditorProps('content')}
                multiline
                rows="6"
              />
            </div>
          </div>
          <div className={classes.buttonGroup}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {!isNewAppointment() && (
              <Button
                type="secondary"
                onClick={() => {
                  visibleChange();
                  commitAppointment('deleted');
                }}
                style={
                  {marginRight:"10px"}
                }
              >
                Delete
              </Button>
            )}
            <Button
              type="primary"
              onClick={() => {
                applyChanges();
              }}
            >
              {isNewAppointment() ? 'Create' : 'Save'}
            </Button>
            
          </div>
        </StyledDiv>
      </AppointmentForm.Overlay>
    );
}

export default AppointmentFormComponent;