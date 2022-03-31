import React,{useCallback,useEffect} from 'react';
import {useSelector, useDispatch,shallowEqual} from 'react-redux';
import Header from '../../components/common/Header';
import {logout} from '../../modules/user';
import {authInit} from '../../modules/auth';

const HeaderContainer = () => {
    const {user} = useSelector(({user}) => ({user: user.user}));
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(authInit());
        dispatch(logout());
    },[dispatch]);
    return <Header user={user} onLogout={onLogout}/>;
};

export default HeaderContainer;