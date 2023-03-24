import styled from 'styled-components';

const Box = styled.button`
    padding: 19px 0;
    width: 119px;
    height: 62px;
    border-radius: 50px;
    appearance: none;
    border: none;
    font-size: 20px;
    line-height: 24px;
    cursor: pointer;
`;

function Button() {
    return <Box>저장하기</Box>;
}
export default Button;
