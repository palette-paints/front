import styled from 'styled-components';

import PostCard from '../PostView/MindsCard';
// import PostCardImg from '@/api/PostView/MindsCardImg';
import { Pagination } from 'react-pagination-bar';
import 'react-pagination-bar/dist/index.css';
import MindsBar from '../PostView/MindsBar';
import axios from 'axios';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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

    background: #71af8a;
    box-shadow: 2px 2px 15px rgba(113, 175, 138, 0.5);
    border-radius: 20px;
    border: none;
    color: #fff;
    font-size: 20px;
`;
const List = styled.div`
    margin: 30px auto;
    max-width: 1124px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(547px, auto));
    gap: 20px;
    justify-content: center;
`;
const PaginationBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    margin: 40px auto;
    width: 526px;
    height: 52px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(113, 175, 138, 0.5);
    border-radius: 30px;
    padding: 10px;

    .custom-item {
        border: none;
        min-width: 20px;
        min-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        cursor: pointer;
        color: #4e705b;
        background-color: #fff;
    }
    .custom-item--active {
        color: #ff95b5;
        border: none;
        min-width: 20px;
        min-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }
    /* .custom-item--disable {
opacity: 0.5;
} */
    .custom-root ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .custom-go-item {
        align-items: center;
        display: flex;
        font-size: 1rem;
        padding-inline-end: 0.75rem;
        padding-inline-start: 0.75rem;
        width: 150px;
    }
`;
// const host = 'http://3.38.52.33:8080/minds';
// const host = instance.get('/minds');
// const fetcher = (host) => host.then((res) => res.data);
// const fetcher = (host) => axios.get(host).then((res) => res.data);
// fetch(host, {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-host': host,
//         'x-rapidapi-key': '1',
//         useQueryString: true,
//     },
// }).then((res) => res.json());

// useEffect(() => {
//     const host = instance.get('/minds');
//     const fetcher = (host) => host.then((res) => res.data);
//     console.log('CALL THE API....');
// }, []);

function MindsList() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        const response = await axios
            .get('http://3.38.52.33:8080/minds')
            .then((response) => {
                setDatas(response.data);
                console.log('성공');
                console.log(datas);
            })
            .catch((error) => {
                console.log('전체 글 불러오기 실패', error.message);
            });
    };
    // if (error) return '에러발생';
    // if (!data) return '로딩중..';
    // // const router = useRouter();
    return (
        <>
            <MindsBar />
            <Content>
                <a href="/minds/create" style={{ textDecoration: 'none' }}>
                    <Question>+ 질문하기</Question>
                </a>
                <List>
                    {/* {datas &&
                        datas.map((data) => (
                            <p>
                                {data.id} {data.title}
                            </p>
                        ))} */}
                    {datas.minds &&
                        datas.minds.map((item) => (
                            // <Link
                            //     to={{
                            //         pathname: '/minds/${item.mindId}',
                            //         query: {
                            //             id: item.mindId,
                            //         },
                            //     }}
                            // >
                            <Link
                                to={`${process.env.PUBLIC_URL}/minds/${item.mindId}`}
                            >
                                <PostCard data={item} />
                            </Link>
                            // <PostCard
                            //   onClick={() => {
                            //     router.push(
                            //       {
                            //         pathname: '/minds/[id]',
                            //         query: { id: mindId },
                            //       },
                            //       '/order'
                            //     );
                            //   }}
                            //   data={item}
                            // />
                        ))}
                </List>

                {/* <Pagination
        currentPage={currentPage}
        itemsPerPage={pagePostsLimit}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
        totalItems={posts.length}
        pageNeighbours={2}
      /> */}
            </Content>
        </>
    );
}

export default MindsList;
