import React, { useState } from 'react';

import './createStlye.css';
import styled from 'styled-components';

import axios from 'axios';

const CreateBox = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
`;

const TitleInput = styled.input`
    padding: 19px 30px;

    margin: auto;
    width: 1000px;
    height: 30x;
    background: #71af8a;
    box-shadow: 2px 2px 15px rgba(113, 175, 138, 0.5);
    border-radius: 20px;
    border: none;
    color: #fff;
    margin-bottom: 30px;
    font-size: 20px;
    ::placeholder {
        color: #fff;
    }
`;

const CreateFile = styled.input`
    align-self: center;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    color: #4e705b;
    font-size: 1em;
    background: #fff;
    box-shadow: 0px 2px 10px rgba(113, 175, 138, 0.5);
    border-radius: 30px;
    border: none;
    margin-top: 30px;
`;

function CreatePost() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [mindDetails, setMindDetails] = useState('');

    const handleChangeFile = (event) => {
        setFile(event.target.files);
    };

    const setPostTitle = (event) => {
        setTitle(event.currentTarget.value);
    };
    const setNewPost = (event) => {
        setMindDetails(event.currentTarget.value);
    };
    const postPost = (event) => {
        event.preventDefault();

        const mindDetailReq = {
            category: '학업',
            title: title,
            mindDetails: mindDetails,
            password: '1234',
            status: 'O',
        };
        const fd = new FormData();
        fd.append('mindAttachedFile', file);
        fd.append(
            ' mindDetailReq',
            new Blob([JSON.stringify(mindDetailReq)], {
                type: 'application/json',
            })
        );

        axios
            .post(`https://beforyou.shop/minds/new`, fd, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                window.location.href = '/minds/';
            })
            .catch((error) => {
                console.log('작성 실패');
                console.log(error.message);
                console.log(error);
                console.log(error.response.data);
            });
    };

    return (
        <CreateBox>
            <form onSubmit={postPost}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <TitleInput
                        className="CreateTitleForm"
                        type="text"
                        placeholder="제목을 입력하세요"
                        onChange={setPostTitle}
                    />
                    <input
                        className="CreateForm2"
                        type="text"
                        placeholder="내용을 작성하세요"
                        onChange={setNewPost}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'end',
                    }}
                >
                    <CreateFile
                        type="file"
                        id="file"
                        onChange={handleChangeFile}
                        multiple="multiple"
                    ></CreateFile>
                    <button className="save2">저장</button>
                </div>
            </form>
        </CreateBox>
    );
}

export default CreatePost;
