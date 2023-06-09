import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import commentBlue from '../../images/commentBlue.png';
import commentWhite from '../../images/commentWhite.png';
import bookmarkBlue from '../../images/bookmarkBlue.png';
import bookmarkWhite from '../../images/bookmarkWhite.png';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    margin: 0 auto;

    width: 547px;

    color: #00639b;
    background: #ffffff;
    box-shadow: 0px 2px 15px rgba(63, 138, 181, 0.5);
    border-radius: 40px;
    grid-row-end: span 4;
`;

const IdBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 30px;
    margin-bottom: 30px;
    gap: 10px;

    width: 487px;
    height: 45px;
    text-align: left;
    background: #ffffff;
    box-shadow: 2px 2px 7px rgba(63, 138, 181, 0.5);
    border-radius: 50px;
    color: #00639b;
    position: relative;
`;
const Bottom = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    flex-direction: row;
    background: #ffffff;
`;
const Category = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;

    width: 100px;
    font-size: 1em;
    background: #3f8ab5;
    color: #ffffff;
    box-shadow: 0px 2px 10px rgba(63, 138, 181, 0.5);
    border-radius: 30px;
    border: none;
`;
const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;

    color: #00639b;
    font-size: 1em;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(63, 138, 181, 0.5);
    border-radius: 30px;
    border: none;
    &:hover {
        background: #3f8ab5;
        color: #ffffff;
    }
`;
function PostCard(props) {
    const [isCommentHover, setIsCommentHover] = useState(false);
    const [isBookmarkHover, setIsBookmarkHover] = useState(false);
    const date = new Date(props.data.createdDate).toISOString().split('T')[0];
    return (
        <Card>
            <IdBox style={{ background: '#fff' }}>
                <img
                    src="images/profile.png"
                    width={45}
                    alt="프사"
                    style={{ position: 'absolute', left: '15px' }}
                />
                <span style={{ position: 'absolute', left: '60px' }}>
                    {props.data.user}
                </span>
                <span style={{ position: 'absolute', right: '15px' }}>
                    {date}
                </span>
            </IdBox>
            <img
                src="images/sample.png"
                style={{ width: '100%', borderRadius: '20px' }}
            />
            <h4>{props.data.title}</h4>
            <p>{props.data.studyDetails}</p>
            <Bottom>
                <Category>{props.data.category}</Category>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button
                        onMouseOver={() => setIsCommentHover(true)}
                        onMouseOut={() => setIsCommentHover(false)}
                        style={{ width: '60px' }}
                    >
                        <img
                            width="20px"
                            src={
                                isCommentHover
                                    ? commentWhite.src
                                    : commentBlue.src
                            }
                            alt="댓글"
                            style={{ margin: '0 3px 0 0' }}
                        />
                        {props.data.comments}
                    </Button>
                    <Button
                        onMouseOver={() => setIsBookmarkHover(true)}
                        onMouseOut={() => setIsBookmarkHover(false)}
                    >
                        <img
                            width="20px"
                            src={
                                isBookmarkHover
                                    ? bookmarkWhite.src
                                    : bookmarkBlue.src
                            }
                            alt="북마크"
                        />
                    </Button>
                </div>
            </Bottom>
        </Card>
    );
}

export default PostCard;
