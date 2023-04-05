import React, { createContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import InputForm from './InputForm.js';
import LButton from './LButton.js';
import Lock1 from '../../svg/Lock.svg';
import Lock2 from '../../svg/Lock2.svg';
import '../../css/login.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPart = styled.div`
    height: 600px;
    width: 800px;
    background: #fffcf8;
    border-radius: 50px;
    display: flex;
    margin-top: -100px;
    flex-direction: column;
    box-shadow: 6px 6px 30px rgba(170, 170, 170, 0.6);
    background: rgba(255, 252, 248, 0.3);
    backdrop-filter: blur(25px);

    @media screen and (max-width: 1024px) {
        width: 500px;
        height: 600px;
        margin: 0 auto;
        align-items: center;
        margin-top: 250px;
    }

    @media screen and (max-width: 510px) {
        width: 330px;
        height: 600px;
        padding: 0;
        margin: 0 auto;
        align-items: center;
        margin-top: 200px;
    }
`;

const Welcome = styled.div`
    margin-top: 60px;
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #3465c9;
    margin-bottom: 50px;
`;

const Container = styled.div`
    height: fit-content;
    width: fit-content;
    padding: 0;
    margin: 0 auto;
    align-items: center;
    margin-top: 250px;
`;

const CheckBox = styled.input`
    display: flex;
    float: left;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-left: 160px;

    @media screen and (max-width: 1024px) {
        margin-left: 13px;
    }

    @media screen and (max-width: 510px) {
        margin-left: 10px;
    }
`;

const CheckDiv = styled.p`
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #3465c9;
    margin-bottom: 40px;
`;

const Find = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0 auto;

    li {
        list-style: none;
        color: #3465c9;
        margin: 0px 16px;
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }

    @media screen and (max-width: 510px) {
        li {
            font-size: 5px;
        }
    }
`;

const LoginBox = ({ loginState, setLoginStateTrue }) => {
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const onEmailHnadler = (event) => {
        setLoginId(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setLoginPw(event.currentTarget.value);
    };

    const connectAccount = (e) => {
        axios
            .post('http://3.38.52.33:8080/login/form', {
                loginId: loginId,
                loginPw: loginPw,
            })
            .then(() => {
                loginChange();
            })
            .then((response) => {
                console.log('로그인 성공');

                window.location.href = '/';
            })
            .catch((error) => {
                console.log('로그인 실패');
                console.log(error.response.data);
            });
    };

    const loginChange = () => {
        console.log('true');
        setLoginStateTrue();
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        connectAccount();
    };

    return (
        <Container>
            <LoginPart>
                <Welcome>Welcome!</Welcome>
                <form>
                    <InputForm
                        type="text"
                        placeholder="아이디를 입력해주세요."
                        onChange={onEmailHnadler}
                    />
                    <InputForm
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        onChange={onPasswordHandler}
                    />
                    <CheckBox type="checkbox" value="loginMaintain" />
                    <CheckDiv>로그인 상태 유지</CheckDiv>

                    <LButton type="button" onClick={onSubmit}>
                        로그인
                    </LButton>
                    <LButton style={{ backgroundColor: '#1DC200' }}>
                        네이버 아이디로 로그인
                    </LButton>
                </form>

                <Find>
                    <li>비밀번호 찾기</li>
                    <li>|</li>
                    <li>아이디 찾기</li>
                    <li>|</li>
                    <a href="/signup">회원가입</a>
                </Find>
            </LoginPart>

            <img src={Lock1} alt="lock" className="lock1" />
            <img src={Lock2} alt="lock" className="lock2" />
        </Container>
    );
};

export default LoginBox;
