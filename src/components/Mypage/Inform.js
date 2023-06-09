import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Img from '../../images/profile.png';

import styled from 'styled-components';

const Content = styled.div`
    margin: 20px auto;
    padding: 10px;
    width: 1120px;

    display: flex;
`;
const Profile = styled.div`
    background: url(${Img});
    background-size: cover;
    width: 200px;
    height: 200px;
    margin: 10px;
`;
const Button = styled.div`
    width: 200px;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(52, 101, 201, 0.5);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3465c9;
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;
const Card = styled.div`
    width: 390px;
    height: 500px;

    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(52, 101, 201, 0.5);
    border-radius: 30px;
    margin: 0 20px;
`;
const Header = styled.div`
    width: 390px;
    height: 70px;
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    display: flex;
    align-items: center;
    color: #ffffff;
    justify-content: center;
    background: #3465c9;
    border-radius: 30px 30px 0px 0px;
`;
const Textbox = styled.div`
    padding-left: 30px;
    gap: 10px;

    width: 319px;
    height: 60px;
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;

    color: #3465c9;

    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(52, 101, 201, 0.5);
    border-radius: 30px;
`;

const Inform = ({ setLoginStateFalse }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getDatas();
    }, []);

    const logout = (e) => {
        e.preventDefault();
        axios.post('https://beforyou.shop/logout').then((response) => {
            console.log('로그아웃');
            localStorage.removeItem('token');
            localStorage.removeItem('isLoggedIn');
            setLoginStateFalse();
            // localStorage.setItem('isLoggedIn', false);
        });
    };

    const getDatas = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            axios
                .get('https://beforyou.shop/mypage', config)
                .then((response) => {
                    console.log('유저 정보:', response.data);
                    // 유저 정보 성공적으로 가져올 시 상태 업데이트
                    setUser(response.data);
                    console.log('성공');
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Content>
                <div
                    style={{
                        margin: '20px',
                        display: 'grid',
                        gridRowGap: '10px',
                    }}
                >
                    <Profile></Profile>
                    <Button>+ 이미지 수정</Button>
                    <Button>정보 수정</Button>
                    <Button type="button" onClick={logout}>
                        로그아웃
                    </Button>
                </div>
                <Card>
                    <Header>고유 정보</Header>
                    <div
                        style={{
                            margin: '20px',
                            display: 'grid',
                            gridRowGap: '20px',
                        }}
                    >
                        <Textbox>
                            <span style={{ width: '70px' }}>성</span>|
                            {user.userName}
                        </Textbox>
                        <Textbox>
                            <span style={{ width: '70px' }}>이름</span> |
                        </Textbox>
                        <Textbox>
                            <span style={{ width: '70px' }}>생년월일</span> |
                            {user.userBirth}
                        </Textbox>
                        <Textbox>
                            <span style={{ width: '70px' }}>성별</span> |
                        </Textbox>
                    </div>
                </Card>
                <Card>
                    <Header>수정 가능</Header>
                    <div
                        style={{
                            margin: '20px',
                            display: 'grid',
                            gridRowGap: '20px',
                        }}
                    >
                        <Textbox>
                            <span style={{ width: '70px' }}>닉네임</span>|
                        </Textbox>
                        <Textbox>
                            <span style={{ width: '70px' }}>비밀번호</span> |
                        </Textbox>
                        <Textbox>
                            <span style={{ width: '70px' }}>전화번호</span> |
                        </Textbox>
                        <Textbox>
                            <span style={{ width: '70px' }}>이메일</span> |
                        </Textbox>
                    </div>
                </Card>
            </Content>
        </>
    );
};
export default Inform;
