import client from './client';

export const register = ({appointment,selectedJournal}) => {
    const {title,content,startDate,endDate} = appointment;
    client.post('/api/journal/appointment/',{title,content,startDate,endDate,selectedJournal})
}

export const update = (appointment) =>{
    const {_id,title,content,startDate,endDate} = appointment;
    client.patch(`/api/journal/appointment/${_id}`,{title,content,startDate,endDate})
}

export const remove = (appointment) => {
    const {_id,title,content,startDate,endDate} = appointment;
    client.delete(`/api/journal/appointment/${_id}`,{title,content,startDate,endDate})
}

export const listAppointments = ({journal,selectedMonth}) => {
        const params = {
                journal,
                selectedMonth
        };
        return client.get('/api/journal/appointment/',{params});
}