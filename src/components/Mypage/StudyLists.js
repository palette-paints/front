import styled from 'styled-components';
const CommentBar = styled.div`
    display: flex;
    padding: 20px 30px;
    margin: 0 auto;
    gap: 10px;

    width: 1085px;

    background: #6cacd0;
    box-shadow: 2px 2px 20px rgba(63, 138, 181, 0.5);
    border-radius: 50px;

    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;

    position: relative;
`;
const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin: 20px auto;
    box-sizing: border-box;
    padding: 10px 50px;
    width: 1174px;
    height: 250px;

    color: #00639b;
    box-shadow: 2px 2px 20px rgba(63, 138, 181, 0.5);
    border-radius: 50px;
    position: relative;
`;
const Header = styled.div`
    display: flex;
    justify-contents: center;
    gap: 10px;
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #00639b;
    width: 1044px;
    height: 35px;
    border-bottom: 2px solid #00639b;
    padding: 10px;
`;
export default function MindLists() {
    return (
        <>
            <CommentBar>
                나의 질문
                <span style={{ background: 'none' }}>0</span>
                <span
                    style={{
                        background: 'none',
                        position: 'absolute',
                        right: '40px',
                    }}
                >
                    삭제
                </span>
            </CommentBar>
            <List>
                <Header>
                    <p style={{ width: '670px' }}>질문</p>
                    <p style={{ width: '150px' }}>카테고리</p>
                    <p style={{ width: '150px' }}>질문자</p>
                    <p style={{ width: '150px' }}>작성일</p>
                </Header>
            </List>
            <CommentBar>
                나의 답변
                <span style={{ background: 'none' }}>0</span>
                <span
                    style={{
                        background: 'none',
                        position: 'absolute',
                        right: '40px',
                    }}
                >
                    삭제
                </span>
            </CommentBar>
            <List>
                <Header>
                    <p style={{ width: '670px' }}>질문</p>
                    <p style={{ width: '150px' }}>카테고리</p>
                    <p style={{ width: '150px' }}>질문자</p>
                    <p style={{ width: '150px' }}>작성일</p>
                </Header>
            </List>
            <CommentBar>
                나의 북마크
                <span style={{ background: 'none' }}>0</span>
                <span
                    style={{
                        background: 'none',
                        position: 'absolute',
                        right: '40px',
                    }}
                >
                    삭제
                </span>
            </CommentBar>
            <List>
                <Header>
                    <p style={{ width: '670px' }}>질문</p>
                    <p style={{ width: '150px' }}>카테고리</p>
                    <p style={{ width: '150px' }}>질문자</p>
                    <p style={{ width: '150px' }}>작성일</p>
                </Header>
            </List>
        </>
    );
}
