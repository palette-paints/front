import React from 'react';
import styled from 'styled-components';
import B1 from '../../svg/B1.svg';
import B2 from '../../svg/B2.svg';
import B3 from '../../svg/B3.svg';
import B4 from '../../svg/B4.svg';
import { Link } from 'react-router-dom';

const ButtonDiv = styled.div`
    width: fit-content;
    height: fit-content;
    display: grid;
    jsutify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0 auto;
    margin-top: -220px;

    @media screen and (max-width: 1024px) {
        width: fit-content;
        height: fit-content;
        display: grid;
        jsutify-content: center;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100px 100px;
        margin-top: -640px;
    }

    @media screen and (max-width: 510px) {
        width: fit-content;
        height: fit-content;
        display: grid;
        jsutify-content: center;
        grid-template-columns: 1fr;
        grid-template-rows: 100px 100px 100px 100px;
        margin-top: -600px;
    }

    @media screen and (max-width: 390px) {
        width: fit-content;
        height: fit-content;
        display: grid;
        jsutify-content: center;
        grid-template-columns: 1fr;
        grid-template-rows: 100px 100px 100px 100px;
        margin-top: -500px;
    }
`;

const StyledButton = styled.a`
    text-decoration: none;
    width: 250px;
    height: 70px;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    display: flex;
    color: #828282;
    background: #ffffff;
    box-shadow: 6px 6px 40px rgba(170, 170, 170, 0.6);
    border: none;
    border-radius: 20px;
    margin-right: 50px;
    font-weight: 700;
    font-size: 20px;
    justify-content: center;

    @media screen and (max-width: 1350px) {
        width: 200px;
        height: 70px;
        font-weight: 500;
        font-size: 18px;
        display: flex;
        line-height: 36px;
        color: #828282;
        background: #ffffff;
        box-shadow: 6px 6px 40px rgba(170, 170, 170, 0.6);
        border: none;
        border-radius: 20px;
        margin: 0 auto;
        margin-right: 50px;
        font-weight: 700;
        font-size: 20px;
        justify-content: center;
    }

    @media screen and (max-width: 1024px) {
        width: 250px;
        height: 70px;
        font-weight: 500;
        font-size: 18px;
        display: flex;
        line-height: 36px;
        color: #828282;
        background: #ffffff;
        box-shadow: 6px 6px 40px rgba(170, 170, 170, 0.6);
        border: none;
        border-radius: 20px;
        margin: 0 auto;
        margin-right: 50px;
        font-weight: 700;
        font-size: 20px;
        justify-content: center;
    }

    @media screen and (max-width: 720px) {
        width: 200px;
        height: 70px;
        font-weight: 500;
        font-size: 18px;
        display: flex;
        line-height: 36px;
        color: #828282;
        background: #ffffff;
        box-shadow: 6px 6px 40px rgba(170, 170, 170, 0.6);
        border: none;
        border-radius: 20px;
        margin: 0 auto;
        margin-right: 50px;
        font-weight: 700;
        font-size: 20px;
        justify-content: center;
    }

    @media screen and (max-width: 510px) {
        width: 230px;
        height: 70px;
        font-weight: 500;
        font-size: 18px;
        display: flex;
        line-height: 36px;
        color: #828282;
        background: #ffffff;
        box-shadow: 6px 6px 40px rgba(170, 170, 170, 0.6);
        border: none;
        border-radius: 20px;
        margin: 0 auto;
        font-weight: 700;
        font-size: 20px;
        justify-content: center;
    }

    @media screen and (max-width: 390px) {
        width: 230px;
        height: 70px;
        font-weight: 500;
        font-size: 18px;
        display: flex;
        line-height: 36px;
        color: #828282;
        background: #ffffff;
        box-shadow: 6px 6px 40px rgba(170, 170, 170, 0.6);
        border: none;
        border-radius: 20px;
        margin: 0 auto;
        font-weight: 700;
        font-size: 20px;
        justify-content: center;
    }
`;

const ButtonImage = styled.img`
    width: 20px;
    height: 20px;
    padding: 5px;
    border-radius: 50%;
    background-color: white;
    filter: drop-shadow(3px 5px 10px rgba(52, 101, 201, 0.3));
    border: 1px solid white;
    margin-right: 13px;
    margin-top: 18px;
`;
const Button = () => {
    return (
        <ButtonDiv>
            <Link to="/plays">
                <StyledButton style={{ color: '#7E6FDD' }}>
                    <ButtonImage src={B1} />
                    <p>체험 잼잼</p>
                </StyledButton>
            </Link>
            <Link to="/studys">
                <StyledButton
                    href="/sgm_front/studys"
                    style={{ color: '#3F8AB5' }}
                >
                    <ButtonImage src={B2} />
                    <p>학업 튼튼</p>
                </StyledButton>
            </Link>
            <Link to="/minds">
                <StyledButton
                    href="/sgm_front/minds"
                    style={{ color: '#71AF8A' }}
                >
                    <ButtonImage src={B3} />
                    <p>마음 쑥쑥</p>
                </StyledButton>
            </Link>
            <Link to="/mypage">
                <StyledButton
                    href="/sgm_front/mypage"
                    style={{ color: '#3465C9' }}
                >
                    <ButtonImage src={B4} />
                    <p>마이페이지</p>
                </StyledButton>
            </Link>
        </ButtonDiv>
    );
};

export default Button;
