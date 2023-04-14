import React from 'react';
import Header from '../components/Header';

import Mypages from './../components/Mypage/Mypage.js';

export default function Mypage({ setLoginStateFalse }) {
    return (
        <>
            <Header />
            <Mypages setLoginStateFalse={setLoginStateFalse} />
        </>
    );
}
