import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import commentBlue from '../../images/commentBlue.png';
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

    color: #00639b;
    background: #fff;
    box-shadow: 0px 2px 15px rgba(63, 138, 181, 0.5);
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
    color: #fff;
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
    background: #fff;
    box-shadow: 0px 2px 10px rgba(63, 138, 181, 0.5);
    border-radius: 30px;
    border: none;
    &:hover {
        background: #3f8ab5;
        color: #fff;
    }
`;
function PostCard(props) {
    const [isCommentHover, setIsCommentHover] = useState(false);
    const date = new Date(props.data.createdDate).toISOString().split('T')[0];
    return (
        <Card>
            <Link to={`/studys/${props.studyId}`}>
                <IdBox style={{ backgroundColor: '#fff' }}>
                    <img
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
                                src={
                                    isCommentHover ? commentWhite : commentBlue
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
