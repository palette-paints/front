import styled from 'styled-components';

import PostCard from '../PostView/MindsCard';
// import PostCardImg from '@/api/PostView/MindsCardImg';
import { Pagination } from 'react-pagination-bar';
import 'react-pagination-bar/dist/index.css';
import MindsBar from '../PostView/MindsBar';
import axios from 'axios';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
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
    margin: 30px auto 0;
    max-width: 1500px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(547px, auto));
    gap: 50px;

    justify-content: center;
`;

function MindsList() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        const response = await axios
            .get('https://beforyou.shop/minds')
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
                            <PostCard data={item} mindId={item.mindId} />
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
