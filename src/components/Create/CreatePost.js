import React, { useEffect, useRef, useState } from 'react';

import './createStlye.css';
import styled from 'styled-components';

import axios from 'axios';
import { useParams } from 'react-router-dom';

const CreateBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

function CreatePost() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState('');
    const [newPost, setNewPost] = useState('');

    const handleChangeFile = (event) => {
        setFile(event.target.files);
    };
    const postPost = (event) => {
        event.preventDefault();

        const studyDetailReq = {
            category: '국어',
            title: '성공',
            studyDetails: '성공',
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
            .post(`https://beforyou.shop/studys/new`, fd, {
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
                <input
                    type="file"
                    id="file"
                    onChange={handleChangeFile}
                    multiple="multiple"
                ></input>
                <input
                    className="CreateForm"
                    type="text"
                    placeholder="적어라"
                    onChange={(e) => setNewPost(e.target.value)}
                />

                <button>저장</button>
            </form>
        </CreateBox>
    );
}

export default CreatePost;
