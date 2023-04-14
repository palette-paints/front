import styled from 'styled-components';
import React from 'react';
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

function PostCard(props) {
    const date = new Date(props.data.createdDate).toISOString().split('T')[0];
    return (
        <Card>
            <Link to={`/plays/${props.playId}`}>
                <IdBox>
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
                    <div style={{ display: 'flex', gap: '10px' }}></div>
                </Bottom>
            </Link>
        </Card>
    );
}

export default PostCard;
