import styled from 'styled-components';
import 'react-pagination-bar/dist/index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
        await axios
            .get('https://beforyou.shop/plays')
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
                </Categories>
            </Content>
        </>
    );
}
export default PlaysBar;
