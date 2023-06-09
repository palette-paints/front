import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import commentGreen from '../../images/commentGreen.png';
import commentWhite from '../../images/commentWhite.png';
import { Link } from 'react-router-dom';
import user from '../../images/profile.png';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin: 0 auto;

    width: 547px;
    height: 280px;

    color: #4e705b;
    background: #ffffff;
    box-shadow: 0px 2px 15px rgba(113, 175, 138, 0.5);
    border-radius: 40px;
    float: left;
    grid-row-end: span 2;
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
    box-shadow: 2px 2px 7px rgba(113, 175, 138, 0.5);
    border-radius: 50px;
    color: #4e705b;
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
    background: #71af8a;
    color: #fff;
    box-shadow: 0px 2px 10px rgba(113, 175, 138, 0.5);
    border-radius: 30px;
    border: none;
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
function PostCard(props) {
    const [isCommentHover, setIsCommentHover] = useState(false);
    console.log(props.data);
    const date = new Date(props.data.createdDate).toISOString().split('T')[0];
    return (
        <Card>
            <Link to={`/minds/${props.mindId}`}>
                <IdBox>
                    <img
                        alt=""
                        src={user}
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
                <h4>{props.data.title}</h4>
                <p>{props.data.mindDetails}</p>
                <Bottom>
                    <Category>{props.data.category}</Category>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button
                            onMouseOver={() => setIsCommentHover(true)}
                            onMouseOut={() => setIsCommentHover(false)}
                            style={{ width: '60px' }}
                        >
                            <img
                                alt=""
                                width="20px"
                                src={
                                    isCommentHover ? commentWhite : commentGreen
                                }
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
