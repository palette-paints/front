import styled from 'styled-components';
import PostCard from '../PostView/PlaysCard';
import PlaysBar from '../PostView/PlaysBar';
import 'react-pagination-bar/dist/index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Content = styled.div`
    background: #fffcf8;
`;

const Question = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 19px 30px;
    gap: 10px;
    margin: auto;
    width: 1124px;
    height: 62px;
    left: calc(50% - 1124px / 2);
    top: calc(50% - 62px / 2 - 1100.5px);

    background: #7e6fdd;
    box-shadow: 2px 2px 15px rgba(126, 110, 221, 0.5);
    border-radius: 20px;
    border: none;
    color: #fff;
    font-size: 20px;
`;
const List = styled.div`
    margin: 30px auto 0;
    max-width: 1500px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(547px, auto));
    gap: 50px;

    justify-content: center;
`;
function PlaysList() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        await axios
            .get('https://beforyou.shop/plays')
            .then((response) => {
                setDatas(response.data);
                console.log('성공');
                console.log(datas);
            })
            .catch((error) => {
                console.log('전체 글 불러오기 실패', error.message);
            });
    };
    return (
        <>
            <PlaysBar />
            <Content>
                <Link to="/plays/create" style={{ textDecoration: 'none' }}>
                    <Question>+ 개설하기</Question>
                </Link>

                <List>
                    {datas.plays &&
                        datas.plays.map((item) => <PostCard data={item} />)}
                    {!datas && <div>게시물이 없습니다.</div>}
                </List>
            </Content>
        </>
    );
}

export default PlaysList;
