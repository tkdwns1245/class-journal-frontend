import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom';
import auth, {changeField, initializeForm, login} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import {check} from '../../modules/user';

const LoginForm = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {form, auth, authError, user} = useSelector(({auth,user}) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const {username, password} = form;
        if(username === '') {
            setError('아이디를 입력하세요');
            return;
        }
        if(password === ''){
            setError('패스워드를 입력하세요');
            return;
        }
        setError(null);
        dispatch(login({username,password}));
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    },[dispatch]);

    useEffect(() => {
        if(authError) {
            console.log("오류 발생");
            console.log(authError);
            setError('로그인 실패');
            return;
        }
        if(auth) {
            console.log("로그인 성공");
            dispatch(check());
        }
    }, [auth,authError,dispatch]);

    useEffect(() => {
        if(user) {
            navigate('/');
            try{
                localStorage.setItem('user',JSON.stringify(user));
            } catch(e) {
                console.log('localStorage is not working');
            }
        }
        
    },[user,navigate]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    )
}

export default LoginForm;