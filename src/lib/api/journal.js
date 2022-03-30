import client from './client';

export const register = {
    journal : ({schoolName,gradeNum,classroomNum,themeColor,createDate}) =>
            client.post('/api/journal/',{schoolName,gradeNum,classroomNum,themeColor,createDate}),
    memo : ({title,content,selectedMonth,selectedJournal}) =>
            client.post('/api/journal/memo/',{title,content,selectedMonth,selectedJournal}),
}

export const update = {
        // journal : ({schoolName,gradeNum,classroomNum,themeColor,createDate}) =>
        //         client.patch('/api/journal/:id',{schoolName,gradeNum,classroomNum,themeColor,createDate}),
        memo : ({id,title,content}) =>
                client.patch(`/api/journal/memo/${id}`,{title,content}),
}

export const remove = {
        // journal : ({schoolName,gradeNum,classroomNum,themeColor,createDate}) =>
        //         client.patch('/api/journal/:id',{schoolName,gradeNum,classroomNum,themeColor,createDate}),
        memo : ({id}) =>
                client.delete(`/api/journal/memo/${id}`,{id}),
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