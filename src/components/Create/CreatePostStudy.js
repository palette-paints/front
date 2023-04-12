import React, { useEffect, useRef, useState } from 'react';

import './createStlye.css';
import styled from 'styled-components';

import axios from 'axios';
import { useParams } from 'react-router-dom';

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
    background: #3f8ab5;
    box-shadow: 2px 2px 15px rgba(63, 138, 181, 0.5);
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
    color: #00639b;
    font-size: 1em;
    background: #fff;
    box-shadow: 0px 2px 10px rgba(63, 138, 181, 0.5);
    border-radius: 30px;
    border: none;
    margin-top: 30px;
`;

function CreatePost() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [studyDetails, setStudyDetails] = useState('');

    const handleChangeFile = (event) => {
        setFile(event.target.files);
    };

    const setPostTitle = (event) => {
        setTitle(event.currentTarget.value);
    };
    const setNewPost = (event) => {
        setStudyDetails(event.currentTarget.value);
    };
    const postPost = (event) => {
        event.preventDefault();

        const studyDetailReq = {
            category: '국어',
            title: title,
            studyDetails: studyDetails,
        };
        const fd = new FormData();
        fd.append('studyAttachedFile', file);
        fd.append(
            ' studyDetailReq',
            new Blob([JSON.stringify(studyDetailReq)], {
                type: 'application/json',
            })
        );

        axios
            .post(`http://3.38.52.33:8080/studys/new`, fd, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                window.location.href = '/studys/';
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
                        className="CreateForm"
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
                    <button className="save">저장</button>
                </div>
            </form>
        </CreateBox>
    );
}

export default CreatePost;
