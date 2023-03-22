import React from 'react';
import styled from 'styled-components';

const LButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    padding: 15px 20px;
    width: 500px;
    height: 55px;

    background: #3465c9;
    box-shadow: 4px 4px 15px rgba(52, 101, 201, 0.5);
    border-radius: 50px;
    border: none;
    margin: 0 auto;
    margin-bottom: 30px;

    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #ffffff;

    @media screen and (max-width: 1024px) {
        width: 430px;
        height: 60px;
    }

    @media screen and (max-width: 510px) {
        width: 245px;
        height: 55px;
        font-size: 15px;
    }
`;
export default LButton;
