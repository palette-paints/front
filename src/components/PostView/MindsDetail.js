import React from 'react';
import MindsBar from './MindsBar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
import commentGreen from '../../images/commentGreen.png';
import commentWhite from '../../images/commentWhite.png';
import likeGreen from '../../images/likeGreen.png';
import hateGreen from '../../images/hateGreen.png';
import Header from '../Header';
const CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 30px;

    width: 1124px;
    height: 835px;

    background: #71af8a;
    margin: 100px auto;
    box-shadow: 2px 2px 20px rgba(113, 175, 138, 0.5);
    border-radius: 50px;

    position: relative;
`;
const Card = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 800px;

    color: #4e705b;
    background: #fff;
    border-radius: 50px;
`;
const IdBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 30px;
    margin-bottom: 30px;
    gap: 10px;

    width: 888px;
    height: 6px;
    text-align: left;
    background: #ffffff;
    box-shadow: 2px 2px 7px rgba(113, 175, 138, 0.5);
    border-radius: 50px;
    color: #4e705b;

    position: relative;
    top: 50px;
    left: 50px;
`;
const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;

    color: #4e705b;
    font-size: 1em;
    background: #fff;
    box-shadow: 0px 2px 10px rgba(113, 175, 138, 0.5);
    border-radius: 30px;
    border: none;

    &:hover {
        background: #71af8a;
        color: #fff;
    }
`;
const CommentBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 30px;
    margin: 0 auto;
    gap: 10px;

    width: 1124px;

    background: #71af8a;
    box-shadow: 2px 2px 20px rgba(113, 175, 138, 0.5);
    border-radius: 50px;

    flex: none;
    order: 0;
    flex-grow: 0;

    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
`;
const Comment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin: 20px auto;
    width: 1174px;
    height: 250px;

    color: #4e705b;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(113, 175, 138, 0.5);
    border-radius: 50px;
    position: relative;
`;
const CommentAdd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    margin: 30px auto;
    gap: 10px;
    width: 1124px;

    background: #fff;
    box-shadow: 2px 2px 20px rgba(113, 175, 138, 0.5);
    border-radius: 50px;

    flex: none;
    order: 0;
    flex-grow: 0;

    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #4e705b;

    &:hover {
        background: #71af8a;
        color: #fff;
    }
`;

function MindsDetail(props) {
    //const [isHateHover, setIsHateHover] = useState(false);
    const [newCommentDetail, setNewCommentDetail] = useState([]);

    const [visible, setVisible] = useState(false);

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const { id } = useParams();

    const onDelete = (id) => {
        axios
            .delete(`https://beforyou.shop/minds/${id}`)
            .then((response) => {
                getDatas(response.data);
            })
            .catch((error) => {
                console.log('삭제 실패', error);
            });
    };
    const onDeleteComment = (id, commentId) => {
        axios
            .delete(`https://beforyou.shop/minds/${id}/comment/${commentId}`)
            .then((response) => {
                getDatas(response.data);
            })
            .catch((error) => {
                console.log('삭제 실패', error);
            });
    };

    const getDatas = async () => {
        await axios
            .get(`https://beforyou.shop/minds/${id}`)
            .then((response) => {
                setDatas(response.data);
                console.log('성공');
                console.log(datas);
            })
            .catch((error) => {
                console.log('전체 글 불러오기 실패', error.message);
            });
    };

    const CommentSubmit = (e) => {
        e.preventDefault();
        console.log(newCommentDetail);
        axios
            .post(`https://beforyou.shop/minds/${id}/comment/`, {
                user: localStorage.getItem('loginId'),
                commentDetail: newCommentDetail,
                commentAttachedFile: 'http://wrwe',
            })
            .then((response) => {
                console.log('작성 성공');
                window.location.reload();
            })
            .catch((error) => {
                console.log('작성 실패');
                console.log(error.response.data);
            });

        setNewCommentDetail([]);
        getDatas();
    };
    // const date = new Date(datas.createdAt).toISOString().split('T')[0];
    return (
        <>
            <Header />
            <MindsBar category={datas.category} />
            <CardTitle>
                <p
                    style={{
                        margin: '0 auto',
                        color: '#fff',
                        fontFamily: 'Montserrat Alternates',
                        fontWeight: '600',
                        fontSize: '25px',
                    }}
                >
                    {datas.title}
                    {/* 2022년 3월 고1 수학 모의고사 30번 질문합니다 */}
                </p>
                <Card>
                    <IdBox>
                        <img
                            alt=""
                            src="/images/profile.png"
                            width={45}
                            style={{ position: 'absolute', left: '15px' }}
                        />
                        <span style={{ position: 'absolute', left: '60px' }}>
                            {datas.user}
                        </span>
                        <span style={{ position: 'absolute', right: '15px' }}>
                            {/* {date} */}
                        </span>
                    </IdBox>
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            position: 'absolute',
                            right: '60px',
                            top: '50px',
                        }}
                    >
                        <Button style={{ width: '60px' }}>
                            <img
                                alt=""
                                width="20px"
                                src={commentGreen}
                                style={{ margin: '0 3px 0 0' }}
                            />
                            {datas.comments && datas.comments.length}
                        </Button>
                    </div>
                    <p style={{ position: 'static', margin: '80px 0 0  50px' }}>
                        {datas.mindDetails}
                    </p>
                    <img
                        alt=""
                        src="/images/sample.png"
                        style={{ width: '65%', margin: '10px 50px' }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            position: 'absolute',
                            bottom: '30px',
                            right: '50px',
                        }}
                    >
                        <Button style={{ padding: '14px 20px' }}>
                            수정하기
                        </Button>
                        <Button
                            style={{ padding: '14px 20px' }}
                            onClick={() => onDelete(id)}
                        >
                            삭제하기
                        </Button>
                    </div>
                </Card>
            </CardTitle>
            <CommentBar>
                <img
                    width="20px"
                    src={commentWhite}
                    alt=""
                    style={{ margin: '0 3px 0 0' }}
                />
                답변
                <span>{datas.comments && datas.comments.length}</span>
            </CommentBar>

            {datas.comments &&
                datas.comments.map((item) => (
                    <Comment>
                        <IdBox style={{ width: '860px' }}>
                            <img
                                alt=""
                                src="/images/profile.png"
                                width={45}
                                style={{
                                    position: 'absolute',
                                    left: '15px',
                                }}
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '60px',
                                }}
                            >
                                {item.user}
                            </span>
                            <span
                                style={{
                                    position: 'absolute',
                                    right: '15px',
                                }}
                            >
                                {item.createdAt.slice(0, 10)}
                            </span>
                        </IdBox>
                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                position: 'absolute',
                                right: '60px',
                                top: '50px',
                            }}
                        >
                            <Button style={{ width: '60px' }}>
                                <img
                                    alt=""
                                    src={likeGreen}
                                    style={{ margin: '0 3px 0 0' }}
                                />
                                {item.like}
                            </Button>
                            <Button style={{ width: '60px' }}>
                                <img
                                    alt=""
                                    src={hateGreen}
                                    style={{ margin: '0 3px 0 0' }}
                                />
                                {item.unlike}
                            </Button>
                        </div>
                        <p
                            style={{
                                position: 'static',
                                margin: '30px 0 0  50px',
                            }}
                        >
                            {item.commentDetail}
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                position: 'absolute',
                                bottom: '50px',
                                right: '50px',
                            }}
                        >
                            <Button style={{ padding: '14px 20px' }}>
                                수정하기
                            </Button>
                            <Button
                                style={{ padding: '14px 20px' }}
                                onClick={() =>
                                    onDeleteComment(id, item.commentId)
                                }
                            >
                                삭제하기
                            </Button>
                        </div>
                    </Comment>
                ))}
            <CommentAdd onClick={() => setVisible(true)}>
                + 댓글 작성
            </CommentAdd>
            {visible && (
                <Comment>
                    <IdBox style={{ width: '860px' }}>
                        <img
                            alt=""
                            src="/images/profile.png"
                            width={45}
                            style={{
                                position: 'absolute',
                                left: '15px',
                            }}
                        />
                        <span
                            style={{
                                position: 'absolute',
                                left: '60px',
                            }}
                        >
                            {localStorage.getItem('loginId')}
                        </span>
                    </IdBox>
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            position: 'absolute',
                            right: '60px',
                            top: '50px',
                        }}
                    >
                        <Button
                            style={{ padding: '14px 20px' }}
                            onClick={CommentSubmit}
                        >
                            저장하기
                        </Button>
                    </div>
                    <input
                        placeholder="댓글을 입력하시오"
                        value={newCommentDetail}
                        onChange={(e) => setNewCommentDetail(e.target.value)}
                        style={{
                            display: 'flex',
                            gap: '10px',
                            position: 'absolute',
                            top: '120px',
                            left: '50px',
                            width: '1050px',
                            height: '50px',
                            fontSize: '15px',
                            border: '0',
                            borderRadius: '15px',
                            outline: 'none',
                            paddingLeft: '10px',
                            backgroundColor: 'rgba(113, 175, 138, 0.2)',
                        }}
                    ></input>
                </Comment>
            )}
        </>
    );
}
export default React.memo(MindsDetail);
