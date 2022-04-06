import client from './client';
import Swal from "sweetalert2";


export const register = ({appointment,selectedJournal,selectedMonth}) => {
    const {title,content,startDate,endDate} = appointment;
    return client.post('/api/journal/appointment/',{title,content,startDate,endDate,selectedJournal,selectedMonth})
    .then(function (response) {
        Swal.fire({
            icon: 'success',
            title: 'success message',
            text: '일정 등록에 성공하였습니다.',
            confirmButtonColor: '#1DA57A',
        });
        return response;
    })
}

export const update = ({id,title,content,startDate,endDate}) =>{
    return client.patch(`/api/journal/appointment/${id}`,{title,content,startDate,endDate})
    .then(function (response) {
        Swal.fire({
            icon: 'success',
            title: 'success message',
            text: '일정 수정에 성공하였습니다.',
            confirmButtonColor: '#1DA57A',
        });
        return response;
    })
}

export const remove = ({id}) => {
    return client.delete(`/api/journal/appointment/${id}`)
    .then(function (response) {
        Swal.fire({
            icon: 'success',
            title: 'success message',
            text: '일정 삭제에 성공하였습니다.',
            confirmButtonColor: '#1DA57A',
        });
        return response;
    })
}

export const listAppointments = ({selectedJournal,selectedMonth}) => {
        const {_id,classYear} = selectedJournal;
        const params = {
                journal_id : _id,
                journal_classYear : classYear,
                selectedMonth
        };
        return client.get('/api/journal/appointment/',{params});
}