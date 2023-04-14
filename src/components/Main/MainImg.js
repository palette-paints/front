import React from 'react';
import mainImage from '../../images/mainImage.png';
import styled from 'styled-components';

const MainDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const MainImgage = styled.img`
    width: fit-content;
    height: 40em;
    display: flex;
    @media screen and (max-width: 1024px) {
        width: 60em;
        height: 31em;
    }
    @media screen and (max-width: 510px) {
        width: 35em;
        height: 20em;
        margin-top: 12em;
    }
    @media screen and (max-width: 391px) {
        width: 30em;
        height: 13em;
        margin-top: 12em;
    }
`;
const MainImg = () => {
    return (
        <MainDiv>
            <MainImgage src={mainImage}></MainImgage>
        </MainDiv>
    );
};

export default MainImg;
