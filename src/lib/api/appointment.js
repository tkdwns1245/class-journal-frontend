import client from './client';

export const register = ({appointment,selectedJournal}) => {
    const {title,content,startDate,endDate} = appointment;
    return client.post('/api/journal/appointment/',{title,content,startDate,endDate,selectedJournal})
}

export const update = ({id,title,content,startDate,endDate}) =>{
    return client.patch(`/api/journal/appointment/${id}`,{title,content,startDate,endDate})
}

export const remove = ({id}) => {
    return client.delete(`/api/journal/appointment/${id}`)
}

export const listAppointments = ({selectedJournal,selectedMonth}) => {
        const {_id,classYear} = selectedJournal;
        const params = {
                journal_id : _id,
                journal_classYear : classYear,
                selectedMonth:selectedMonth
        };
        return client.get('/api/journal/appointment/',{params});
}