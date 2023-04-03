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

    // useEffect(() => {
    //     getPosts();
    // }, []);

    // const getPosts = async () => {
    //     const response = await axios
    //         .get('http://3.38.52.33:8080/studys')
    //         .then((response) => {
    //             // (전체 게시글 저장)
    //             setPosts(response.data);
    //             console.log('성공');
    //             console.log(posts);
    //         })
    //         .catch((error) => {
    //             console.log('전체 글 불러오기 실패', error.message);
    //         });
    // };

    const handleChangeFile = (event) => {
        setFile(event.target.files);
    };
    const postPost = (event) => {
        event.preventDefault();
        const fd = new FormData();
        fd.append('studyAttachedFile', file[0]);
        // event.preventDefault();
        const data = {
            category: '국어',
            title: '성공',
            studyDetails: '성공',
        };

        const blob = new Blob([JSON.stringify(data)], {
            type: 'application/json',
        });
        fd.append('data', blob);
        axios
            .post(`http://3.38.52.33:8080/studys/new/`, {
                data: fd,
                // category: '국어',
                // title: 'hihihi',
                // studyDetails: 'wehrihwierhalweirlaweij',

                // studyAttachedFile: 'http:sdfwef',
                // body: JSON.stringify(data),
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
