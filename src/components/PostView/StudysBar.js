import styled from 'styled-components';
import 'react-pagination-bar/dist/index.css';
import logo from '../../images/StudysLogo.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Banner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 64px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    background: #3f8ab5;
`;
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

function MindsBar(props) {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        const response = await axios
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
            {/* <Banner>
                <img src={logo.src} style={{ margin: '0 10px 0 0' }} />
                학업 튼튼
            </Banner> */}
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

                    {/* <Button>전체</Button>
          <Button>국어</Button>
          <Button>영어</Button>
          <Button>수학</Button>
          <Button>사회</Button>
          <Button>과학</Button>
          <Button>한국사</Button>
          <Button>음악</Button>
          <Button>미술</Button>
          <Button>운동</Button>
          <Button>코딩</Button>
          <Button>기타</Button> */}
                </Categories>
            </Content>
        </>
    );
}
export default MindsBar;
