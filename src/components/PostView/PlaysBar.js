import styled from 'styled-components';
import 'react-pagination-bar/dist/index.css';
import logo from '../../images/PlaysLogo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 64px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    background: #7e6fdd;
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
    margin-top: 130px;
    width: 1120px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(126, 110, 221, 0.5);
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
    color: #4f46af;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(126, 110, 221, 0.5);
    border-radius: 30px;
    border: none;
    :hover {
        background: #7e6fdd;
        color: #fff;
        font-weight: bold;
    }
`;
// const host = instance.get('/plays/1');
// const fetcher = (host) => host.then((res) => res.data);
function PlaysBar(props) {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        const response = await axios
            .get('https://beforyou.shop/plays')
            .then((response) => {
                setDatas(response.data);
                console.log(datas);
            })
            .catch((error) => {
                console.log('전체 글 불러오기 실패', error.message);
                <div>*준비 중*</div>;
            });
    };
    return (
        <>
            {/* <Banner>
                <img src={logo.src} style={{ margin: '0 10px 0 0' }} />
                체험 잼잼
            </Banner> */}
            <Content>
                <Categories>
                    <Button>전체</Button>
                    {datas.categories &&
                        datas.categories.map((category) =>
                            props && category === props.category ? (
                                <Button
                                    style={{
                                        background: '#7e6fdd',
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
          <Button>스포츠</Button>
          <Button>댄스</Button>
          <Button>음악</Button>
          <Button>미술</Button>
          <Button>요리</Button>
          <Button>영상</Button>
          <Button>축제</Button>
          <Button>기타</Button> */}
                </Categories>
            </Content>
        </>
    );
}
export default PlaysBar;
