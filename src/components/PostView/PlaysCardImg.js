import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import commentPur from '/public/images/commentPur.png';
import commentWhite from '/public/images/commentWhite.png';
import bookmarkPur from '/public/images/bookmarkPur.png';
import bookmarkWhite from '/public/images/bookmarkWhite.png';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;

  width: 547px;

  color: #4f46af;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(126, 110, 221, 0.5);
  border-radius: 40px;
  float: left;
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
      <IdBox>
        <img
          src="images/profile.png"
          width={45}
          alt="프사"
          style={{ position: 'absolute', left: '15px' }}
        />
        <span style={{ position: 'absolute', left: '60px' }}>
          {props.data.user}
        </span>
        <span style={{ position: 'absolute', right: '15px' }}>{date}</span>
      </IdBox>
      <img
        src="images/sample.png"
        style={{ width: '100%', borderRadius: '20px' }}
      />
      <h4>{props.data.title}</h4>
      <p>{props.data.playDetails}.</p>
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
              src={isCommentHover ? commentWhite.src : commentPur.src}
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
              src={isBookmarkHover ? bookmarkWhite.src : bookmarkPur.src}
              alt="북마크"
            />
          </Button>
        </div>
      </Bottom>
    </Card>
  );
}

export default PostCard;
