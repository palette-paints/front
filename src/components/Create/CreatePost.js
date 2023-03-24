import React, { useEffect, useRef, useState } from 'react';

import './createStlye.css';
import styled from 'styled-components';

import axios from 'axios';

const CreateBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

function CreatePost() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState('');
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axios
            .get('http://3.38.52.33:8080/studys')
            .then((response) => {
                // (전체 게시글 저장)
                setPosts(response.data);
                console.log('성공');
                console.log(posts);
            })
            .catch((error) => {
                console.log('전체 글 불러오기 실패', error.message);
            });
    };

    const postPost = (event) => {
        event.preventDefault();
        const formData = new FormData();
        var body = {
            category: '국어',
            title: 'title',
            studyDetails: 'dd',
            studyAttachedFile: 'dd',
        };

        formData.append('category', '국어');
        formData.append('title', 'title');
        formData.append('studyDetails', 'studyDetails');
        formData.append('studyAttachedFile', 'studyAttachedFile');

        axios({
            method: 'post',
            url: 'http://3.38.52.33:8080/studys/new',

            data: body,
        })
            .then((response) => {
                getPosts();
            })
            .catch((detail) => {
                console.log('작성 실패');
                console.log(detail);
            });

        setNewPost('');
    };
    return (
        <CreateBox>
            <form onSubmit={postPost} method="post">
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
