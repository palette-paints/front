import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo3 } from '../svg/Logo.svg';
import Input from './Login/Input';
import loginIconInputs from '../modules/Input.module.css';
import Title from './Title';
import { useLocation } from 'react-router-dom';

const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    margin-left: 60px;

    li {
        display: flex;
        list-style: none;
        justify-content: right;
        left: 5%;
        transform: translateX(-5%);
    }

    li a {
        display: block;
        color: #3465c9;
        margin: 0px 16px;
        letter-spacing: 1px;
        text-decoration: none;
        outline: none;
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        font-size: 15px;
    }
`;
function Header(title, loginState) {
    const [location, setLocation] = useState('');
    const loc = useLocation().pathname;

    useEffect(() => {
        setLocation(loc.substring(1));
    }, []);
    const gomain = () => {
        window.location.href = '/main';
    };

    return (
        <div
            className={loginIconInputs.HeaderDiv}
            style={{ marginBottom: '150px' }}
        >
            {location.includes('minds') == true ? (
                <Title title="마음 쑥쑥" color={'#71af8a'}></Title>
            ) : location.includes('studys') == true ? (
                <Title title="학업 튼튼" color={'#3f8ab5'}></Title>
            ) : location.includes('plays') == true ? (
                <Title title="체험 잼잼" color={'#7e6fdd'}></Title>
            ) : location.includes('mypage') == true ? (
                <Title title="마이페이지" color={'#3465c9'}></Title>
            ) : location.includes('login') == true ? (
                <Title title="로그인" color={'#3465c9'}></Title>
            ) : (
                <Title title="회원가입" color={'#3465c9'}></Title>
            )}

            <HeaderBox>
                <li>
                    <a href="/plays">체험 잼잼</a>
                </li>
                <li>
                    <a href="/studys">학업 튼튼</a>
                </li>
                <li>
                    <a href="/minds">마음 쑥쑥</a>
                </li>
            </HeaderBox>

            <Logo3 className={loginIconInputs.logoImg} onClick={gomain} />

            <Input loginState={loginState} />
        </div>
    );
}

export default Header;
