import styled from 'styled-components';
import 'react-pagination-bar/dist/index.css';
import logo from '../../images/MindsLogo.png';
import axios from 'axios';
// import Link from 'next/link';
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
    background: #71af8a;
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
    box-shadow: 0px 2px 10px rgba(113, 175, 138, 0.5);
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
    color: #4e705b;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(113, 175, 138, 0.5);
    border-radius: 30px;
    border: none;
    :hover {
        background: #71af8a;
        color: #fff;
        font-weight: bold;
    }
`;
// const host = instance.get('/minds');
// const fetcher = (host) => host.then((res) => res.data);
function MindsBar(props) {
    // const { data, error } = useSWR(host, fetcher);
    // if (error) return '에러발생';
    // if (!data) return '로딩중..';
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        const response = await axios
            .get('https://jsonplaceholder.typicode.com/posts')
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
            <Banner>
                <img src={logo.src} style={{ margin: '0 10px 0 0' }} />
                마음 쑥쑥
            </Banner>
            <Content>
                <Categories>
                    <Button>전체</Button>
                    {/* {data.categories.map((category) =>
                        category === props && props.category ? (
                            <Button
                                style={{ background: '#71af8a', color: '#fff' }}
                            >
                                {category}
                            </Button>
                        ) : (
                            <Button>{category}</Button>
                        )
                    )} */}

                    {/* <Button>전체</Button>
          <Button>학업</Button>
          <Button>대인관계</Button>
          <Button>연애</Button>
          <Button>가족</Button>
          <Button>기타</Button> */}
                </Categories>
            </Content>
        </>
    );
}
export default MindsBar;
