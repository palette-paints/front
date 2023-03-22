import React from 'react';
import LoginIcon from '@/svg/LoginIcon.svg';
import Glass from '@/svg/Glass.svg';
import styled from 'styled-components';

const SeacrhBtn = styled.button`
    float: right;
    background: #fffcf8;
    border: none;
    margin-left: -33px;
`;

const UserDiv = styled.div`
    float: right;
    background-color: white;
    border-radius: 50%;
    padding: 5px;
    filter: drop-shadow(3px 5px 10px rgba(52, 101, 201, 0.25));
    margin-right: 30px;
    margin-left: 10px;
    margin-top: -3px;
`;

const HeaderMobile = () => {
    return (
        <div>
            <UserDiv>
                <LoginIcon />
            </UserDiv>

            <SeacrhBtn>
                <Glass />
            </SeacrhBtn>
        </div>
    );
};

export default HeaderMobile;
