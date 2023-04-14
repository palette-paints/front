import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import commentPur from '../../images/commentPur.png';
// import commentWhite from '/public/images/commentWhite.png';
import bookmarkPur from '../../images/bookmarkPur.png';
// import bookmarkWhite from '/public/images/bookmarkWhite.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin: 0 auto;

    width: 547px;
    height: 280px;

    color: #4f46af;
    background: #ffffff;
    box-shadow: 0px 2px 15px rgba(126, 110, 221, 0.5);
    border-radius: 40px;
`;

const IdBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 30px;
    margin-top: -50px;
    margin-bottom: 50px;
    gap: 10px;

    width: 487px;
    height: 45px;
    text-align: left;
    background: #ffffff;
    box-shadow: 2px 2px 7px rgba(126, 110, 221, 0.5);
    border-radius: 50px;
    color: ##4f46af;
    position: relative;
`;
const Bottom = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    flex-direction: row;
`;
const Category = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;

    width: 100px;
    font-size: 1em;
    background: #7e6fdd;
    color: #fff;
    box-shadow: 0px 2px 10px rgba(126, 110, 221, 0.5);
    border-radius: 30px;
    border: none;
`;
const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;

    color: ##4f46af;
    font-size: 1em;
    background: #fff;
    box-shadow: 0px 2px 10px rgba(126, 110, 221, 0.5);
    border-radius: 30px;
    border: none;
    &:hover {
        background: #7e6fdd;
        color: #fff;
    }
`;
function PostCard(props) {
    const [isCommentHover, setIsCommentHover] = useState(false);
    const [isBookmarkHover, setIsBookmarkHover] = useState(false);
    const date = new Date(props.data.createdDate).toISOString().split('T')[0];
    return (
        <Card>
            <Link to={`/plays/${props.playId}`}>
                <IdBox>
                    <img
                        src="images/profile.png"
                        width={45}
                        style={{ position: 'absolute', left: '15px' }}
                    />
                    <span style={{ position: 'absolute', left: '60px' }}>
                        {props.data.user}
                    </span>
                    <span style={{ position: 'absolute', right: '15px' }}>
                        {date}
                    </span>
                </IdBox>
                <h4 style={{ backgroundColor: '#fff' }}>{props.data.title}</h4>
                <p style={{ backgroundColor: '#fff' }}>
                    {props.data.studyDetails}
                </p>
                <Bottom>
                    <Category>{props.data.category}</Category>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button
                            onMouseOver={() => setIsCommentHover(true)}
                            onMouseOut={() => setIsCommentHover(false)}
                            style={{ width: '100px' }}
                        >
                            <img
                                width="20px"
                                src={commentPur}
                                style={{ margin: '0 3px 0 0' }}
                            />
                            {props.data.comments}
                        </Button>
                    </div>
                </Bottom>
            </Link>
        </Card>
    );
}

export default PostCard;
