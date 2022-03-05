import client from './client';

export const register = {
    journal : ({schoolName,gradeNum,classroomNum,themeColor,createDate}) =>
            client.post('/api/journal/register',{schoolName,gradeNum,classroomNum,themeColor,createDate}),
    memo : ({title,content,selectedMonth,selectedJournal}) =>
            client.post('/api/journal/memo/register',{title,content,selectedMonth,selectedJournal}),
}
export const listJournals = ({}) =>
        client.get('/api/journal/list',{});
export const listMemos = ({journal_id,selectedMonth}) => {
        const params = {
                journal_id,
                selectedMonth
        };
        return client.get('/api/journal/memo/list',{params});
}