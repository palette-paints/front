import React from 'react';
import styled from 'styled-components';
import InputForm from '../components/InputForm.js';
import LButton from '../components/LButton.js';
const LoginPart = styled.div`
    height: 600px;
    width: 800px;
    background: #fffcf8;
    border-radius: 50px;
    display: flex;

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

const LoginBox = () => {
    return (
        <Container>
            <LoginPart style={{ overflowY: 'scroll' }}>
                <Welcome>개인 정보를 입력해주세요.</Welcome>
                <form>
                    <InputForm type="text" placeholder="아이디"></InputForm>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#3465C9',
                            marginRight: 'auto',
                        }}
                    >
                        아이디 중복확인
                    </button>
                    <InputForm type="password" placeholder="비밀번호" />
                    <InputForm type="password" placeholder="비밀번호 재확인" />
                    <InputForm type="text" placeholder="닉네임"></InputForm>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#3465C9',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        닉네임 중복확인
                    </button>
                    <InputForm type="text" placeholder="전화번호" />
                    <InputForm type="text" placeholder="직업" />
                    <InputForm type="text" placeholder="사용목적" />

                    <LButton>다음</LButton>
                </form>
            </LoginPart>
        </Container>
    );
};

export default LoginBox;
