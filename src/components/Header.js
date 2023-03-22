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

const Header = ({ title }) => {
    const [location, setLocation] = useState('');
    const loc = useLocation().pathname;

    useEffect(() => {
        setLocation(loc.substring(1));
    }, []);

    return (
        <div className={loginIconInputs.HeaderDiv}>
            <Title title={location}></Title>

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

            <Logo3 className={loginIconInputs.logoImg} />

            <Input />
        </div>
    );
};

export default Header;
