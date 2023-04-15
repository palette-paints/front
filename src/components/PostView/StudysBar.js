import styled from 'styled-components';
import 'react-pagination-bar/dist/index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Content = styled.div`
    background: #fffcf8;
`;
const Categories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;

    margin: 40px auto;
    margin-top: 130px;
    width: 1120px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(63, 138, 181, 0.5);
    border-radius: 30px;
    overflow-x: scroll;
    padding: 10px;

    ::-webkit-scrollbar {
        display: none;
    }
`;
const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;

    width: 100px;
    font-size: 1em;
    color: #00639b;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(63, 138, 181, 0.5);
    border-radius: 30px;
    border: none;
    :hover {
        background: #3f8ab5;
        color: #fff;
        font-weight: bold;
    }
`;

function StudysBar(props) {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        await axios
            .get('http://3.38.52.33:8080/studys')
            .then((response) => {
                setDatas(response.data);
                console.log(datas);
            })
            .catch((error) => {
                console.log('전체 글 불러오기 실패', error.message);
            });
    };
    return (
        <>
            <Content>
                <Categories>
                    <Button>전체</Button>
                    {datas.categories &&
                        datas.categories.map((category) =>
                            category === props.category ? (
                                <Button
                                    style={{
                                        background: '#3f8ab5',
                                        color: '#fff',
                                    }}
                                >
                                    {category}
                                </Button>
                            ) : (
                                <Button>{category}</Button>
                            )
                        )}
                </Categories>
            </Content>
        </>
    );
}
export default StudysBar;
