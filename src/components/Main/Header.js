import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../../svg/Logo.svg';
import Input from '../../components/Login/Input';

const LogoImg = styled.img`

    margin-left: 70px;

    @media screen and (max-width: 1024px) {
        width :3.5em;
        height :3.5em;
        margin-left : 38px;

    }

    @media screen and (max-width: 510px) {
        width :2.5em;
        height :2.5em;
        margin-left : 38px;

    }

    @media screen and (max-width: 390px) {
        width :2em;
        height :2em;
        margin-left : 38px;
`;

const HeaderDiv = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;

const Header = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeListener = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    return (
        <HeaderDiv>
            <LogoImg src={Logo} />
            <Input />
        </HeaderDiv>
    );
};

export default Header;
