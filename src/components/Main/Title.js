import React from 'react';
import Title from '../../svg/Title.svg';
import styled from 'styled-components';

const MainDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 8em;
    @media screen and (max-width: 1024px) {
        margin-top: 3em;
    }
    @media screen and (max-width: 510px) {
        margin-top: 9em;
    }
    @media screen and (max-width: 390px) {
        margin-top: 9em;
    }
`;

const TitleImg = styled.img`
    display: flex;
    margin-top: -4em;
    @media screen and (max-width: 1024px) {
        margin-top: -6.3em;
        width: 25em;
        height: 31em;
    }
    @media screen and (max-width: 510px) {
        width: 18em;
        height: 20em;
    }
    @media screen and (max-width: 390px) {
        width: 12em;
        height: 20em;
    }
`;

function title() {
    return (
        <MainDiv>
            <TitleImg src={Title}></TitleImg>
        </MainDiv>
    );
}
export default title;
