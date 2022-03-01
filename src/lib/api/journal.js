import client from './client';

export const register = ({schoolName,gradeNum,classroomNum,themeColor,createDate}) =>
    client.post('/api/journal/register',{schoolName,gradeNum,classroomNum,themeColor,createDate});
export const listJournals = ({}) =>
    client.get('/api/journal/listJournals',{});