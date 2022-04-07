import client from './client';
import Swal from "sweetalert2";

export const login= ({username,password}) =>
    client.post('/api/auth/login',{username,password});

export const register = ({username,password}) =>
    client.post('/api/auth/register',{username, password})
    .then(function (response) {
        Swal.fire({
            icon: 'success',
            title: 'success message',
            text: '회원가입에 성공하였습니다.',
            confirmButtonColor: '#1DA57A',
        });
        return response;
    });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');