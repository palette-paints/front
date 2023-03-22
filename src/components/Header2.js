import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo3 from '@/svg/Logo.svg';
import Input from '@/components/Login/Input';
import loginIconInputs from '@/modules/Input.module.css';

const Header = styled.div`
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

const Header2 = () => {
    const [innerWidth, setInnerWidth] = useState('');

    const [width, setWidth] = useState(1000);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, []);

    return (
        <div className={loginIconInputs.HeaderDiv}>
            <Header>
                <li>
                    <a href="/plays">체험 잼잼</a>
                </li>
                <li>
                    <a href="/studys">학업 튼튼</a>
                </li>
                <li>
                    <a href="/minds">마음 쑥쑥</a>
                </li>
            </Header>

            <Logo3 className={loginIconInputs.logoImg} />

            <Input />
        </div>
    );
};

export default Header2;
