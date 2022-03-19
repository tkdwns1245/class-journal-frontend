import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CommonTemplate from '../../components/common/CommonTemplate';
import {logout} from '../../modules/user';
import {Navigate, useNavigate} from 'react-router-dom';

const CommonTemplateContainer = ({children}) => {
    // const {user} = useSelector(({user}) => ({
    //     user: user.user
    // }));
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if(!user) {
    //         navigate('/login');
    //     }
    // },[user,navigate]);
    return (
    <CommonTemplate>
        {children}
    </CommonTemplate>);
};

export default CommonTemplateContainer;