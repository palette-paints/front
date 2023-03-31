import styled from 'styled-components';
import 'react-pagination-bar/dist/index.css';
import axios from 'axios';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
import Inform from './Inform';
import MindLists from './MindLists';
import StudyLists from './StudyLists';
import PlayLists from './PlayLists';
const Content = styled.div`
    background: #fffcf8;
`;
const Categories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;
    margin: 40px auto;
    margin-top: 130px;
    width: 1124px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(63, 138, 181, 0.5);
    border-radius: 30px;
    overflow-x: scroll;
    padding: 10px;

    ::-webkit-scrollbar {
        display: none;
    }
`;
const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;

    width: 200px;
    font-size: 1em;
    color: #00639b;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(63, 138, 181, 0.5);
    border-radius: 30px;
    border: none;
    :hover {
        background: #71af8a;
        color: #fff;
        font-weight: bold;
    }
`;
export default function Mypage() {
    const [status, setStatus] = useState(1);

    return (
        <>
            <Content>
                <Categories>
                    <Button onClick={() => setStatus(1)}>개인정보</Button>
                    <Button onClick={() => setStatus(2)}>
                        체험 잼잼 신청 목록
                    </Button>
                    <Button onClick={() => setStatus(3)}>
                        학업 튼튼 질문 목록
                    </Button>
                    <Button onClick={() => setStatus(4)}>
                        마음 쑥쑥 질문 목록
                    </Button>
                </Categories>
            </Content>
            {status === 1 && <Inform />}
            {status === 2 && <PlayLists />}
            {status === 3 && <StudyLists />}
            {status === 4 && <MindLists />}
        </>
    );
}
