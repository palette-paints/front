import React, { useState } from 'react';
import Header from '../components/Header';
import LoginBox from '../components/Login/LoginBox';

function Login({ setLoginStateTrue, isLoggedIn }) {
    return (
        <>
            <Header />
            <LoginBox
                setLoginStateTrue={setLoginStateTrue}
                isLoggedIn={isLoggedIn}
            />
        </>
    );
}

export default Login;
