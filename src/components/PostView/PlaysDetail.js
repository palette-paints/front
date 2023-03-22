import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import PlaysBar from '@/api/PostView/PlaysBar';
import commentPur from '/public/images/commentPur.png';
import commentWhite from '/public/images/commentWhite.png';
import bookmarkPur from '/public/images/bookmarkPur.png';
import bookmarkWhite from '/public/images/bookmarkWhite.png';

const CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 30px;

    width: 1124px;
    height: 835px;

    background: #7e6fdd;
    margin: 100px auto;
    box-shadow: 2px 2px 20px rgba(126, 110, 221, 0.5);
    border-radius: 50px;

    position: relative;
`;
const Card = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 800px;

    color: #4f46af;
    background: #fff;
    border-radius: 50px;
`;
const IdBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 30px;
    margin-bottom: 30px;
    gap: 10px;

    width: 888px;
    height: 6px;
    text-align: left;
    background: #ffffff;
    box-shadow: 2px 2px 7px rgba(126, 110, 221, 0.5);
    border-radius: 50px;
    color: #4f46af;

    position: relative;
    top: 50px;
    left: 50px;
`;
const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;

    color: #4f46af;
    font-size: 1em;
    background: #fff;
    box-shadow: 0px 2px 10px rgba(126, 110, 221, 0.5);
    border-radius: 30px;
    border: none;
    &:hover {
        color: #fff;
        background: #7e6fdd;
    }
`;
const Wrapper = styled.div`
    width: 90%;
    display: inline-flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 50px;
    padding: 30px 70px;
`;
const Poster = styled.img`
    width: 397px;
    height: 512px;
    margin: 0 auto;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: start;
    align-items: start;
    padding: 0;
    margin: 0 auto;
`;
const FileBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 50px;
    margin-bottom: 20px;
    gap: 10px;

    width: 500px;

    background: #7e6fdd;
    box-shadow: 2px 2px 20px rgba(126, 110, 221, 0.5);
    border-radius: 50px;

    flex: none;
    order: 0;
    flex-grow: 0;

    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
`;
const PaginationBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    margin: 40px auto;
    width: 526px;
    height: 52px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(126, 110, 221, 0.5);
    border-radius: 30px;
    padding: 10px;
    color: #4f46af;
`;
// const host = 'http://3.38.52.33:8080/plays';
// const fetcher = (url) =>
//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-host': host,
//             'x-rapidapi-key': '1',
//             useQueryString: true,
//         },
//     }).then((res) => res.json());
const host = instance.get('/plays/1');
const fetcher = (host) => host.then((res) => res.data);
function CheDetail() {
    const [isCommentHover, setIsCommentHover] = useState(false);
    const [isBookmarkHover, setIsBookmarkHover] = useState(false);

    const route = useRouter();
    console.log(route.query.id);
    let url = 'http://3.38.52.33:8080/plays/' + route.query.id;
    const { data, error } = useSWR(host, fetcher);
    if (error) return '에러발생';
    if (!data) return '로딩중..';
    const date = new Date(data.createdAt).toISOString().split('T')[0];
    return (
        <>
            <PlaysBar />
            <CardTitle>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '45px',
                    }}
                >
                    <p
                        style={{
                            color: '#fff',
                            fontFamily: 'Montserrat Alternates',
                            fontWeight: '600',
                            fontSize: '25px',
                        }}
                    >
                        {data.title}
                    </p>
                    <p
                        style={{
                            color: '#fff',
                            fontFamily: 'Montserrat Alternates',
                            fontWeight: '600',
                            fontSize: '20px',
                        }}
                    >
                        {data.dueTo}
                    </p>
                </div>
                <Card>
                    <IdBox>
                        <img
                            src="/images/profile.png"
                            width={45}
                            alt="프사"
                            style={{ position: 'absolute', left: '15px' }}
                        />
                        <span style={{ position: 'absolute', left: '60px' }}>
                            {data.user}
                        </span>
                        <span style={{ position: 'absolute', right: '15px' }}>
                            {date}
                        </span>
                    </IdBox>
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            position: 'absolute',
                            right: '60px',
                            top: '50px',
                            height: '43px',
                        }}
                    >
                        <Button
                            onMouseOver={() => setIsCommentHover(true)}
                            onMouseOut={() => setIsCommentHover(false)}
                            style={{ width: '60px' }}
                        >
                            <img
                                width="20px"
                                src={
                                    isCommentHover
                                        ? commentWhite.src
                                        : commentPur.src
                                }
                                alt="댓글"
                                style={{ margin: '0 3px 0 0' }}
                            />
                            답변
                            {data.comments}
                        </Button>
                        <Button
                            onMouseOver={() => setIsBookmarkHover(true)}
                            onMouseOut={() => setIsBookmarkHover(false)}
                        >
                            <img
                                width="20px"
                                src={
                                    isBookmarkHover
                                        ? bookmarkWhite.src
                                        : bookmarkPur.src
                                }
                                alt="북마크"
                            />
                        </Button>
                    </div>
                    <Wrapper>
                        <Poster src="/images/sample.png" />
                        <Content>
                            <p>신청 방법: 구글 폼</p>
                            <FileBar>
                                첨부 파일: {data.palyId.submitLink}
                            </FileBar>
                            <p>참여 대상: </p>
                            <p>
                                신청 기간: <br />
                                체험 활동 기간: <br />
                                활동 및 소감 제출기간 : 3/20(월) ~ 3/22(수)
                                <br />
                            </p>
                            <p>
                                키트수령장소 : 스마일게이트 1층 로비
                                <br />
                                주소 : 성남시 분당구 XXX XXX XX-xx
                                <br />
                                문의전화 : 031-123-4567
                            </p>
                            <p>
                                활동 요약 : 요리체험 키트 1종 (초코과자 만들기)
                            </p>
                            <p>활동 설명 : {data.playDetails}</p>
                        </Content>
                    </Wrapper>
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            position: 'absolute',
                            bottom: '30px',
                            right: '50px',
                        }}
                    >
                        <Button style={{ padding: '14px 20px' }}>
                            수정하기
                        </Button>
                        <Button style={{ padding: '14px 20px' }}>
                            삭제하기
                        </Button>
                    </div>
                </Card>
            </CardTitle>
            <PaginationBox>
                <span>이전글</span>/<span>다음글</span>
            </PaginationBox>
        </>
    );
}

export default CheDetail;
