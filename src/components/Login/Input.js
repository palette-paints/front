import React from 'react';
import styled from 'styled-components';

const UserDiv = styled.div`
    box-sizing: border-box;
    width: 120px;
    height: 40px;

    border: 2px solid #3465c9;
    border-radius: 15px;
    margin-right: 70px;
    margin-left: 150px;
    display: flex;
    justify-content: center;

    p {
        color: #3465c9;
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 10px;
        text-align: right;
        margin-top: 13px;
    }

    :hover {
        background-color: #3465c9;
        p {
            color: #fff;
        }
    }
`;

const Input = () => {
    return (
        <a
            href="/login"
            style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                height: 'fit-content',
                textDecorationLine: 'none',
            }}
        >
            <UserDiv>
                <p>로그인</p>
            </UserDiv>
        </a>
    );
};

export default Input;
