import axios from 'axios';
import Swal from "sweetalert2";

const client = axios.create();
const onError = (error) => {
    let errorMessage;
    if(error.response.status === 500){
        errorMessage = '내부 서버 에러가 발생하였습니다. 관리자에게 문의하세요.'
    }
    if(error.response.data.Message == undefined){
        errorMessage = error.response.data;
    }else{
        errorMessage = error.response.data.Message;
    }
    Swal.fire({
        icon: 'error',
        title: 'error message',
        text: errorMessage,
        confirmButtonColor: '#1DA57A',
    });
}
client.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        onError(error);
        return Promise.reject(error);
    },
);
/*
client.defaults.baseURL = 'https://external-api-server.com/'

client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

axios.intercepter.response.use(\
    response=>{
        return respose;
    },
    error => {
        return Promise.reject(error);
    })
*/

export default client;