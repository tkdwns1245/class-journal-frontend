import client from './client';
import Swal from "sweetalert2";

export const register = {
    journal : ({schoolName,gradeNum,classroomNum,themeColor,classYear}) => {
            return client.post('/api/journal/',{schoolName,gradeNum,classroomNum,themeColor,classYear})
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'success message',
                    text: '일지 등록에 성공하였습니다.',
                    confirmButtonColor: '#1DA57A',
                });
                return response;
            })
        },
    memo : ({title,content,selectedMonth,selectedJournal}) => {
            return client.post('/api/journal/memo/',{title,content,selectedMonth,selectedJournal})
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'success message',
                    text: '메모 등록에 성공하였습니다.',
                    confirmButtonColor: '#1DA57A',
                });
                return response;
            })
        }
}

export const update = {
        // journal : ({schoolName,gradeNum,classroomNum,themeColor,createDate}) =>
        //         client.patch('/api/journal/:id',{schoolName,gradeNum,classroomNum,themeColor,createDate}),
        memo : ({id,title,content}) => {
                return client.patch(`/api/journal/memo/${id}`,{title,content})
                .then(function (response) {
                        Swal.fire({
                            icon: 'success',
                            title: 'success message',
                            text: '메모 수정에 성공하였습니다.',
                            confirmButtonColor: '#1DA57A',
                        });
                        return response;
                    })
        },
}

export const remove = {
        // journal : ({schoolName,gradeNum,classroomNum,themeColor,createDate}) =>
        //         client.patch('/api/journal/:id',{schoolName,gradeNum,classroomNum,themeColor,createDate}),
        memo : ({id}) => {
                return client.delete(`/api/journal/memo/${id}`,{id})
                .then(function (response) {
                        Swal.fire({
                            icon: 'success',
                            title: 'success message',
                            text: '메모 삭제에 성공하였습니다.',
                            confirmButtonColor: '#1DA57A',
                        });
                        return response;
                    })
        },
}

export const listJournals = ({}) =>
        client.get('/api/journal/',{});
export const listMemos = ({journal_id,selectedMonth}) => {
        const params = {
                journal_id,
                selectedMonth
        };
        return client.get('/api/journal/memo/',{params});
}