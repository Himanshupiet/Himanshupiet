import React from 'react';
import Head from '../../components/common/Head';
import Login from '../../components/Login_Page/login';

const login = () => {
    return (
        <>
            <Head title='Login - MarraForni' description='MARRA FORNI Login Page' />
            <Login />
        </>
    );
};
export default login;